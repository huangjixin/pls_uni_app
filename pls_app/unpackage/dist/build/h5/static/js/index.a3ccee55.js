(function(e){function n(n){for(var a,i,c=n[0],u=n[1],s=n[2],l=0,d=[];l<c.length;l++)i=c[l],o[i]&&d.push(o[i][0]),o[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);f&&f(n);while(d.length)d.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,i=1;i<t.length;i++){var u=t[i];0!==o[u]&&(a=!1)}a&&(r.splice(n--,1),e=c(c.s=t[0]))}return e}var a={},o={index:0},r=[];function i(e){return c.p+"static/js/"+({"pages-detail-detail":"pages-detail-detail","pages-list-list":"pages-list-list","pages-ucenter-ucenter":"pages-ucenter-ucenter"}[e]||e)+"."+{"pages-detail-detail":"de46271d","pages-list-list":"6df43070","pages-ucenter-ucenter":"e7050a7e"}[e]+".js"}function c(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise(function(n,a){t=o[e]=[n,a]});n.push(t[2]=a);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e),r=function(n){u.onerror=u.onload=null,clearTimeout(s);var t=o[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,t[1](i)}o[e]=void 0}};var s=setTimeout(function(){r({type:"timeout",target:u})},12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(n)},c.m=e,c.c=a,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)c.d(t,a,function(n){return e[n]}.bind(null,a));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var f=s;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("5c0d")},"38a2":function(e,n,t){"use strict";t.r(n);var a=t("f341"),o=t.n(a);for(var r in a)"default"!==r&&function(e){t.d(n,e,function(){return a[e]})}(r);n["default"]=o.a},"413c":function(e,n,t){"use strict";t.r(n);var a=t("b0d1"),o=t("38a2");for(var r in o)"default"!==r&&function(e){t.d(n,e,function(){return o[e]})}(r);t("e96b");var i=t("2877"),c=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);n["default"]=c.exports},"5c0d":function(e,n,t){"use strict";t("744f"),t("6c7b"),t("7514"),t("20d6"),t("1c4c"),t("6762"),t("cadf"),t("e804"),t("55dd"),t("d04f"),t("0298"),t("c8ce"),t("87b3"),t("217b"),t("7f7f"),t("f400"),t("7f25"),t("536b"),t("d9ab"),t("f9ab"),t("32d7"),t("25c9"),t("9f3c"),t("042e"),t("c7c6"),t("f4ff"),t("049f"),t("7872"),t("a69f"),t("0b21"),t("6c1a"),t("c7c62"),t("84b4"),t("c5f6"),t("2e37"),t("fca0"),t("7cdf"),t("ee1d"),t("b1b1"),t("87f3"),t("9278"),t("5df2"),t("04ff"),t("f751"),t("4504"),t("fee7"),t("ffc1"),t("0d6d"),t("9986"),t("8e6e"),t("25db"),t("e4f7"),t("b9a1"),t("64d5"),t("9aea"),t("db97"),t("66c8"),t("57f0"),t("165b"),t("456d"),t("cf6a"),t("fd24"),t("8615"),t("551c"),t("097d"),t("df1b"),t("2397"),t("88ca"),t("ba16"),t("d185"),t("ebde"),t("2d34"),t("f6b3"),t("2251"),t("c698"),t("a19f"),t("9253"),t("9275"),t("3b2b"),t("3846"),t("4917"),t("a481"),t("28a5"),t("386d"),t("6b54"),t("4f7f"),t("8a81"),t("ac4d"),t("8449"),t("9c86"),t("fa83"),t("48c0"),t("a032"),t("aef6"),t("d263"),t("6c37"),t("9ec8"),t("5695"),t("2fdb"),t("d0b0"),t("5df3"),t("b54a"),t("f576"),t("ed50"),t("788d"),t("14b9"),t("f386"),t("f559"),t("1448"),t("673e"),t("242a"),t("c66f"),t("262f"),t("b05c"),t("34ef"),t("6aa2"),t("15ac"),t("af56"),t("b6e4"),t("9c29"),t("63d9"),t("4dda"),t("10ad"),t("c02b"),t("4795"),t("130f"),t("ac6a"),t("96cf"),t("bc36"),t("1c31");var a=r(t("e143")),o=r(t("413c"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(n){c(e,n,t[n])})}return e}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}a.default.config.productionTip=!1,o.default.mpType="app";var u=new a.default(i({},o.default));u.$mount()},7953:function(e,n,t){n=e.exports=t("2350")(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */",""])},"7de9":function(e,n,t){var a=t("7953");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=t("4f06").default;o("7f84edce",a,!0,{sourceMap:!1,shadowMode:!1})},b0d1:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},o=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return o})},bc36:function(e,n,t){"use strict";(function(e){var n=a(t("e143"));function a(e){return e&&e.__esModule?e:{default:e}}e.__uniConfig={tabBar:{color:"#000000",selectedColor:"#2F85FC",backgroundColor:"#FFFFFF",borderStyle:"black",list:[{pagePath:"pages/list/list",iconPath:"static/home.png",selectedIconPath:"static/home-active.png",text:"资讯",redDot:!1,badge:""},{pagePath:"pages/ucenter/ucenter",iconPath:"static/center.png",selectedIconPath:"static/center-active.png",text:"我的",redDot:!1,badge:""}]},globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"新闻资讯",navigationBarBackgroundColor:"#2F85FC",backgroundColor:"#FFFFFF"}},e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:3e3},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e3,connectSocket:6e3,uploadFile:6e3,downloadFile:6e3},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},n.default.component("pages-list-list",function(e){var n={component:t.e("pages-list-list").then(function(){return e(t("5b91"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),n.default.component("pages-detail-detail",function(e){var n={component:t.e("pages-detail-detail").then(function(){return e(t("a110"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),n.default.component("pages-ucenter-ucenter",function(e){var n={component:t.e("pages-ucenter-ucenter").then(function(){return e(t("011f"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),e.__uniRoutes=[{path:"/",alias:"/pages/list/list",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{})},[e("pages-list-list",{slot:"page"})])}},meta:{id:1,name:"pages-list-list",isNVue:!0,pagePath:"pages/list/list",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/detail/detail",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-detail-detail",{slot:"page"})])}},meta:{name:"pages-detail-detail",isNVue:!1,pagePath:"pages/detail/detail",windowTop:44}},{path:"/pages/ucenter/ucenter",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"个人中心"})},[e("pages-ucenter-ucenter",{slot:"page"})])}},meta:{id:2,name:"pages-ucenter-ucenter",isNVue:!1,pagePath:"pages/ucenter/ucenter",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}]}).call(this,t("c8ba"))},e96b:function(e,n,t){"use strict";var a=t("7de9"),o=t.n(a);o.a},f341:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=a}});