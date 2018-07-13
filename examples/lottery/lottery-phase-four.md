---
title: Lottery Phase IV
---

#   Lottery Phase IV

##  Processor
* Edit `Lottery.ksmile`

```
process-module LotteryProcess(LotteryReadMongo, LotteryStream) at com.metastay.lotteryprocess
```
* $smile
* Edit `LotteryProcess.kprocess`

```
processor WinnerEmailSender {
  subscribe event-ref LotteryStream::LotteryRan
}
```
* $compile
* Edit `WinnerEmailSenderProcessorCode.scala`

```scala
override def process(event: com.metastay.lotterystream.stream.LotteryRan): Unit = {
    val winner = event.winner
    val email = ParticipantQuery().name.is(winner).findOne.get.email
    println(s"Congratulation $winner, you have won the lottery ${event.lotteryName}; mail to $email ")
}
```

* $run
* Test through curl
    * curl -H "Content-Type: application/json" -X POST -d '{"lotteryName":"DLoto","amount":1000}' http://localhost:9000/api/lottery/create-lottery
    * curl -H "Content-Type: application/json" -X POST -d '{"lotteryName":"DLoto","participantName":"John"}' http://localhost:9000/api/lottery/  add-participant
    * curl -H "Content-Type: application/json" -X POST -d '{"lotteryName":"DLoto","participantName":"Jim"}' http://localhost:9000/api/lottery/add-participant
    * curl -H "Content-Type: application/json" -X POST -d '{"lotteryName":"DLoto","participantName":"Joe"}' http://localhost:9000/api/lottery/add-participant
    * curl -H "Content-Type: application/json" -X POST -d '{"lotteryName":"DLoto"}' http://localhost:9000/api/lottery/run

##  Send Mail using Bread

* Notification by email is already available in a smile project called Bread, so we import Bread as a component and then use it to send mail.
* $add-component bread-release-0.4 and follow the guided steps (if any)
* Edit `Lottery.ksmile`

```
import-lib common-0.1
import-component bread-release-0.4(NotifierProcess)
```
* also add the dependency to LotteryProcessor module

```
process-module LotteryProcess(LotteryReadMongo, LotteryStream) at com.metastay.lotteryprocess
```
* $smile
* Edit `WinnerEmailSenderProcessorCode.scala` to send email.

```scala
override def process(event: com.metastay.lotterystream.stream.LotteryRan): Unit = {
    val winner = event.winner
    val email = ParticipantQuery().name.is(winner).findOne.map(_.email).toList
    val body = s"Congratulation $winner,You have won the Lottery $event.lotteryName!!"

    val message = SendMailMessage(toList = email, subject = "Won Lottery", body = body)
    grab[SmileAsyncService].publish(message)
}
```

* $run
* Test through curl
    * curl -H "Content-Type: application/json" -X POST -d '{"lotteryName":"DLoto","amount":1000}' http://localhost:9000/api/lottery/create-lottery
    * curl -H "Content-Type: application/json" -X POST -d '{"lotteryName":"DLoto","participantName":"John"}' http://localhost:9000/api/lottery/  add-participant
    * curl -H "Content-Type: application/json" -X POST -d '{"lotteryName":"DLoto","participantName":"Jim"}' http://localhost:9000/api/lottery/add-participant
    * curl -H "Content-Type: application/json" -X POST -d '{"lotteryName":"DLoto","participantName":"Joe"}' http://localhost:9000/api/lottery/add-participant
    * curl -H "Content-Type: application/json" -X POST -d '{"lotteryName":"DLoto"}' http://localhost:9000/api/lottery/run   

