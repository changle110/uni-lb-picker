(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demos-demo2-demo2"],{"06fb":function(e,l,a){"use strict";a.r(l);var t=a("5f76"),i=a.n(t);for(var n in t)"default"!==n&&function(e){a.d(l,e,(function(){return t[e]}))}(n);l["default"]=i.a},"1ad3":function(e,l,a){"use strict";a.r(l);var t=a("8bc4"),i=a("06fb");for(var n in i)"default"!==n&&function(e){a.d(l,e,(function(){return i[e]}))}(n);a("ba6d");var c,s=a("f0c5"),o=Object(s["a"])(i["default"],t["b"],t["c"],!1,null,"17b3c4a2",null,!1,t["a"],c);l["default"]=o.exports},"4b34":function(e,l,a){var t=a("24fb");l=t(!1),l.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.list-item[data-v-17b3c4a2]{padding:10px 15px;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column\n}.sub-title[data-v-17b3c4a2]{color:#999;font-size:12px}.item-title[data-v-17b3c4a2]{font-size:16px}.item-content[data-v-17b3c4a2]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.item-left[data-v-17b3c4a2]{font-size:16px;text-align:left}.item-value[data-v-17b3c4a2]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}.item-label[data-v-17b3c4a2]{font-size:16px}.item-placeholder[data-v-17b3c4a2]{color:#999;font-size:16px}.tips[data-v-17b3c4a2]{color:#dd524d;font-size:12px;padding-left:16px;padding-right:16px}.radio-group[data-v-17b3c4a2]{padding-bottom:10px;padding-left:16px;padding-right:16px}.flex-row-center[data-v-17b3c4a2]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.grey-block[data-v-17b3c4a2]{height:10px;background-color:#f8f8f8}',""]),e.exports=l},"5f76":function(e,l,a){"use strict";a("a15b"),a("d81d"),Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t={data:function(){return{value1:[],label1:"",value2:[],label2:"",value3:["2","22","223"],label3:"",value4:[],list1:[{label:"选项1",value:"1",children:[{label:"选项11",value:"11",children:[{label:"选项111",value:"111"},{label:"选项112",value:"112"},{label:"选项113",value:"113"}]},{label:"选项12",value:"12",children:[{label:"选项121",value:"121"},{label:"选项122",value:"122"},{label:"选项123",value:"123"}]},{label:"选项13",value:"13",children:[{label:"选项131",value:"131"},{label:"选项132",value:"132"},{label:"选项133",value:"133"}]}]},{label:"选项2",value:"2",children:[{label:"选项21",value:"21",children:[{label:"选项211",value:"211"},{label:"选项212",value:"212"},{label:"选项213",value:"213"}]},{label:"选项22",value:"22",children:[{label:"选项221",value:"221"},{label:"选项222",value:"222"},{label:"选项223",value:"223"}]},{label:"选项23",value:"23",children:[{label:"选项231",value:"231"},{label:"选项232",value:"232"},{label:"选项233",value:"233"}]}]},{label:"选项3",value:"3",children:[{label:"选项31",value:"31",children:[{label:"选项311",value:"311"},{label:"选项312",value:"312"},{label:"选项313",value:"313"}]},{label:"选项32",value:"32",children:[{label:"选项321",value:"321"},{label:"选项322",value:"322"},{label:"选项323",value:"323"}]},{label:"选项33",value:"33",children:[{label:"选项331",value:"331"},{label:"选项332",value:"332"},{label:"选项333",value:"333"}]}]}],list2:[]}},onReady:function(){var e=this;this.$nextTick((function(){var l=e.$refs.picker3.getColumnsInfo(e.value3);console.log("根据value获取的信息：",l),e.label3=l.item.map((function(e){return e.label})).join("-")}))},methods:{handleTap:function(e){this.$refs[e].show()},handleChange:function(e){console.log("change::",e)},handleConfirm:function(e){if(console.log("confirm::",e),e){var l=e.dataset.name,a=e.item.map((function(e){return e.label})).join("-");l&&a&&(this[l]=a)}},handleCancel:function(e){console.log("cancel::",e)}}};l.default=t},"8bc4":function(e,l,a){"use strict";var t={lbPicker:a("0b5b").default},i=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"grey-block"}),a("v-uni-view",{staticClass:"list-item",on:{click:function(l){arguments[0]=l=e.$handleEvent(l),e.handleTap("picker1")}}},[a("v-uni-text",{staticClass:"sub-title"},[e._v("二级联动")]),a("v-uni-view",{staticClass:"item-content"},[a("v-uni-text",{staticClass:"item-title"},[e._v("绑定值:"+e._s(JSON.stringify(e.value1)))]),a("v-uni-view",{staticClass:"item-value"},[a("v-uni-text",{staticClass:"item-label"},[e._v(e._s(e.label1))]),e.label1?e._e():a("v-uni-text",{staticClass:"item-placeholder"},[e._v("点我打开选择器")])],1)],1),a("lb-picker",{ref:"picker1",attrs:{mode:"multiSelector",list:e.list1,level:2,dataset:{name:"label1"}},on:{change:function(l){arguments[0]=l=e.$handleEvent(l),e.handleChange.apply(void 0,arguments)},confirm:function(l){arguments[0]=l=e.$handleEvent(l),e.handleConfirm.apply(void 0,arguments)},cancel:function(l){arguments[0]=l=e.$handleEvent(l),e.handleCancel.apply(void 0,arguments)}},model:{value:e.value1,callback:function(l){e.value1=l},expression:"value1"}})],1),a("v-uni-view",{staticClass:"grey-block"}),a("v-uni-view",{staticClass:"list-item",on:{click:function(l){arguments[0]=l=e.$handleEvent(l),e.handleTap("picker2")}}},[a("v-uni-text",{staticClass:"sub-title"},[e._v("三级联动")]),a("v-uni-view",{staticClass:"item-content"},[a("v-uni-text",{staticClass:"item-title"},[e._v("绑定值:"+e._s(JSON.stringify(e.value2)))]),a("v-uni-view",{staticClass:"item-value"},[a("v-uni-text",{staticClass:"item-label"},[e._v(e._s(e.label2))]),e.label2?e._e():a("v-uni-text",{staticClass:"item-placeholder"},[e._v("点我打开选择器")])],1)],1),a("lb-picker",{ref:"picker2",attrs:{mode:"multiSelector",list:e.list1,level:3,dataset:{name:"label2"}},on:{change:function(l){arguments[0]=l=e.$handleEvent(l),e.handleChange.apply(void 0,arguments)},confirm:function(l){arguments[0]=l=e.$handleEvent(l),e.handleConfirm.apply(void 0,arguments)},cancel:function(l){arguments[0]=l=e.$handleEvent(l),e.handleCancel.apply(void 0,arguments)}},model:{value:e.value2,callback:function(l){e.value2=l},expression:"value2"}})],1),a("v-uni-view",{staticClass:"grey-block"}),a("v-uni-view",{staticClass:"list-item",on:{click:function(l){arguments[0]=l=e.$handleEvent(l),e.handleTap("picker3")}}},[a("v-uni-text",{staticClass:"sub-title"},[e._v("绑定默认值")]),a("v-uni-view",{staticClass:"item-content"},[a("v-uni-text",{staticClass:"item-title"},[e._v("绑定值:"+e._s(JSON.stringify(e.value3)))]),a("v-uni-view",{staticClass:"item-value"},[a("v-uni-text",{staticClass:"item-label"},[e._v(e._s(e.label3))]),e.label3?e._e():a("v-uni-text",{staticClass:"item-placeholder"},[e._v("点我打开选择器")])],1)],1),a("lb-picker",{ref:"picker3",attrs:{mode:"multiSelector",list:e.list1,level:3,dataset:{name:"label3"}},on:{change:function(l){arguments[0]=l=e.$handleEvent(l),e.handleChange.apply(void 0,arguments)},confirm:function(l){arguments[0]=l=e.$handleEvent(l),e.handleConfirm.apply(void 0,arguments)},cancel:function(l){arguments[0]=l=e.$handleEvent(l),e.handleCancel.apply(void 0,arguments)}},model:{value:e.value3,callback:function(l){e.value3=l},expression:"value3"}})],1),a("v-uni-view",{staticClass:"grey-block"}),a("v-uni-view",{staticClass:"list-item",on:{click:function(l){arguments[0]=l=e.$handleEvent(l),e.handleTap("picker4")}}},[a("v-uni-text",{staticClass:"sub-title"},[e._v("无数据")]),a("v-uni-view",{staticClass:"item-content"},[a("v-uni-text",{staticClass:"item-title"},[e._v("绑定值:"+e._s(JSON.stringify(e.value4)))]),a("v-uni-view",{staticClass:"item-value"},[a("v-uni-text",{staticClass:"item-placeholder"},[e._v("点我打开选择器")])],1)],1),a("lb-picker",{ref:"picker4",attrs:{mode:"multiSelector",list:e.list2,level:3},on:{change:function(l){arguments[0]=l=e.$handleEvent(l),e.handleChange.apply(void 0,arguments)},confirm:function(l){arguments[0]=l=e.$handleEvent(l),e.handleConfirm.apply(void 0,arguments)},cancel:function(l){arguments[0]=l=e.$handleEvent(l),e.handleCancel.apply(void 0,arguments)}},model:{value:e.value4,callback:function(l){e.value4=l},expression:"value4"}})],1),a("v-uni-view",{staticClass:"grey-block"})],1)},n=[];a.d(l,"b",(function(){return i})),a.d(l,"c",(function(){return n})),a.d(l,"a",(function(){return t}))},ba6d:function(e,l,a){"use strict";var t=a("e9a1"),i=a.n(t);i.a},e9a1:function(e,l,a){var t=a("4b34");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var i=a("4f06").default;i("7d7d3ebd",t,!0,{sourceMap:!1,shadowMode:!1})}}]);