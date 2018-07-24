---
title : Phase II
--- 

# Phase II: Domain Module, Data Module and Play Module

## Domain Module

### 'Register Donor' Command

1. Add a domain module in `FoodBowl.ksmile`:

```
domain-module FoodBowlDomain at com.metastay.foodbowldomain
```

2. $ smile

3. Refresh Eclipse to see FoodBowlDomain.kdomain

4. Here we need two command set, one for the foodbowl, and another for the user. Let's start with the User command set. Add a User.registerDonor command in `FoodBowlDomain.kdomain`:

```     
domain-logic User {
    function donorContactExists(contact: String): Boolean
}
```

```
command-set [FoodBowlStream] User {
    domain-logic-ref user: User
    
    command registerDonor {
        input(
            name: String, addressLine1: String, addressLine2: String?, 
            city: String, state: String, pinCode: String, contact: String, email: String?
        )
        
        pre {
            condition uniquePhoneNumber => !user.donorContactExists(input.contact)
        }
    }
} 
```

5. $ compile

6. Open FoodBowlCommandSetCode to save it to implement

7. Add the FoodBowlMongo dependency in FoodBowlDomain in `FoodBowl.ksmile` file:

```
section FoodBwol {
  mongo-module FoodBowlMongo at com.metastay.foodbowlmongo
  domain-module FoodBowlDomain(FoodBowlMongo) at com.metastay.foodbowldomain
}
```

8. $ smile

9. Open `UserCommandSetCode.scala` to implement create command as below:

```scala
override def registerDonor = RegisterDonorCommand {
    import RegisterDonorCommand._
    input: Input => {
      val donorId = new Id()
      val addressId = new Id()
      AddressWriter().save(AddressRow(
         _id = addressId,
         addressLine1 = input.addressLine1,
         addressLine2 = if(input.addressLine2.isDefined) input.addressLine2 else None,
         city = input.city,
         state = input.state,
         pincode = input.pinCode
      ))
      DonorWriter().save(DonorRow(
         _id = donorId,
         name = input.name,
         address_oid = addressId,
         contact = input.contact,
         email = if(input.email.isDefined) input.email else None
      ))
    }
}
```

10. Open `FoodBowlDomainLogicCode.scala` to implement donorContactExists method as below:
 
```scala
override def donorContactExists (contact:String):Boolean = {
    DonorQuery().contact.is(contact).exists
} 
```

11. $compile

12. Write a test in `RegisterDonorCommandTestSuite.scala` to test the registerDonor command:

```scala
test("TestRegisterDonor", Tag("TestRegisterDonor")) {
    grab[RegisterDonorCommandFixture]
      .given()
      .when(Input(
        name = "TestDonor",
        addressLine1 = "TestAddressLine1",
        addressLine2 = Some("TestAddressLine2"),
        city = "TestCity",
        state = "TestState",
        pinCode = "TestPinCode",
        contact = "TestContact",
        email = Some("TestEmail")
      ))
      .expectEventRaisedMatch("")(event =>
        event.donorRegistered.name == "TestDonor" &&
        event.donorRegistered.contact == "TestContact" &&
        event.donorRegistered.email.isDefined
      )
      .expectEventRaisedMatch("")(event =>
        event.donorRegistered.donorId.option.isDefined
      )
}
```

13. Write a test in `RegisterDonorCommandTestSuite.scala` to test the precondition for the registerDonor command:

```scala
test("TestPreConditionUniquePhoneNumber", Tag("TestRegisterDonor")) {
    grab[RegisterDonorCommandFixture]
      .given(DonorRegistered(
        donorId = new Id()  ,
        name = "TestDonor",
        addressLine1 = "TestAddressLine1",
        addressLine2 = Some("TestAddressLine2"),
        city = "TestCity",
        state = "TestState",
        pinCode = "TestPinCode",
        contact = "TestContact",
        email = Some("TestEmail")
      ))
      .when(Input(
        name = "TestDonor",
        addressLine1 = "TestAddressLine1",
        addressLine2 = Some("TestAddressLine2"),
        city = "TestCity",
        state = "TestState",
        pinCode = "TestPinCode",
        contact = "TestContact",
        email = Some("TestEmail")
      ))
      .expectPreFailOnly("uniquePhoneNumber")
}
```

