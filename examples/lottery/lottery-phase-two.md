---
title: Lottery Phase II
---

#   Lottery Phase II


## Lottery Domain Module

### 'Create Lottery' Command


* Add a domain module in `Lottery.ksmile`

```
domain-module LotteryDomain at com.metastay.lotterydomain
```

* $smile
* Refresh Eclipse to see `LotteryDomain.kdomain`
* Add Lottery.create Command in `LotteryDomain.kdomain`

```
domain-logic Lottery {
    function lotteryNameExists(lotteryName:String):Boolean
}
  
command-set Lottery {
    domain-logic-ref lottery:Lottery
    command create {
        input(lotteryName:String, amount:Int)
        pre {
            condition NewLotteryName => !(lottery.lotteryNameExists(input.lotteryName)) failing "Lottery name already exists!"
        }
    }
}
```
* $compile
* Open `LotteryCommandSetCode` to save it to implement.

::: warning  
LotteryWriter and other mongo related files not available to implement because LotteryDomain is not dependent on LotteryMongo.
:::

* Add the LotteryMongo dependency in LotteryDomain in `Lottery.ksmile` file

```    
section Lottery {
    data-module LotteryData at com.metastay.lottery
    mongo-module LotteryMongo at com.metastay.lotterymongo
    domain-module LotteryDomain(LotteryMongo) at com.metastay.lotterydomain
    play-module LotteryPlay(LotteryData, LotteryMongo) at lotteryplay
}
```

* $smile
* Open `LotteryCommandSetCode` to implement create command as below.

```scala
override def create = CreateCommand {
    import CreateCommand._;
    input: Input =>
    LotteryWriter().save(LotteryRow(lotteryName = input.lotteryName, amount = input.amount, open = false))
}
```

* Open `LotteryDomainLogicCode` to implement lotteryNameExists method as below

```scala
override def lotteryNameExists (lotteryName:String):Boolean = LotteryQuery().lotteryName.is(lotteryName).exists 
```
* $compile
* Write test in `LotteryDomainTestSuite` as below.

```scala
test("create", Tag("create")) {
    val lotteryCommandSet= grab[LotteryCommandSet]
    lotteryCommandSet.createNow("WBLoto", 20000).println;
}
```
* $project LotteryDomain
* $test-only com.metastay.lotterydomain.LotteryDomainTestSuite -- -n create
* Check in DB if the WBLoto Lottery has been created

### 'Add Participant' And 'Run'Command

Adding two more commands to `LotteryDomain.kdomain`


```
domain-logic Lottery {
    function lotteryNameExists(lotteryName:String):Boolean
    function participantExist(lotteryName:String, participantName:String):Boolean
    function participantCount(lotteryName:String):Int
}
  
command-set Lottery {
    domain-logic-ref lottery:Lottery
    command create {
        input(lotteryName:String, amount:Int)
        pre {
            condition NewLotteryName => !(lottery.lotteryNameExists(input.lotteryName)) failing "Lottery name already exists!"
        }
    }
     
    command addParticipant {
        input(lotteryName:String, participantName:String)
        pre {
            condition lotteryMustExists "Lottery must exist" => lottery.lotteryNameExists(input.lotteryName)
            condition particpantNotYetAdded "Participant Not yet added" => 
                !lottery.participantExist(input.lotteryName, input.participantName)
             
        }
    }
     
    command run {
        input(lotteryName:String)
        pre {
            condition ExistingLotteryName => lottery.lotteryNameExists(input.lotteryName) failing "Lottery name does not exists"
            condition atLeastTwoParticipants => 
                ExistingLotteryName -> `domainLogicRef.lottery.participantCount(input.lotteryName) > 1` 
                failing "The lottery does not have any participant!"            
        }
        output(winner:String)
    }
     
}
```

* $compile
* Implementing addParticipant() and run() in `LotteryCommandSetCode`

