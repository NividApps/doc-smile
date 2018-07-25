---
title: FoodBowl Phase III
---

#   FoodBowl Phase III

##  Eventify

* Edit `FoodBowl.ksmile`

```
stream-module FoodBowlStream at com.nividapps.foodbowlstream
```

* $smile
* Edit `FoodBowlStream.kstream` , add  foodbowl related events

```
event DonorRegistered(donorId:Id,name:String, addressLine1:String,addressLine2:String?,city:String,state:String,pincode:String,phoneNo:String,email:String?)
event AcceptorRegistered(acceptorId:Id,name:String, addressLine1:String,addressLine2:String?,city:String,state:String,pincode:String,phoneNo:String,email:String?)
event FoodDonated(foodDonatedId:Id,description:String,preparedAt:DateTime,freshUntil:DateTime,unitOfMeasure:Id,quantity:Int,remarks:String,pickUpAddressLine1:String,pickUpAddressLine2:String?,pickUpCity:String,state:String,pincode:String,foodType:Id,donor:Id)
event FoodAccepted(acceptor:Id,food:Id,timeOfCollection:DateTime,quantity:Int)
event StaleFoodRemoved(foodId:Id)
event FoodRequested(foodRequestId:Id,description:String,unitOfMeasure:Id,quantity:Int,acceptorId:Id,foodType:Id)
event FoodRequestCleared(acceptorId:Id,foodRequesId:Id)
event FoodCollected(foodId:Id,acceptorId:Id,timeOfAcceptance:DateTime,quantity:Int)
event FoodTypeAdded(foodTypeId:Id,foodType:String)
event unitOfMeasurementAdded(unitOfMeasurementId:Id,unitOfMeasurement:String)

```

* $compile


* See `foodbowlstream.conf` file, database and how the events are getting stored.

##  Events and Commands

* Add stream dependency to Domain module in FoodBowl.ksmile.

```
domain-module FoodBowlDomain(FoodBowlMongo,FoodBowlStream) at com.nividapps.foodbowldomain

```

* add stream to command-set and raise events from commands in `FoodBowlDomain.kdomain`

