

## Mongo Setup




1.	Download mongo from the web 
2.	Unzip the contents into installs folder
3.	Add mongo to path

	```
	
		export MONGO_HOME=~/installs/<mongo_intsallation_folder>
		Append $MONGO_HOME/bin to PATH
	```
4.	Create a folder for mongo data


	```bash

		~>mkdir db db/mongo db/mongo/data
	```
5.	Create mongodbconfig under mongo_intsallation_folder/bin with the following configuration:

	```bash

		dbpath = <user_home>/db/mongo/data
		logpath = <user_home>/db/mongo/mongodb.log
		logappend = true
		port = 27017
		fork = true
		bind_ip = 0.0.0.0
	```
6.	Also create mongostart & mongostop script

	
	**mongostart.sh**
	```bash

		sudo ~/installs/<mongo_intsallation_folder>/bin/mongod --config ~/installs/<mongo_intsallation_folder>/bin/mongodbconfig
	```
	**mongostop.sh**
	```bash

		#!/bin/bash
		pid=`ps -aef | grep mongod | grep config | tr -s " " | cut -f3 -d " "`;
		if [ "${pid}" != "" ]; then
		sudo kill -2 ${pid};
		fi
	```
	::: Note

	 the pid field could differ based on os, for macOS its -f3 & ubuntu -f2 (?)
	 :::

7.	Open command-line & start mongo server using command mongostart

	```bash

		~>mongostart
		about to fork child process, waiting until server is ready for connections.
		forked process: 22515
		child process started successfully, parent exiting
	```
8.	You can whether mongo is running by entering into mongo shell
	
	```bash

		~>mongo
		MongoDB shell version v3.4.14-16-gaf4ea84
		connecting to: mongodb://127.0.0.1:27017
		MongoDB server version: 3.4.14-16-gaf4ea84
		Server has startup warnings:
		2018-05-18T11:30:24.049+0530 I CONTROL  [initandlisten]
		2018-05-18T11:30:24.049+0530 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
		2018-05-18T11:30:24.049+0530 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
		2018-05-18T11:30:24.050+0530 I CONTROL  [initandlisten] ** WARNING: You are running this process as the root user, which is not recommended.
		2018-05-18T11:30:24.050+0530 I CONTROL  [initandlisten]
		> db.show
		test.show
		> exit
		Bye
	```
9.	Now you can connect to localhost:27017 through Studio3T
10.	Further reference on mongo & studio3T:

+	https://www.mongodb.com/compare/mongodb-mysql
+	https://docs.mongodb.com/manual/crud/
+	https://studio3t.com/knowledge-base/






