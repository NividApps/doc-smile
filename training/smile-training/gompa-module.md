---
title: Gompa Module
---

# Gompa Module


## What is a gompa module?


Gompa module is a component that allows easy implementation of authentication and authorization of user and user groups. 


## Adding a gompa module:


1. We will use our existing project to add gompa module.
2. Go to the project directory and sbt
```
~$ cd library/
~/library$ sbt
[Library] $ add-component gompa-release-0.14
```
:::tip Note
1. see to that smile version is 3.4.1 or higher.
To check smile version\
~$ smile --version
2. check if folder named gompa-release-0.14 exists in ./smile-3.4.1/component

:::
3.	Import the component to Eclipse and add the import-component to `library.ksmile`
```
import-component gompa-release-0.14(GompaApp,LoginApp)
section library {
	vue-module/0.2 LibraryApp(LibraApi,ButerVue,GompaApi) at com.metastay.libraryapp
}
```
4.	smile 

```bash
$ smile
```

5.	Import the downloaded Libra component to eclipse.

6. Go to project/`libraryapp-shell.html` and uncomment the below lines and update the first line. 
```
<script>
    var loggedInUser = window.localStorage.getItem("loggedInUser")
    var redirectPath = window.location.pathname;
    var appId = "LibraryApp";
    if(!loggedInUser){
        window.location.href = '/login#/'+appId+'?redirectUrl='+redirectPath ;
    }
</script>
```
## Authentication of user
1.video\
## Displaying userDetails after logging in
2.Add data user to `libraryApp.kvue`
```
 data User (userId:String, userName:String, emailId: String,title: String?,
  firstName: String, lastName: String?, fullName: String, mobile: String?, 
  active: Boolean)
 ```
3)Add actions user to `libraryApp.kvue`
```
actions User{
	getUserDetails
}
```
4)Update store in `libraryApp.kvue`
```
store {
        state (
                recentBooks: Book*,
                loggedInUser:User
               )
		mutations Book {
                mutateRecentBooks(recentBooks: Book*)
                mutateUser(user:User)
        		}
}
```
5)Add backend-reader to `libraryApp.kvue`
```
 backend-reader User GompaApi::User
```
6)Go `BookMutationsCode.scala` and add the below function.
```scala
override def mutateUser: (State, User) => Unit = (state,loggedInUser) => {
        state.loggedInUser = loggedInUser
    }
```
7)Go to `UserActionCode.scala` and add the below code
```scala
object UserActionsCode {
def getUserDetails: (Store,String) => Unit = (store,userName) => {
	UserReaderBackend.getUserDetails(GetUserDetails.Input(userName)).onSuccess {
      case (xhr, Right(output)) =>
        val user =  User.fromDynamic(output.toJson)
       
      case (xhr, Left(error)) => handleErrorMessage(error)
    }
  }
private def handleErrorMessage(error: ErrorResponse) = {
  error match {
    case ClientErrors(list) => Toastr.error(list.map(_.message).mkString("\n"))
    case ClientExceptions(list) => Toastr.error("Error : " + list.map(_.message).mkString("\n"))
    case Forbidden(reason) => Toastr.error("You are not Authorized")
    case Unauthorized(reason) => Toastr.error("You are not Authorized")
    case ServerError(reason) =>
    case ServerTimeout(reason) => Toastr.error("Server is not responding; Try again later")
    case OtherResponse(reason, statusCode) =>
    case _ =>
  }
}
}
```
8)