```scala

command-set[FoodBowlStream] User{
      domain-logic-ref user:User
      command registerDonor{

      input(
        name:String, 
        addressLine1:String, 
        addressLine2:String?,
        city:String,state:String,
        pincode:String,
        phoneNo:String,
        email:String)

      pre{
        condition phoneNumberShouldNotExist=>!(user.donorPhoneNoAlreadyExists(input.phoneNo)) failing "This Donor is already registered"
      }
      event-raised(donorRegistered:DonorRegistered)
}

command registerAcceptor{
      input(
        name:String, 
        addressLine1:String, 
        addressLine2:String?,
        city:String,
        state:String,
        pincode:String,
        phoneNo:String,
        email:String)
      pre{
        condition phoneNumberShouldNotExist=>!(user.acceptorPhoneNoAlreadyExists(input.phoneNo)) failing "This Acceptor is already registered"
      }
      event-raised(acceptorRegistered:AcceptorRegistered)
    }
}

command-set[FoodBowlStream] FoodBowl{
    domain-logic-ref foodbowl:FoodBowl
    domain-logic-ref user:User
    command addFoodType{
      input(
        foodType:String
        )
      pre{
        condition foodTypeShouldNotExists=>!foodbowl.foodTypeExists(input.foodType) failing "FOod type already exists"
      }
      event-raised(foodTypeAdded:FoodTypeAdded)
}
  
command addUnitOfMeasurement{
    input(
      unitOfMeasurement:String
      )
    pre{
      condition  unitOfMeasurementShouldExist =>!foodbowl.unitOfMeasurementExist(input.unitOfMeasurement) failing "Unit of measure already exist"
    }
    event-raised(unitMeasures:unitOfMeasurementAdded)
}

command donateFood{
    input( 
      description:String,
      preparedAt:DateTime,
      freshUntil:DateTime,
      unitOfMeasure:Id,
      quantity:Int,
      remarks:String,
      pickUpAddressLine1:String,
      pickUpAddressLine2:String?,
      pickUpCity:String,
      state:String,
      pincode:String,
      foodType:Id,donor:Id)
    pre{
      condition donorShouldExist=>user.donorExists(input.donor) failing "Donor doesn't exist"
      condition foodShouldBeFresh=>foodbowl.isFoodFresh(input.freshUntil) failing "Food is not fresh"
      }
    event-raised(foodDonated:FoodDonated)
    output(foodId:Id)
}
  
command acceptFood{
    input(
      acceptor:Id,
      food:Id,
      expectedTimeOfCollection:DateTime,
      quantity:Int)
    pre{
      condition acceptorShouldExist=>user.acceptorExists(input.acceptor) failing "Acceptor Doesn't exist"
      condition collectionTimeNotInThePast=>foodbowl.collectionTimeIsInTheFuture(input.food,input.expectedTimeOfCollection) failing "Collection time is already expired"
      condition collectFreshfood=>foodbowl.isFreshFoodAt(input.food,input.expectedTimeOfCollection) failing "Food won't be fresh at the time of your collection"
      condition quantityShouldExist=>foodbowl.requestedQuantityAvailable(input.food,input.quantity) failing "Request quantity food is not available"
    }
    event-raised(foodAcccepted:FoodAccepted)
    
}
  
command removeStaleFood{
    input(foodId:Id)
    pre{
      condition foodExist=>foodbowl.foodExists(input.foodId) failing "Food doesnt exits"
      condition foodIsStale=>foodExist->foodbowl.foodIsStale(input.foodId) failing "Food is still fresh"
    }
    event-raised(staleFoodRemoved:StaleFoodRemoved)
  }
  
  
command requestFood{
    input(
      description:String,
      unitOfMeasure:Id,
      quantity:Int,
      acceptorId:Id,
      foodType:Id)
    pre{
      condition acceptorShouldExists=>user.acceptorExists(input.acceptorId) failing "Acceptor is not registered"
    }
    event-raised(foodRequested:FoodRequested)
}
  
command clearFoodRequest{
    input(acceptorId:Id,requestFoodId:Id)
    pre{
      condition acceptorShouldExist=>user.acceptorExists(input.acceptorId) failing "Acceptor is not registered"
      condition foodRequestShouldExist=>foodbowl.foodRequestExists(input.requestFoodId) failing "Food request doesn't exists"
    }
    event-raised(foodRequestCleared:FoodRequestCleared)
}

command collectFood{
    input(
      foodId:Id,
      acceptorId:Id,
      timeOfAcceptance:DateTime,
      quantity:Int)

    pre{
      condition acceptorShouldExist=>user.acceptorExists(input.acceptorId) failing "Acceptor is not registered"
      condition foodShouldExist=>foodbowl.foodExists(input.foodId) failing "Food doesn't not exists"
      condition collectFreshfood=>foodShouldExist->foodbowl.isFreshFoodAt(input.foodId,input.timeOfAcceptance) failing "Food is not fresh"
    }
    event-raised(foodCollected:FoodCollected)
  } 
}

```

* $smile
* $compile
* comment the existing code in `FoodBowlCommandSetCode` and fix the compilation error

```scala
override def donateFood = DonateFoodCommand {
      import DonateFoodCommand._
      input: Input =>
       val foodId=new Id
       EventRaised(
        FoodDonated(
          foodDonatedId=foodId,
          description = input.description,
          preparedAt = input.preparedAt,
          freshUntil = input.freshUntil,
          unitOfMeasure = input.unitOfMeasure,
          quantity = input.quantity,
          remarks = input.remarks,
          pickUpAddressLine1 = input.pickUpAddressLine1,
          pickUpAddressLine2 = Some(input.pickUpAddressLine1),
          pickUpCity = input.pickUpCity,
          state = input.state,
          pincode = input.pincode,
          foodType = input.foodType,
          donor=input.donor
       ))->Output(foodId)
    }


override def acceptFood = AcceptFoodCommand {
        import AcceptFoodCommand._
        input: Input =>
         EventRaised(
          FoodAccepted(
            acceptor = input.acceptor,
            food = input.food,
            timeOfCollection = input.expectedTimeOfCollection,
            quantity = input.quantity)
            )
      }




override def removeStaleFood = RemoveStaleFoodCommand {
        import RemoveStaleFoodCommand._
        input: Input =>
         EventRaised(StaleFoodRemoved(foodId = input.foodId))
      }




override def requestFood = RequestFoodCommand {
        import RequestFoodCommand._
        input: Input =>
          EventRaised(
            FoodRequested(
              foodRequestId = new Id,
              description = input.description,
              unitOfMeasure = input.unitOfMeasure,
              quantity = input.quantity,
              acceptorId = input.acceptorId,
              foodType = input.foodType)
              )
      }




override def clearFoodRequest = ClearFoodRequestCommand {
        import ClearFoodRequestCommand._
        input: Input =>
          EventRaised(FoodRequestCleared(acceptorId = input.acceptorId,foodRequesId = input.requestFoodId))
      }




override def collectFood = CollectFoodCommand {
        import CollectFoodCommand._
        input: Input =>
          EventRaised(
            FoodCollected(
              foodId = input.foodId,
              acceptorId = input.acceptorId,
              timeOfAcceptance = input.timeOfAcceptance,
              quantity = input.quantity)
              )
      }


override def addFoodType = AddFoodTypeCommand {
    import AddFoodTypeCommand._
    input: Input =>
      val foodTypeId=new Id
      EventRaised(FoodTypeAdded(foodTypeId,input.foodType))
  }


override def addUnitOfMeasurement = AddUnitOfMeasurementCommand {
    import AddUnitOfMeasurementCommand._
    input: Input =>
      val unitOfMeasurementId=new Id
      EventRaised(unitOfMeasurementAdded(unitOfMeasurementId,input.unitOfMeasurement))
  }

```

