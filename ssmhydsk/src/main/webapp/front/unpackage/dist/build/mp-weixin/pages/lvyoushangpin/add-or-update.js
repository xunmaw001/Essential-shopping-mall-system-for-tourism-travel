(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/lvyoushangpin/add-or-update"],{"11f7":function(n,e,i){},"41d7":function(n,e,i){"use strict";i.r(e);var a=i("f121"),t=i.n(a);for(var r in a)"default"!==r&&function(n){i.d(e,n,(function(){return a[n]}))}(r);e["default"]=t.a},"4f12":function(n,e,i){"use strict";(function(n){i("f28b");a(i("66fd"));var e=a(i("c0a3"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,i("543d")["createPage"])},c0a3:function(n,e,i){"use strict";i.r(e);var a=i("f67a"),t=i("41d7");for(var r in t)"default"!==r&&function(n){i.d(e,n,(function(){return t[n]}))}(r);i("f539");var u,o=i("f0c5"),s=Object(o["a"])(t["default"],a["b"],a["c"],!1,null,"83e7a510",null,!1,a["a"],u);e["default"]=s.exports},f121:function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t(i("a34a"));function t(n){return n&&n.__esModule?n:{default:n}}function r(n,e,i,a,t,r,u){try{var o=n[r](u),s=o.value}catch(g){return void i(g)}o.done?e(s):Promise.resolve(s).then(a,t)}function u(n){return function(){var e=this,i=arguments;return new Promise((function(a,t){var u=n.apply(e,i);function o(n){r(u,a,t,o,s,"next",n)}function s(n){r(u,a,t,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("af98"))}.bind(null,i)).catch(i.oe)},s={data:function(){return{ruleForm:{shangpinbianhao:this.getUUID(),shangpinmingcheng:"",shangpinleixing:"",shangpintupian:"",shangpinjiage:"",shangpingongneng:"",shangpinjianjie:""},shangpinleixingOptions:[],shangpinleixingIndex:0,user:{},ro:{shangpinbianhao:!1,shangpinmingcheng:!1,shangpinleixing:!1,shangpintupian:!1,shangpinjiage:!1,shangpingongneng:!1,shangpinjianjie:!1}}},components:{wPicker:o},computed:{},onLoad:function(e){var i=this;return u(a.default.mark((function t(){var r,u,o,s;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=n.getStorageSync("nowTable"),t.next=3,i.$api.session(r);case 3:return u=t.sent,i.user=u.data,t.next=7,i.$api.option("shangpinleixing","shangpinleixing",{});case 7:if(u=t.sent,i.shangpinleixingOptions=u.data,i.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(i.ruleForm.refid=e.refid),!e.id){t.next=17;break}return i.ruleForm.id=e.id,t.next=15,i.$api.info("lvyoushangpin",i.ruleForm.id);case 15:u=t.sent,i.ruleForm=u.data;case 17:if(!e.cross){t.next=52;break}o=n.getStorageSync("crossObj"),t.t0=a.default.keys(o);case 20:if((t.t1=t.t0()).done){t.next=52;break}if(s=t.t1.value,"shangpinbianhao"!=s){t.next=26;break}return i.ruleForm.shangpinbianhao=o[s],i.ro.shangpinbianhao=!0,t.abrupt("continue",20);case 26:if("shangpinmingcheng"!=s){t.next=30;break}return i.ruleForm.shangpinmingcheng=o[s],i.ro.shangpinmingcheng=!0,t.abrupt("continue",20);case 30:if("shangpinleixing"!=s){t.next=34;break}return i.ruleForm.shangpinleixing=o[s],i.ro.shangpinleixing=!0,t.abrupt("continue",20);case 34:if("shangpintupian"!=s){t.next=38;break}return i.ruleForm.shangpintupian=o[s],i.ro.shangpintupian=!0,t.abrupt("continue",20);case 38:if("shangpinjiage"!=s){t.next=42;break}return i.ruleForm.shangpinjiage=o[s],i.ro.shangpinjiage=!0,t.abrupt("continue",20);case 42:if("shangpingongneng"!=s){t.next=46;break}return i.ruleForm.shangpingongneng=o[s],i.ro.shangpingongneng=!0,t.abrupt("continue",20);case 46:if("shangpinjianjie"!=s){t.next=50;break}return i.ruleForm.shangpinjianjie=o[s],i.ro.shangpinjianjie=!0,t.abrupt("continue",20);case 50:t.next=20;break;case 52:i.styleChange();case 53:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},shangpinleixingChange:function(n){this.shangpinleixingIndex=n.target.value,this.ruleForm.shangpinleixing=this.shangpinleixingOptions[this.shangpinleixingIndex]},shangpintupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.shangpintupian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(a.default.mark((function e(){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.ruleForm.shangpinjiage){e.next=3;break}return n.$utils.msg("商品价格不能为空"),e.abrupt("return");case 3:if(!n.ruleForm.shangpinjiage||n.$validate.isIntNumer(n.ruleForm.shangpinjiage)){e.next=6;break}return n.$utils.msg("商品价格应输入整数"),e.abrupt("return");case 6:if(!n.ruleForm.id){e.next=11;break}return e.next=9,n.$api.update("lvyoushangpin",n.ruleForm);case 9:e.next=13;break;case 11:return e.next=13,n.$api.add("lvyoushangpin",n.ruleForm);case 13:n.$utils.msgBack("提交成功");case 14:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,i=e.getFullYear(),a=e.getMonth()+1,t=e.getDate();return"start"===n?i-=60:"end"===n&&(i+=2),a=a>9?a:"0"+a,t=t>9?t:"0"+t,"".concat(i,"-").concat(a,"-").concat(t)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,i("543d")["default"])},f539:function(n,e,i){"use strict";var a=i("11f7"),t=i.n(a);t.a},f67a:function(n,e,i){"use strict";var a;i.d(e,"b",(function(){return t})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var t=function(){var n=this,e=n.$createElement;n._self._c},r=[]}},[["4f12","common/runtime","common/vendor"]]]);