```scala
class LotteryCommandSetCode(domainRef: DomainRef) extends LotteryCommandSetCommands {         
  override def create = CreateCommand {
    import CreateCommand._;
    input: Input =>
      LotteryWriter().save(LotteryRow(lotteryName = input.lotteryName, amount = input.amount))
  }     
 
  override def addParticipant = AddParticipantCommand {
    import AddParticipantCommand._;
    input: Input =>
      val q = LotteryQuery().lotteryName.is(input.lotteryName)
      val u = LotteryUpdate().participantList.addToSet(input.participantName)
      LotteryWriter().updateOne(q, u)
 
  }
 
  override def run = RunCommand {
    import RunCommand._;
    input: Input =>
      val q = LotteryQuery().lotteryName.is(input.lotteryName)
      val participantList = q.findOne.get.participantList //To find the participantList
      val winnerIndex = scala.util.Random.nextInt(participantList.size) //To find a winner Index
      val winner = participantList(winnerIndex)
      val u = LotteryUpdate().winner.set(Some(winner)).open.set(false)
      LotteryWriter().updateOne(q, u)
      Output(winner)
  }         
} 
```

* Implementing participantExist() and participantCount() in `LotteryDomainCode`

```scala
override def lotteryNameExists (lotteryName:String):Boolean = 
    LotteryQuery().lotteryName.equalsIgnoreCase(lotteryName).exists

override def participantExist(lotteryName: String, participantName: String): Boolean =  
    LotteryQuery().lotteryName.is(lotteryName).participantList.contains(participantName).exists

override def participantCount(lotteryName: String): Int = 
    LotteryQuery().lotteryName.is(lotteryName).findOne.get.participantList.size
```

* Add test for addParticipant and run in `RunCommandTestSuite`
* $project LoteryDomain
* $test-only com.metastay.lotterydomain.commandset.lottery.RunCommandTestSuite -- -n run  

## Integrate Play and Domain

* Adding all the validations and checks which are available in domain to the rest api.
* Add LotteryDomain as a dependency to LotteryPlay Module rather than LotteryMongo in `Lottery.ksmile`

```
domain-module LotteryDomain(LotteryMongo) at com.metastay.lotterydomain
play-module LotteryPlay(LotteryData, LotteryDomain) at lotteryplay
```

* $smile
* Replace the actions by command-action to link it to command in `LotteryPlay.kplay`

```
web-writer Lottery {
    command-action createLottery(POST) LotteryDomain::Lottery.create
    command-action addParticipant(POST) LotteryDomain::Lottery.addParticipant
    command-action run(POST) LotteryDomain::Lottery.run
}
```

* $compile
* Delete the `LotteryWebWriterCode.scala` as its not more needed.
* $compile
* test through curl
    * curl -H "Content-Type: application/json" -X POST -d '{"lotteryName":"Loto","amount":1000}' http://localhost:9000/api/lottery/create-lottery
    * curl -H "Content-Type: application/json" -X POST -d '{"lotteryName":"Loto","participantName":"John"}' http://localhost:9000/api/lottery/add-participant
    * curl -H "Content-Type: application/json" -X POST -d '{"lotteryName":"Loto","participantName":"Jim"}' http://localhost:9000/api/lottery/add-participant
    * curl -H "Content-Type: application/json" -X POST -d '{"lotteryName":"Loto","participantName":"Joe"}' http://localhost:9000/api/lottery/add-participant
    * curl -H "Content-Type: application/json" -X POST -d '{"lotteryName":"Loto"}' http://localhost:9000/api/lottery/run



## Enhancement 

* Add a pre to the command run, that if the lottery is closed than it cannot run.
* Add another function to domain Lottery in `LotteryDomain.kdomain`
```
domain-logic Lottery {
    function isOpenToRun(lotteryName:String):Boolean
}
```

* Add the pre to the run command   

* Change Lottery command-set under `LotteryDomain.kdomain`

```
command run {
    input(lotteryName:String)
    pre {
        condition NotYetRun => lottery.isOpenToRun(input.lotteryName) failing "it has already run!"
        condition ExistingLotteryName => 
            lottery.lotteryNameExists(input.lotteryName) failing "Lottery name does not exists"
        condition atLeastTwoParticipants => 
            ExistingLotteryName -> `domainLogicRef.lottery.participantCount(input.lotteryName) > 1` 
            failing "The lottery does not have any participant!"
    }
    output(winner:String)
}
```

* $compile
* Implement `LotteryDomainLogicCode` isOpenToRun

```scala
override def isOpenToRun(lotteryName: String): Boolean = LotteryQuery().lotteryName.is(lotteryName).open.is(true).exists
```

* run and test with swagger or curl

