(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-BigMarket-BigMarket"],{"1de5":function(e,t,a){"use strict";e.exports=function(e,t){return t||(t={}),e=e&&e.__esModule?e.default:e,"string"!==typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},"29c1":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,"[data-v-5ea25269]::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;color:transparent;background:transparent}",""]),e.exports=t},3771:function(e,t,a){"use strict";a.r(t);var i=a("d07a"),r=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=r.a},"3eb3":function(e,t,a){"use strict";var i={Tabbar:a("c11a").default},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"bigmarket"},[a("v-uni-scroll-view",{style:{height:e.screenHeight+"rpx"},attrs:{"scroll-y":"true"}},[a("v-uni-view",{staticClass:"bigmarket-wrapper"},[a("v-uni-view",{staticClass:"bigmarket-header"},[a("v-uni-view",{staticClass:"bigmarket-header-title"},[e._v(e._s(e.bigCity["category1"][0].categoryName))]),a("v-uni-scroll-view",{attrs:{"scroll-x":"true"}},[a("v-uni-view",{staticClass:"bigmarket-header-main"},e._l(e.bigCity["category1"],(function(t,i){return a("v-uni-view",{key:i,staticClass:"bigmarket-header-main-item",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.goToShopDetail(t.productId)}}},[a("v-uni-view",{staticClass:"bigmarket-header-main-top"},[a("v-uni-view",{staticClass:"bigmarket-header-main-text",class:{active:""!=t.url}},[e._v(e._s(""==t.url?"实物":"课程"))]),a("v-uni-view",{staticClass:"img-box"},[a("v-uni-image",{attrs:{src:t.pic[0],mode:"aspectFill"}})],1)],1),a("v-uni-view",{staticClass:"bigmarket-header-main-bottom"},[a("v-uni-view",{staticClass:"bigmarket-header-main-bottom-top"},[e._v(e._s(t.productName))]),a("v-uni-view",{staticClass:"bigmarket-header-main-bottom-footer"},[a("v-uni-view",{staticClass:"bigmarket-header-main-bottom-footer-left"},[e._v("市场价：¥"+e._s(t.price))]),a("v-uni-view",{staticClass:"bigmarket-header-main-bottom-footer-right"},[e._v(e._s(t.jkPrice)+"JK")])],1)],1)],1)})),1)],1)],1),a("v-uni-view",{staticClass:"bigmarket-header"},[a("v-uni-view",{staticClass:"bigmarket-header-title"},[e._v(e._s(e.bigCity["category2"][0].categoryName))]),a("v-uni-scroll-view",{attrs:{"scroll-x":"true"}},[a("v-uni-view",{staticClass:"bigmarket-header-main"},e._l(e.bigCity["category2"],(function(t,i){return a("v-uni-view",{key:i,staticClass:"bigmarket-header-main-item",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.goToShopDetail(t.productId)}}},[a("v-uni-view",{staticClass:"bigmarket-header-main-top"},[a("v-uni-view",{staticClass:"bigmarket-header-main-text",class:{active:""!=t.url}},[e._v(e._s(""==t.url?"实物":"课程"))]),a("v-uni-view",{staticClass:"img-box"},[a("v-uni-image",{attrs:{src:t.pic[0],mode:"aspectFill"}})],1)],1),a("v-uni-view",{staticClass:"bigmarket-header-main-bottom"},[a("v-uni-view",{staticClass:"bigmarket-header-main-bottom-top"},[e._v(e._s(t.productName))]),a("v-uni-view",{staticClass:"bigmarket-header-main-bottom-footer"},[a("v-uni-view",{staticClass:"bigmarket-header-main-bottom-footer-left"},[e._v("市场价：¥"+e._s(t.price))]),a("v-uni-view",{staticClass:"bigmarket-header-main-bottom-footer-right"},[e._v(e._s(t.jkPrice)+"JK")])],1)],1)],1)})),1)],1),e.firstGetArr.length?a("v-uni-scroll-view",{attrs:{"scroll-x":"true"}},[a("v-uni-view",{staticClass:"bigmarket-header-main"},e._l(e.firstGetArr,(function(t,i){return a("v-uni-view",{key:i,staticClass:"bigmarket-header-main-item",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.goToShopDetail(t.productId)}}},[a("v-uni-view",{staticClass:"bigmarket-header-main-top"},[a("v-uni-view",{staticClass:"bigmarket-header-main-text",class:{active:""!=t.url}},[e._v(e._s(""==t.url?"实物":"课程"))]),a("v-uni-view",{staticClass:"img-box"},[a("v-uni-image",{attrs:{src:t.pic[0],mode:"aspectFill"}})],1)],1),a("v-uni-view",{staticClass:"bigmarket-header-main-bottom"},[a("v-uni-view",{staticClass:"bigmarket-header-main-bottom-top"},[e._v(e._s(t.productName))]),a("v-uni-view",{staticClass:"bigmarket-header-main-bottom-footer"},[a("v-uni-view",{staticClass:"bigmarket-header-main-bottom-footer-left"},[e._v("市场价：¥"+e._s(t.price))]),a("v-uni-view",{staticClass:"bigmarket-header-main-bottom-footer-right"},[e._v(e._s(t.jkPrice)+"JK")])],1)],1)],1)})),1)],1):e._e()],1),a("v-uni-view",{staticClass:"bigmarket-header"},[a("v-uni-view",{staticClass:"bigmarket-header-title"},[e._v(e._s(e.bigCity["category3"][0].categoryName))]),a("v-uni-scroll-view",{attrs:{"scroll-x":"true"}},[a("v-uni-view",{staticClass:"bigmarket-header-main"},e._l(e.bigCity["category3"],(function(t,i){return a("v-uni-view",{key:i,staticClass:"bigmarket-header-main-item",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.goToShopDetail(t.productId)}}},[a("v-uni-view",{staticClass:"bigmarket-header-main-top"},[a("v-uni-view",{staticClass:"bigmarket-header-main-text",class:{active:""!=t.url}},[e._v(e._s(""==t.url?"实物":"课程"))]),a("v-uni-view",{staticClass:"img-box"},[a("v-uni-image",{attrs:{src:t.pic[0],mode:"aspectFill"}})],1)],1),a("v-uni-view",{staticClass:"bigmarket-header-main-bottom"},[a("v-uni-view",{staticClass:"bigmarket-header-main-bottom-top"},[e._v(e._s(t.productName))]),a("v-uni-view",{staticClass:"bigmarket-header-main-bottom-footer"},[a("v-uni-view",{staticClass:"bigmarket-header-main-bottom-footer-left"},[e._v("市场价：¥"+e._s(t.price))]),a("v-uni-view",{staticClass:"bigmarket-header-main-bottom-footer-right"},[e._v(e._s(t.jkPrice)+"JK")])],1)],1)],1)})),1)],1),e.freeGetArr.length?a("v-uni-scroll-view",{attrs:{"scroll-x":"true"}},[a("v-uni-view",{staticClass:"bigmarket-header-main"},e._l(e.freeGetArr,(function(t,i){return a("v-uni-view",{key:i,staticClass:"bigmarket-header-main-item",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.goToShopDetail(t.productId)}}},[a("v-uni-view",{staticClass:"bigmarket-header-main-top"},[a("v-uni-view",{staticClass:"bigmarket-header-main-text",class:{active:""!=t.url}},[e._v(e._s(""==t.url?"实物":"课程"))]),a("v-uni-view",{staticClass:"img-box"},[a("v-uni-image",{attrs:{src:t.pic[0],mode:"aspectFill"}})],1)],1),a("v-uni-view",{staticClass:"bigmarket-header-main-bottom"},[a("v-uni-view",{staticClass:"bigmarket-header-main-bottom-top"},[e._v(e._s(t.productName))]),a("v-uni-view",{staticClass:"bigmarket-header-main-bottom-footer"},[a("v-uni-view",{staticClass:"bigmarket-header-main-bottom-footer-left"},[e._v("市场价：¥"+e._s(t.price))]),a("v-uni-view",{staticClass:"bigmarket-header-main-bottom-footer-right"},[e._v(e._s(t.jkPrice)+"JK")])],1)],1)],1)})),1)],1):e._e()],1)],1)],1),a("Tabbar",{attrs:{pagePath:e.pagePath}})],1)},o=[];a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}))},"5c1f":function(e,t,a){"use strict";var i=a("63fb"),r=a.n(i);r.a},"63fb":function(e,t,a){var i=a("6afb");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=a("4f06").default;r("a356b416",i,!0,{sourceMap:!1,shadowMode:!1})},"6afb":function(e,t,a){var i=a("24fb"),r=a("1de5"),o=a("9d02");t=i(!1);var n=r(o);t.push([e.i,".bigmarket[data-v-5ea25269]{width:100%;padding-bottom:%?160?%;overflow:hidden;background-image:url("+n+");background-repeat:no-repeat;background-size:100% 100%}.bigmarket .bigmarket-wrapper .bigmarket-header[data-v-5ea25269]{padding-top:%?36?%;-webkit-box-sizing:border-box;box-sizing:border-box}.bigmarket .bigmarket-wrapper .bigmarket-header:nth-child(1) .bigmarket-header-title span[data-v-5ea25269]{font-size:14px}.bigmarket .bigmarket-wrapper .bigmarket-header .bigmarket-header-title[data-v-5ea25269]{display:inline-block;padding:0 %?30?%;height:%?44?%;line-height:%?44?%;margin-left:%?20?%;text-align:center;background:#ff9515;border-radius:%?22?%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:PingFangSC-Medium;font-size:16px;color:#fff;letter-spacing:0}.bigmarket .bigmarket-wrapper .bigmarket-header .bigmarket-header-main[data-v-5ea25269]{width:%?318?%;padding-top:%?22?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex}.bigmarket .bigmarket-wrapper .bigmarket-header .bigmarket-header-main .bigmarket-header-main-item[data-v-5ea25269]{padding-left:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box}.bigmarket .bigmarket-wrapper .bigmarket-header .bigmarket-header-main .bigmarket-header-main-item[data-v-5ea25269]:last-child{padding-right:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box}.bigmarket .bigmarket-wrapper .bigmarket-header .bigmarket-header-main .bigmarket-header-main-top[data-v-5ea25269]{position:relative}.bigmarket .bigmarket-wrapper .bigmarket-header .bigmarket-header-main .bigmarket-header-main-top .bigmarket-header-main-text[data-v-5ea25269]{width:%?52?%;height:%?28?%;line-height:%?24?%;text-align:center;background:#63c3d1;border-radius:1px;overflow:hidden;font-family:PingFangSC-Medium;font-size:8px;color:#fff;position:absolute;left:%?12?%;top:%?6?%;z-index:99;-webkit-box-sizing:border-box;box-sizing:border-box}.bigmarket .bigmarket-wrapper .bigmarket-header .bigmarket-header-main .bigmarket-header-main-top .bigmarket-header-main-text.active[data-v-5ea25269]{background:#ff6697}.bigmarket .bigmarket-wrapper .bigmarket-header .bigmarket-header-main .bigmarket-header-main-top .img-box[data-v-5ea25269]{width:%?318?%;height:%?156?%;border-top-left-radius:%?12?%;border-top-right-radius:%?12?%;overflow:hidden}.bigmarket .bigmarket-wrapper .bigmarket-header .bigmarket-header-main .bigmarket-header-main-top .img-box uni-image[data-v-5ea25269]{width:%?318?%;height:%?156?%}.bigmarket .bigmarket-wrapper .bigmarket-header .bigmarket-header-main .bigmarket-header-main-bottom[data-v-5ea25269]{background:#fcca17;border-radius:%?10?%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?8?%}.bigmarket .bigmarket-wrapper .bigmarket-header .bigmarket-header-main .bigmarket-header-main-bottom .bigmarket-header-main-bottom-top[data-v-5ea25269]{font-family:PingFangSC-Medium;font-size:10px;color:#202020;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden}.bigmarket .bigmarket-wrapper .bigmarket-header .bigmarket-header-main .bigmarket-header-main-bottom .bigmarket-header-main-bottom-footer[data-v-5ea25269]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-bottom:%?10?%;-webkit-box-sizing:border-box;box-sizing:border-box}.bigmarket .bigmarket-wrapper .bigmarket-header .bigmarket-header-main .bigmarket-header-main-bottom .bigmarket-header-main-bottom-footer .bigmarket-header-main-bottom-footer-left[data-v-5ea25269]{font-family:PingFangSC-Medium;font-size:9px;color:#fff}.bigmarket .bigmarket-wrapper .bigmarket-header .bigmarket-header-main .bigmarket-header-main-bottom .bigmarket-header-main-bottom-footer .bigmarket-header-main-bottom-footer-right[data-v-5ea25269]{font-family:PingFangSC-Medium;font-size:11px;color:#ff5415}",""]),e.exports=t},"74fd":function(e,t,a){var i=a("29c1");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=a("4f06").default;r("13399b54",i,!0,{sourceMap:!1,shadowMode:!1})},9684:function(e,t,a){"use strict";a.r(t);var i=a("3eb3"),r=a("3771");for(var o in r)"default"!==o&&function(e){a.d(t,e,(function(){return r[e]}))}(o);a("5c1f"),a("bb3f6");var n,s=a("f0c5"),b=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"5ea25269",null,!1,i["a"],n);t["default"]=b.exports},"9d02":function(e,t,a){e.exports=a.p+"static/img/3.2e3de225.png"},bb3f6:function(e,t,a){"use strict";var i=a("74fd"),r=a.n(i);r.a},d07a:function(e,t,a){"use strict";var i=a("ee27");a("4160"),a("a434"),a("ac1f"),a("1276"),a("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var r=i(a("c964")),o={onLoad:function(){this.GetPhoneInfo(),this.initGoodsList(),uni.getStorageSync("showTip")&&(uni.showModal({title:"特别提示",content:"请在24小时内选择关爱产品，过时无效。",success:function(e){e.confirm?console.log("用户点击确定"):e.cancel&&console.log("用户点击取消")}}),uni.removeStorageSync("showTip"))},onShow:function(){this.pagePath=this.$route.fullPath,console.log(this.pagePath)},data:function(){return{pagePath:"",bigCity:[],firstGetArr:[],freeGetArr:[],screenHeight:0}},methods:{goToShopDetail:function(e){uni.navigateTo({url:"../ShopDetail/ShopDetail?productId="+e})},initGoodsList:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$fetch(e.$api.goodsList,{},"GET","FORM");case 2:a=t.sent,console.log(a),a.data["category1"].forEach((function(e){e.pic=e.pic.split(",")})),a.data["category2"].forEach((function(e){e.pic=e.pic.split(",")})),a.data["category3"].forEach((function(e){e.pic=e.pic.split(",")})),e.bigCity=a.data,console.log(e.bigCity.category1),e.bigCity["category2"].length>10&&(e.firstGetArr=a.data["category2"].splice(-(e.bigCity["category2"].length-10))),e.bigCity["category3"].length>10&&(e.freeGetArr=a.data["category3"].splice(-(e.bigCity["category3"].length-10)));case 11:case"end":return t.stop()}}),t)})))()},GetPhoneInfo:function(){var e=this;uni.getSystemInfo({success:function(t){e.screenHeight=2*t.screenHeight-116}})}}};t.default=o}}]);