(this.webpackJsonpjeopardy=this.webpackJsonpjeopardy||[]).push([[0],{102:function(e,t,a){},121:function(e){e.exports=JSON.parse("{}")},122:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(10),l=a.n(r),o=(a(95),a(53)),s=a.n(o),c=a(70),u=a(20),d=a(3),p=a(155),m=a(158),h=a(159),f=a(160),g=a(76),b=Object(p.a)((function(e){return{grow:{flexGrow:1},sectionDesktop:Object(d.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(d.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function v(){var e=b(),t=n.a.createElement(g.a,{anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"}}),a=n.a.createElement(g.a,{anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"}});return n.a.createElement("div",{className:e.grow},n.a.createElement(m.a,{position:"static"},n.a.createElement(h.a,null,n.a.createElement(f.a,{className:e.title,variant:"h6",noWrap:!0},"JEOPARDY!"))),a,t)}var y=a(168),O=Object(p.a)((function(e){return{root:{width:300},margin:{height:e.spacing(3)}}})),E=[100,200,300,400,500,600,800,1e3].map((function(e){return{value:e,label:"$".concat(e)}}));function j(e){O();return n.a.createElement(y.a,{defaultValue:0,min:0,max:1e3,style:{maxWidth:400},onChangeCommitted:function(t,a){e.setDollarValue(a)},step:null,valueLabelDisplay:"auto",marks:E})}E.push({value:0,label:"All"});var P=a(161),w=a(74),S=a(19),x=a(163);function C(e){return n.a.createElement(S.a,{utils:w.a},n.a.createElement(P.a,{container:!0,justify:"space-around"},n.a.createElement(x.a,{disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",label:e.label,value:e.value,onChange:e.onChange,KeyboardButtonProps:{"aria-label":"change date"}})))}var k=a(4),D=(a(5),a(75)),M=a(16),N=a(26),W=a(164),T=a(123),A=a(169);a(101);function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var L=Object.values({1:{id:105,title:"3 Letter Words"},2:{id:51,title:"4 Letter Words"},3:{id:139,title:"5 Letter Words"},4:{id:780,title:"American History"},5:{id:313,title:"Americana"},6:{id:21,title:"Animals"},7:{id:1114,title:"Annual Events"},8:{id:1079,title:"Around The World"},9:{id:1800,title:"Before & After"},10:{id:211,title:"Bodies Of Water"},11:{id:897,title:"Body Language"},12:{id:197,title:"Books & Authors"},13:{id:2537,title:"Brand Names"},14:{id:176,title:"Business & Industry"},15:{id:672,title:"Colleges & Universities"},16:{id:508,title:"Common Bonds"},17:{id:89,title:"Double Talk"},18:{id:705,title:"Familiar Phrases"},19:{id:26,title:"Fashion"},20:{id:41,title:"First Ladies"},21:{id:49,title:"Food"},22:{id:253,title:"Food & Drink"},23:{id:1145,title:"Foreign Words & Phrases"},24:{id:777,title:"Fruits & Vegetables"},25:{id:114,title:"History"},26:{id:227,title:"Hodgepodge"},27:{id:622,title:"Holidays & Observances"},28:{id:249,title:"Homophones"},29:{id:574,title:"Literature"},30:{id:539,title:"Museums"},31:{id:184,title:"Musical Instruments"},32:{id:680,title:"Mythology"},33:{id:267,title:"Nature"},34:{id:793,title:"Nonfiction"},35:{id:1195,title:"Number, Please"},36:{id:37,title:"Nursery Rhymes"},37:{id:357,title:"Organizations"},38:{id:442,title:"People"},39:{id:770,title:"Pop Music"},40:{id:83,title:"Potent Potables"},41:{id:306,title:"Potpourriiii"},42:{id:1420,title:"Quotations"},43:{id:99,title:"Religion"},44:{id:561,title:"Rhyme Time"},45:{id:25,title:"Science"},46:{id:218,title:"Science & Nature"},47:{id:42,title:"Sports"},48:{id:109,title:"State Capitals"},49:{id:136,title:"Stupid Answers"},50:{id:67,title:"Television"},51:{id:31,title:"The Bible"},52:{id:309,title:"The Movies"},53:{id:128,title:"The Old Testament"},54:{id:103,title:"Transportation"},55:{id:369,title:"Travel & Tourism"},56:{id:7,title:"U.S. Cities"},57:{id:582,title:"U.S. Geography"},58:{id:50,title:"U.S. History"},59:{id:17,title:"U.S. States"},60:{id:420,title:"Weights & Measures"},61:{id:223,title:"Word Origins"},62:{id:78,title:"World Capitals"},63:{id:530,title:"World History"}}).map((function(e){return{value:e.id,label:e.title}})),R=Object(p.a)((function(e){return{root:{flexGrow:1,height:70,minWidth:290},input:{display:"flex",padding:0,height:"auto"},valueContainer:{display:"flex",flexWrap:"wrap",flex:1,alignItems:"center",overflow:"hidden"},chip:{margin:e.spacing(.5,.25)},chipFocused:{backgroundColor:Object(M.b)("light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],.08)},noOptionsMessage:{padding:e.spacing(1,2)},singleValue:{fontSize:16},placeholder:{position:"absolute",left:2,bottom:6,fontSize:16},paper:{position:"absolute",zIndex:1,marginTop:e.spacing(1),left:0,right:0},divider:{height:e.spacing(2)}}}));function Y(e){var t=e.inputRef,a=Object(k.a)(e,["inputRef"]);return n.a.createElement("div",Object.assign({ref:t},a))}var z={Control:function(e){var t=e.children,a=e.innerProps,i=e.innerRef,r=e.selectProps,l=r.classes,o=r.TextFieldProps;return n.a.createElement(W.a,Object.assign({fullWidth:!0,InputProps:{inputComponent:Y,inputProps:B({className:l.input,ref:i,children:t},a)}},o))},Menu:function(e){return n.a.createElement(T.a,Object.assign({square:!0,className:e.selectProps.classes.paper},e.innerProps),e.children)},NoOptionsMessage:function(e){return n.a.createElement(f.a,Object.assign({color:"textSecondary",className:e.selectProps.classes.noOptionsMessage},e.innerProps),e.children)},Option:function(e){return n.a.createElement(A.a,Object.assign({ref:e.innerRef,selected:e.isFocused,component:"div",style:{fontWeight:e.isSelected?500:400}},e.innerProps),e.children)},Placeholder:function(e){var t=e.selectProps,a=e.innerProps,i=void 0===a?{}:a,r=e.children;return n.a.createElement(f.a,Object.assign({color:"textSecondary",className:t.classes.placeholder},i),r)},SingleValue:function(e){return n.a.createElement(f.a,Object.assign({className:e.selectProps.classes.singleValue},e.innerProps),e.children)},ValueContainer:function(e){return n.a.createElement("div",{className:e.selectProps.classes.valueContainer},e.children)}};function H(e){var t=R(),a=Object(N.a)(),i={input:function(e){return B({},e,{color:a.palette.text.primary,"& input":{font:"inherit"}})}};return n.a.createElement("div",{className:t.root},n.a.createElement(D.a,{classes:t,styles:i,TextFieldProps:{label:"Category",InputLabelProps:{htmlFor:"react-select-single",shrink:!0}},placeholder:"Search for a popular category:",options:L,components:z,value:e.value,onChange:function(t){e.onChange(t.value)}}),n.a.createElement("div",{className:t.divider}))}a(102);var V=a(73),I=a.n(V),U=a(54),q=a.n(U);a(121);var J=function(){var e=Object(i.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(i.useState)([]),o=Object(u.a)(l,2),d=o[0],p=o[1],m=Object(i.useState)(0),h=Object(u.a)(m,2),f=h[0],g=h[1],b=Object(i.useState)(new Date("2010-01-01T21:11:54")),y=Object(u.a)(b,2),O=y[0],E=y[1],P=Object(i.useState)(new Date("2011-01-01T21:11:54")),w=Object(u.a)(P,2),S=w[0],x=w[1],k=Object(i.useState)(0),D=Object(u.a)(k,2),M=D[0],N=D[1];Object(i.useEffect)((function(){(function(){var e=Object(c.a)(s.a.mark((function e(){var t,a,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],0!=f&&t.push("value=".concat(f)),0!==M&&t.push("category=".concat(M)),t.push("min_date=".concat(q()(O).format("YYYY-MM-DD"))),t.push("max_date=".concat(q()(S).format("YYYY-MM-DD"))),a=t.join("&"),r(!0),e.next=9,I.a.get("https://cors-anywhere.herokuapp.com/http://jservice.io/api/clues?".concat(a));case 9:i=e.sent,r(!1),p(i.data);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[f,M,O,S]);var W=[],T=!0,A=!1,F=void 0;try{for(var B,L=d.entries()[Symbol.iterator]();!(T=(B=L.next()).done);T=!0){var R=B.value,Y=Object(u.a)(R,2);Y[0],Y[1];W.push(n.a.createElement("p",{key:d.question}))}}catch(U){A=!0,F=U}finally{try{T||null==L.return||L.return()}finally{if(A)throw F}}var z,V=d;return z=a?n.a.createElement("p",null," Loading... "):V.map((function(e){if(""!==e.question&&0!==e.answer)return n.a.createElement("p",{key:e.id},n.a.createElement("strong",null,"Question:")," ",e.question," ",n.a.createElement("br",null),n.a.createElement("strong",null,"Answer:")," ",e.answer," ",n.a.createElement("br",null))})),n.a.createElement("div",null,n.a.createElement(v,null),n.a.createElement("div",{style:{marginLeft:40,marginRight:40}},n.a.createElement("h2",null,"Question: How do you filter Jeopardy questions?"),n.a.createElement("h2",null,"Answer: Use the components below to filter clues by date aired, category, and difficulty!"),n.a.createElement("div",{style:{display:"flex"}},n.a.createElement(C,{label:"Start Date",value:O,onChange:function(e){E(e)}}),n.a.createElement(C,{label:"End Date",value:S,onChange:function(e){x(e)}})),n.a.createElement("div",null,n.a.createElement("br",null),n.a.createElement(j,{setDollarValue:g}),n.a.createElement(H,{value:M,onChange:N})),z))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},90:function(e,t,a){e.exports=a(122)},95:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.427c6b75.chunk.js.map