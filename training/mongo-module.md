

# Mongo Module


## Creating a mongo module


1.	Open `Mould.ksmile` file, add a mongo module to the project 

```	
section learning {
	data-module LearningData at com.metastay.learningdata
	mongo-module LearningMongo at com.metastay.leaningmongo
}
```

2.	Open sbt console and run smile command


```bash
mould>sbt
[Mould] $ smile
[info] smile build
[info] updating modules ...
[info] creating module :LearningMongo
[info] reloading ...
...
```
3.	Refresh the project in eclipse
4.	You will see the `LearningMongo.kmongo` file created under learning package


## Define Employee collection


1.	Open `LearningMongo.kmongo` in eclipse 
2.	Define Employee collection as follows:

```
collection Employee {
	property name:String
	property gender:String
	property yearOfJoining:Int
	property designation:String
	property experienceInMonths:Int
	property emailId:String?
}
```
3.	Make sure compile is successful
4.	Change designation type to enum
	*	Since enum is defined in a different module, we need to specify the module dependency in the ksmile file.
	*	Open `.ksmile` file, add data module dependency to mongo module in order to access the DesignationType enum.

```
section learning {
	data-module LearningData at com.metastay.learningdata
	mongo-module LearningMongo(LearningData) at com.metastay.leaningmongo
}
```
	*	Any change to ksmile requires you to run smile command.

```bash
[Mould] $ smile
```
	* Open LearningMongo.kmongo, change designation type from String to LearningData:: DesignationType 
	
```
collection Employee {
	property name:String
	property gender:String
	property yearOfJoining:Int
	property designation:LearningData:: DesignationType
	property experienceInMonths:Int
	property emailId:String?
}
```
	*	Make sure compile is successful
	 	
## Create Company collection


1.	Open LearningMongo.kmongo in eclipse and define Company collection as follows:

```
collection Company {
	property name:String
	property address:String	
}
```
2.	Make sure compile is successful
3.	Adding a collection reference (foreign key):
	*	Let's link company and employee by adding company's reference to employee:

```
collection Employee {
	property name:String
	property gender:String
	property yearOfJoining:Int
	property designation:LearningData:: DesignationType
	property experienceInMonths:Int
	property emailId:String?
	**reference company:Company**
}
```
* Make sure compile is successful
  * This creates a soft link between Employee & company through the company's _id.
  * This spec creates a company_oid field in employee collection, and provides you the company object which is lazily loaded on access.



## CRUD operations:


1.	Smile generates the following classes for every collection defined in kmongo spec.


	* **`<Collection>Row`**
	* **`<Collection>Query`**
	* **`<Collection>Writer`**
	* **`<Collection>Update`**
	* **`<Collection>Reader`**


2.	Insert/Save a record using CollectionWriter


	*	Open LearningMongoObject.scala in intelliJ 
	*	Define a function to insert a company into database.
	

```scala
object LearningMongoObject extends LearningMongoTrait {
	def createCompany(name:String, address:String): Unit = {
	 val companyRow = CompanyRow(
	   name = name ,
	   address = address
	 )
	 CompanyWriter().insert(companyRow)
	}
}
```
	*	Call this method from a test-case in the mongo module : 

	
```scala
class LearningMongoTestSuite extends ... {
	test("create a company", Tag("create")) {
		println("creating a company..")
		createCompany(name = "Software Solutions", address = "HSR, India")
		println("done.")
	}
}
```
	*	Run the test to create a new company in db:


```bash
[Mould] $ project LearningMongo
[info] Set current project to LearningMongo (in build file:/Users/<username>/metastay/mould/)
[LearningMongo] test-only *LearningMongoTestSuite* -- -n create
creating a company..
done.
[info] LearningMongoTestSuite:
[info] - create a company
[info] ScalaTest
...
```
	*	Open mongo viewer & you will see a new row created in company collection
	
	
   <img src="$withBase('/mongo-viewer.png')" />



