---
title: Lottery
---
# Learn Smile with Lottery Example

##  Objective

We will build a simple Lottery application.
A Lottery application has the following requirements:

* An user can create a new lottery game
* An user can add participants
    * condition: a participant can only be added once
    * condition: a participant can only be added if a winner is not yet selected
* An user can remove a participant
    * condition: if a winner is not yet selected
* An user can run the lottery which will select a winner
    * condition: we can only select a winner if there is at least one participant
    * condition: we can only select a winner once, afterwards an error is produced when trying to select a new winner  

##  Scope

Will develop this project in four phases, each phase is complete on its own, but as we progress, new features of Smile will
get introduced, and will discover how easily it can be achieved. 
 
| Phase                                             | Contains       
| -------------                                     |:-------------
| [Lottery Phase I](lottery-phase-one.html)         | [Create Lottery Project](lottery-phase-one.html#create-lottery-project) 
|                                                   | [Create Lottery Mongo](lottery-phase-one.html#create-lottery-mongo)   
|                                                   | [Create Lottery Play](lottery-phase-one.html#create-lottery-play)   
|                                                   | [Web Reader](lottery-phase-one.html#web-reader)   
|                                                   | [Web Writter](lottery-phase-one.html#web-writter)   
|                                                   | [Rest Api](lottery-phase-one.html#rest-api)    
| [Lottery Phase II](lottery-phase-two.html)        | [Lottery Domain Module](lottery-phase-two.html#lottery-domain-module) 
|                                                   | [Integrate Play and Domain](lottery-phase-two.html#integrate-play-and-domain)   
|                                                   | [Enhancement](lottery-phase-two.html#enhancement)   
| [Lottery Phase III](lottery-phase-three.html)     | [Eventify](lottery-phase-three.html#eventify) 
|                                                   | [Events and Commands](lottery-phase-three.html#events-and-commands)   
|                                                   | [Command Testing](lottery-phase-three.html#command-testing)   
|                                                   | [Projection](lottery-phase-three.html#projection)   
|                                                   | [Review Write DB](lottery-phase-three.html#review-write-db)   
|                                                   | [Send Mail](lottery-phase-three.html#send-mail)    
| [Lottery Phase IV](lottery-phase-four.html)       | [Processor](lottery-phase-four.html#processor) 
|                                                   | [Send Mail Using Bread](lottery-phase-four.html#send-mail-using-bread)   