* Edit `FoodBowlDomain.kdomain` and add the handler after domain-logic definition 


```
event-handler [FoodBowlStream] FoodBowlStream{
  AcceptorRegistered,DonorRegistered,FoodAccepted,FoodCollected,FoodRequestCleared,FoodRequested,StaleFoodRemoved,FoodDonated,FoodTypeAdded,unitOfMeasurementAdded
}
```


* $compile
* move the commented code from `FoodBowlCommandSetCode` to `FoodBowlStreamEventHandlerCode`

```scala
override def handleException(event:com.nividapps.foodbowlstream.stream.FoodBowlStreamEvent, context:EventContext, throwable:Throwable): Unit = ??



override def handle(event: AcceptorRegistered, context:EventContext): Unit ={
      val addressId=new Id()
      val address=AddressRow(
        _id = addressId,
        addressLine1 = event.addressLine1,
        addressLine2 =event.addressLine2.toString,
        city = event.city,
        state = event.state,
        pincode = event.pincode)

        AddressWriter().save(address)

        AcceptorWriter().save(AcceptorRow(_id=event.acceptorId,acceptorId = event.acceptorId,name = event.name,address_oid = addressId,phoneNumber = event.phoneNo,email = event.email))
        
   }

   
override def handle(event: DonorRegistered, context:EventContext): Unit = {
      val addressId=new Id()
      val address=AddressRow(
        _id = addressId,
        addressLine1 = event.addressLine1,
        addressLine2 =event.addressLine2.toString,
        city = event.city,
        state = event.state,
        pincode = event.pincode
        )
       AddressWriter().save(address)
       DonorWriter().save(DonorRow(_id=event.donorId,donorId = event.donorId,name = event.name,address_oid = addressId,
         phoneNumber = event.phoneNo,email = event.email))
   }

override def handle(event: FoodDonated, context:EventContext): Unit = {
      val addressId=new Id()
      val address=AddressRow(
        _id = addressId,
        addressLine1 = event.pickUpAddressLine1,
        addressLine2 =event.pickUpAddressLine2.toString,
        city = event.pickUpCity,
        state = event.state,
        pincode = event.pincode)

      AddressWriter().save(address)
      FoodWriter().save(
        FoodRow(
          _id=event.foodDonatedId,
           foodId = event.foodDonatedId,
           description = event.description,
           preparedAt = event.preparedAt,
           freshUntil = event.freshUntil,
           unitOfMeasure_oid = event.unitOfMeasure,
           quantity = event.quantity,
           remarks = event.remarks,
           pickUpAddress_oid = addressId,
           foodType_oid = event.foodType,
           donor_oid = event.donor)
           )


   }

override def handle(event: FoodAccepted, context:EventContext): Unit = {
      FoodAcceptedWriter().save(FoodAcceptedRow(food_oid = event.food,acceptor_oid = event.acceptor,
         quantity = event.quantity,expectedTimeOfCollection = event.timeOfCollection))
   }

   
override def handle(event: FoodCollected, context:EventContext): Unit = {
     val q= FoodAcceptedQuery().food_oid.is(event.foodId).acceptor_oid.is(event.acceptorId)
      val u=FoodAcceptedUpdate().timeOfCollection.set(event.timeOfAcceptance)
      FoodAcceptedWriter().updateOne(q,u)

   }

   
override def handle(event: FoodRequestCleared, context:EventContext): Unit = {
      FoodRequestWriter().removeById(event.foodRequesId)
   }

   
override def handle(event: FoodRequested, context:EventContext): Unit = {
         FoodRequestWriter().save(
          FoodRequestRow(
            foodRequestId = event.foodRequestId,
            description = event.description,
            acceptor_oid = event.acceptorId,
            unitOfMeasure_oid = event.unitOfMeasure,
            quantity = event.quantity,
            foodType_oid = event.foodType
         ))
   }

   
override def handle(event: StaleFoodRemoved, context:EventContext): Unit = {
      FoodWriter().removeById(event.foodId)
   }

override def handle(event: FoodTypeAdded, context: EventContext): Unit = {
      val foodtype=FoodTypeRow(
        _id = event.foodTypeId,
        foodType = event.foodType
        )
      FoodTypeWriter().save(foodtype)
   }

override def handle(event: unitOfMeasurementAdded, context: EventContext): Unit = {
      val unitofmeasure=UnitOfMeasureRow(
        _id=event.unitOfMeasurementId,
        unit = event.unitOfMeasurement
        )
      UnitOfMeasureWriter().save(unitofmeasure)
   }

   
```

