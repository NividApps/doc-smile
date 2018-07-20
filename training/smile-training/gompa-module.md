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
8)Add a nav-bar to `libraryapp-main.html`.
```html
<ul class="nav navbar-nav navbar-right">
  <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Hello
      {{loggedInUser.firstName}} <b class="caret"></b></a>
      <ul class="dropdown-menu">
          <li><a href="#">{{loggedInUser.fullName}}</a></li>
          <li><a href="/login#/logout?redirectUrl=/library">Sign Out</a></li>
      </ul>
</ul>
```
9)update a computed and mounted in `libraryapp-main.html` to the below code.
```
computed: {
          loggedInUser: function () {
              return store.state.loggedInUser
          }
      },
mounted: function () {
    var userName = window.localStorage.getItem("loggedInUser");
    console.log(userName);
    LibraryApp.UserActions.getUserDetails(store,userName)
}
```
10)Run the server and type in the link:[http://localhost:9000/library](http://localhost:9000/library)\
11)Login with using created user name and password.

<img :src="$withBase('/training/login_img.png')"/>

12)Success:Now u can see the name in which u logged in.
<img :src="$withBase('/training/logged_page.png')"/>

## Authorization
1)Add role in `libraryApp.kvue`
```
role-ref AddBook("add_book")
```
2)Update actions user in `libraryApp.kvue`
```
actions User{
  getUserDetails
  getUserGroupListForUser
  getRoleListForUser
}
```
3)Update store in `libraryApp.kvue`
```
store {
        state (
                recentBooks: Book*,
                loggedInUser:User,
                userGroupList:String*,
                userRoleList:String*
                
        )

        mutations Book {
                mutateRecentBooks(recentBooks: Book*)
                mutateUser(user:User)
                mutateUserGroupList(userGroupList:String*)
                mutateUserRoleList(userRoleList:String*)
        }
}
```
4)Go `BookMutationsCode.scala` and add the below function.
```scala
    override def mutateUserGroupList: (State, JsArray[String]) => Unit = (state,userGroupList) => {
        state.userGroupList = userGroupList
    }

    override def mutateUserRoleList: (State, JsArray[String]) => Unit = (state,userRoleList) => {
        state.userRoleList = userRoleList
    }
```
5)Go to `UserActionCode.scala` and update the code to as shown below.
```scala
def getUserDetails: (Store, String) => Unit = (store, userName) => {

    UserReaderBackend.getUserDetails(GetUserDetails.Input(userName)).onSuccess {
      case (xhr, Right(output)) =>
        val user = User.fromDynamic(output.toJson)
        getUserGroupListForUser(store,userName)
        getRoleListForUser(store,userName)
        store.MUTATE_USER(user)
      case (xhr, Left(error)) => handleErrorMessage(error)
    }
  }

def getUserGroupListForUser: (Store, String) => Unit = (store, userName) => {

    UserReaderBackend.getUserGroupListForUser(GetUserGroupListForUser.Input(userName)).onSuccess {
      case (xhr, Right(outputList)) =>

        val list: JsArray[String] = outputList.map(output => output).toJSArray

        store.MUTATE_USER_GROUP_LIST(list)
      case (xhr, Left(error)) => handleErrorMessage(error)
    }
  }

def getRoleListForUser: (Store, String) => Unit = (store, userName) => {

  UserReaderBackend.getRoleListForUser(GetRoleListForUser.Input(userName)).onSuccess {
    case (xhr, Right(outputList)) =>
      val roleList: JsArray[String] = outputList.map(output => output).toJSArray
      store.MUTATE_USER_ROLE_LIST(roleList)
    case (xhr, Left(error)) => handleErrorMessage(error)
    }
  }
```
6)update computed and mounted in `libraryapp-main.html` to the below code.
```
computed: {
            loggedInUser: function () {
                return store.state.loggedInUser
            },
            userGroupList:function () {
                return store.state.userGroupList
            },
            userRoleList:function () {
                return store.state.userRoleList
            },
            canAddBook:function () {
                var userGroupListWhoCanAddBook = this.userGroupList.filter(function (userGroup) {
                    return(userGroup == 'library_add_book')
                })
                return (userGroupListWhoCanAddBook.length>0)
            },
            hasAddBookRole:function () {
                var userRoleListWhoCanAddBook = this.userRoleList.filter(function (userRole) {
                    return(userRole == 'add_book')
                })
                return (userRoleListWhoCanAddBook.length>0)
            }
        },
mounted: function () {
            var userName = window.localStorage.getItem("loggedInUser");
            console.log(userName);
            LibraryApp.UserActions.getUserDetails(store,userName)
        }
```