14. $ project FoodBowlDomain

15. $ test-only com.metastay.foodbowldomain.RegisterDonorCommandTestSuite

16. Similarly add a registerAcceptor command with proper preconditions


### 'Donate Food' And 'Accept Food' Command

1. Add donateFood and acceptFood command in `LotteryDomain.kdomain`:

```
domain-logic User {
    function donorExists(donor: Id): Boolean
    function acceptorExists(acceptor: Id): Boolean
}

domain-logic FoodBowl {    
    function foodIsFresh(freshUntil: DateTime): Boolean
    function collectionTimeIsInTheFuture(collectionTime: DateTime): Boolean
    function collectFreshFood(foodId: Id, collectTime: DateTime): Boolean
    function quantityExists(foodId: Id, quantity: Int): Boolean
}
```

```
command donateFood {
    input(
        description: String, preparedTime: DateTime, freshUntil: DateTime, quantity: Int,
        quantityUnit: Id, remarks: String, addressLine1: String, addressLine2: String?,
        city: String, state: String, pincode: String, foodType: Id, donor: Id
    )
        
    pre {
        condition donorExists => user.donorExists(input.donor) failing "donor does not exist in the system"
        condition freshFood => donorExists -> foodRef.foodIsFresh(input.freshUntil) failing "food is not fresh"
        condition quantityShouldBePositive => `input.quantity > 0` failing "Quantity is zero or negative"
    }
    
    output(foodId:Id)
}

command acceptFood {
    input(
        acceptorId: Id, foodId: Id, expectedTimeOfCollection: DateTime, quantity: Int
    )
        
    pre {
        condition acceptorShouldExist => user.acceptorExists(input.acceptor) failing "acceptor not exist..."
        condition collectionTimeNotBeInPast => foodRef.collectionTimeIsInTheFuture(input.expectedTimeOfCollection) failing "collection time is should be future..."     
        condition collectFreshFood => foodRef.collectFreshFood(input.food,input.expectedTimeOfCollection) failing "food may not be fresh at that time..."
        condition quantityExist => foodRef.quantityExists(input.food,input.quantity) failing "food is not  available..."
    }
}
```

2. $compile

3. Implementing donateFood and acceptFood in `FoodBowlCommandSetCode.scala`:

```scala
override def donateFood = DonateFoodCommand {
    import DonateFoodCommand._
    input: Input => {
      val foodId = new Id()
      val address = AddressRow(
        _id = addressId,
        addressLine1 = input.addressLine1,
        addressLine2 = if(input.addressLine2.isDefined) input.addressLine2 else None,
        city = input.city,
        state = input.state,
        pincode = input.pincode
      )
      AddressWriter().save(address)
      FoodWriter().save(FoodRow(
        _id = foodId, description = input.description, preparedTime = input.preparedTime, 
        freshUntil = input.freshUntil, quantity = input.quantity, quantityUnit_oid = input.quantityUnitId, remarks = input.remarks, foodType_oid = input.foodTypeId, donor_oid = input.donorId, pickUpAddress_oid = addressId
      ))
    }
}

override def acceptFood = AcceptFoodCommand {
    import AcceptFoodCommand._
    input: Input => {
      FoodAcceptanceWriter().save(FoodAcceptanceRow(
        food_oid = input.foodId, acceptor_oid = input.acceptorId, expectedTimeOfCollection = input.expectedTimeOfCollection, quantity = input.quantity
      ))
    }
}
```

4. Implementing the domain logic for User in `UserDomainLogicCode.scala`:

