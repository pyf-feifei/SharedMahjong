(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2178ab"],{c6bd:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"feedback"},[a("el-table",{ref:"table",attrs:{data:t.Mix_tableData.list,border:"",height:"calc(100vh - 170px)"}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"80",align:"center"}}),a("el-table-column",{attrs:{label:"头像",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-avatar",{attrs:{size:60,src:t.row.member.avatar_url}})]}}])}),a("el-table-column",{attrs:{prop:"member.nick_name",label:"反馈用户名称"}}),a("el-table-column",{attrs:{prop:"member.mobile",label:"联系电话"}}),a("el-table-column",{attrs:{prop:"member.province",label:"地区"}}),a("el-table-column",{attrs:{prop:"content",label:"反馈内容"}}),a("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.status?a("el-tag",{attrs:{type:"success"}},[t._v("已处理")]):a("el-tag",{attrs:{type:"danger"}},[t._v("未处理")])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.status?t._e():a("el-button",{attrs:{type:"warning",icon:"el-icon-edit",size:"mini"},on:{click:function(a){return t.statusHandle([e.row.id])}}},[t._v("已处理 ")])]}}])})],1),a("Pagination",{attrs:{Mix_tableData:t.Mix_tableData,getList:t.getFeedback},on:{pageChange:t.$pageChange}})],1)},l=[],r=a("c7eb"),c=a("1da1"),s=a("b775");function o(t){return Object(s["a"])({url:"/proposal.Proposal/list",method:"post",data:t})}function i(t){return Object(s["a"])({url:"/proposal.Proposal/status",method:"post",data:t})}var u={name:"feedback",methods:{getFeedback:function(){var t=this;return Object(c["a"])(Object(r["a"])().mark((function e(){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o({page:t.Mix_tableData.currentPage,limit:t.Mix_tableData.pageSize}).then((function(e){t.Mix_tableData.list=e.list,t.Mix_tableData.total=e.count}));case 2:case"end":return e.stop()}}),e)})))()},statusHandle:function(t){var e=this;return Object(c["a"])(Object(r["a"])().mark((function a(){return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,i({id:t}).then((function(){e.$message.success("操作成功"),e.getFeedback()}));case 2:case"end":return a.stop()}}),a)})))()}},mounted:function(){this.getFeedback()}},b=u,p=a("2877"),d=Object(p["a"])(b,n,l,!1,null,null,null);e["default"]=d.exports}}]);