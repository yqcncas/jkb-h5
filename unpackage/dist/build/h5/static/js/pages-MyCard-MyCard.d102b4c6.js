(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-MyCard-MyCard"],{3940:function(e,a,t){"use strict";var i={"u-empty":t("2270").default},r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",{staticClass:"mycard",style:{backgroundImage:e.bgFlag?"":"url(../../static/image/index/5.png)"}},[t("v-uni-view",{staticClass:"mycard-header"},[t("v-uni-view",{staticClass:"mycard-header-left",class:{avtive:0==e.headerIndex},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.handleTopIndex(0)}}},[e._v("打卡记录")]),t("v-uni-view",{staticClass:"mycard-header-right",class:{avtive:1==e.headerIndex},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.handleTopIndex(1)}}},[e._v("打卡奖励")])],1),t("v-uni-scroll-view",{staticStyle:{height:"calc(100vh - 30rpx)"},attrs:{"scroll-y":"true"},on:{scrolltolower:function(a){arguments[0]=a=e.$handleEvent(a),e.lower.apply(void 0,arguments)}}},[0==e.headerIndex?t("v-uni-view",{staticClass:"mycard-main"},e._l(e.myCardList,(function(a,i){return t("v-uni-view",{key:i,staticClass:"mycard-main-item"},[t("v-uni-view",{staticClass:"mycard-main-item-top"},[t("v-uni-view",{staticClass:"mycard-main-item-left"},[e._v(e._s(a.createTime))]),t("v-uni-view",{staticClass:"mycard-main-item-right"},[e._v("打卡")])],1)],1)})),1):e._e(),1==e.headerIndex?t("v-uni-view",{staticClass:"mycard-jifen"},e._l(e.myCardList,(function(a,i){return t("v-uni-view",{key:i,staticClass:"mycard-jifen-item"},[t("v-uni-view",{staticClass:"mycard-jifen-item-top"},[t("v-uni-view",{staticClass:"mycard-jifen-item-top-left"},[e._v("获得JK值")]),t("v-uni-view",{staticClass:"mycard-jifen-item-top-right"},[e._v("+"+e._s(a.num))])],1),t("v-uni-view",{staticClass:"mycard-jifen-item-bottom"},[t("v-uni-view",{staticClass:"mycard-jifen-item-bottom-left"},[e._v("打卡")]),t("v-uni-view",{staticClass:"mycard-jifen-item-bottom-right"},[e._v(e._s(a.createTime))])],1)],1)})),1):e._e(),e.showNoList?t("v-uni-view",[t("u-empty",{attrs:{mode:"list"}})],1):e._e()],1)],1)},n=[];t.d(a,"b",(function(){return r})),t.d(a,"c",(function(){return n})),t.d(a,"a",(function(){return i}))},"53c8":function(e,a,t){"use strict";t.r(a);var i=t("f709"),r=t.n(i);for(var n in i)"default"!==n&&function(e){t.d(a,e,(function(){return i[e]}))}(n);a["default"]=r.a},b6802:function(e,a,t){"use strict";function i(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,i=new Array(a);t<a;t++)i[t]=e[t];return i}t.d(a,"a",(function(){return i}))},c851:function(e,a,t){"use strict";t.r(a);var i=t("3940"),r=t("53c8");for(var n in r)"default"!==n&&function(e){t.d(a,e,(function(){return r[e]}))}(n);t("f13a");var d,o=t("f0c5"),c=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"288a6e52",null,!1,i["a"],d);a["default"]=c.exports},d0ff:function(e,a,t){"use strict";t.r(a);var i=t("b6802");function r(e){if(Array.isArray(e))return Object(i["a"])(e)}t("a4d3"),t("e01a"),t("d28b"),t("a630"),t("e260"),t("d3b7"),t("3ca3"),t("ddb0");function n(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}var d=t("dde1");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return r(e)||n(e)||Object(d["a"])(e)||o()}t.d(a,"default",(function(){return c}))},dde1:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));t("a630"),t("fb6a"),t("d3b7"),t("25f0"),t("3ca3");var i=t("b6802");function r(e,a){if(e){if("string"===typeof e)return Object(i["a"])(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(i["a"])(e,a):void 0}}},e05e:function(e,a,t){var i=t("24fb");a=i(!1),a.push([e.i,'.mycard[data-v-288a6e52]{width:100%;padding-bottom:%?30?%;overflow:hidden;background-repeat:no-repeat;background-size:100% 100%}.mycard .mycard-header[data-v-288a6e52]{width:100%;height:%?100?%;line-height:%?100?%;background:#ff9515;display:-webkit-box;display:-webkit-flex;display:flex;position:fixed;top:0;z-index:99}.mycard .mycard-header .mycard-header-left[data-v-288a6e52],\n.mycard .mycard-header .mycard-header-right[data-v-288a6e52]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;font-family:PingFangSC-Regular;font-size:16px;color:#252525;letter-spacing:0;position:relative}.mycard .mycard-header .mycard-header-left[data-v-288a6e52]::after,\n.mycard .mycard-header .mycard-header-right[data-v-288a6e52]::after{content:"";width:0;height:0;border-bottom:%?8?% solid #fddb3c;border-radius:%?5?%;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);bottom:0;-webkit-transition:.3s;transition:.3s}.mycard .mycard-header .mycard-header-left.avtive[data-v-288a6e52],\n.mycard .mycard-header .mycard-header-right.avtive[data-v-288a6e52]{font-family:PingFangSC-Medium;font-weight:700;font-size:16px;color:#252525;letter-spacing:0}.mycard .mycard-header .mycard-header-left.avtive[data-v-288a6e52]::after,\n.mycard .mycard-header .mycard-header-right.avtive[data-v-288a6e52]::after{width:50%}.mycard .mycard-main[data-v-288a6e52]{width:%?710?%;border-radius:8px;margin:0 auto;margin-top:%?14?%;overflow:hidden;position:absolute;top:%?114?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);-webkit-box-sizing:border-box;box-sizing:border-box}.mycard .mycard-main .mycard-main-item[data-v-288a6e52]{width:100%;height:%?100?%;background:#fddb3c;padding-left:%?12?%;padding-right:%?10?%;-webkit-box-sizing:border-box;box-sizing:border-box}.mycard .mycard-main .mycard-main-item:last-child .mycard-main-item-top[data-v-288a6e52]{border-bottom:0}.mycard .mycard-main .mycard-main-item .mycard-main-item-top[data-v-288a6e52]{height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:%?1?% solid #fff}.mycard .mycard-main .mycard-main-item .mycard-main-item-top .mycard-main-item-left[data-v-288a6e52]{padding-left:%?24?%;padding-right:%?260?%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:PingFangSC-Regular;font-size:14px;color:#000;letter-spacing:-.34px}.mycard .mycard-main .mycard-main-item .mycard-main-item-top .mycard-main-item-right[data-v-288a6e52]{font-family:PingFangSC-Regular;font-size:14px;color:#161616;letter-spacing:-.34px}.mycard .mycard-jifen[data-v-288a6e52]{width:%?710?%;border-radius:8px;overflow:hidden;margin:0 auto;margin-top:%?14?%;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;top:%?114?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.mycard .mycard-jifen .mycard-jifen-item[data-v-288a6e52]{padding:%?32?% %?10?% %?0?% %?22?%;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fddb3c}.mycard .mycard-jifen .mycard-jifen-item:last-child .mycard-jifen-item-bottom[data-v-288a6e52]{border-bottom:0}.mycard .mycard-jifen .mycard-jifen-item .mycard-jifen-item-top[data-v-288a6e52],\n.mycard .mycard-jifen .mycard-jifen-item .mycard-jifen-item-bottom[data-v-288a6e52]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.mycard .mycard-jifen .mycard-jifen-item .mycard-jifen-item-top .mycard-jifen-item-top-left[data-v-288a6e52]{font-family:PingFangSC-Regular;font-size:14px;color:#0f0f0f;letter-spacing:-.34px}.mycard .mycard-jifen .mycard-jifen-item .mycard-jifen-item-top .mycard-jifen-item-top-right[data-v-288a6e52]{font-family:PingFangSC-Medium;font-size:16px;color:#fc7fba;font-weight:700;letter-spacing:-.39px}.mycard .mycard-jifen .mycard-jifen-item .mycard-jifen-item-bottom[data-v-288a6e52]{padding-top:%?28?%;padding-bottom:%?28?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:%?1?% solid #fff;font-family:PingFangSC-Regular;font-size:14px;color:#0f0f0f;letter-spacing:-.34px}',""]),e.exports=a},e5a5:function(e,a,t){var i=t("e05e");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=t("4f06").default;r("f8794a72",i,!0,{sourceMap:!1,shadowMode:!1})},f13a:function(e,a,t){"use strict";var i=t("e5a5"),r=t.n(i);r.a},f709:function(e,a,t){"use strict";var i=t("ee27");t("99af"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=i(t("d0ff"));t("96cf");var n=i(t("c964")),d={onLoad:function(){this.initMyCardList()},data:function(){return{headerIndex:0,pageNum:0,pageSize:10,hasFlag:!0,myCardList:[],showNoList:!1,bgFlag:!0,bgUrl:"../../static/image/index/5.png"}},methods:{handleTopIndex:function(e){this.headerIndex=e},initMyCardList:function(){var e=this;return(0,n.default)(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.hasFlag){a.next=2;break}return a.abrupt("return");case 2:return e.pageNum=++e.pageNum,a.next=5,e.$fetch(e.$api.remaindList,{pageNum:e.pageNum,pageSize:e.pageSize,signType:1},"GET","FORM");case 5:t=a.sent,console.log(t),0==t.total?(e.showNoList=!0,e.bgFlag=!0):(e.showNoList=!1,e.bgFlag=!1),e.myCardList=[].concat((0,r.default)(e.myCardList),(0,r.default)(t.rows)),e.hasFlag=10*e.pageNum<t.total;case 10:case"end":return a.stop()}}),a)})))()},lower:function(){this.hasFlag&&this.initMyCardList()}}};a.default=d}}]);