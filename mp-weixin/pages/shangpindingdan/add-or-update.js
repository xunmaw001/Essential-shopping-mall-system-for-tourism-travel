(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangpindingdan/add-or-update"],{1263:function(n,e,i){"use strict";i.r(e);var t=i("4f45"),r=i.n(t);for(var a in t)"default"!==a&&function(n){i.d(e,n,(function(){return t[n]}))}(a);e["default"]=r.a},"4acd":function(n,e,i){"use strict";(function(n){i("70ec"),i("921b");t(i("66fd"));var e=t(i("c7f4"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,i("543d")["createPage"])},"4f45":function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(i("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function a(n,e,i,t,r,a,u){try{var o=n[a](u),s=o.value}catch(h){return void i(h)}o.done?e(s):Promise.resolve(s).then(t,r)}function u(n){return function(){var e=this,i=arguments;return new Promise((function(t,r){var u=n.apply(e,i);function o(n){a(u,t,r,o,s,"next",n)}function s(n){a(u,t,r,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("971f"))}.bind(null,i)).catch(i.oe)},s={data:function(){return{ruleForm:{dingdanbianhao:this.getUUID(),shangpinmingcheng:"",shangpinleixing:"",shangpintupian:"",shangpinjiage:"",goumaishuliang:"",zongjiage:"",yonghuzhanghao:"",yonghuxingming:"",yonghushouji:"",songhuodizhi:"",beizhu:"",ispay:"",userid:""},user:{},ro:{dingdanbianhao:!1,shangpinmingcheng:!1,shangpinleixing:!1,shangpintupian:!1,shangpinjiage:!1,goumaishuliang:!1,zongjiage:!1,yonghuzhanghao:!1,yonghuxingming:!1,yonghushouji:!1,songhuodizhi:!1,beizhu:!1,ispay:!1,userid:!1}}},components:{wPicker:o},computed:{zongjiage:{get:function(){return 1*this.ruleForm.shangpinjiage*this.ruleForm.goumaishuliang}}},onLoad:function(){var e=u(t.default.mark((function e(i){var r,a,u,o;return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(a=e.sent,this.user=a.data,this.ruleForm.yonghuzhanghao=this.user.yonghuzhanghao,this.ruleForm.yonghuxingming=this.user.yonghuxingming,this.ruleForm.yonghushouji=this.user.yonghushouji,this.ruleForm.songhuodizhi=this.user.songhuodizhi,this.ruleForm.userid=n.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid),!i.id){e.next=17;break}return this.ruleForm.id=i.id,e.next=15,this.$api.info("shangpindingdan",this.ruleForm.id);case 15:a=e.sent,this.ruleForm=a.data;case 17:if(!i.cross){e.next=76;break}u=n.getStorageSync("crossObj"),e.t0=t.default.keys(u);case 20:if((e.t1=e.t0()).done){e.next=76;break}if(o=e.t1.value,"dingdanbianhao"!=o){e.next=26;break}return this.ruleForm.dingdanbianhao=u[o],this.ro.dingdanbianhao=!0,e.abrupt("continue",20);case 26:if("shangpinmingcheng"!=o){e.next=30;break}return this.ruleForm.shangpinmingcheng=u[o],this.ro.shangpinmingcheng=!0,e.abrupt("continue",20);case 30:if("shangpinleixing"!=o){e.next=34;break}return this.ruleForm.shangpinleixing=u[o],this.ro.shangpinleixing=!0,e.abrupt("continue",20);case 34:if("shangpintupian"!=o){e.next=38;break}return this.ruleForm.shangpintupian=u[o],this.ro.shangpintupian=!0,e.abrupt("continue",20);case 38:if("shangpinjiage"!=o){e.next=42;break}return this.ruleForm.shangpinjiage=u[o],this.ro.shangpinjiage=!0,e.abrupt("continue",20);case 42:if("goumaishuliang"!=o){e.next=46;break}return this.ruleForm.goumaishuliang=u[o],this.ro.goumaishuliang=!0,e.abrupt("continue",20);case 46:if("zongjiage"!=o){e.next=50;break}return this.ruleForm.zongjiage=u[o],this.ro.zongjiage=!0,e.abrupt("continue",20);case 50:if("yonghuzhanghao"!=o){e.next=54;break}return this.ruleForm.yonghuzhanghao=u[o],this.ro.yonghuzhanghao=!0,e.abrupt("continue",20);case 54:if("yonghuxingming"!=o){e.next=58;break}return this.ruleForm.yonghuxingming=u[o],this.ro.yonghuxingming=!0,e.abrupt("continue",20);case 58:if("yonghushouji"!=o){e.next=62;break}return this.ruleForm.yonghushouji=u[o],this.ro.yonghushouji=!0,e.abrupt("continue",20);case 62:if("songhuodizhi"!=o){e.next=66;break}return this.ruleForm.songhuodizhi=u[o],this.ro.songhuodizhi=!0,e.abrupt("continue",20);case 66:if("beizhu"!=o){e.next=70;break}return this.ruleForm.beizhu=u[o],this.ro.beizhu=!0,e.abrupt("continue",20);case 70:if("userid"!=o){e.next=74;break}return this.ruleForm.userid=u[o],this.ro.userid=!0,e.abrupt("continue",20);case 74:e.next=20;break;case 76:this.styleChange();case 77:case"end":return e.stop()}}),e,this)})));function i(n){return e.apply(this,arguments)}return i}(),methods:{styleChange:function(){this.$nextTick((function(){}))},shangpintupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.shangpintupian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(t.default.mark((function n(){return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.ruleForm.zongjiage=this.zongjiage,this.ruleForm.goumaishuliang){n.next=4;break}return this.$utils.msg("购买数量不能为空"),n.abrupt("return");case 4:if(!this.ruleForm.goumaishuliang||this.$validate.isIntNumer(this.ruleForm.goumaishuliang)){n.next=7;break}return this.$utils.msg("购买数量应输入整数"),n.abrupt("return");case 7:if(this.ruleForm.userid){n.next=10;break}return this.$utils.msg("用户id不能为空"),n.abrupt("return");case 10:if(!this.ruleForm.id){n.next=15;break}return n.next=13,this.$api.update("shangpindingdan",this.ruleForm);case 13:n.next=17;break;case 15:return n.next=17,this.$api.add("shangpindingdan",this.ruleForm);case 17:this.$utils.msgBack("提交成功");case 18:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,i=e.getFullYear(),t=e.getMonth()+1,r=e.getDate();return"start"===n?i-=60:"end"===n&&(i+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(i,"-").concat(t,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,i("543d")["default"])},a112:function(n,e,i){"use strict";var t,r=function(){var n=this,e=n.$createElement;n._self._c},a=[];i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return t}))},b9ab:function(n,e,i){"use strict";var t=i("ce5c"),r=i.n(t);r.a},c7f4:function(n,e,i){"use strict";i.r(e);var t=i("a112"),r=i("1263");for(var a in r)"default"!==a&&function(n){i.d(e,n,(function(){return r[n]}))}(a);i("b9ab");var u,o=i("f0c5"),s=Object(o["a"])(r["default"],t["b"],t["c"],!1,null,"3ab5495f",null,!1,t["a"],u);e["default"]=s.exports},ce5c:function(n,e,i){}},[["4acd","common/runtime","common/vendor"]]]);