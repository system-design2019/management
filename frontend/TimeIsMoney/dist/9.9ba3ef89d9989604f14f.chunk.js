webpackJsonp([9],{127:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(2);e.default={data:function(){return{}},computed:i.i(n.b)("Personal",{alerts:"mailReceive"}),methods:{handleStart:function(){this.$router.push({path:"/index"})},getAction:function(t){return t?"标为未读":"标为已读"},getButtonText:function(t){if(1===t)return"标为已读"},changeStatus:function(t){this.$store.dispatch("Personal/CHANGE_STATUS",t)},getNumber:function(){var t=0;for(var e in this.alerts)this.alerts[e].hasRead||t++;return t},changeAllStatus:function(){this.$store.dispatch("Personal/CHANGE_ALL_STATUS")},getStatus:function(t){return t?"default":"error"},deleteAlert:function(t){this.$store.dispatch("Personal/DELETE_ALERT",t)},deleteAllAlerts:function(){this.$store.dispatch("Personal/DELETE_ALL_ALERTS")}},created:function(){this.$store.dispatch("Personal/GET_ALERTS")}}},155:function(t,e){},198:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{margin:"20px 9%"}},[i("div",{staticStyle:{padding:"10px",background:"#f8f8f9"}},[i("Card",{staticStyle:{width:"100%","min-height":"600px"}},[i("div",[i("div",{staticStyle:{width:"60%",float:"left"}},[i("p",{staticStyle:{margin:"10px 0"}},[t._v("您有"+t._s(t.getNumber())+"条未读消息")])]),t._v(" "),i("div",{staticStyle:{width:"40%",float:"right","text-align":"right",margin:"10px 0"}},[i("a",{on:{click:function(e){t.changeAllStatus()}}},[t._v("全部标记为已读")]),t._v(" "),i("Divider",{attrs:{type:"vertical"}}),t._v(" "),i("a",{on:{click:function(e){t.deleteAllAlerts()}}},[t._v("全部删除")])],1)]),t._v(" "),i("CellGroup",{staticStyle:{width:"100%"}},t._l(t.alerts,function(e,n){return i("Cell",{key:n,staticClass:"alert",staticStyle:{width:"100%"},attrs:{title:e.title}},[i("div",{staticStyle:{float:"left",width:"2%"}},[i("Badge",{staticStyle:{float:"left"},attrs:{status:t.getStatus(e.hasRead)}})],1),t._v(" "),i("div",{staticStyle:{float:"right",width:"98%"}},[i("span",{staticStyle:{"font-size":"17px","font-weight":"700",float:"left",width:"78%"}},[t._v("\n                            "+t._s(e.title)+"\n                            "),i("span",{staticStyle:{color:"rgb(174,174,174)","font-weight":"100"}},[t._v(t._s(e.content))])]),t._v(" "),i("div",{staticStyle:{float:"right",width:"20%","text-align":"right","margin-right":"20px"}},[i("span",{staticStyle:{float:"left",width:"65%","text-align":"left",color:"rgb(174,174,174)"}},[t._v(t._s(e.date))]),t._v(" "),i("div",{staticStyle:{float:"right",width:"35%","text-align":"right"}},[i("a",{staticStyle:{float:"left",width:"40%","text-align":"left",color:"#ce4545"},on:{click:function(e){t.deleteAlert(n)}}},[t._v("删除")]),t._v(" "),i("a",{staticStyle:{float:"right",width:"60%","text-align":"right",color:"#ce4545"},on:{click:function(e){t.changeStatus(n)}}},[t._v(t._s(t.getAction(e.hasRead)))])])])])])}))],1)],1)])},staticRenderFns:[]},t.exports.render._withStripped=!0},90:function(t,e,i){i(155);var n=i(32)(i(127),i(198),"data-v-b947b430",null);n.options.__file="E:\\FILE_myself\\Learning\\juniorsecond\\system_design\\system-design\\frontend\\TimeIsMoney\\src\\views\\ReceiveBox.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] ReceiveBox.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports}});