* $run
* Test through url in browser http://localhost:9000/api/foodbowl/donatedFood-list
* or run any tests, nothing should change




##  Command Testing


##  Projection

* Edit `FoodBowl.ksmile`
* Also add dependency of FoodBowlQuery in the Play module.

```
mongo-module FoodBowlReadMongo at com.nividapps.foodbowlreadmongo
query-module FoodBowlQuery(FoodBowlReadMongo ,FoodBowlStream) at com.nividapps.foodbowlquery
```
* $smile,refresh eclipse
* edit `FoodBowlReadMongo.kmongo`

```
collection DonorRead{
  property donorId:Id
  property name:String
  reference address:AddressRead
  property email:String?
  property phoneNumber:String
  
}

collection AcceptorRead{
  property acceptorId:Id
  property name:String
  reference address:AddressRead
  property email:String?
  property phoneNumber:String
  
}

collection FoodRead{
  property foodId:Id
  property description:String
  property preparedAt:DateTime
  property freshUntil:DateTime
  reference unitOfMeasure:UnitOfMeasureRead
  property quantity:Int
  property remarks:String
  reference pickUpAddress:AddressRead
  reference foodType:FoodTypeRead 
  reference donor:DonorRead
}

collection FoodRequestRead{
  property foodRequestId:Id
  property description:String
  reference acceptor:AcceptorRead
  reference unitOfMeasure:UnitOfMeasureRead
  property quantity:Int
  reference footType:FoodTypeRead
}

collection AddressRead{
  property addressLine1:String
  property addressLine2:String
  property city:String
  property state:String
  property pincode:String
  
}
collection FoodAcceptedRead{
  reference food:FoodRead
  reference acceptor:AcceptorRead
  property quantity:Int
  property expectedTimeOfCollection:DateTime
  property timeOfCollection:DateTime
  
}
collection FoodTypeRead{
  property foodTypeId:String
  property footType:String
  
}

collection UnitOfMeasureRead{
  property unitOfMeassureId:String
  property unit:String
}
```

* edit LotterQuery.kqyuery

```
projector [FoodBowlStream] FoodBowl{
  AcceptorRegistered,DonorRegistered,FoodAccepted,FoodCollected,FoodRequestCleared,FoodRequested,StaleFoodRemoved,FoodDonated,FoodTypeAdded,unitOfMeasurementAdded
}
```

* $compile
* Edit `FoodBowlProjectorCode`

