---
title: Lottery Phase III
---

#   Lottery Phase III

##  Eventify

* Edit `Lottery.ksmile`

```
stream-module LotteryStream at com.metastay.lotterystream 
```

* $smile
* Edit `LotteryStream.kstream` , add  lottery related events

```
event LotteryCreated(lotteryName: String, amount: Int)
event ParticipantAdded(lotteryName: String, participantName: String)
event LotteryRan(lotteryName: String, winner: String) 
```

* $compile
* Edit `LotteryStreamTestSuite.scala`

```scala
test("test1", Tag("event")) {
    val created = LotteryCreated("Loto", 2000)
    LotteryStreamWriter.appendEvent(created)
    val ramAdded = ParticipantAdded("Loto", "ram")
    LotteryStreamWriter.appendEvent(ramAdded)
    val johnAdded = ParticipantAdded("Loto", "john")
    LotteryStreamWriter.appendEvent(johnAdded)
    val ran = LotteryRan("Loto", "john")
    LotteryStreamWriter.appendEvent(ran)
 }
 
test("test2", Tag("read")) {
    LotteryStreamReader.count.println
}
```

* See `lotterystream.conf` file, database and how the events are getting stored.

##  Events and Commands

* Add stream dependency to Domain module in lottery.ksmile.

```
domain-module LotteryDomain(LotteryMongo,LotteryStream) at com.metastay.lotterydomain
```

* add stream to command-set and raise events from commands in `LotteryDomain.kdomain`

```scala
command-set[LotteryStream] Lottery {
    domain-logic-ref lottery:Lottery
    command create {
        input(lotteryName:String, amount:Int)
        pre {
            condition lotterMustNotExist "Lottery must not exist" => !(lottery.lotteryNameExists(input.lotteryName))
        }
        event-raised(created:LotteryCreated)
    }

    command addParticipant {
        input(lotteryName:String, participantName:String)
        pre {
            condition lotteryMustExists "Lottery must exist" => lottery.lotteryNameExists(input.lotteryName)
            condition newParticpant => !lottery.participantExist(input.lotteryName, input.participantName) 
                failing "participant ${input.participantName} is already add to this lottery"
        }
        event-raised(added:ParticipantAdded)
     }

    command run {
        input (lotteryName: String)
        pre{
            condition notYetRun => lottery.isOpenToRun(input.lotteryName) failing "Lottery has already run!"
            condition existingLotteryName => lottery.lotteryNameExists(input.lotteryName) 
                failing "Lottery name does not exist"
            condition atLeastTwoParticipants => 
                existingLotteryName -> `domainLogicRef.lottery.participantCount(input.lotteryName) > 1` 
                failing "The lottery should have at least two participants"
        }
        event-raised(ran: LotteryRan)
        output(winner: String)
    }
    
 }
```

* $smile
* $compile
* comment the existing code in `LotteryCommandSetCode` and fix the compilation error

```scala
    override def create = CreateCommand {
      import CreateCommand._
      input: Input =>
        EventRaised(LotteryCreated(input.lotteryName, input.amount))
    }

    override def addParticipant = AddParticipantCommand {
      import AddParticipantCommand._
      input: Input =>
        EventRaised(ParticipantAdded(input.lotteryName, input.participantName))
    }

    override def run = RunCommand {
      import RunCommand._
      input: Input =>
        val participantCount = domainLogicRef.lottery.participantCount(input.lotteryName)
        val winnerIndex = scala.util.Random.nextInt(participantCount)
        val participantList = LotteryQuery().lotteryName.is(input.lotteryName).findOne.get.participantList
        val winner = participantList(winnerIndex)

        EventRaised(LotteryRan(input.lotteryName, winner)) -> Output(winner)
    }
```
* Edit `LotteryDomain.kdomain` and add the handler after domain-logic definition   

```
event-handler[LotteryStream] LotteryStream {
    LotteryCreated,ParticipantAdded,LotteryRan
}
```

* $compile
* move the commented code from `LotteryCommandSetCode` to `LotteryStreamEventHandlerCode`