```scala    
override def donorExist (donor:Id):Boolean = {
    DonorQuery()._id.is(donor).exists
}

override def acceptorExist (acceptor:Id):Boolean = {
    AcceptorQuery()._id.is(acceptor).exists
}
```
 
5. Implementing the domain logic for FoodBowl in `FoodBowlDomainLogicCode.scala`:

```scala
override def foodIsFresh (freshUntil:DateTime):Boolean = freshUntil > grab[TimeService].now

override def collectionTimeIsInTheFuture (collectionTime:DateTime):Boolean = {
    collectionTime > grab[TimeService].now
}

override def collectFreshFood (foodId:Id,collectTime:DateTime):Boolean = {
    FoodQuery.withId(foodId).freshUntil.after(collectTime).exists
}

override def quantityExist (foodId:Id,quantity:Int):Boolean = {
    FoodQuery.withId(foodId).quantity.greaterThan(quantity).exists
}
```

6. Add test for donateFood and acceptFood in DonateFoodCommandTestSuite and AcceptFoodCommandTestSuite respectively

7. $ project FoodBowlDomain

8. $ test-only com.metastay.foodbowldomain.commandset.foodbowl.DonateFoodCommandTestSuite

9. $ test-only com.metastay.foodbowldomain.commandset.foodbowl.AcceptFoodCommandTestSuite

10. Similarly add commands to add FoodType and UnitOfMeasure and also commands for RequestFood, ClearFoodRequest and CollectFood

## Data Module

1. Add the data module in `FoodBowl.ksmile` to hold data that are required to present details in the play module:

```
data-module FoodBowlData at com.metastay.foodbowldata
```

2. $ smile

3. Add these data in `FoodBowlData.kdata`:

```
data Donor(
  id: Id,
  name: String,
  email: String?,
  contact: String,
  address: Address
)

data Acceptor(
  id: Id,
  name: String,
  email: String?,
  contact: String,
  address: Address
)

data Food(
  id: Id,
  description: String,
  foodType: FoodType,
  preparedTime: DateTime,
  freshUntil: DateTime,
  quantity: Int,
  quantityUnit: Measurement,  
  remarks: String,
  donor: Donor,
  pickUpAddress: Address
)

data FoodRequest(
  id: Id,
  description: String,
  foodType: FoodType,
  quntity: Int,
  unitsOfMeasure: Measurement,
  acceptor: Acceptor
)

data FoodType(
  id: Id,
  foodType: String
)

data Measurement(
  id: Id,
  unit: String
)
```

4. $ compile

## Play Module

1. Add a play module in `FoodBowl.ksmile`:

```
play-module FoodBowlPlay(FoodBowlData, FoodBowlDomain, FoodBowlQuery) at foodbowlplay
```

2. $ smile

### Web Reader

1. Add web-reader to `FoodBowlPlay.kplay` with the folowing views:

```
web-reader FoodBowl {
  
  view listOfDonatedFood (GET) {
    output(FoodBowlData::Food*)
  }
  
  view listOfRequestedFood (GET) {
    output(FoodBowlData::FoodRequest*)
  }
  
  view listOfFoodTypes (GET) {
    output(FoodBowlData::FoodType*)
  }
  
  view donatedFoodBasedOnEmail (GET) {
    input(email:String)
    output(
      description: String,
      unitOfMeasure: String,
      quantity: Int,
      remarks: String,
      foodType: String
    )*
  }
  
  view donatedFoodBasedOnContact (GET) {
    input(contact:String)
    output(
      description: String,
      unitOfMeasure: String,
      quantity: Int,
      remarks: String,
      foodType: String
    )*
  }
  
  view getfoodDonatedDetais (GET) {
    input(foodId:Id)
    output(FoodBowlData::Food)
  }
  
  view getQuantityUnits (GET) {
    output(FoodBowlData::Measurement*)
  }
  
  view listOfDonors (GET) {
    output(FoodBowlData::Donor*)
  }
  
  view listOfAcceptors (GET) {
    output(FoodBowlData::Acceptor*)
  }
}
```

