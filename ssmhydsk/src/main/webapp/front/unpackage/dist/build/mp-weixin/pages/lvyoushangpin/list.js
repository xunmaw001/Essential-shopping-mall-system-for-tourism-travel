(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/lvyoushangpin/list"],{"38d6":function(t,n,e){"use strict";e.r(n);var i=e("593c"),a=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=a.a},"48f6":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var i={mescrollUni:function(){return Promise.all([e.e("common/vendor"),e.e("components/mescroll-uni/mescroll-uni")]).then(e.bind(null,"21af"))}},a=function(){var t=this,n=t.$createElement,e=(t._self._c,t.isAuth("lvyoushangpin","修改")),i=t.isAuth("lvyoushangpin","删除"),a=t.__map(t.list,(function(n,e){var i=t.__get_orig(n),a=n.shangpintupian?n.shangpintupian.split(","):null;return{$orig:i,g0:a}})),r=t.isAuth("lvyoushangpin","新增");t.$mp.data=Object.assign({},{$root:{m0:e,m1:i,l0:a,m2:r}})},r=[]},"4d58":function(t,n,e){"use strict";var i=e("f957"),a=e.n(i);a.a},"593c":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,n,e,i,a,r,s){try{var o=t[r](s),u=o.value}catch(c){return void e(c)}o.done?n(u):Promise.resolve(u).then(i,a)}function s(t){return function(){var n=this,e=arguments;return new Promise((function(i,a){var s=t.apply(n,e);function o(t){r(s,i,a,o,u,"next",t)}function u(t){r(s,i,a,o,u,"throw",t)}o(void 0)}))}}var o={data:function(){return{queryList:[{queryName:"商品名称"}],queryIndex:0,list:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:5,textNoMore:"~ 没有更多了 ~"},hasNext:!0,searchForm:{},categoryList:[],categoryName:"全部",CustomBar:"0"}},onShow:function(){var t=this;return s(i.default.mark((function n(){var e;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$api.list("shangpinleixing",{page:1,limit:100});case 2:e=n.sent,e.data.list.splice(0,0,{id:0,shangpinleixing:"全部"}),t.categoryList=e.data.list,t.hasNext=!0,t.mescroll&&t.mescroll.resetUpScroll();case 7:case"end":return n.stop()}}),n)})))()},onLoad:function(){this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},methods:{queryChange:function(t){this.queryIndex=t.detail.value,this.searchForm.shangpinmingcheng=""},categoryClick:function(t){this.categoryName=t,this.mescroll.resetUpScroll()},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(t){var n=this;return s(i.default.mark((function e(){var a,r;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={page:t.num,limit:t.size},"全部"!=n.categoryName&&(a.shangpinleixing="%"+n.categoryName+"%"),e.next=4,n.$api.list("lvyoushangpin",a);case 4:r=e.sent,1==t.num&&(n.list=[]),n.list=n.list.concat(r.data.list),0==r.data.list.length&&(n.hasNext=!1),t.endSuccess(t.size,n.hasNext);case 9:case"end":return e.stop()}}),e)})))()},onDetailTap:function(t){this.$utils.jump("./detail?id=".concat(t.id))},onUpdateTap:function(t){this.$utils.jump("./add-or-update?id=".concat(t))},onAddTap:function(){this.$utils.jump("./add-or-update")},onDeleteTap:function(n){var e=this;t.showModal({title:"提示",content:"是否确认删除",success:function(){var t=s(i.default.mark((function t(a){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a.confirm){t.next=5;break}return t.next=3,e.$api.del("lvyoushangpin",JSON.stringify([n]));case 3:e.hasNext=!0,e.mescroll.resetUpScroll();case 5:case"end":return t.stop()}}),t)})));function a(n){return t.apply(this,arguments)}return a}()})},search:function(){var t=this;return s(i.default.mark((function n(){var e,a;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.mescroll.num=1,e={page:t.mescroll.num,limit:t.mescroll.size},t.searchForm.shangpinmingcheng&&(e["shangpinmingcheng"]="%"+t.searchForm.shangpinmingcheng+"%"),n.next=5,t.$api.list("lvyoushangpin",e);case 5:a=n.sent,1==t.mescroll.num&&(t.list=[]),t.list=t.list.concat(a.data.list),0==a.data.list.length&&(t.hasNext=!1),t.mescroll.endSuccess(t.mescroll.size,t.hasNext);case 10:case"end":return n.stop()}}),n)})))()}}};n.default=o}).call(this,e("543d")["default"])},"8f41":function(t,n,e){"use strict";e.r(n);var i=e("48f6"),a=e("38d6");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("4d58");var s,o=e("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);n["default"]=u.exports},ef83:function(t,n,e){"use strict";(function(t){e("f28b");i(e("66fd"));var n=i(e("8f41"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},f957:function(t,n,e){}},[["ef83","common/runtime","common/vendor"]]]);