3.	Read record using CollectionQuery

	*	define a function to read all companies in database.


```scala
object LearningMongoObject extends LearningMongoTrait {
	def listCompanies(): List[CompanyRow] = {
	 CompanyQuery().find
	}
}
```
	*	Call this method from a test-case in the mongo module : 


```scala
class LearningMongoTestSuite ... {
	test("list all companies", Tag("read")) {
		val companyList = listCompanies()
		println("Company List: " + companyList)
	}
}
```
	*	Run the test case to list all companies:


```bash
[LearningMongo] test-only *LearningMongoTestSuite* -- -n read
...
Company List: List(CompanyRow(_id=5b0291bb77c8344dea90372c,name=Software Solutions,address=HSR, India))
[info] LearningMongoTestSuite:
[info] - list all companies
...
```
	*	**Exercise:** Write a function to get the details of a company given the company name.

4.	Update a record using CollectionUpdate
	
	*	define a function to update a company's address


```scala
object LearningMongoObject extends LearningMongoTrait {
	def updateCompany(name:String, newAddress:String): Unit = {
		val q = CompanyQuery().name.is(name)
		val u = CompanyUpdate().address.set(newAddress)
		CompanyWriter().updateOne(q,u)
	}
	...
}
```
	*	Call this method from a test-case in the mongo module : 


```scala
class LearningMongoTestSuite ... {
	test("update company address", Tag("update")) {
	 	println("updating company... ")
	 	updateCompany(name = "Software Solutions", newAddress = "Koramangala, India" )
	 	println("done.")
	}
	...
}
```
	*	Run the test case to see the change in db.

```bash
[LearningMongo] test-only *LearningMongoTestSuite* -- -n update
...
```
5.	Delete a record 

   * define a function to remove a given company


```scala
object LearningMongoObject extends LearningMongoTrait {
	def removeCompany(name:String): Unit = {
		 val q = CompanyQuery().name.is(name)
		 CompanyWriter().remove(q)
	}
	...
}
```
	*	Call this method from a test-case in the mongo module : 


```scala
class LearningMongoTestSuite ... {
	test("remove company", Tag("remove")) {
		 println("removing company.. ")
		 removeCompany(name = "Software Solutions")
		 println("done.")
	}
	...
}
```
	*	Run the test case to see the change in db.


```bash
		[LearningMongo] test-only *LearningMongoTestSuite* -- -n remove
```
6.	Collection extension classes: extend vs object extend

   You can add some commonly accessed methods to a collection using an object extend ex: listCompainesInCity(city:String). Where as for instance specific apis use extend, ex: it would be usefull to get a method like getAllEmployeeList defined on a company row. 
	

  *	Open file LeaningMongo.kmongo in eclipse
  *	Add the extend keyword in Company collection definition:


```
collection Company extend {
	property name:String
	property address:String
}
```
	*	On compile, you must see a file by name CompanyRowExtn created with the company row available in scope
	*	Define getAllEmployeeList in this extension class


```
trait CompanyRowExtn extends CompanyRowExtnTrait {
 row: CompanyRow =>
 def getAllEmployeeList: List[EmployeeRow] = {
   EmployeeQuery().company_oid.is(row._id).find
 }
}
```
	*	Call this api from a test:


```scala
class LearningMongoTestSuite ... {
	test("list all employees", Tag("employees")) {
		 val name = "Software Solutions"
		 createCompany(name = name, address = "HSR, India")
		 val company = findCompany(name = name).get
		 val employeeList = company.getAllEmployeeList
		 println("Employee List: " + employeeList)
	}
	...
}
```
 * Run the test case to see the results.


```bash
		[LearningMongo] test-only *LearningMongoTestSuite* -- -n employees
```

# Assignment



1.	Re-code all the company apis written earlier to read from database as opposed to in-memory.
2.	Copy, modify & run test cases from LearningMongoTestSuite.







