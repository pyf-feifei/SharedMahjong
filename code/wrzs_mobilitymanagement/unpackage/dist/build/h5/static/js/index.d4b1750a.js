(function(e){function n(n){for(var t,i,s=n[0],u=n[1],c=n[2],d=0,l=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&l.push(a[i][0]),a[i]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);g&&g(n);while(l.length)l.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var e,n=0;n<r.length;n++){for(var o=r[n],t=!0,s=1;s<o.length;s++){var u=o[s];0!==a[u]&&(t=!1)}t&&(r.splice(n--,1),e=i(i.s=o[0]))}return e}var t={},a={index:0},r=[];function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var n=[],o=a[e];if(0!==o)if(o)n.push(o[2]);else{var t=new Promise((function(n,t){o=a[e]=[n,t]}));n.push(o[2]=t);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=function(e){return i.p+"static/js/"+({"pages-Tabs-index-index":"pages-Tabs-index-index","pages-Tabs-order-order":"pages-Tabs-order-order","pages-Tabs-shg-shg":"pages-Tabs-shg-shg","pages-Tabs-user-user":"pages-Tabs-user-user","pages-login-login":"pages-login-login","pages-profit-record-record":"pages-profit-record-record","pages-shg-shg":"pages-shg-shg","pages-tx-record-record":"pages-tx-record-record","pages-tx-tx":"pages-tx-tx","pages-wallet-wallet":"pages-wallet-wallet"}[e]||e)+"."+{"pages-Tabs-index-index":"e20ecf11","pages-Tabs-order-order":"1958bb95","pages-Tabs-shg-shg":"5fc54a5c","pages-Tabs-user-user":"aed48947","pages-login-login":"3e24878d","pages-profit-record-record":"f261d262","pages-shg-shg":"b86fcd97","pages-tx-record-record":"d90102f7","pages-tx-tx":"2a5a20ee","pages-wallet-wallet":"948c0275"}[e]+".js"}(e);var u=new Error;r=function(n){s.onerror=s.onload=null,clearTimeout(c);var o=a[e];if(0!==o){if(o){var t=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+t+": "+r+")",u.name="ChunkLoadError",u.type=t,u.request=r,o[1](u)}a[e]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=t,i.d=function(e,n,o){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)i.d(o,t,function(n){return e[n]}.bind(null,t));return o},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var g=u;r.push([0,"chunk-vendors"]),o()})({0:function(e,n,o){e.exports=o("60db")},4814:function(e,n,o){"use strict";o.r(n);var t=o("f066"),a=o.n(t);for(var r in t)["default"].indexOf(r)<0&&function(e){o.d(n,e,(function(){return t[e]}))}(r);n["default"]=a.a},"60db":function(e,n,o){"use strict";var t=o("dbce").default,a=o("4ea4").default;o("d3b7"),o("159b"),o("b64b");var r=a(o("5530"));o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("711f"),o("1c31");var i=a(o("e143")),s=a(o("f722")),u=o("8e2d"),c=t(o("7cf8"));o("b8e9"),Object.keys(c).forEach((function(e){i.default.prototype["$"+e]=c[e]})),i.default.prototype.$apiRequest=u.apiRequest,i.default.prototype.$baseUrl=u.baseUrl,i.default.config.productionTip=!1,s.default.mpType="app";var g=new i.default((0,r.default)({},s.default));g.$mount()},"69e3":function(e,n,o){"use strict";var t=o("ad8f"),a=o.n(t);a.a},"711f":function(e,n,o){"use strict";(function(e){var n=o("4ea4").default;o("13d5"),o("d3b7"),o("ddb0"),o("ac1f"),o("5319");var t=n(o("e143")),a={keys:function(){return[]}};e["____2D00D37____"]=!0,delete e["____2D00D37____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"门店管理",navigationBarBackgroundColor:"#fff",backgroundColor:"#fff"},tabBar:{color:"#333",selectedColor:"#1f6ecf",list:[{pagePath:"pages/Tabs/index/index",iconPath:"static/imgs/Tabs/home.png",selectedIconPath:"static/imgs/Tabs/home2.png",text:"门店",redDot:!1,badge:""},{pagePath:"pages/Tabs/order/order",iconPath:"static/imgs/Tabs/order.png",selectedIconPath:"static/imgs/Tabs/order2.png",text:"订单管理",redDot:!1,badge:""},{pagePath:"pages/Tabs/shg/shg",iconPath:"static/imgs/Tabs/shg.png",selectedIconPath:"static/imgs/Tabs/shg2.png",text:"售货柜",redDot:!1,badge:""},{pagePath:"pages/Tabs/user/user",iconPath:"static/imgs/Tabs/user.png",selectedIconPath:"static/imgs/Tabs/user2.png",text:"我的",redDot:!1,badge:""}],backgroundColor:"",borderStyle:"black"}},e.__uniConfig.compilerVersion="3.8.4",e.__uniConfig.darkmode=!1,e.__uniConfig.themeConfig={},e.__uniConfig.uniPlatform="h5",e.__uniConfig.appId="__UNI__2D00D37",e.__uniConfig.appName="kj-h5",e.__uniConfig.appVersion="1.0.0",e.__uniConfig.appVersionCode="100",e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig.publicPath="/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey=void 0,e.__uniConfig.googleMapKey=void 0,e.__uniConfig.aMapKey=void 0,e.__uniConfig.aMapSecurityJsCode=void 0,e.__uniConfig.aMapServiceHost=void 0,e.__uniConfig.locale="",e.__uniConfig.fallbackLocale=void 0,e.__uniConfig.locales=a.keys().reduce((function(e,n){var o=n.replace(/\.\/(uni-app.)?(.*).json/,"$2"),t=a(n);return Object.assign(e[o]||(e[o]={}),t.common||t),e}),{}),e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=o.e,t.default.component("pages-login-login",(function(e){var n={component:o.e("pages-login-login").then(function(){return e(o("18c4"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-Tabs-index-index",(function(e){var n={component:o.e("pages-Tabs-index-index").then(function(){return e(o("05d5"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-Tabs-user-user",(function(e){var n={component:o.e("pages-Tabs-user-user").then(function(){return e(o("0eed"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-Tabs-order-order",(function(e){var n={component:o.e("pages-Tabs-order-order").then(function(){return e(o("efe8"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-Tabs-shg-shg",(function(e){var n={component:o.e("pages-Tabs-shg-shg").then(function(){return e(o("ffc6"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-shg-shg",(function(e){var n={component:o.e("pages-shg-shg").then(function(){return e(o("9c2b"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-wallet-wallet",(function(e){var n={component:o.e("pages-wallet-wallet").then(function(){return e(o("95d2"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-tx-tx",(function(e){var n={component:o.e("pages-tx-tx").then(function(){return e(o("26c7"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-tx-record-record",(function(e){var n={component:o.e("pages-tx-record-record").then(function(){return e(o("3400"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-profit-record-record",(function(e){var n={component:o.e("pages-profit-record-record").then(function(){return e(o("b36c"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/login/login",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-login-login",{slot:"page"})])}},meta:{id:1,name:"pages-login-login",isNVue:!1,maxWidth:0,pagePath:"pages/login/login",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/pages/Tabs/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"门店",enablePullDownRefresh:!0})},[e("pages-Tabs-index-index",{slot:"page"})])}},meta:{id:2,name:"pages-Tabs-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/Tabs/index/index",isQuit:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/Tabs/user/user",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:3},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-Tabs-user-user",{slot:"page"})])}},meta:{id:3,name:"pages-Tabs-user-user",isNVue:!1,maxWidth:0,pagePath:"pages/Tabs/user/user",isQuit:!0,isTabBar:!0,tabBarIndex:3,windowTop:0}},{path:"/pages/Tabs/order/order",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"订单管理",enablePullDownRefresh:!0})},[e("pages-Tabs-order-order",{slot:"page"})])}},meta:{id:4,name:"pages-Tabs-order-order",isNVue:!1,maxWidth:0,pagePath:"pages/Tabs/order/order",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/Tabs/shg/shg",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationBarTitleText:"售货柜",enablePullDownRefresh:!0})},[e("pages-Tabs-shg-shg",{slot:"page"})])}},meta:{id:5,name:"pages-Tabs-shg-shg",isNVue:!1,maxWidth:0,pagePath:"pages/Tabs/shg/shg",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:44}},{path:"/pages/shg/shg",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"商品格"})},[e("pages-shg-shg",{slot:"page"})])}},meta:{name:"pages-shg-shg",isNVue:!1,maxWidth:0,pagePath:"pages/shg/shg",windowTop:44}},{path:"/pages/wallet/wallet",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"我的资产"})},[e("pages-wallet-wallet",{slot:"page"})])}},meta:{name:"pages-wallet-wallet",isNVue:!1,maxWidth:0,pagePath:"pages/wallet/wallet",windowTop:44}},{path:"/pages/tx/tx",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"提现"})},[e("pages-tx-tx",{slot:"page"})])}},meta:{name:"pages-tx-tx",isNVue:!1,maxWidth:0,pagePath:"pages/tx/tx",windowTop:44}},{path:"/pages/tx/record/record",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"提现记录"})},[e("pages-tx-record-record",{slot:"page"})])}},meta:{name:"pages-tx-record-record",isNVue:!1,maxWidth:0,pagePath:"pages/tx/record/record",windowTop:44}},{path:"/pages/profit/record/record",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"收益记录"})},[e("pages-profit-record-record",{slot:"page"})])}},meta:{name:"pages-profit-record-record",isNVue:!1,maxWidth:0,pagePath:"pages/profit/record/record",windowTop:44}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,o("c8ba"))},"7cf8":function(e,n,o){"use strict";o("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.dateFormatter=function(e,n){var o="";o=e?new Date(e):new Date;var t=o.getFullYear(),a=o.getMonth()+1,r=o.getDate(),i=o.getHours(),s=o.getMinutes(),u=o.getSeconds();if("yyyy-mm-dd"===n)return t+"-"+a+"-"+r;if("yyyy-mm-dd hh:mm:ss"===n)return t+"-"+a+"-"+r+" "+i+":"+s+":"+u},n.showMsg=function(e){uni.showToast({icon:"none",title:e,mask:!1,duration:2e3})}},8159:function(e,n,o){"use strict";o.d(n,"b",(function(){return t})),o.d(n,"c",(function(){return a})),o.d(n,"a",(function(){}));var t=function(){var e=this.$createElement,n=this._self._c||e;return n("App",{attrs:{keepAliveInclude:this.keepAliveInclude}})},a=[]},"8e2d":function(e,n,o){o("d3b7");var t="https://was.weishequ.com";e.exports={baseUrl:t,apiRequest:function(e){return new Promise((function(n,o){uni.request({url:t+"/admin_h5_api"+e.url,method:e.method||"POST",header:{"content-type":"application/json",Authorization:uni.getStorageSync("token")||""},data:e.data||{},success:function(e){1!==e.data.status?(uni.hideLoading(),0===e.data.status&&101===e.data.error_code?uni.showModal({title:"温馨提示",content:"登录已超时，请重新登录",confirmText:"重新登录",showCancel:!1,complete:function(){uni.clearStorageSync(),uni.reLaunch({url:"/pages/login/login"})}}):uni.showToast({icon:"none",title:e.data.msg||"似乎出现了错误，请联系客服",mask:!1,duration:2e3}),console.log("错误信息",e),o(e.data.msg||"似乎出现了错误，请联系客服")):n(e.data)},fail:function(e){uni.hideLoading(),uni.showToast({icon:"none",title:"网络似乎出了点问题，请稍后重试",mask:!1,duration:2e3}),console.log("错误信息",e),o("网络似乎出了点问题，请稍后重试")}})}))}}},ad8f:function(e,n,o){var t=o("bbfc");t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var a=o("4f06").default;a("0dabb102",t,!0,{sourceMap:!1,shadowMode:!1})},bbfc:function(e,n,o){var t=o("24fb");n=t(!1),n.push([e.i,'@font-face{font-family:iconfont; /* Project id 2767126 */src:url(//at.alicdn.com/t/font_2767126_5hqhp4kvubc.woff2?t=1641264764481) format("woff2"),url(//at.alicdn.com/t/font_2767126_5hqhp4kvubc.woff?t=1641264764481) format("woff"),url(//at.alicdn.com/t/font_2767126_5hqhp4kvubc.ttf?t=1641264764481) format("truetype")}.iconfont{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-shouyi:before{content:"\\e624"}.icon-tx:before{content:"\\e61f"}.icon-record:before{content:"\\e625"}.icon-wallet:before{content:"\\e69c"}.icon-setup:before{content:"\\e60c"}.icon-switch:before{content:"\\e621"}.icon-down:before{content:"\\e616"}.icon-up:before{content:"\\e82e"}.icon-left:before{content:"\\e82f"}.icon-right:before{content:"\\e830"}.icon-mobile:before{content:"\\e604"}.icon-pwd:before{content:"\\e620"}uni-view,uni-button,uni-input,uni-label,uni-text,uni-swiper,uni-swiper-item,uni-scroll-view,uni-form,uni-navigator,uni-picker,uni-textarea{box-sizing:border-box}uni-button,\r\n[type="button"],\r\n[type="reset"],\r\n[type="submit"]{-webkit-appearance:none!important}uni-page-body{font-size:%?28?%;color:#333;background-color:#fff}body.?%PAGE?%{background-color:#fff}uni-page-body{max-width:750px;margin-left:auto;margin-right:auto}uni-button:after{display:none}uni-image{display:block}.mt15{margin-top:%?15?%}.append-more-text{padding-top:%?40?%;padding-bottom:%?40?%;text-align:center;color:#bbb;font-size:%?30?%}',""]),e.exports=n},f066:function(e,n,o){"use strict";o("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default={globalData:{},onLaunch:function(){}}},f722:function(e,n,o){"use strict";o.r(n);var t=o("8159"),a=o("4814");for(var r in a)["default"].indexOf(r)<0&&function(e){o.d(n,e,(function(){return a[e]}))}(r);o("69e3");var i=o("f0c5"),s=Object(i["a"])(a["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],void 0);n["default"]=s.exports}});