```scala
override def handleException(event: LotteryStreamEvent, context: EventContext, throwable: Throwable): Unit = {
  appLogger.error("LotteryStreamEventHandler failed: " + throwable.stackTraceString(size = 50))
}

override def handle(event: LotteryCreated, context: EventContext): Unit =
  LotteryWriter().save(LotteryRow(lotteryName = event.lotteryName, amount = event.amount, open = true))

override def handle(event: ParticipantAdded, context: EventContext): Unit = {
  val q = LotteryQuery().lotteryName.is(event.lotteryName)
  val u = LotteryUpdate().participantList.addToSet(event.participantName)
  LotteryWriter().updateOne(q, u)
}

override def handle(event: LotteryRan, context: EventContext): Unit = {
  val q = LotteryQuery().lotteryName.is(event.lotteryName)
  val u = LotteryUpdate().open.set(false).winner.set(event.winner)
  LotteryWriter().updateOne(q, u)
}
```
* $run
* Test through url in browser http://localhost:9000/api/lottery/lottery-list
* or run any tests, nothing should change




##  Command Testing

* Edit `CreateCommandTestSuite.scala`

```scala
test("create first lottery", Tag("create"), ptest) {
    LotteryWriter().drop()
    grab[CreateCommandFixture]
      .given()
      .when(Input("TestLottery", 200))
      .expectEventRaised(EventRaised(LotteryCreated("TestLottery", 200)))
}

test("create new lottery with same name", Tag("duplicate"), ntest) {
    LotteryWriter().drop()
    grab[CreateCommandFixture]
      .given(LotteryCreated("TestLottery", 100))
      .when(Input("TestLottery", 200))
      .expectPreFail("lotterMustNotExist")
}
```
* $test-only com.metastay.lotterydomain.commandset.lottery.CreateCommandTestSuite
* Edit AddParticipantCommandTestSuite.scala

```scala
test("add a participant", Tag("add"), ptest) {
    grab[AddParticipantCommandFixture]
      .given(LotteryCreated("TestLottery", 1000))
      .when(Input(lotteryName="TestLottery", participantName="John"))
      .expectEventRaised(EventRaised(ParticipantAdded(lotteryName="TestLottery", participantName="John")))
}

test("add participant with same name", Tag("duplicate"), ntest) {
    grab[AddParticipantCommandFixture]
      .given(LotteryCreated("TestLottery", 1000),
        ParticipantAdded(lotteryName="TestLottery", participantName="John"))
      .when(Input(lotteryName="TestLottery", participantName="John"))
      .expectPreFail
}
```
* $test-only com.metastay.lotterydomain.commandset.lottery.AddParticipantCommandTestSuite

##  Projection

* Edit `Lottery.ksmile`
* Also add dependency of LotteryQuery in the Play module.

```
mongo-module LotteryReadMongo at com.metastay.lotteryreadmongo
query-module LotteryQuery(LotteryReadMongo, LotteryStream) at com.metastay.lotteryquery
```
* $smile,refresh eclipse
* edit `LotteryReadMongo.kmongo`

```
collection LotteryRead {
  property lotteryName:String
  property amount:Int
  property participantList:String*
  property winner:String?
  property open:Boolean
}
```

* edit LotterQuery.kqyuery

```
projector [LotteryStream] Lottery {
    LotteryCreated,ParticipantAdded,LotteryRan
}
```
* $compile
* Edit `LotteryProjectorCode`

```scala
override def project(event: LotteryCreated, context: EventContext): Unit = {
    LotteryReadWriter().save(LotteryReadRow(lotteryName = event.lotteryName, amount = event.amount, open = true))
}

override def project(event: ParticipantAdded, context: EventContext): Unit = {
    val q = LotteryReadQuery().lotteryName.is(event.lotteryName)
    val u = LotteryReadUpdate().participantList.addToSet(event.participantName)
    LotteryReadWriter().updateOne(q, u)
}
override def project(event: LotteryRan, context: EventContext): Unit = {
    val q = LotteryReadQuery().lotteryName.is(event.lotteryName)
    val u = LotteryReadUpdate().open.set(false).winner.set(event.winner)
    LotteryReadWriter().updateOne(q, u)
}
```
* Edit LotteryWebReaderCode

