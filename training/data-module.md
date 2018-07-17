---
title: Data Module
---

# Data Module


## What is a data module?


Data module holds composites of the project.

1. Different types of data that can be defined in this module:
	+	Data
	+	Enum
	+	ADT, type-alias, data-tag etc

2. Primitive data types available in smile spec are BigDecimal, BigInt, Boolean, Calendar, DateTime, Double, Id, Int, JustTime, Long & String
3. When do we use data in a real project?
  	While moving between various access layers ex: when you want to read data from several dbs and display as a single unit of data on web.
  	
## Creating a data module:


1. Open Mould project in eclipse
2. Create a new data module by adding the following section:

```
section learning {
	data-module TutorialData at com.metastay.tutorialdata
	data-module LearningData at com.metastay.learningdata
}
```


3. Run smile command in sbt & refresh the project in eclipse.
4. Open file LearningData.kdata & add the following definition of Employee & Company data:

```
data Employee (
	name:String,
	gender:String,
	yearOfJoining:Int,
	designation:String,
	experienceInMonths:Int
)

data Company object-extend (
	employeeList:Employee*
)
```

5. Copy the methods from tutorialdata.Company.scala to CompanyObjectExtn.scala class.

6. Also copy the test cases & fix the imports to point to CompanyObjectExtn methods.

7. Re-run the test cases.


:::tip Note
IntelliJ Troubleshooting Note: When a new module added is not being recognised as a source folder in intelliJ - Open ApplicationBuild.scala and if you see a banner above as shown below, click on "Enable auto-import" else make a small change and save the file - this triggers a reload of the project.
<img :src="$withBase('/training/intellij-troubleshoot.png')"/>
:::
	


	


## Defining an enum:


1. Open file LearningData.kdata in eclipse
2. Define DesignationType as an enum:

```
enum DesignationType => SE | SSE | TL | TA | PM | DIR | VP | CEO
```
3. Change Employee's designation type from string to the enum defined above. 
4. Fix compiler errors & test:compile error (if any)
5. Re-run the test cases.
  	

## Defining an option:


1. Open file LearningData.kdata in eclipse
2. Define emailId as an optional field in Employee data
3. There should be no compiler errors due to this change
4. Re-run the test cases.


## Assignment:



### Implement the following methods in Company extension:


1. List all employees who have an emailId. Output must be a map of name & emailId
2. Add address field in Employee data with the following attributes in address:
	+	addressLine1
	+	addressLine2 - optional
	+	City
	+	State
	+	Pincode

3. List all employees who belong to a specific city.
  	

### Define Employee's dateOfBirth skillList and language as optional value:


1. implement the following methods 
	+	Get the number of employees per skill
	+	Get the highest paid employee per skill
	+	Given a language - list the employee names.
	+	Get the oldest employee details
	+	Get the youngest employee details


### Further references:


+	[https://alvinalexander.com/scala/scala-for-loop-examples-syntax-yield-foreach](https://alvinalexander.com/scala/scala-for-loop-examples-syntax-yield-foreach)
+	[https://alvinalexander.com/scala/best-practice-option-some-none-pattern-scala-idioms](https://alvinalexander.com/scala/best-practice-option-some-none-pattern-scala-idioms)
+	[https://alvinalexander.com/scala/how-to-use-pattern-matching-scala-match-case-expressions](https://alvinalexander.com/scala/how-to-use-pattern-matching-scala-match-case-expressions)
