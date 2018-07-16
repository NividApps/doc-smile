

# Domain Module



## What is the need for a domain module?


Domain module that defines the building blocks of the project. It has the actual operations that are needed to run the business.
1.	Separating the read from the write, binds the specific concerns with clear boundaries. Read about CQRS to know more. https://martinfowler.com/bliki/CQRS.html
2.	Thereby, enables us to write bug free, high quality code by ensuring that the writes are guarded well.
3.	What is a bounded context?


## Creating a domain module


1.	Open Mould.ksmile file and add the domain module definition as follows

```
section learning {
	data-module LearningData at com.metastay.learningdata
	mongo-module LearningMongo(LearningData) at com.metastay.leaningmongo
	domain-module LearningDomain(LearningMongo) at com.metastay.learningdomain
}
```
2.	Run smile command in sbt 
3.	refresh the project in eclipse. 
4.	You will see the `LearningDomain.kdomain` file generated.


## Defining a command



1.	Open LearningDomain.kdomain in eclipse
2.	Create a command set (bounded-context) for Company apis & with it, define a command to create/register a new company.

```
command-set Company {
		command registerCompany{
		input(companyName:String, address:String)
		output(companyId:Id)
	}
}
```
3.	Compile the code in sbt
4.	Open intelliJ and you should see a file by name CompanyCommandSetCode.scala generated with a method registerCompany defined and ready to be implemented.

```
class CompanyCommandSetCode(domainLogicRef:DomainLogicRef) extends CompanyCommandSetCommands {
     override def registerCompany = RegisterCompanyCommand {
        import RegisterCompanyCommand._
        input: Input => ?? // Output()
     }
}
```
5.	Implement the command: copy the code written in LearningMongoObject class's createCompany api and change it as follows:

```
override def registerCompany = RegisterCompanyCommand {
 import RegisterCompanyCommand._
 input: Input =>
   val companyId = new Id
   val companyRow = CompanyRow(
     name = input.companyName,
     address = input.address
   )
   CompanyWriter().insert(companyRow)
   Output(companyId = companyId)
}
```

## Safe-guard your commands with preconditions


1.	Open LearningDomain.kdomain file in eclipse
2.	Add a check on companyName's length during registration

```
command registerCompany{
		input(companyName:String, address:String)
		pre {
			condition companyNameValid => `input.companyName.length >= 5` 
				failing "Company name must have at least 5 characters"
		}
		output(companyId:Id)
	}
```
3.	Ensure the code compiles.


## Using domain-logic functions in pre-condition


1.	Add a check to ensure the company is not already registered:
		
	*	Open `LearningDomain.kdomain` file in eclipse
	*	Define a **domain-logic** & a **function companyNameExists**
		
```
domain-logic Company {
	function companyNameExist(name:String):Boolean
}
```
		
  *	Define a **domain-ref** inside the command set **Company**

```
command-set Company {
	domain-logic-ref companyDomainRef:Company
	command registerCompany{...}
}
```
		
  *	Add the check in the command

```
command registerCompany{
	input(companyName:String, address:String)
		pre {
		  	condition companyNameValid => `input.companyName.length >= 5` failing "Company name must have at least 5 characters"
	  		condition companyNameMustBeUnique => !companyDomainRef.companyNameExist(input.companyName) failing "Company is already registered"
		}
	output(companyId:Id) 
}
```
		
  *	Ensure the code compiles.
  *	Implement the domain logic function
			a.	Open the domain logic code file in intelliJ - `CompanyDomainLogicCode.scala`
			b.	implement companyNameExist method
			
```scala
class CompanyDomainLogicCode extends CompanyDomainLogic {
	override def companyNameExist(name: String): Boolean = CompanyQuery().name.equalsIgnoreCase(name).exists
}
```
## Defining post conditions for testing


1.	Open `LearningDomain.kdomain` file in eclipse
2.	Add a check to ensure the company got registered

```scala
command registerCompany{
input(companyName:String, address:String)
pre {
	 condition companyNameValid => `input.companyName.length >= 5` failing "Company name must have at least 5 characters"
	 condition companyNameMustBeUnique => !companyDomainRef.companyNameExist(input.companyName) failing "Company is already registered"
	}
	output(companyId:Id)
	post {
	 condition companyRegistered => companyDomainRef.companyNameExist(input.companyName) failing "Company not registered"
	}
}
```

## Invoking a command from outside


1.	In order call a command, you need to grab the commandSet and then call the command. Use the Now() variant of the command to start with.
2.	Open file `LearningDomainTestSuite` and call the command from the test case as follows:

```scala
class LearningDomainTestSuite extends ... {
	test("call command", Tag("register")) {
		println("Calling registerCompany command...")
		val output =  grab[CompanyCommandSet].registerCompanyNow(companyName = "I3 Software Pvt Lab", address = "HSR, Bangalore")
		assert(output.isSuccess)
		output.println("Command Output: ")
	}
}
```
3.	Run the test & check if the company has got created in the database



## Command testing using fixtures


1.	Open the command fixture test suite in intelliJ: `RegisterCompanyCommandTestSuite`
2.	Write a test to ensure successful creation of a company

```scala
test("register a new company", Tag("register-new")) {
	 grab[RegisterCompanyCommandFixture]
	   .checker(Input("New Company", "India"))
	   .expectPostPass
}
```
3.	Run the test in sbt

```bash
[LearningDomain] test-only *RegisterCompanyCommandTestSuite -- -n register-new
[info] RegisterCompanyCommandTestSuite:
[info] - register a new company
[info] ScalaTest
[info] Run completed in 1 second, 501 milliseconds.
```
4.	If you run the test again it will fail since the company got created in the db from the earlier test case, so you must clean the db for every test run
5.	Dropping the collection before each test is run:

  *	Add the following code to your test suite:
	
```scala
override def beforeEach(testData: TestData): Unit = {
	 super.beforeEach(testData)
	 CompanyWriter().drop()
}
```
	
:::tip note
alternately you can also override afterEach method for the same.
::: 

6.	Now you can run the test any number of times without failure as the company collection gets cleared before each test run.


## Testing the pre-conditions


1.	Verify if the command fails when we try to register with a name less than 5 characters 

```scala
test("create a company with invalid name", Tag("invalid-name")) {
	 val companyName = "New"
	 grab[RegisterCompanyCommandFixture]
	   .checker(Input(companyName, "India"))
	   .expectPreFailOnly("companyNameValid")
}
```
2.	Run the test case

```bash
[LearningDomain] test-only *RegisterCompanyCommandTestSuite -- -n invalid-name
[info] RegisterCompanyCommandTestSuite:
[info] - create a company with invalid name
[info] ScalaTest
[info] Run completed in 1 second, 31 milliseconds.
[info] Total number of tests run: 1
[info] Suites: completed 1, aborted 0
[info] Tests: succeeded 1, failed 0, canceled 0, ignored 0, pending 0
[info] All tests passed.

```




