```scala
override def lotteryList:Request[LotteryListView.Pre] => List[Lottery] = LotteryListView {
  import LotteryListView._
  request: Request[Input] =>
    val input = request.body;
    LotteryReadQuery().find.map(
      row =>
        Lottery(
          lotteryName = row.lotteryName,
          amount = row.amount,
          participantList =  row.participantList,
          status = if(row.open)  "OPEN" else "CLOSED",
          winner = row.winner
        )
    )
}
```
* clean the db
* $run
* Test through url in browser http://localhost:9000/api/lottery/lottery-list    



##  Review Write DB

* we dont really need amount and winner  in write db, they dont involve in any of the decision making in domain.
* edit `LotteryMongo.kmongo` in eclipse

```
collection Lottery {
    property lotteryName:String
    //property amount:Int
    property participantList:String*
    //property winner:String?
    property open:Boolean
}
```
* $compile, fix the error
* Test through curl
    * curl -H "Content-Type: application/json" -X POST -d '{"lotteryName":"DLoto","amount":1000}' http://localhost:9000/api/lottery/create-lottery
    * curl -H "Content-Type: application/json" -X POST -d '{"lotteryName":"DLoto","participantName":"John"}' http://localhost:9000/api/lottery/  add-participant
    * curl -H "Content-Type: application/json" -X POST -d '{"lotteryName":"DLoto","participantName":"Jim"}' http://localhost:9000/api/lottery/add-participant
    * curl -H "Content-Type: application/json" -X POST -d '{"lotteryName":"DLoto","participantName":"Joe"}' http://localhost:9000/api/lottery/add-participant
    * curl -H "Content-Type: application/json" -X POST -d '{"lotteryName":"DLoto"}' http://localhost:9000/api/lottery/run


##  Send Mail

* Sending email to winner needs us to capture email addresses for the participants 
* Calls for an event update & change to read database to capture the email address

* Capturing email of a participant and sending  email to the winner
* Edit `LotteryReadMongo.kmongo`

```
collection LotteryRead {
     property lotteryName:String
     property amount:Int
     reference participantList:Participant*
     property winner:String?
     property open:Boolean
}

collection Participant {
     property name:String
     property email:String
}
```
* participant's email needs to be added to the event
* Edit `LotteryStream.kstream`

```
event ParticipantAdded(lotteryName: String, participantName: String, email:String)
```
* Edit LotteryDomain.kdomain, replace addParticipant command with the following:

```scala
command addParticipant {
    input(lotteryName:String, participantName:String,participantEmail: String)
    pre {
        condition lotteryMustExists "Lottery must exist" => lottery.lotteryNameExists(input.lotteryName)
        condition newParticpant => !lottery.participantExist(input.lotteryName, input.participantName) failing "participant ${input.participantName} is already add to this lottery"
    }
    event-raised(added:ParticipantAdded)
}
```
* $compile, and fix the compiler errors
* Edit `LotteryProjectorCode` 

```scala
override def project(event: ParticipantAdded, context: EventContext): Unit = {
    val q = LotteryReadQuery().lotteryName.is(event.lotteryName)
    val participantId = new Id()
    ParticipantWriter().insert(ParticipantRow(_id = participantId, name = event.participantName, email = event.email))
    val u = LotteryReadUpdate().participantList_oidList.addToSet(participantId)
    LotteryReadWriter().updateOne(q, u)
} 
```
* $compile, fix the error
* Test through curl
    * curl -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' -d 'lotteryName=DLoto&amount=1000' 'http://localhost:9000/api/lottery/create-lottery'
    * curl -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' -d 'lotteryName=DLoto&participantName=John&participantEmail=john@gmail.com' 'http://localhost:9000/api/lottery/add-participant'
    * curl -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' -d 'lotteryName=DLoto&participantName=Jim&participantEmail=jim@gmail.com' 'http://localhost:9000/api/lottery/add-participant'
    * curl -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' -d 'lotteryName=DLoto&participantName=Joe&participantEmail=joe@gmail.com' 'http://localhost:9000/api/lottery/add-participant'
    * curl -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' -d 'lotteryName=DLoto' 'http://localhost:9000/api/lottery/run'