```scala
override def project(event: FoodDonated, context: EventContext): Unit ={
    val addressId=new Id()
    val address=AddressReadRow(
      _id = addressId,
      addressLine1 = event.pickUpAddressLine1,
      addressLine2 =event.pickUpAddressLine2.toString,
      city = event.pickUpCity,
      state = event.state,
      pincode = event.pincode
      )
    AddressReadWriter().save(address)
    FoodReadWriter().save(
      FoodReadRow(
        _id=event.foodDonatedId,
        foodId = event.foodDonatedId,
        description = event.description,
        preparedAt = event.preparedAt,
        freshUntil = event.freshUntil,
        unitOfMeasure_oid = event.unitOfMeasure,
        quantity = event.quantity,
        remarks = event.remarks,
        pickUpAddress_oid = addressId,
        foodType_oid = event.foodType,
      donor_oid = event.donor)
      )

  }

override def project(event: AcceptorRegistered, context:EventContext): Unit = {
        val addressId=new Id()
        val address=AddressReadRow(_id = addressId,addressLine1 = event.addressLine1,addressLine2 =event.addressLine2.toString,
          city = event.city,state = event.state,pincode = event.pincode)
        AddressReadWriter().save(address)
        AcceptorReadWriter().save(AcceptorReadRow(_id=event.acceptorId,acceptorId = event.acceptorId,name = event.name,address_oid = addressId,
          phoneNumber = event.phoneNo,email = event.email))
}

override def project(event: DonorRegistered, context:EventContext): Unit = {
         val addressId=new Id()
         val address=AddressReadRow(_id = addressId,addressLine1 = event.addressLine1,addressLine2 =event.addressLine2.toString,
           city = event.city,state = event.state,pincode = event.pincode)
         AddressReadWriter().save(address)
         DonorReadWriter().save(DonorReadRow(_id=event.donorId,donorId = event.donorId,name = event.name,address_oid = addressId,
           phoneNumber = event.phoneNo,email = event.email))
}


override def project(event: FoodAccepted, context:EventContext): Unit = {
         FoodAcceptedReadWriter().save(FoodAcceptedReadRow(food_oid = event.food,acceptor_oid = event.acceptor,
           quantity = event.quantity,expectedTimeOfCollection = event.timeOfCollection))
}


override def project(event: FoodCollected, context:EventContext): Unit ={
 val q= FoodAcceptedReadQuery().food_oid.is(event.foodId).acceptor_oid.is(event.acceptorId)
 val u=FoodAcceptedReadUpdate().timeOfCollection.set(event.timeOfAcceptance)
 FoodAcceptedReadWriter().updateOne(q,u)
}

override def project(event: FoodRequestCleared, context:EventContext): Unit = {
 FoodRequestReadWriter().removeById(event.foodRequesId)
}


override def project(event: FoodRequested, context:EventContext): Unit = {
 FoodRequestReadWriter().save(FoodRequestReadRow(foodRequestId = event.foodRequestId,description = event.description,
   acceptor_oid = event.acceptorId,unitOfMeasure_oid = event.unitOfMeasure,quantity = event.quantity,footType_oid = event.foodType
 ))

}

override def project(event: StaleFoodRemoved, context:EventContext): Unit = {
 FoodReadWriter().removeById(event.foodId)

}

override def project(event: FoodTypeAdded, context: EventContext): Unit = {
    val foodtype=FoodTypeReadRow(_id = event.foodTypeId,footType = event.foodType)
    FoodTypeReadWriter().save(foodtype)
  }

override def project(event: unitOfMeasurementAdded, context: EventContext): Unit = {
    val unitofmeasure=UnitOfMeasureReadRow(_id=event.unitOfMeasurementId,unit = event.unitOfMeasurement)
    UnitOfMeasureReadWriter().save(unitofmeasure)
  }
   

```


* Edit FoodBowlWebReaderCode

