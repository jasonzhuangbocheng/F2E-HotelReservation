(function(t){function e(e){for(var o,a,i=e[0],c=e[1],u=e[2],l=0,f=[];l<i.length;l++)a=i[l],r[a]&&f.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);m&&m(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},a={app:0},r={app:0},s=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"87c8ce77"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"ef663f0c"}[t]+".css",r=c.p+o,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===r))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===o||l===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var o=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete a[t],m.parentNode.removeChild(m),n(s)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)}).then(function(){a[t]=0}));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var s=new Promise(function(e,n){o=r[t]=[e,n]});e.push(o[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t),u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+o+": "+a+")");s.type=o,s.request=a,n[1](s)}r[t]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/F2E-HotelReservation/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var m=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1c90":function(t,e,n){t.exports=n.p+"img/facebook.7df7570f.svg"},"21bb":function(t,e,n){"use strict";var o=n("bcc9"),a=n.n(o);a.a},3999:function(t,e,n){t.exports=n.p+"img/instagram.cc5e92b0.svg"},4490:function(t,e,n){t.exports=n.p+"img/phone.6dbf65e5.svg"},"4fde":function(t,e,n){t.exports=n.p+"img/envelope.a1b1533c.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),a=n("caf9"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"page"}},[n("router-view")],1)],1)},s=[],i={data:function(){return{LOO:!0}},created:function(){this.$store.dispatch("getRoomsInfo"),this.$store.dispatch("getRoomInfo",{roomId:"3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu"})}},c=i,u=(n("5c0b"),n("2877")),l=Object(u["a"])(c,r,s,!1,null,null,null),f=l.exports,m=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"bg-box",class:{upUP:t.turnUPlo}},[n("div",{staticClass:"bg",style:{backgroundImage:"url("+t.currentImg+")"}},[n("div",{staticClass:"bg-mask",on:{click:function(e){t.TurnUpp(),t.adTurn()}}})]),n("div",{staticClass:"logo-box",class:{logoIn:t.turnUPlo}},[n("span",{staticClass:"logo-title"},[t._v("White Space")])]),n("div",{staticClass:"nav-bar",class:{fadeOut:t.turnUPlo}},t._l(t.roomsInfo,function(e,o){return n("router-link",{key:o,staticClass:"bar",attrs:{to:{path:"/about",query:{roomId:e.id}},tag:"div"},nativeOn:{mouseover:function(e){return t.changeImg(o)}}},[n("span",{staticClass:"foo"}),n("span",{staticClass:"room-title"},[t._v(t._s(e.name))])])}),1),n("div",{staticClass:"title-box",class:{fadeOut2:t.turnUPlo}},[n("span",{staticClass:"room-number"},[t._v("0"+t._s(t.currentIndex+1))]),n("span",{staticClass:"room-title"},[t._v(t._s(t.roomsInfo[t.currentIndex].name))])]),n("div",{staticClass:"contact-box",class:{contactIn:t.turnUPlo}},[n("div",{staticClass:"icon-box"},[n("img",{staticClass:"icon",attrs:{src:t.ig}}),n("img",{staticClass:"icon",attrs:{src:t.fb}})]),n("div",{staticClass:"content-box"},[n("div",{staticClass:"mesg mesg1"},[n("img",{staticClass:"icon",attrs:{src:t.phone}}),n("span",{staticClass:"content"},[t._v("02-17264937")])]),n("div",{staticClass:"mesg"},[n("img",{staticClass:"icon",attrs:{src:t.mesg}}),n("span",{staticClass:"content"},[t._v("whitespace@whitespace.com.tw")])]),n("div",{staticClass:"mesg"},[n("img",{staticClass:"icon",attrs:{src:t.homei}}),n("span",{staticClass:"content"},[t._v("台北市某條路十段30號")])])])])]),n("div",{staticClass:"wrapper",class:{wrapperUP:t.turnUPlo}},[n("div",{staticClass:"container"},t._l(t.roomsInfo,function(e,o){return n("router-link",{key:o,staticClass:"room-card",attrs:{tag:"div",to:{path:"/about",query:{roomId:e.id}}}},[n("img",{staticClass:"img",attrs:{src:e.imageUrl}}),n("div",{staticClass:"card-content"},[n("span",{staticClass:"room-name"},[t._v(t._s(e.name))]),n("span",{staticClass:"room-type"},[t._v(t._s(t.howBig[o]))]),n("div",{staticClass:"mesg-box"},[n("div",{staticClass:"price"},[t._v("NT."+t._s(e.normalDayPrice)+" "),n("span",{staticClass:"small"},[t._v("平日")])]),n("div",{staticClass:"small price2"},[t._v("NT."+t._s(e.holidayPrice)+" "),n("span",{staticClass:"small price2"},[t._v("假日")])])])])])}),1)])])},d=[],h=(n("7f7f"),n("3999")),g=n.n(h),v=n("1c90"),b=n.n(v),C=n("4490"),I=n.n(C),x=n("4fde"),y=n.n(x),w=n("7e04"),T=n.n(w),_={name:"home",data:function(){return{intervalID:null,currentIndex:0,currentImg:"https://images.unsplash.com/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",ig:g.a,fb:b.a,phone:I.a,mesg:y.a,homei:T.a}},computed:{roomsInfo:function(){return this.$store.state.rooms},turnUPlo:function(){return this.$store.state.turnUP},howBig:function(){var t=[];return this.roomsInfo.map(function(e){e.name.indexOf("Single")>-1&&t.push("單人房"),e.name.indexOf("Double")>-1&&t.push("雙人房"),e.name.indexOf("Twin")>-1&&t.push("多人房")}),t}},methods:{TurnUpp:function(){this.$store.commit("changeTurnUP")},changeImg:function(t){this.currentIndex=t,this.currentImg=this.roomsInfo[t].imageUrl},adTurn:function(){var t=this;this.turnUPlo?this.intervalID=setInterval(function(){5===t.currentIndex?t.currentIndex=0:t.currentIndex+=1,t.currentImg=t.roomsInfo[t.currentIndex].imageUrl},3e3):clearInterval(this.intervalID)}}},P=_,U=(n("21bb"),Object(u["a"])(P,p,d,!1,null,null,null)),O=U.exports;o["a"].use(m["a"]);var k=new m["a"]({mode:"history",base:"/F2E-HotelReservation/",routes:[{path:"/",name:"home",component:O},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),j=n("2f62"),R=n("bc3a"),D=n.n(R);o["a"].use(j["a"]);var E=new j["a"].Store({state:{turnUP:!1,rooms:[],room:{},currentRoomId:"",booking:{name:"",num:"",date:[]},disabledDates:["2019-08-29","2019-08-30","2019-09-15","2019-09-16","2019-09-17","2019-09-26","2019-09-28"]},mutations:{changeTurnUP:function(t){t.turnUP=!t.turnUP},setRoomsInfo:function(t,e){t.rooms=e},setRoomInfo:function(t,e){t.room=e}},actions:{getRoomsInfo:function(t){var e=t.commit;t.state;D.a.get("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms",{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer qTrae8muEk30QZHfTNwoaG2ou1fTMMfwvGvcTDxxQ2mJn0muDfqrnDXRmuRW","cache-control":"no-cache"}}).then(function(t){t.data.success&&e("setRoomsInfo",t.data.items)})},getRoomInfo:function(t,e){var n=t.commit;t.state;D.a.get("https://challenge.thef2e.com/api/thef2e2019/stage6/room/"+e.roomId,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer qTrae8muEk30QZHfTNwoaG2ou1fTMMfwvGvcTDxxQ2mJn0muDfqrnDXRmuRW","cache-control":"no-cache"}}).then(function(t){t.data.success&&n("setRoomInfo",t.data.room[0])})},bookingRoom:function(t,e){t.commit,t.state;console.log(e),D.a.post("https://challenge.thef2e.com/api/thef2e2019/stage6/room/"+e.info.roomId,{headers:{Accept:"application/json","Content-Type":"multipart/form-data",Authorization:"Bearer qTrae8muEk30QZHfTNwoaG2ou1fTMMfwvGvcTDxxQ2mJn0muDfqrnDXRmuRW"},params:{name:e.info.name,tel:e.info.tel,date:e.info.date}}).then(function(t){t.data.success&&console.log(t)})}}});o["a"].use(a["a"]),k.afterEach(function(t,e,n){window.scrollTo(0,0)}),o["a"].config.productionTip=!1,new o["a"]({router:k,store:E,render:function(t){return t(f)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("5e27"),a=n.n(o);a.a},"5e27":function(t,e,n){},"7e04":function(t,e,n){t.exports=n.p+"img/home.1600889c.svg"},bcc9:function(t,e,n){}});
//# sourceMappingURL=app.b0881af9.js.map