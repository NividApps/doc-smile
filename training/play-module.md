---
title: Play Module
---

# Play Module


## Creating a play module


1.	Open `Mould.ksmile` file and add the play module definition as follows

```
section learning {
	data-module LearningData at com.metastay.learningdata
	mongo-module LearningMongo(LearningData) at com.metastay.leaningmongo
	domain-module LearningDomain(LearningMongo) at com.metastay.learningdomain
	**play-module LearningWeb(LearningDomain) at learningweb**
}
```

2.	Run smile command in sbt 
3.	Refresh the project in eclipse. You will see the `LearningWeb.kplay` file generated with the following default route:

```
route "learningweb"
```

## Web-Writers aka Command-action

1.	Lets expose the commands defined above as web apis
2.	Open `LearningWeb.kplay` file in eclipse
3.	Define a web writer for company
4.	Define registerCompany as a POST api

```
web-writer Company {
	command-action registerCompany (POST) LearningDomain::Company.registerCompany
}
```

5.	Compile in sbt
6.	No more code to be written (yay!)

## Define read apis in WebReader

1.	Lets define an api to find a company given its name
2.	Open `LeaningWeb.kplay` file in eclipse
3.	Define a web reader for company apis
4.	Define the GET api getCompany with name as input


```
web-reader Company {
	view getCompany (GET) {
		input (name:String)
	}
}
```

5.	Compile in sbt
6.	You will find `CompanyWebReaderCode` class created with the api **getCompany** defined and ready to implement
7.	Implement **getCompany**

```
object CompanyWebReaderCode extends CompanyWebReaderTrait {
	override def getCompany: Request[GetCompanyView.Pre] => GetCompanyView.Output = GetCompanyView {
		import GetCompanyView._
		request: Request[Input] =>
			val input = request.body
			val company = CompanyQuery().name.equalsIgnoreCase(input.name).findOne.get
			Output(companyId = company._id, companyName = company.name, address = company.address)
	}
}
```

8.	Add swagger to the project 

	*	Open sbt console
	*	Run command **add-swagger**
	
	```bash
	[Mould] $ add-swagger
	[info] swagger added!
	```

	*	Open `LearningWeb.kplay` file in eclipse
	*	Add the swagger definition, you can control the api access in swagger by exposing only the ones you wish to. For now letâ€™s keep all apis accessible by defining a swagger namespace as follows:

	```bash
	swagger Company 
	```

9.	Start server

	*	Open sbt console
	*	Run the **run** command

	```bash
	[Mould] $ run
	--- (Running the application, auto-reloading is enabled) ---
	[info] p.c.s.NettyServer - Listening for HTTP on /0:0:0:0:0:0:0:0:9000
	(Server started, use Ctrl+D to stop and go back to the console...)
	```

	*	Open browser and access [http://localhost:9000](http://localhost:9000)
	
		<img :src="$withBase('/application.png')" />

	*	Access swagger at [http://localhost:9000/swagger](http://localhost:9000/swagger)
	*	Register a company by name "Sample Company": [http://localhost:9000/swagger#!/Company3240Writer41/registerCompany](http://localhost:9000/swagger#!/Company3240Writer41/registerCompany)
	
		<img :src="$withBase('/register-company.png')" />

	*	Get the company details: [http://localhost:9000/swagger#!/Company40Reader41/getCompany](http://localhost:9000/swagger#!/Company40Reader41/getCompany)
	
		<img :src="$withBase('/get-company.png')" />

10.	Stop server

	* Hit Ctrl+D inside sbt console to stop server

11.	Exercise:

	*	Enhance the getCompany api to not throw a RunTimeException when we try to look up a company which is not in the db.
	*	Define an api to update the company address.
	*	Define an api to list all the companies in db.
