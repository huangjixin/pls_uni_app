(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucenter-ucenter"],{"011f":function(t,i,e){"use strict";e.r(i);var n=e("b5b7"),o=e("3d67");for(var a in o)"default"!==a&&function(t){e.d(i,t,function(){return o[t]})}(a);e("c516");var s=e("2877"),l=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"75f1c084",null);i["default"]=l.exports},"3d67":function(t,i,e){"use strict";e.r(i);var n=e("4ac4"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,function(){return n[t]})}(a);i["default"]=o.a},"4ac4":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{login:!1,avatarUrl:"/static/logo.png",uerInfo:{}}},methods:{goLogin:function(){this.login||console.log("点击前往登录")}}};i.default=n},a2d4:function(t,i,e){var n=e("ec4d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("0f85d05f",n,!0,{sourceMap:!1,shadowMode:!1})},b5b7:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"center"},[e("v-uni-view",{staticClass:"logo",attrs:{"hover-class":t.login?"":"logo-hover"},on:{click:function(i){i=t.$handleEvent(i),t.goLogin(i)}}},[e("v-uni-image",{staticClass:"logo-img",attrs:{src:t.login?t.uerInfo.avatarUrl:t.avatarUrl}}),e("v-uni-view",{staticClass:"logo-title"},[e("v-uni-text",{staticClass:"uer-name"},[t._v("Hi，"+t._s(t.login?t.uerInfo.name:"您未登录"))]),t.login?t._e():e("v-uni-text",{staticClass:"go-login navigat-arrow"},[t._v("")])],1)],1),e("v-uni-view",{staticClass:"center-list"},[e("v-uni-view",{staticClass:"center-list-item border-bottom"},[e("v-uni-text",{staticClass:"list-icon"},[t._v("")]),e("v-uni-text",{staticClass:"list-text"},[t._v("账号管理")]),e("v-uni-text",{staticClass:"navigat-arrow"},[t._v("")])],1),e("v-uni-view",{staticClass:"center-list-item"},[e("v-uni-text",{staticClass:"list-icon"},[t._v("")]),e("v-uni-text",{staticClass:"list-text"},[t._v("新消息通知")]),e("v-uni-text",{staticClass:"navigat-arrow"},[t._v("")])],1)],1),e("v-uni-view",{staticClass:"center-list"},[e("v-uni-view",{staticClass:"center-list-item border-bottom"},[e("v-uni-text",{staticClass:"list-icon"},[t._v("")]),e("v-uni-text",{staticClass:"list-text"},[t._v("帮助与反馈")]),e("v-uni-text",{staticClass:"navigat-arrow"},[t._v("")])],1),e("v-uni-view",{staticClass:"center-list-item"},[e("v-uni-text",{staticClass:"list-icon"},[t._v("")]),e("v-uni-text",{staticClass:"list-text"},[t._v("服务条款及隐私")]),e("v-uni-text",{staticClass:"navigat-arrow"},[t._v("")])],1)],1),e("v-uni-view",{staticClass:"center-list"},[e("v-uni-view",{staticClass:"center-list-item"},[e("v-uni-text",{staticClass:"list-icon"},[t._v("")]),e("v-uni-text",{staticClass:"list-text"},[t._v("关于应用")]),e("v-uni-text",{staticClass:"navigat-arrow"},[t._v("")])],1)],1)],1)},o=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return o})},c516:function(t,i,e){"use strict";var n=e("a2d4"),o=e.n(n);o.a},ec4d:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@font-face{font-family:texticons;font-weight:400;font-style:normal;src:url(https://at.alicdn.com/t/font_984210_5cs13ndgqsn.ttf) format("truetype")}uni-page-body[data-v-75f1c084],uni-view[data-v-75f1c084]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}uni-page-body[data-v-75f1c084]{background-color:#f8f8f8}.center[data-v-75f1c084]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.logo[data-v-75f1c084]{width:%?750?%;height:%?240?%;padding:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#2f85fc;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.logo-hover[data-v-75f1c084]{opacity:.8}.logo-img[data-v-75f1c084]{width:%?150?%;height:%?150?%;border-radius:%?150?%}.logo-title[data-v-75f1c084]{height:%?150?%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-left:%?20?%}.uer-name[data-v-75f1c084]{height:%?60?%;line-height:%?60?%;font-size:%?38?%;color:#fff}.go-login.navigat-arrow[data-v-75f1c084]{font-size:%?38?%;color:#fff}.login-title[data-v-75f1c084]{height:%?150?%;-webkit-box-align:self-start;-webkit-align-items:self-start;-ms-flex-align:self-start;align-items:self-start;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:%?20?%}.center-list[data-v-75f1c084]{background-color:#fff;margin-top:%?20?%;width:%?750?%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.center-list-item[data-v-75f1c084]{height:%?90?%;width:%?750?%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:%?0?% %?20?%}.border-bottom[data-v-75f1c084]{border-bottom-width:%?1?%;border-color:#c8c7cc;border-bottom-style:solid}.list-icon[data-v-75f1c084]{width:%?40?%;height:%?90?%;line-height:%?90?%;font-size:%?34?%;color:#2f85fc;text-align:center;font-family:texticons;margin-right:%?20?%}.list-text[data-v-75f1c084]{height:%?90?%;line-height:%?90?%;font-size:%?34?%;color:#555;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:left}.navigat-arrow[data-v-75f1c084]{height:%?90?%;width:%?40?%;line-height:%?90?%;font-size:%?34?%;color:#555;text-align:right;font-family:texticons}body.?%PAGE?%[data-v-75f1c084]{background-color:#f8f8f8}',""])}}]);