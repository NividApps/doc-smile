(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{186:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),s("img",{attrs:{src:t.$withBase("/mongo-viewer.png")}}),t._m(31),t._m(32),t._m(33),t._m(34),t._m(35),t._m(36),t._m(37),t._m(38),t._m(39),t._m(40),t._m(41),t._m(42),t._m(43),t._m(44),t._m(45),t._m(46),t._m(47),t._m(48),t._m(49),t._m(50),t._m(51),s("p",[t._v("You can add some commonly accessed methods to a collection using an object extend ex: listCompainesInCity(city:String). Where as for instance specific apis use extend, ex: it would be usefull to get a method like getAllEmployeeList defined on a company row.")]),t._m(52),t._m(53),t._m(54),t._m(55),t._m(56),t._m(57),t._m(58),t._m(59),t._m(60),t._m(61)])},[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{attrs:{id:"mongo-module"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mongo-module","aria-hidden":"true"}},[this._v("#")]),this._v(" Mongo Module")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"creating-a-mongo-module"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-mongo-module","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating a mongo module")])},function(){var t=this.$createElement,n=this._self._c||t;return n("ol",[n("li",[this._v("Open "),n("code",[this._v("Mould.ksmile")]),this._v(" file, add a mongo module to the project")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("section learning {\n\tdata-module LearningData at com.metastay.learningdata\n\tmongo-module LearningMongo at com.metastay.leaningmongo\n}\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ol",{attrs:{start:"2"}},[n("li",[this._v("Open sbt console and run smile command")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("mould"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("sbt\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Mould"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" $ smile\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" smile build\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" updating modules "),s("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" creating module :LearningMongo\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" reloading "),s("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ol",{attrs:{start:"3"}},[n("li",[this._v("Refresh the project in eclipse")]),n("li",[this._v("You will see the "),n("code",[this._v("LearningMongo.kmongo")]),this._v(" file created under learning package")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"define-employee-collection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#define-employee-collection","aria-hidden":"true"}},[this._v("#")]),this._v(" Define Employee collection")])},function(){var t=this.$createElement,n=this._self._c||t;return n("ol",[n("li",[this._v("Open "),n("code",[this._v("LearningMongo.kmongo")]),this._v(" in eclipse")]),n("li",[this._v("Define Employee collection as follows:")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("collection Employee {\n\tproperty name:String\n\tproperty gender:String\n\tproperty yearOfJoining:Int\n\tproperty designation:String\n\tproperty experienceInMonths:Int\n\tproperty emailId:String?\n}\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ol",{attrs:{start:"3"}},[n("li",[this._v("Make sure compile is successful")]),n("li",[this._v("Change designation type to enum\n"),n("ul",[n("li",[this._v("Since enum is defined in a different module, we need to specify the module dependency in the ksmile file.")]),n("li",[this._v("Open "),n("code",[this._v(".ksmile")]),this._v(" file, add data module dependency to mongo module in order to access the DesignationType enum.")])])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("section learning {\n\tdata-module LearningData at com.metastay.learningdata\n\tmongo-module LearningMongo(LearningData) at com.metastay.leaningmongo\n}\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("Any change to ksmile requires you to run smile command.")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[this._v("[")]),this._v("Mould"),n("span",{attrs:{class:"token punctuation"}},[this._v("]")]),this._v(" $ smile\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("Open LearningMongo.kmongo, change designation type from String to LearningData:: DesignationType")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("collection Employee {\n\tproperty name:String\n\tproperty gender:String\n\tproperty yearOfJoining:Int\n\tproperty designation:LearningData:: DesignationType\n\tproperty experienceInMonths:Int\n\tproperty emailId:String?\n}\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("Make sure compile is successful")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"create-company-collection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-company-collection","aria-hidden":"true"}},[this._v("#")]),this._v(" Create Company collection")])},function(){var t=this.$createElement,n=this._self._c||t;return n("ol",[n("li",[this._v("Open LearningMongo.kmongo in eclipse and define Company collection as follows:")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("collection Company {\n\tproperty name:String\n\tproperty address:String\t\n}\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ol",{attrs:{start:"2"}},[n("li",[this._v("Make sure compile is successful")]),n("li",[this._v("Adding a collection reference (foreign key):\n"),n("ul",[n("li",[this._v("Let's link company and employee by adding company's reference to employee:")])])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("collection Employee {\n\tproperty name:String\n\tproperty gender:String\n\tproperty yearOfJoining:Int\n\tproperty designation:LearningData:: DesignationType\n\tproperty experienceInMonths:Int\n\tproperty emailId:String?\n\t**reference company:Company**\n}\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("Make sure compile is successful\n"),n("ul",[n("li",[this._v("This creates a soft link between Employee & company through the company's _id.")]),n("li",[this._v("This spec creates a company_oid field in employee collection, and provides you the company object which is lazily loaded on access.")])])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"crud-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#crud-operations","aria-hidden":"true"}},[this._v("#")]),this._v(" CRUD operations:")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ol",[s("li",[s("p",[t._v("Smile generates the following classes for every collection defined in kmongo spec.")]),s("ul",[s("li",[s("strong",[s("code",[t._v("<Collection>Row")])])]),s("li",[s("strong",[s("code",[t._v("<Collection>Query")])])]),s("li",[s("strong",[s("code",[t._v("<Collection>Writer")])])]),s("li",[s("strong",[s("code",[t._v("<Collection>Update")])])]),s("li",[s("strong",[s("code",[t._v("<Collection>Reader")])])])])]),s("li",[s("p",[t._v("Insert/Save a record using CollectionWriter")]),s("ul",[s("li",[t._v("Open LearningMongoObject.scala in intelliJ")]),s("li",[t._v("Define a function to insert a company into database.")])])])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("object")]),t._v(" LearningMongoObject "),s("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" LearningMongoTrait "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" createCompany"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),s("span",{attrs:{class:"token builtin"}},[t._v("String")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" address"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),s("span",{attrs:{class:"token builtin"}},[t._v("String")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token builtin"}},[t._v("Unit")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" companyRow "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" CompanyRow"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t   name "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" name "),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t   address "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" address\n\t "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t CompanyWriter"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("insert"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("companyRow"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("Call this method from a test-case in the mongo module :")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" LearningMongoTestSuite "),s("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttest"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"create a company"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Tag"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"create"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tprintln"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"creating a company.."')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tcreateCompany"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Software Solutions"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" address "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"HSR, India"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tprintln"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"done."')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("Run the test to create a new company in db:")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Mould"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" $ project LearningMongo\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Set current project to LearningMongo "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("in build file:/Users/"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("username"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("/metastay/mould/"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("LearningMongo"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" test-only *LearningMongoTestSuite* -- -n create\ncreating a company"),s("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\ndone.\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" LearningMongoTestSuite:\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - create a company\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" ScalaTest\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("Open mongo viewer & you will see a new row created in company collection")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ol",{attrs:{start:"3"}},[n("li",[n("p",[this._v("Read record using CollectionQuery")]),n("ul",[n("li",[this._v("define a function to read all companies in database.")])])])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("object")]),t._v(" LearningMongoObject "),s("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" LearningMongoTrait "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" listCompanies"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" List"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CompanyRow"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t CompanyQuery"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find\n\t"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("Call this method from a test-case in the mongo module :")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" LearningMongoTestSuite "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttest"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"list all companies"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Tag"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"read"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" companyList "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" listCompanies"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tprintln"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"Company List: "')]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" companyList"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("Run the test case to list all companies:")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("LearningMongo"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" test-only *LearningMongoTestSuite* -- -n "),s("span",{attrs:{class:"token function"}},[t._v("read")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nCompany List: List"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CompanyRow"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_id"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("5b0291bb77c8344dea90372c,name"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Software Solutions,address"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("HSR, India"),s("span",{attrs:{class:"token punctuation"}},[t._v("))")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" LearningMongoTestSuite:\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" - list all companies\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[n("strong",[this._v("Exercise:")]),this._v(" Write a function to get the details of a company given the company name.")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ol",{attrs:{start:"4"}},[n("li",[n("p",[this._v("Update a record using CollectionUpdate")]),n("ul",[n("li",[this._v("define a function to update a company's address")])])])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("object")]),t._v(" LearningMongoObject "),s("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" LearningMongoTrait "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" updateCompany"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),s("span",{attrs:{class:"token builtin"}},[t._v("String")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newAddress"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),s("span",{attrs:{class:"token builtin"}},[t._v("String")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token builtin"}},[t._v("Unit")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" q "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" CompanyQuery"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" u "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" CompanyUpdate"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("address"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newAddress"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tCompanyWriter"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("updateOne"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("u"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("Call this method from a test-case in the mongo module :")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" LearningMongoTestSuite "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttest"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"update company address"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Tag"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"update"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t \tprintln"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"updating company... "')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t \tupdateCompany"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Software Solutions"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newAddress "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Koramangala, India"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t \tprintln"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"done."')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("Run the test case to see the change in db.")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[this._v("[")]),this._v("LearningMongo"),n("span",{attrs:{class:"token punctuation"}},[this._v("]")]),this._v(" test-only *LearningMongoTestSuite* -- -n update\n"),n("span",{attrs:{class:"token punctuation"}},[this._v("..")]),this._v(".\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ol",{attrs:{start:"5"}},[n("li",[this._v("Delete a record")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("define a function to remove a given company")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("object")]),t._v(" LearningMongoObject "),s("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" LearningMongoTrait "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" removeCompany"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),s("span",{attrs:{class:"token builtin"}},[t._v("String")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token builtin"}},[t._v("Unit")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" q "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" CompanyQuery"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t CompanyWriter"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("remove"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("Call this method from a test-case in the mongo module :")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" LearningMongoTestSuite "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttest"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"remove company"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Tag"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"remove"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t println"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"removing company.. "')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t removeCompany"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Software Solutions"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t println"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"done."')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("Run the test case to see the change in db.")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[this._v("\t\t"),n("span",{attrs:{class:"token punctuation"}},[this._v("[")]),this._v("LearningMongo"),n("span",{attrs:{class:"token punctuation"}},[this._v("]")]),this._v(" test-only *LearningMongoTestSuite* -- -n remove\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ol",{attrs:{start:"6"}},[n("li",[this._v("Collection extension classes: extend vs object extend")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("Open file LeaningMongo.kmongo in eclipse")]),n("li",[this._v("Add the extend keyword in Company collection definition:")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("collection Company extend {\n\tproperty name:String\n\tproperty address:String\n}\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("On compile, you must see a file by name CompanyRowExtn created with the company row available in scope")]),n("li",[this._v("Define getAllEmployeeList in this extension class")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("trait CompanyRowExtn extends CompanyRowExtnTrait {\n row: CompanyRow =>\n def getAllEmployeeList: List[EmployeeRow] = {\n   EmployeeQuery().company_oid.is(row._id).find\n }\n}\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("Call this api from a test:")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" LearningMongoTestSuite "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttest"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"list all employees"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Tag"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"employees"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" name "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Software Solutions"')]),t._v("\n\t\t createCompany"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" address "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"HSR, India"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" company "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" findCompany"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get\n\t\t "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" employeeList "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" company"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getAllEmployeeList\n\t\t println"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"Employee List: "')]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" employeeList"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("Run the test case to see the results.")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[this._v("[")]),this._v("LearningMongo"),n("span",{attrs:{class:"token punctuation"}},[this._v("]")]),this._v(" test-only *LearningMongoTestSuite* -- -n employees\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{attrs:{id:"assignment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#assignment","aria-hidden":"true"}},[this._v("#")]),this._v(" Assignment")])},function(){var t=this.$createElement,n=this._self._c||t;return n("ol",[n("li",[this._v("Re-code all the company apis written earlier to read from database as opposed to in-memory.")]),n("li",[this._v("Copy, modify & run test cases from LearningMongoTestSuite.")])])}],!1,null,null,null);n.default=e.exports}}]);