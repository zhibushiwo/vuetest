webpackJsonp([5],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},l,!1,function(t){n("s347")},null,null).exports,r=n("/ocq"),u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal","default-active":this.$route.path,router:""}},[e("el-menu-item",{attrs:{index:"/vuetest/ArticleList"}},[this._v("nodeJS论坛")]),this._v(" "),e("el-menu-item",{attrs:{index:"/vuetest/todolist"}},[this._v("TodoList")]),this._v(" "),e("el-menu-item",{attrs:{index:"/vuetest/calculate"}},[this._v("计算器")])],1),this._v(" "),e("keep-alive",{attrs:{exclude:"detail"}},[e("router-view")],1)],1)},staticRenderFns:[]},o=n("VU/8")({name:"layout"},u,!1,null,null,null).exports;i.default.use(r.a);var s=new r.a({routes:[{path:"",component:o,redirect:"/vuetest/ArticleList"},{path:"/vuetest",name:"vuetest",component:o,children:[{path:"ArticleList",name:"ArticleList",component:function(){return n.e(0).then(n.bind(null,"H65z"))}},{path:"ArticleDetail",name:"ArticleDetail",component:function(){return n.e(1).then(n.bind(null,"88bq"))}},{path:"todolist",name:"todolist",component:function(){return n.e(3).then(n.bind(null,"yLl3"))}},{path:"calculate",name:"calculate",component:function(){return n.e(2).then(n.bind(null,"pHF0"))}}]}]}),c=n("zL8q"),p=n.n(c),d=(n("tvR6"),n("mtWM")),m=n.n(d);i.default.prototype.$axios=m.a,i.default.config.productionTip=!1,i.default.use(p.a),new i.default({el:"#app",router:s,components:{App:a},template:"<App/>"})},s347:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ea803bc24d202e83f415.js.map