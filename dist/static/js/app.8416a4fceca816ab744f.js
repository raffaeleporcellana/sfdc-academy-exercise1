webpackJsonp([1],{"2sbK":function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("7+uW"),s=r("mtWM"),a=r.n(s),o={headers:{"Content-Type":"application/json"}},c={name:"ItemResearch",data:function(){return{searchResults:[],searchText:"",errorMessage:""}},methods:{performSearch:function(){var e=this;this.errorMessage="",console.log("Hello, "+this.searchText+"!");var t="http://localhost:3000/search?searchtoken="+this.searchText;a.a.get(t,o).then(function(e){console.log(e.data)}).catch(function(t){console.log(t),e.errorMessage="Errore nella connessione al Server"})}}},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"research"},[r("div",{staticStyle:{color:"red"}},[e._v(e._s(e.errorMessage))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"}],attrs:{type:"text",placeholder:"codice qui"},domProps:{value:e.searchText},on:{input:function(t){t.target.composing||(e.searchText=t.target.value)}}}),e._v(" "),r("button",{on:{click:e.performSearch}},[e._v("SEARCH")]),e._v(" "),e._l(e.searchResults,function(t){return r("div",{key:t.value},[e._v("\n    "+e._s(t)+"\n  ")])})],2)},staticRenderFns:[]};var l={name:"App",components:{ItemResearch:r("VU/8")(c,i,!1,function(e){r("d6Qh")},"data-v-9c2e8ac0",null).exports}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("ItemResearch")],1)},staticRenderFns:[]};var h=r("VU/8")(l,u,!1,function(e){r("2sbK")},null,null).exports;n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:h},template:"<App/>"})},d6Qh:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.8416a4fceca816ab744f.js.map