---
title: PHASE I
---

# Phase I
       
## Create FoodBowl Project

Create a FoodBowl project and set-up
```bash
~/temp $ smile new FoodBowl
~/temp $ cd FoodBowl
~/temp/foodbowl
~/temp/foodbowl $ sbt
$[foodbowl] smile
```
**Load project in IntelliJ(build.sbt) and Eclipse(import k)**

## FoodBowl Mongo Module


* Open FoodBowl.ksmile in Eclipse.
* Edit FoodBowl.ksmile and insert the below content to create a FoodBowl Mongo module

**FoodBowl.ksmile**

```

  section foodBowl {
	mongo-module FoodBowlMongo at com.nividapps.foodbowlmongo
  }
```
* $smile
* In Eclipse refresh to see the FoodBowlMongo.kmongo
* Edit FoodBowlMongo.kmongo to add a collection.

**FoodBowlMongo.kmongo**
```    
collection Food {
	property description:String
	property typeOfFood:String
	property preparedAt:DateTime
	property freshUntil:DateTime
	property quantity:Int
	property unitOfMeasurement:String
	property donor:String
	property pickUpAddress:String
	property remarks:String
}

collection FoodRequest {
	property description:String
	property foodType:String
	property quantity:Int
	property unitOfMeasurement:String
	property acceptor:String
}

collection FoodAcceptance {
	property food:String
	property acceptor:String
	property quantity:Int 
	property expectedTimeOfCollection:DateTime
	property actualTimeOfCollection:DateTime?
}
```
* $compile
* Write test cases in FoodBowlMongoTestSuite.scala to add entry of Food ,FoodRequest ,FoodAcceptance Collections and check whether the entries are added to the database.

### References in Collections
We can reference one collection from other collection.
* Edit FoodBowlMongo.kmongo to reference collections.

```
collection Donor {
	property name:String
	reference address:Address
	property phoneNumber:String
	property email:String?
}

collection Acceptor {
	property name:String
	reference address:Address
	property phoneNumber:String
	property email:String?
}

collection Food {
	property description:String
    reference typeOfFood:FoodType
	property preparedAt:DateTime
	property freshUntil:DateTime
	property quantity:Int
	reference unitOfMeasurement:UnitOfMeasure
	reference donor:Donor
	reference pickUpAddress:Address
	property remarks:String
}

collection FoodRequest {
	property description:String
	reference foodType:FoodType
	property quantity:Int
	reference unitOfMeasurement:UnitOfMeasure
	reference acceptor:Acceptor
}

collection FoodAcceptance {
	reference food:Food
	reference acceptor:Acceptor
	property quantity:Int 
	property expectedTimeOfCollection:DateTime
	property actualTimeOfCollection:DateTime?
}
collection Address {
	property addressLine1:String
	property addressLine2:String?
	property city:String
	property state:String
	property pincode:String
}

collection FoodType {
	property foodType:String
}

collection UnitOfMeasure {
	property unit:String
}
```