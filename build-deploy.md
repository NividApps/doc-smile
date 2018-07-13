Build And Deploy
================

Project Build:
--------------

### Environment specific configuration

Based on the value of env in env.properties, the right set of
configuration values would be used while running Smile. there are two
types of data for configuration

-   Data - read from moduleName.conf file
-   Binders - Guice binding

Data for the env-name is is defined as \<env-name\>.\<module-name\>.conf
=\> prod.sampledata.conf Binders : ProdSampleBinders.scala where you
define the guice binding.

### Server Mode vs Interactive Mode

Release process Setup:
----------------------

1.  install java.
2.  create a release folder, inside release folder:
3.  create a folder named "shipped"
4.  create a folder named “backup" (optional)
5.  create a deploy.sh with the following

``` {.sourceCode .html}
RELEASE_ARTIFACT=“<release-name>”
RELEASE_FOLDER=“<release-folder-name>"
echo "moving old zip to backup/"
rm -rf backup/*
mv $RELEASE_ARTIFACT.zip backup/
echo "deleting old releases"
rm -rf $RELEASE_FOLDER
echo "copying release zip here"
cp ./shipped/$RELEASE_ARTIFACT.zip .
unzip $RELEASE_ARTIFACT.zip
echo "renaming release zip"
mv $RELEASE_ARTIFACT $RELEASE_FOLDER
chmod +x $RELEASE_FOLDER/bin/*
chmod +x $RELEASE_FOLDER/*
```

6.  create a start-server.sh

``` {.sourceCode .scala}
RELEASE_FOLDER=“<release-folder-name>"
APP_NAME=“<app-name>”
ENV_NAME=“<env>”
RELEASE_DIR_PATH=“<absolute-path-of-release-dir>”
nohup ./$RELEASE_FOLDER/bin/$APP_NAME -Dsmile.env=$ENV_NAME -Dpidfile.path=$RELEASE_DIR_PATH/$APP_NAME.pid "$@" &
```

7.  create a stop-server.sh

``` {.sourceCode .scala}
APP_NAME="crash"
kill `cat ./$APP_NAME.pid`
```

Deploying the application:
--------------------------

1.  go to project-home & build the release zip:

``` {.sourceCode .scala}
$project-home>sbt smile clean; prepare; generate; compile; release 
```

or in case of a bundle

> ``` {.sourceCode .scala}
> $project-home>sbt smile clean; prepare; generate; compile;
> $project-home>release-bundle <bundle-name>
> ```

2.  copy/ship the release zip to the “shipped” folder inside release.
    ex:

``` {.sourceCode .scala}
$project-home>cp release/<release-name>.zip <release-folder-path>/shipped
```

3.  goto release folder, deploy & start server:

``` {.sourceCode .scala}
run ./deploy.sh
run ./start-server.sh
```

4.  to stop server

``` {.sourceCode .scala}
run ./stop-server.sh
```
