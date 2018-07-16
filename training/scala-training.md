---
title: Scala Training
---

# Scala Training


## Setup for Scala Training

Create a space in smile project for scala learning using a data-module:
* Open Mould project in eclipse
* Create a data module by adding the following lines in `mould.ksmile`

```
section learning {
	data-module TutorialData at com.metastay.tutorialdata
}
```

* Enter sbt console & run smile command (must run smile command every time .ksmile file is changed)
	
```bash
mould>sbt

[info] Set current project to Mould (in build file:/Users/pallavi/metastay/mould/)
[Mould] $ smile
```

* Goto Eclipse -> Refresh the project to view the section directory and `TutorialData.kdata` file
* Open project in intelliJ
* Navigate to folder modules -> learning -> TutorialData -> src -> com.metastay.tutorialdata 
* Create a new scala class under this package by name `ScalaTraining`
* Run compile command in sbt to ensure no errors in the initial setup.

```bash
[Mould] $ compile
[info] Compiling 3 Scala sources to /Users/pallavi/metastay/mould/modules/learning/TutorialData/target/scala-2.11/classes...
[success] Total time: 9 s, completed 22 May, 2018 6:40:12 PM
```

* Go through the videos below and use this project to write, compile & play around with some scala samples.