2. $ compile

3. Implement the listOfDonatedFood and listOfRequestedFood views in `FoodBowlWebReaderCode.scala`:

```scala
override def listOfDonatedFood:Request[ListOfDonatedFoodView.Pre] => List[
  com.nividapps.foodbowldata.data.Food]  = ListOfDonatedFoodView {
  import ListOfDonatedFoodView._
  request:Request[Input] => {
    val input = request.body
    FoodReadQuery().find.map(food => {
      Food(
        id = food._id,
        description = food.description,
        preparedTime = food.preparedTime,
        freshUntil = food.freshUntil,
        quantityUnit = Measurement(food.quantityUnit._id, food.quantityUnit.unit),
        quantity = food.quantity,
        remarks = food.remarks,
        pickUpAddress = Address(
          food.pickUpAddress._id, food.pickUpAddress.addressLine1, food.pickUpAddress.addressLine2,
          food.pickUpAddress.city, food.pickUpAddress.state, food.pickUpAddress.pincode
        ),
        foodType = FoodType(food.foodType._id, food.foodType.foodType),
        donor = Donor(

            food.donor._id, food.donor.name, food.donor.email, food.donor.contact, Address(
            food.pickUpAddress._id, food.donor.address.addressLine1, food.donor.address.addressLine2,
            food.donor.address.city, food.donor.address.state, food.donor.address.pincode
          )
        )
      )
    })
  }
}

override def listOfRequestedFood:Request[ListOfRequestedFoodView.Pre] => List[
  com.nividapps.foodbowldata.data.FoodRequest]  = ListOfRequestedFoodView {
  import ListOfRequestedFoodView._
  request:Request[Input] => {
    val input = request.body
    FoodRequestReadQuery().find.map(food => {
      FoodRequest(
        id = food._id,
        description = food.description,
        acceptor = Acceptor(
          id = food._id, name = food.acceptor.name,email = food.acceptor.email, contact = food.acceptor.contact,
          address = Address(
            food.acceptor._id, food.acceptor.address.addressLine1, food.acceptor.address.addressLine2,
            food.acceptor.address.city, food.acceptor.address.state, food.acceptor.address.pincode
          )
        ),
        unitsOfMeasure = Measurement(food.unitsOfMeasure._id, food.unitsOfMeasure.unit),
        quntity = food.quntity,
        foodType = FoodType(food.foodType._id, food.foodType.foodType)
      )
    })
  }
}
```

4. Similarly implement the other views

5. Add swagger in `FoodBowlPlay.kplay`:

6. $ run

7. Test through the url in the browser [**http://localhost:9000/swagger**](http://localhost:9000/swagger)

### Web Writer

1. Add web-writer to `FoodBowlPlay.kplay` with the folowing command-actions:

```
web-writer FoodBowl {  
  command-action registerDonor (POST) FoodBowlDomain::User.registerDonor
  command-action registerAcceptor (POST) FoodBowlDomain::User.registerAcceptor  
  command-action donateFood (POST) FoodBowlDomain::FoodBowl.donateFood  
  command-action acceptFood (POST) FoodBowlDomain::FoodBowl.acceptFood    
  command-action requestFood (POST) FoodBowlDomain::FoodBowl.requestFood  
  command-action collectFood (POST) FoodBowlDomain::FoodBowl.collectFood  
  command-action clearFoodRequest (POST) FoodBowlDomain::FoodBowl.clearFoodRequest  
  command-action addFoodType (POST) FoodBowlDomain::FoodBowl.addFoodType  
  command-action addUnitOfMesurement (POST) FoodBowlDomain::FoodBowl.addUnitOfMeasurement
}
```

2. $ compile

:::tip NOTE
We don't need to write a WebWriterCode because the command-actions are referred to the commands in the FoodBowlDomain
:::

3. $ run

4. Test through the url in the browser [**http://localhost:9000/swagger**](http://localhost:9000/swagger)