```scala
override def donorDetails:Request[DonorDetailsView.Pre] => List[com.nividapps.foodbowldata.data.Donor] = DonorDetailsView {
    import DonorDetailsView._
    request:Request[Input] =>
    DonorReadQuery().find.map(
      row=>{
        Donor(
          donorId=row._id.toString,
          name = row.name,
          address = Address(row.address.addressLine1,row.address.addressLine2,row.address.city,row.address.state,row.address.pincode),
          email = row.email,
          phoneNumber = row.phoneNumber)
      }
    )// val input = request.body; List[com.nividapps.foodbowldata.data.Donor]
  }

  
override def unitOfMeasurementDetails:Request[UnitOfMeasurementDetailsView.Pre] => List[com.nividapps.foodbowldata.data.UnitOfMeasure] = UnitOfMeasurementDetailsView {
  import UnitOfMeasurementDetailsView._
  request:Request[Input] =>
    UnitOfMeasureReadQuery().find.map(
      row=>UnitOfMeasure(
        unitOfMeassureId=row._id.toString,
        unit = row.unit
        )
    )// val input = request.body; List[com.nividapps.foodbowldata.data.UnitOfMeasure]
}


override def foodTypeDetails:Request[FoodTypeDetailsView.Pre] => List[com.nividapps.foodbowldata.data.FoodType] = FoodTypeDetailsView {
  import FoodTypeDetailsView._
  request:Request[Input] =>
    val input=request.body
  FoodTypeReadQuery().find.map(
    row=>{
      FoodType(foodTypeId=row._id.toString,foodType = row.footType)


    }
  )// val input = request.body; List[com.nividapps.foodbowldata.data.FoodType]
}



override def listOfDonatedFood:Request[ListOfDonatedFoodView.Pre] => List[com.nividapps.foodbowldata.data.Food]  = ListOfDonatedFoodView {
    import ListOfDonatedFoodView._
    request:Request[Input] =>
      val input = request.body
      FoodReadQuery().find.map(
        row=>{
          Food(
            foodId=row._id.toString,
            description = row.description,
            preparedAt = row.preparedAt,
            freshUntil = row.freshUntil,
            unitOfMeasure = UnitOfMeasure(unitOfMeassureId=row._id.toString,row.unitOfMeasure.unit),quantity = row.quantity,remarks = row.remarks,pickUpAddress = Address(addressLine1 = row.pickUpAddress.addressLine1,addressLine2 = row.pickUpAddress.addressLine2,city = row.pickUpAddress.city,state = row.pickUpAddress.state,pincode = row.pickUpAddress.pincode),
            foodType =
            FoodType(
              foodTypeId=row._id.toString,
              foodType = row.foodType.footType
              ),
            donor = Donor(donorId=row._id.toString,name = row.donor.name,Address(addressLine1 =row.donor.address.addressLine1,addressLine2 = row.donor.address.addressLine2,
              city = row.donor.address.city,state = row.donor.address.state,pincode = row.donor.address.pincode),
            email = row.donor.email,phoneNumber = row.donor.phoneNumber))
        }
     )
      //List[com.nividapps.foodbowldata.data.Food]
}

override def listOfFoodRequests:Request[ListOfFoodRequestsView.Pre] => List[com.nividapps.foodbowldata.data.FoodRequest]  = ListOfFoodRequestsView {
    import ListOfFoodRequestsView._
    request:Request[Input] =>
      val input = request.body
      FoodRequestReadQuery().find.map(row=>FoodRequest(
        description = row.description,
        acceptor = Acceptor(acceptorId=row._id.toString,name = row.acceptor.name,address = Address(addressLine1 =
        row.acceptor.address.addressLine1,
          addressLine2 = row.acceptor.address.addressLine2,
          city=row.acceptor.address.city,
          state = row.acceptor.address.state,
          pincode = row.acceptor.address.pincode),email = row.acceptor.email,phoneNumber = row.acceptor.phoneNumber),
        unitOfMeasure = UnitOfMeasure(unitOfMeassureId=row._id.toString,row.unitOfMeasure.unit),
        quantity = row.quantity,
        footType = FoodType(foodTypeId=row._id.toString,row.footType.footType)
      ))
      //List[com.nividapps.foodbowldata.data.FoodRequest]
} 


override def searchFoodByDonorEmail:Request[SearchFoodByDonorEmailView.Pre] => List[SearchFoodByDonorEmailView.Output] = SearchFoodByDonorEmailView {
  import SearchFoodByDonorEmailView._
  request:Request[Input] =>

    val input = request.body
    val donorid = DonorReadQuery().email.is(input.email).findOne.get._id
    FoodReadQuery().donor_oid.is(donorid).find.map(
      row => SearchFoodByDonorEmailView.Output(
        description = row.description,
        unitOfMeassure = row.unitOfMeasure.unit.toString,
        quantity = row.quantity,
        remarks = row.remarks,
        foodType = row.foodType.footType.toString

      ))
}

override def searchFoodByDonorPhoneNo:Request[SearchFoodByDonorPhoneNoView.Pre] => List[SearchFoodByDonorPhoneNoView.Output] = SearchFoodByDonorPhoneNoView {
  import SearchFoodByDonorPhoneNoView._
  request:Request[Input] =>

    val input = request.body
    val donorid = DonorReadQuery().phoneNumber.is(input.phoneNo).findOne.get._id
    FoodReadQuery().donor_oid.is(donorid).find.map(
      row => SearchFoodByDonorPhoneNoView.Output(
        description = row.description,
        unitOfMeassure = row.unitOfMeasure.unit.toString,
        quantity = row.quantity,
        remarks = row.remarks,
        foodType = row.foodType.footType.toString
      ))
}
```
* clean the db
* $run
* Test through url in browser http://localhost:9000/api/foodbowl/listOfFoodDonated    



##  Review Write DB





