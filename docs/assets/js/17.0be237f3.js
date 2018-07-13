(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{153:function(e,s,t){"use strict";t.r(s);var n=t(0),a=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"anatomy-of-a-smile-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#anatomy-of-a-smile-application","aria-hidden":"true"}},[e._v("#")]),e._v(" Anatomy of a Smile Application")]),t("p",[e._v("This is a example of typical smile application structure: :")]),t("pre",[t("code",[e._v("app                      → Application sources\n └ assets                → Compiled asset sources\n    └ stylesheets        → Typically LESS CSS sources\n    └ javascripts        → Typically CoffeeScript sources \nbuild.sbt                → Application build script\nconf                     → Configurations files and other non-compiled resources (on classpath)\n └ application.conf      → Main configuration file\n └ routes                → Routes definition\nk                        → Arbitrary files to be included in your projects distribution\n └ acme.ksmile           → Main smile configuration file\n └ <group name>          → group directory\n    └ <module name>.k... → module specific k file\nlogs                     → Logs folder\n └ application.log       → Default log file\nmodules                  → List of all modules\n └ <group name>          → module code\nproject                  → sbt configuration files\n └ build.properties      → Marker for sbt project\n └ plugins.sbt           → sbt plugins including the declaration for Play itself\npublic                   → Public assets\n └ stylesheets           → CSS files\n └ javascripts           → Javascript files\n └ images                → Image files\nrelease                  → Public assets\nseed                     → Public assets  \ntarget                   → Generated stuff\n └ resolution-cache      → Info about dependencies\n └ scala-2.11\n    └ api                → Generated API docs\n    └ classes            → Compiled class files\n    └ routes             → Sources generated from routes\n    └ twirl              → Sources generated from templates\n └ universal             → Application packaging\n └ web                   → Compiled web assets\ntest                     → source folder for unit or functional tests\nacme-i.bat               → Batch script\nacme.bat                 → batch script\nstart-server.sh          → starts server\nstop-server.sh           → stops server\n")])]),t("h2",{attrs:{id:"anatomy-of-a-smile-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#anatomy-of-a-smile-module","aria-hidden":"true"}},[e._v("#")]),e._v(" Anatomy of a Smile Module")]),t("p",[e._v("This is a example of typical smile application structure: :")]),t("pre",[t("code",[e._v("src                                 → module sources \n └ <module name>LifeCycle.scala     → \n └ <module name>Object.scala        → \nsrc-gen                             → generated source code      \nconf                                → Configurations files and other non-compiled resources (on classpath)\n └ <module name>.conf               → configuration file for the module\n └ routes                           → Routes definition (if play module) \ntest                                → module tests\ntarget                              → Generated stuff\n └ resolution-cache                 → Info about dependencies\n └ scala-2.11\n └ streams                          → \n └ test-reports                     → \n")])])])}],!1,null,null,null);s.default=a.exports}}]);