(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19a8de34"],{"339b":function(t,e,a){"use strict";a.d(e,"d",(function(){return o})),a.d(e,"a",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return s}));var n=a("b775");function o(t){return Object(n["a"])({url:"/shop.GoodsType/list",method:"post",data:t})}function i(t){return Object(n["a"])({url:"/shop.GoodsType/add",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/shop.GoodsType/edit",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/shop.GoodsType/del",method:"post",data:t})}},"4e82":function(t,e,a){"use strict";var n=a("23e7"),o=a("1c0b"),i=a("7b0b"),r=a("d039"),s=a("a640"),l=[],c=l.sort,u=r((function(){l.sort(void 0)})),d=r((function(){l.sort(null)})),p=s("sort"),f=u||!d||!p;n({target:"Array",proto:!0,forced:f},{sort:function(t){return void 0===t?c.call(i(this)):c.call(i(this),o(t))}})},ba41:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"goods-type-manage"},["index"===t.type?a("Index",{on:{changeComponents:t.changeComponents}}):t._e()],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"goods-type-manage-index"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.addSPType}},[t._v("添加分类")]),a("el-button",{attrs:{type:"warning",icon:"el-icon-edit",disabled:1!==t.Mix_tableData.selectionObj.length},on:{click:function(e){return t.editSPType(t.Mix_tableData.selectionObj[0])}}},[t._v("编辑")]),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",disabled:!t.Mix_tableData.selectionIds.length},on:{click:function(e){return t.delSPType(t.Mix_tableData.selectionIds)}}},[t._v("批量删除")]),a("el-table",{ref:"table",staticClass:"mt15",attrs:{data:t.Mix_tableData.list,border:"",height:"calc(100vh - 225px)"},on:{"selection-change":function(e){return t.$selectionChange(e,"type_id")}}},[a("el-table-column",{attrs:{type:"selection"}}),a("el-table-column",{attrs:{label:"ID",prop:"type_id"}}),a("el-table-column",{attrs:{label:"分类名称",prop:"type_name"}}),a("el-table-column",{attrs:{label:"排序"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{maxlength:"10"},on:{blur:function(a){return t.changeType(e.row)},input:function(t){e.row.sort=+e.row.sort.replace(/[^\d]/g,"")}},model:{value:e.row.sort,callback:function(a){t.$set(e.row,"sort",a)},expression:"scope.row.sort"}})]}}])}),a("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(a){return t.changeType(e.row)}},model:{value:e.row.status,callback:function(a){t.$set(e.row,"status",a)},expression:"scope.row.status"}})]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"warning",icon:"el-icon-edit",size:"mini"},on:{click:function(a){return t.editSPType(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(a){return t.delSPType([e.row.type_id])}}},[t._v("删除 ")])]}}])})],1),a("Pagination",{attrs:{tableData:t.Mix_tableData,getList:t.getSPTypeList},on:{pageChange:t.$pageChange}}),a("el-dialog",{attrs:{title:t.dialog.title,visible:t.dialog.show,"show-close":!1,width:"30%"},on:{"update:visible":function(e){return t.$set(t.dialog,"show",e)}}},[a("el-form",{ref:"form",attrs:{model:t.dialog.form,rules:t.dialog.formRules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"分类名称",prop:"type_name"}},[a("el-input",{attrs:{placeholder:"请输入商品分类名称",maxlength:"10"},model:{value:t.dialog.form.type_name,callback:function(e){t.$set(t.dialog.form,"type_name","string"===typeof e?e.trim():e)},expression:"dialog.form.type_name"}})],1),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-radio",{attrs:{label:1},model:{value:t.dialog.form.status,callback:function(e){t.$set(t.dialog.form,"status",e)},expression:"dialog.form.status"}},[t._v("开启")]),a("el-radio",{attrs:{label:0},model:{value:t.dialog.form.status,callback:function(e){t.$set(t.dialog.form,"status",e)},expression:"dialog.form.status"}},[t._v("禁用")])],1),a("el-form-item",{attrs:{label:"排序",prop:"sort"}},[a("el-input-number",{attrs:{min:0,max:5e5,precision:0},model:{value:t.dialog.form.sort,callback:function(e){t.$set(t.dialog.form,"sort",e)},expression:"dialog.form.sort"}})],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.hideDialog}},[t._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.submitDialog}},[t._v("确定")])],1)],1)],1)},r=[],s=a("c7eb"),l=a("1da1"),c=(a("4e82"),a("339b")),u={name:"goods-type-manage-index",data:function(){return{dialog:{title:"",show:!1,form:{type_name:"",status:1,sort:0,type_id:""},formRules:{type_name:[{required:!0,message:"请输入商品分类名称"}]}}}},methods:{changeType:function(t){var e=this;return Object(l["a"])(Object(s["a"])().mark((function a(){return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(c["c"])(t).then((function(){e.$message.success("修改成功"),e.getSPTypeList()}));case 2:case"end":return a.stop()}}),a)})))()},hideDialog:function(){this.dialog.form.type_name="",this.dialog.form.status=1,this.dialog.form.sort=0,this.dialog.form.type_id="",this.dialog.show=!1,this.$refs["form"].resetFields()},submitDialog:function(){var t=this;this.$refs["form"].validate(function(){var e=Object(l["a"])(Object(s["a"])().mark((function e(a){return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=9;break}if("添加商品分类"!==t.dialog.title){e.next=4;break}return e.next=4,Object(c["a"])(t.dialog.form).then((function(){t.$message.success("添加成功"),t.hideDialog(),t.Mix_tableData.currentPage=1,t.getSPTypeList()}));case 4:if("编辑商品分类"!==t.dialog.title){e.next=7;break}return e.next=7,Object(c["c"])(t.dialog.form).then((function(){t.$message.success("修改成功"),t.hideDialog(),t.Mix_tableData.currentPage=1,t.getSPTypeList()}));case 7:e.next=10;break;case 9:return e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},addSPType:function(){this.dialog.title="添加商品分类",this.dialog.show=!0},editSPType:function(t){this.dialog.title="编辑商品分类",this.dialog.form.type_id=t.type_id,this.dialog.form.type_name=t.type_name,this.dialog.form.sort=t.sort,this.dialog.form.status=t.status,this.dialog.show=!0},delSPType:function(t){var e=this;this.$confirm("您确定要删除该商品分类吗?","温馨提示",{cancelButtonText:"点错了",type:"warning"}).then(Object(l["a"])(Object(s["a"])().mark((function a(){return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(c["b"])({type_id:t}).then((function(){e.$message.success("删除成功"),e.Mix_tableData.currentPage=1,e.getSPTypeList()}));case 2:case"end":return a.stop()}}),a)})))).catch((function(){}))},getSPTypeList:function(){var t=this;return Object(l["a"])(Object(s["a"])().mark((function e(){return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["d"])({page:t.Mix_tableData.currentPage,limit:t.Mix_tableData.pageSize}).then((function(e){t.Mix_tableData.list=e.list,t.Mix_tableData.total=e.count}));case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getSPTypeList()}},d=u,p=a("2877"),f=Object(p["a"])(d,i,r,!1,null,"2293e73f",null),m=f.exports,b={name:"goods-type-manage",components:{Index:m},data:function(){return{type:"index"}},methods:{changeComponents:function(t){this.type=t}}},g=b,h=Object(p["a"])(g,n,o,!1,null,"31a47b8d",null);e["default"]=h.exports}}]);