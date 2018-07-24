---
title: Phase I
---

# Phase I
       
## Create FoodBowl Project

1. Create a FoodBowl project and set-up

```bash
~/temp $ smile new FoodBowl
~/temp $ cd FoodBowl
~/temp/foodbowl
~/temp/foodbowl $ sbt
$[foodbowl] smile
```

**Load project in IntelliJ(build.sbt) and Eclipse(import k)**

## FoodBowl Mongo Module


1. Open `FoodBowl.ksmile` in Eclipse.

2. Edit `FoodBowl.ksmile` and insert the below content to create a FoodBowl Mongo module

```
section FoodBowl {
	mongo-module FoodBowlMongo at com.metastay.foodbowlmongo
}
```

3. $smile

4. In Eclipse refresh to see the `FoodBowlMongo.kmongo`

5. Edit `FoodBowlMongo.kmongo` to add a collection

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

6. $compile

7. Write test cases in `FoodBowlMongoTestSuite.scala` to add entry of Food, FoodRequest, FoodAcceptance Collections and check whether the entries are added to the database

## References in Collections

1. We can reference one collection from other collection. Edit `FoodBowlMongo.kmongo` to reference collections

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