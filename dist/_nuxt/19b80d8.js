(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{232:function(t,n,e){var content=e(237);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(67).default)("18005202",content,!0,{sourceMap:!1})},233:function(t,n,e){"use strict";e.r(n);var o={name:"FadeLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},height:{type:String,default:"15px"},width:{type:String,default:"5px"},margin:{type:String,default:"2px"},radius:{type:String,default:"20px"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,height:this.height,width:this.width,margin:this.margin,borderRadius:this.radius}}},computed:{ngRadius:function(){return"-"+this.radius},quarter:function(){return parseFloat(this.radius)/2+parseFloat(this.radius)/5.5+"px"},ngQuarter:function(){return"-"+this.quarter},animationStyle1:function(){return{top:this.radius,left:0,animationDelay:"0.12s"}},animationStyle2:function(){return{top:this.quarter,left:this.quarter,animationDelay:"0.24s",transform:"rotate(-45deg)"}},animationStyle3:function(){return{top:0,left:this.radius,animationDelay:"0.36s",transform:"rotate(90deg)"}},animationStyle4:function(){return{top:this.ngQuarter,left:this.quarter,animationDelay:"0.48s",transform:"rotate(45deg)"}},animationStyle5:function(){return{top:this.ngRadius,left:0,animationDelay:"0.60s"}},animationStyle6:function(){return{top:this.ngQuarter,left:this.ngQuarter,animationDelay:"0.72s",transform:"rotate(-45deg)"}},animationStyle7:function(){return{top:0,left:this.ngRadius,animationDelay:"0.84s",transform:"rotate(90deg)"}},animationStyle8:function(){return{top:this.quarter,left:this.ngQuarter,animationDelay:"0.96s",transform:"rotate(45deg)"}}}},r=(e(236),e(16)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.loading?e("div",{staticClass:"v-spinner",style:{position:"relative",fontSize:0}},[e("div",{staticClass:"v-fade v-fade1",style:[t.spinnerStyle,t.animationStyle1]}),t._v(" "),e("div",{staticClass:"v-fade v-fade2",style:[t.spinnerStyle,t.animationStyle2]}),t._v(" "),e("div",{staticClass:"v-fade v-fade3",style:[t.spinnerStyle,t.animationStyle3]}),t._v(" "),e("div",{staticClass:"v-fade v-fade4",style:[t.spinnerStyle,t.animationStyle4]}),t._v(" "),e("div",{staticClass:"v-fade v-fade5",style:[t.spinnerStyle,t.animationStyle5]}),t._v(" "),e("div",{staticClass:"v-fade v-fade6",style:[t.spinnerStyle,t.animationStyle6]}),t._v(" "),e("div",{staticClass:"v-fade v-fade7",style:[t.spinnerStyle,t.animationStyle7]}),t._v(" "),e("div",{staticClass:"v-fade v-fade8",style:[t.spinnerStyle,t.animationStyle8]})]):t._e()}),[],!1,null,null,null);n.default=component.exports},236:function(t,n,e){"use strict";e(232)},237:function(t,n,e){var o=e(66)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.v-spinner{\n  width:50px;\n  height:20px;\n  transform:translateX(-50%);\n  left:50%\n}\n.v-spinner .v-fade{\n  -webkit-animation:v-fadeStretchDelay 1.2s ease-in-out infinite;\n  animation:v-fadeStretchDelay 1.2s ease-in-out infinite;\n  -webkit-animation-fill-mode:both;\n  animation-fill-mode:both;\n  position:absolute\n}\n@-webkit-keyframes v-fadeStretchDelay{\n50%{\n    -webkit-opacity:.3;\n    opacity:.3\n}\nto{\n    -webkit-opacity:1;\n    opacity:1\n}\n}\n@keyframes v-fadeStretchDelay{\n50%{\n    -webkit-opacity:.3;\n    opacity:.3\n}\nto{\n    -webkit-opacity:1;\n    opacity:1\n}\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},238:function(t,n,e){var content=e(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(67).default)("7d3f1471",content,!0,{sourceMap:!1})},319:function(t,n,e){"use strict";e(238)},320:function(t,n,e){var o=e(66)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.modal[data-v-a4b1223e]{\n  position:fixed;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0;\n  z-index:50\n}\n.modal[data-v-a4b1223e],.overlay[data-v-a4b1223e]{\n  width:100%;\n  height:100vh\n}\n.overlay[data-v-a4b1223e]{\n  background:#000;\n  opacity:.7\n}\n.modal__modal[data-v-a4b1223e]{\n  position:fixed;\n  top:40px;\n  left:50%;\n  transform:translateX(-50%);\n  width:500px;\n  padding:50px;\n  background:#fff;\n  z-index:60!important\n}\n.input-box[data-v-a4b1223e]{\n  border:2px solid red\n}\n.change-input-box-border[data-v-a4b1223e]{\n  border:2px solid green\n}\n@media screen and (max-width:768px){\n.modal__modal[data-v-a4b1223e]{\n    width:95%\n}\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},322:function(t,n,e){"use strict";e.r(n);e(68);var o={name:"app-modal",components:{AppLoader:e(233).default},props:["showModal"],data:function(){return{showLoader:!0}},methods:{connectManually:function(){this.$emit("connect-manually")}},mounted:function(){var t=this;setTimeout((function(){t.showLoader=!1}),5e3)}},r=(e(319),e(16)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.showModal?e("div",{staticClass:"modal"},[e("div",{staticClass:"overlay"}),t._v(" "),e("div",{staticClass:"modal__modal"},[e("svg",{staticClass:"h-6 w-6 fixed right-2 top-2 cursor-pointer",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},on:{click:function(n){return t.$router.push("/")}}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"}})]),t._v(" "),e("div",{staticClass:"p-5 w-full relative mb-10 input-box",class:{"change-input-box-border":t.showLoader}},[e("AppLoader",{attrs:{loading:t.showLoader,color:"#0E1A2E"}}),t._v(" "),t.showLoader?t._e():e("span",{staticClass:"block text-red-600"},[t._v("Error Connecting...")]),t._v(" "),t.showLoader?t._e():e("button",{staticClass:"absolute top-12 bg-primary text-white py-2 px-4 rounded",on:{click:t.connectManually}},[t._v("Connect Manually")])],1),t._v(" "),t._m(0)])]):t._e()}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"border border-gray-600 p-4"},[e("div",{},[e("h2",{staticClass:"font-bold text-primary"},[t._v("Krypt Connect")]),t._v(" "),e("span",[t._v("Easy-to-use browser extension.")])])])}],!1,null,"a4b1223e",null);n.default=component.exports;installComponents(component,{AppLoader:e(233).default})}}]);