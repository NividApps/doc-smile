(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{159:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),s("p",[s("router-link",{attrs:{to:"./getting-started.html#import-project-to-eclipse"}},[t._v("Import project into eclipse")]),t._v(" and "),s("router-link",{attrs:{to:"./getting-started.html#import-project-to-intellij"}},[t._v("Import project into intelliJ")])],1),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),s("p",[t._v("Building Lottery web-app, to see the list of lotteries, and adding play module to createLottery, addParticipant, runLottery.")]),s("p",[t._v(".. _lottery-play-web-reader:")]),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),t._m(31),s("p",[t._v("Expose rest API through Swagger")]),t._m(32),t._m(33),t._m(34),t._m(35),s("ul",[s("li",[t._v("Test through swagger by browsing "),s("a",{attrs:{href:"http://localhost:9000/swagger",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:9000/swagger"),s("OutboundLink")],1),t._v(" and explore api")])])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"lottery-phase-i"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lottery-phase-i","aria-hidden":"true"}},[this._v("#")]),this._v(" Lottery Phase I")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"create-lottery-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-lottery-project","aria-hidden":"true"}},[this._v("#")]),this._v(" Create Lottery Project")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("Create a Lottery project and set-up")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[this._v("~/temp $ smile new Lottery\n~/temp $ "),a("span",{attrs:{class:"token function"}},[this._v("cd")]),this._v(" lottery\n~/temp/lottery\n~/temp/lottery $ sbt\n$"),a("span",{attrs:{class:"token punctuation"}},[this._v("[")]),this._v("Lottery"),a("span",{attrs:{class:"token punctuation"}},[this._v("]")]),this._v(" smile\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"create-lottery-mongo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-lottery-mongo","aria-hidden":"true"}},[this._v("#")]),this._v(" Create Lottery Mongo")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("Open Lottery.ksmile in Eclipse.")]),a("li",[this._v("Edit "),a("code",[this._v("Lottery.ksmile")]),this._v(" and insert the below content to create a LotteryMongo module")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("section lottery {\n  mongo-module LotteryMongo at com.metastay.lotterymongo\n}\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("$smile")]),a("li",[this._v("In Eclipse refresh to see the "),a("code",[this._v("LotteryMonogo.kmongo")])]),a("li",[this._v("Edit "),a("code",[this._v("LotteryMongo.kmongo")]),this._v(" to add a collection.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("    collection Lottery {\n        property lotteryName:String\n        property amount:Int\n        property participantList:String*\n        property winner:String?\n        property open:Boolean\n    }\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("$compile")]),a("li",[this._v("Write test cases in "),a("code",[this._v("LotteryMongoTestSuite.scala")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[t._v("test"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"lottery"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Tag"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"lottery"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    LotteryWriter"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("drop"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" lotteryName "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"KarnatakaLotto"')]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" row "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LotteryRow"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lotteryName "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" lotteryName"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" amount "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("20000")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" open "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    LotteryWriter"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("row"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    assert"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LotteryQuery"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("//Add Participant")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" q "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LotteryQuery"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lotteryName"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lotteryName"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" u "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LotteryUpdate"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("participantList"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addToSet"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"John"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    LotteryWriter"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("updateOne"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" u"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    assert"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findOne"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("participantList"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("//Remove Lottery")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("//LotteryWriter().remove(q)")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("//assert(LotteryQuery().count == 0)")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("import com.metastay.lotterymongo.lottery._")]),a("li",[this._v("Run Test\n"),a("ul",[a("li",[this._v("$project LotteryMongo")]),a("li",[this._v("$test-only com.metastay.lotterymongo.LotteryMongoTestSuite -- -n lottery")]),a("li",[this._v("Show the tables in mongo viewer")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"create-lottery-play"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-lottery-play","aria-hidden":"true"}},[this._v("#")]),this._v(" Create Lottery Play")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"web-reader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-reader","aria-hidden":"true"}},[this._v("#")]),this._v(" Web Reader")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("First add a data module in "),a("code",[this._v("Lottery.ksmile")]),this._v(" to hold data to represent Lottery details. LotteryPlay will use LotteryDetails data, so it depends on LotteryData")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("section lottery {\n  data-module LotteryData at com.metastay.lottery\n  mongo-module LotteryMongo at com.metastay.lotterymongo\n  play-module LotteryPlay(LotteryData, LotteryMongo) at lotteryplay\n}   \n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("$smile")]),a("li",[a("code",[this._v("LotteryData.kdata")]),this._v(" add a Lottery")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("data Lottery (lotteryName:String, amount:Int, participantList:String*, winner:String?,  status:String)\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("Change the route from "),a("strong",[this._v("lotteryplay")]),this._v(" to "),a("strong",[this._v("api")]),this._v(" in "),a("code",[this._v("LotterPlay.kplay")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v('  module LotteryPlay (LotteryPlay)\n  route "api"    \n')])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("add web-reader to "),a("code",[this._v("LotteryPlay.kplay")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("web-reader Lottery {\n  view lotteryList (GET){\n      output(LotteryData::Lottery*)\n  }\n  view lotteryDetails (GET){\n      input(lotteryName:String)\n      output(LotteryData::Lottery)\n  }\n}\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("$compile")]),a("li",[this._v("Implement "),a("code",[this._v("LotteryWebReaderCode.lotteryList")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("metastay"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lottery"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Lottery\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("metastay"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lotterymongo"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lottery"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LotteryQuery\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("object")]),t._v(" LotteryWebReaderCode "),s("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" LotteryWebReaderTrait "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   \n  "),s("span",{attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" lotteryList"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Request"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("LotteryListView"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pre"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" List"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Lottery"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LotteryListView"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" LotteryListView"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_\n  request"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Request"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Input"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("=>")]),t._v("\n    LotteryQuery"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("map"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      row "),s("span",{attrs:{class:"token keyword"}},[t._v("=>")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Lottery"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          lotteryName "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" row"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lotteryName"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          amount "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" row"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("amount"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          participantList "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("  row"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("participantList"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          status "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("row"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("open"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{attrs:{class:"token string"}},[t._v('"OPEN"')]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"CLOSED"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          winner "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" row"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("winner\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" lotteryDetails"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Request"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("LotteryDetailsView"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pre"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" Lottery "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LotteryDetailsView"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" LotteryDetailsView"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_\n    request"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Request"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Input"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" input "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" row "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LotteryQuery"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lotteryName"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lotteryName"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findOne"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Lottery"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        lotteryName "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" row"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lotteryName"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        amount "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" row"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("amount"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        participantList "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("  row"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("participantList"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        status "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("row"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("open"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"OPEN"')]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"CLOSED"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        winner "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" row"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("winner\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("$run")]),a("li",[this._v("Test through url in browser http://localhost:9000/api/lottery/lottery-list")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"web-writer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-writer","aria-hidden":"true"}},[this._v("#")]),this._v(" Web Writer")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("p",[this._v("Create lottery passing parameters like name and amount")])]),a("li",[a("p",[this._v("Add Participant to a lottery by passing the participantName and lottery name to which the participant will be added to.")])]),a("li",[a("p",[this._v("Run lottery which will pick a winner amoung the participant and close the lottery.")])]),a("li",[a("p",[this._v('Adding createLottery, addParticipant, run POST calls with an url "api" to '),a("code",[this._v("LotteryPlay.kplay")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[t._v("module LotteryPlay "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LotteryPlay"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nroute "),s("span",{attrs:{class:"token string"}},[t._v('"api"')]),t._v("\n\nweb"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("writer Lottery "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  action createLottery"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("POST"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      input"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lotteryName"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token builtin"}},[t._v("String")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" amount"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token builtin"}},[t._v("Int")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  action addParticipant"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("POST"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      input"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lotteryName"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token builtin"}},[t._v("String")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" participantName"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),s("span",{attrs:{class:"token builtin"}},[t._v("String")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  action run"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("POST"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      input"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lotteryName"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token builtin"}},[t._v("String")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("$compile")]),a("li",[this._v("Implement the code to "),a("code",[this._v("LotteryWebWriterCode.scala")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("metastay"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lotterymongo"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lottery"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_\n"),s("span",{attrs:{class:"token keyword"}},[t._v("object")]),t._v(" LotteryWebWriterCode "),s("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" LotteryWebWriterTrait "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" createLottery"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Request"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CreateLotteryAction"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pre"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" Result "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" CreateLotteryAction"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" CreateLotteryAction"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_\n      request"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Request"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Input"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("=>")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" input "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        LotteryWriter"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LotteryRow"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lotteryName "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" input"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lotteryName"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" amount "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" input"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("amount"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" open "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        Ok"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{attrs:{class:"token string"}},[t._v('"${input.lotteryName} Lottery Created"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" addParticipant"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Request"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AddParticipantAction"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pre"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" Result "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" AddParticipantAction"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" AddParticipantAction"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      request"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Request"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Input"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("=>")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" input "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" q "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LotteryQuery"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lotteryName"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lotteryName"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" u "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LotteryUpdate"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("participantList"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addToSet"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("participantName"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        LotteryWriter"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("updateOne"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" u"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        Ok"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{attrs:{class:"token string"}},[t._v('"${input.participantName} has been added to ${input.lotteryName}"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" run"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Request"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("RunAction"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pre"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" Result "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" RunAction"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" RunAction"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_\n      request"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Request"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Input"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("=>")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" input "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" q "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LotteryQuery"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lotteryName"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lotteryName"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" participantList "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" q"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findOne"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("participantList "),s("span",{attrs:{class:"token comment"}},[t._v("//To find the participantList")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" winnerIndex "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" scala"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Random"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nextInt"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("participantList"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("//To find a winner Index")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" winner "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" participantList"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("winnerIndex"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" u "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LotteryUpdate"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("winner"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Some"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("winner"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("open"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        LotteryWriter"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("updateOne"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" u"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        Ok"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{attrs:{class:"token string"}},[t._v('"${winner} has won ${input.lotteryName} Lottery"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("         \n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("test through curl\n"),a("ul",[a("li",[this._v('curl -H "Content-Type: application/json" -X POST -d \'{"lotteryName":"Loto","amount":1000}\' http://localhost:9000/api/lottery/create-lottery')]),a("li",[this._v('curl -H "Content-Type: application/json" -X POST -d \'{"lotteryName":"Loto","participantName":"John"}\' http://localhost:9000/api/lottery/add-participant')]),a("li",[this._v('curl -H "Content-Type: application/json" -X POST -d \'{"lotteryName":"Loto","participantName":"Jim"}\' http://localhost:9000/api/lottery/add-participant')]),a("li",[this._v('curl -H "Content-Type: application/json" -X POST -d \'{"lotteryName":"Loto","participantName":"Joe"}\' http://localhost:9000/api/lottery/add-participant')]),a("li",[this._v('curl -H "Content-Type: application/json" -X POST -d \'{"lotteryName":"Loto"}\' http://localhost:9000/api/lottery/run')])])]),a("li",[this._v("or Test through Postman")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"rest-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rest-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Rest Api")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("Add swagger to "),a("code",[this._v("LotteryPlay.kplay")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("swagger api {\n  writer LotteryPlay::Lottery\n  reader LotteryPlay::Lottery\n}\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("Inside sbt shell, add-swagger and run")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("$[Lottery]add-swagger\n$[Lottery]run\n")])])])}],!1,null,null,null);a.default=e.exports}}]);