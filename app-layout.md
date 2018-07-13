Anatomy of a Smile Application
==============================

This is a example of typical smile application structure: :

    app                      → Application sources
     └ assets                → Compiled asset sources
        └ stylesheets        → Typically LESS CSS sources
        └ javascripts        → Typically CoffeeScript sources 
    build.sbt                → Application build script
    conf                     → Configurations files and other non-compiled resources (on classpath)
     └ application.conf      → Main configuration file
     └ routes                → Routes definition
    k                        → Arbitrary files to be included in your projects distribution
     └ acme.ksmile           → Main smile configuration file
     └ <group name>          → group directory
        └ <module name>.k... → module specific k file
    logs                     → Logs folder
     └ application.log       → Default log file
    modules                  → List of all modules
     └ <group name>          → module code
    project                  → sbt configuration files
     └ build.properties      → Marker for sbt project
     └ plugins.sbt           → sbt plugins including the declaration for Play itself
    public                   → Public assets
     └ stylesheets           → CSS files
     └ javascripts           → Javascript files
     └ images                → Image files
    release                  → Public assets
    seed                     → Public assets  
    target                   → Generated stuff
     └ resolution-cache      → Info about dependencies
     └ scala-2.11
        └ api                → Generated API docs
        └ classes            → Compiled class files
        └ routes             → Sources generated from routes
        └ twirl              → Sources generated from templates
     └ universal             → Application packaging
     └ web                   → Compiled web assets
    test                     → source folder for unit or functional tests
    acme-i.bat               → Batch script
    acme.bat                 → batch script
    start-server.sh          → starts server
    stop-server.sh           → stops server

Anatomy of a Smile Module
-------------------------

This is a example of typical smile application structure: :

    src                                 → module sources 
     └ <module name>LifeCycle.scala     → 
     └ <module name>Object.scala        → 
    src-gen                             → generated source code      
    conf                                → Configurations files and other non-compiled resources (on classpath)
     └ <module name>.conf               → configuration file for the module
     └ routes                           → Routes definition (if play module) 
    test                                → module tests
    target                              → Generated stuff
     └ resolution-cache                 → Info about dependencies
     └ scala-2.11
     └ streams                          → 
     └ test-reports                     → 
