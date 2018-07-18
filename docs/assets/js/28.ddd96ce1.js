(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{164:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"lottery-phase-iv"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lottery-phase-iv","aria-hidden":"true"}},[t._v("#")]),t._v(" Lottery Phase IV")]),s("h2",{attrs:{id:"processor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#processor","aria-hidden":"true"}},[t._v("#")]),t._v(" Processor")]),s("ul",[s("li",[t._v("Edit "),s("code",[t._v("Lottery.ksmile")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("process-module LotteryProcess(LotteryReadMongo, LotteryStream) at com.metastay.lotteryprocess\n")])])]),s("ul",[s("li",[t._v("$smile")]),s("li",[t._v("Edit "),s("code",[t._v("LotteryProcess.kprocess")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("processor WinnerEmailSender {\n  subscribe event-ref LotteryStream::LotteryRan\n}\n")])])]),s("ul",[s("li",[t._v("$compile")]),s("li",[t._v("Edit "),s("code",[t._v("WinnerEmailSenderProcessorCode.scala")])])]),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" process"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" com"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("metastay"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lotterystream"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stream"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LotteryRan"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token builtin"}},[t._v("Unit")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" winner "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("winner\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" email "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" ParticipantQuery"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("winner"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findOne"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email\n    println"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{attrs:{class:"token string"}},[t._v('"Congratulation $winner, you have won the lottery ${event.lotteryName}; mail to $email "')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("$run")]),s("li",[t._v("Test through curl\n"),s("ul",[s("li",[t._v('curl -H "Content-Type: application/json" -X POST -d \'{"lotteryName":"DLoto","amount":1000}\' http://localhost:9000/api/lottery/create-lottery')]),s("li",[t._v('curl -H "Content-Type: application/json" -X POST -d \'{"lotteryName":"DLoto","participantName":"John"}\' http://localhost:9000/api/lottery/  add-participant')]),s("li",[t._v('curl -H "Content-Type: application/json" -X POST -d \'{"lotteryName":"DLoto","participantName":"Jim"}\' http://localhost:9000/api/lottery/add-participant')]),s("li",[t._v('curl -H "Content-Type: application/json" -X POST -d \'{"lotteryName":"DLoto","participantName":"Joe"}\' http://localhost:9000/api/lottery/add-participant')]),s("li",[t._v('curl -H "Content-Type: application/json" -X POST -d \'{"lotteryName":"DLoto"}\' http://localhost:9000/api/lottery/run')])])])]),s("h2",{attrs:{id:"send-mail-using-bread"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#send-mail-using-bread","aria-hidden":"true"}},[t._v("#")]),t._v(" Send Mail using Bread")]),s("ul",[s("li",[t._v("Notification by email is already available in a smile project called Bread, so we import Bread as a component and then use it to send mail.")]),s("li",[t._v("$add-component bread-release-0.4 and follow the guided steps (if any)")]),s("li",[t._v("Edit "),s("code",[t._v("Lottery.ksmile")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import-lib common-0.1\nimport-component bread-release-0.4(NotifierProcess)\n")])])]),s("ul",[s("li",[t._v("also add the dependency to LotteryProcessor module")])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("process-module LotteryProcess(LotteryReadMongo, LotteryStream) at com.metastay.lotteryprocess\n")])])]),s("ul",[s("li",[t._v("$smile")]),s("li",[t._v("Edit "),s("code",[t._v("WinnerEmailSenderProcessorCode.scala")]),t._v(" to send email.")])]),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" process"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" com"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("metastay"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lotterystream"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stream"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LotteryRan"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token builtin"}},[t._v("Unit")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" winner "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("winner\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" email "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" ParticipantQuery"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("winner"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findOne"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("map"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toList\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" body "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),s("span",{attrs:{class:"token string"}},[t._v('"Congratulation $winner,You have won the Lottery $event.lotteryName!!"')]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" message "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SendMailMessage"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("toList "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" email"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" subject "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Won Lottery"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" body "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" body"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    grab"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SmileAsyncService"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("publish"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("$run")]),s("li",[t._v("Test through curl\n"),s("ul",[s("li",[t._v('curl -H "Content-Type: application/json" -X POST -d \'{"lotteryName":"DLoto","amount":1000}\' http://localhost:9000/api/lottery/create-lottery')]),s("li",[t._v('curl -H "Content-Type: application/json" -X POST -d \'{"lotteryName":"DLoto","participantName":"John"}\' http://localhost:9000/api/lottery/  add-participant')]),s("li",[t._v('curl -H "Content-Type: application/json" -X POST -d \'{"lotteryName":"DLoto","participantName":"Jim"}\' http://localhost:9000/api/lottery/add-participant')]),s("li",[t._v('curl -H "Content-Type: application/json" -X POST -d \'{"lotteryName":"DLoto","participantName":"Joe"}\' http://localhost:9000/api/lottery/add-participant')]),s("li",[t._v('curl -H "Content-Type: application/json" -X POST -d \'{"lotteryName":"DLoto"}\' http://localhost:9000/api/lottery/run')])])])])])}],!1,null,null,null);a.default=e.exports}}]);