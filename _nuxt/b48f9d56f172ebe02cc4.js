(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{339:function(t,e,r){"use strict";r.r(e);r(16),r(71),r(43);var n=r(7),c={components:{Endpoint:r(298).a},fetch:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,o,h,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,t.$nuxt,t.params,n=t.error,c=t.store,o=t.redirect,h="/README.md",e.prev=2,e.next=5,r.$get("/api/list");case 5:d=e.sent,e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(2),e.abrupt("return",o(301,"/src/README__md"));case 11:return e.prev=11,e.next=14,r.$get("/api/path?path="+h.replace("__","."));case 14:m=e.sent,e.next=20;break;case 17:e.prev=17,e.t1=e.catch(11),n({statusCode:404,message:"Post not found"});case 20:c.commit("tree/setTree",d),c.commit("tree/setPathNode",m),c.commit("tree/setPathMatch",h);case 23:case"end":return e.stop()}}),e,null,[[2,8],[11,17]])})))()},data:function(){return{tree:{},content:{},pathMatch:"",pathNode:{}}},head:function(){return{title:this.$store.state.tree.pathNode.name+" - Marek Ognicki-Kapusta"}}},o=r(6),component=Object(o.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("endpoint",{attrs:{tree:this.tree,content:this.content,"path-match":this.pathMatch,"path-node":this.pathNode}})}),[],!1,null,null,null);e.default=component.exports}}]);