(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44ed4f7e"],{"339b":function(e,t,o){"use strict";o.d(t,"d",(function(){return n})),o.d(t,"a",(function(){return s})),o.d(t,"c",(function(){return r})),o.d(t,"b",(function(){return i}));var a=o("b775");function n(e){return Object(a["a"])({url:"/shop.GoodsType/list",method:"post",data:e})}function s(e){return Object(a["a"])({url:"/shop.GoodsType/add",method:"post",data:e})}function r(e){return Object(a["a"])({url:"/shop.GoodsType/edit",method:"post",data:e})}function i(e){return Object(a["a"])({url:"/shop.GoodsType/del",method:"post",data:e})}},"79a2":function(e,t,o){},8256:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"tinymce-container",class:{fullscreen:e.fullscreen},style:{width:e.containerWidth}},[o("textarea",{staticClass:"tinymce-textarea",attrs:{id:e.tinymceId}}),e._v(" "),o("div",{staticClass:"editor-custom-btn-container"},[o("editorImage",{staticClass:"editor-upload-btn",attrs:{color:"#1890ff"},on:{successCBK:e.imageSuccessCBK}})],1)])},n=[],s=(o("b680"),o("a9e3"),o("ac1f"),o("00b4"),o("d3b7"),o("159b"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"upload-container"},[o("el-button",{style:{background:e.color,borderColor:e.color},attrs:{icon:"el-icon-upload",size:"mini",type:"primary"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("上传")]),o("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("el-upload",{staticClass:"editor-slide-upload",attrs:{multiple:!0,"file-list":e.fileList,"show-file-list":!0,"on-remove":e.handleRemove,"on-success":e.handleSuccess,"before-upload":e.beforeUpload,action:e.uploadURL,"list-type":"picture-card"}},[o("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1),o("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("确定")])],1)],1)}),r=[],i=(o("ace4"),o("5cc6"),o("9a8c"),o("a975"),o("735e"),o("c1ac"),o("d139"),o("3a7b"),o("d5d6"),o("82f8"),o("e91f"),o("60bd"),o("5f96"),o("3280"),o("3fcc"),o("ca91"),o("25a1"),o("cd26"),o("3c5d"),o("2954"),o("649e"),o("219c"),o("170b"),o("b39a"),o("72f7"),o("b64b"),o("d81d"),o("3ca3"),o("ddb0"),o("2b3d"),o("9861"),{name:"EditorSlideUpload",props:{color:{type:String,default:"#1890ff"}},data:function(){return{dialogVisible:!1,listObj:{},fileList:[]}},methods:{scale:function(e){var t="image/jpeg"===e.type||"image/png"===e.type,o=e.size/1024/1024<10,a=e.size/1024/1024;if(t){if(o){var n=this;return new Promise((function(t){var o=new FileReader,s=new Image;s.onload=function(o){var r=document.createElement("canvas"),i=r.getContext("2d"),l=s.width,c=s.height,u=800,d=800,m=l,p=c;(l>u||c>d)&&(l/c>u/d?(m=u,p=Math.round(u*(c/l))):(p=d,m=Math.round(d*(l/c)))),r.width=m,r.height=p,i.clearRect(0,0,m,p),i.drawImage(s,0,0,m,p);var f=1;a<1&&a>.3&&(f=.9);var b=r.toDataURL("image/jpeg",f),g=n.dataURItoBlob(b,"image/jpeg");console.log(e.size/1024),console.log(g.size/1024),t(g)},o.onload=function(e){s.src=e.target.result},o.readAsDataURL(e)}))}this.$message.error("文件不能超过10M！")}else this.$message.error("文件格式错误！");return t&&o},dataURItoBlob:function(e,t){for(var o=atob(e.split(",")[1]),a=[],n=0;n<o.length;n++)a.push(o.charCodeAt(n));return new Blob([new Uint8Array(a)],{type:t})},checkAllSuccess:function(){var e=this;return Object.keys(this.listObj).every((function(t){return e.listObj[t].hasSuccess}))},handleSubmit:function(){var e=this,t=Object.keys(this.listObj).map((function(t){return e.listObj[t]}));this.checkAllSuccess()?(this.$emit("successCBK",t),this.listObj={},this.fileList=[],this.dialogVisible=!1):this.$message("Please wait for all images to be uploaded successfully. If there is a network problem, please refresh the page and upload again!")},handleSuccess:function(e,t){for(var o=t.uid,a=Object.keys(this.listObj),n=0,s=a.length;n<s;n++)if(this.listObj[a[n]].uid===o)return this.listObj[a[n]].url=this.baseUrl+e.data,void(this.listObj[a[n]].hasSuccess=!0)},handleRemove:function(e){for(var t=e.uid,o=Object.keys(this.listObj),a=0,n=o.length;a<n;a++)if(this.listObj[o[a]].uid===t)return void delete this.listObj[o[a]]},beforeUpload:function(e){this.scale(e);var t=this,o=window.URL||window.webkitURL,a=e.uid;return this.listObj[a]={},new Promise((function(n,s){var r=new Image;r.src=o.createObjectURL(e),r.onload=function(){t.listObj[a]={hasSuccess:!1,uid:e.uid,width:this.width,height:this.height}},n(!0)}))}}}),l=i,c=(o("b6d8"),o("2877")),u=Object(c["a"])(l,s,r,!1,null,"5b462b8b",null),d=u.exports,m=["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],p=m,f=["searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],b=f,g=o("b85c"),h=[];function _(){return window.tinymce}var v=function(e,t){var o=document.getElementById(e),a=t||function(){};if(!o){var n=document.createElement("script");n.src=e,n.id=e,document.body.appendChild(n),h.push(a);var s="onload"in n?r:i;s(n)}function r(t){t.onload=function(){this.onerror=this.onload=null;var e,o=Object(g["a"])(h);try{for(o.s();!(e=o.n()).done;){var a=e.value;a(null,t)}}catch(n){o.e(n)}finally{o.f()}h=null},t.onerror=function(){this.onerror=this.onload=null,a(new Error("Failed to load "+e),t)}}function i(e){e.onreadystatechange=function(){if("complete"===this.readyState||"loaded"===this.readyState){this.onreadystatechange=null;var t,o=Object(g["a"])(h);try{for(o.s();!(t=o.n()).done;){var a=t.value;a(null,e)}}catch(n){o.e(n)}finally{o.f()}h=null}}}o&&a&&(_()?a(null,o):h.push(a))},y=v,w="https://file.seekr.cc/fwb/js/tinymce.min.js",k={name:"Tinymce",components:{editorImage:d},props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{type:String,default:"file edit insert view format table"},height:{type:[Number,String],required:!1,default:360},width:{type:[Number,String],required:!1,default:"auto"}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id,fullscreen:!1,languageTypeList:{en:"en",zh:"zh_CN",es:"es_MX",ja:"ja"}}},computed:{containerWidth:function(){var e=this.width;return/^[\d]+(\.[\d]+)?$/.test(e)?"".concat(e,"px"):e}},watch:{value:function(e){var t=this;!this.hasChange&&this.hasInit&&this.$nextTick((function(){return window.tinymce.get(t.tinymceId).setContent(e||"")}))}},mounted:function(){this.init()},activated:function(){window.tinymce&&this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()},methods:{init:function(){var e=this;y(w,(function(t){t?e.$message.error(t.message):e.initTinymce()}))},initTinymce:function(){var e=this,t=this;window.tinymce.init({selector:"#".concat(this.tinymceId),language:this.languageTypeList["zh"],height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:b,menubar:this.menubar,plugins:p,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:function(o){t.value&&o.setContent(t.value),t.hasInit=!0,o.on("NodeChange Change KeyUp SetContent",(function(){e.hasChange=!0,e.$emit("input",o.getContent())}))},setup:function(e){e.on("FullscreenStateChanged",(function(e){t.fullscreen=e.state}))},convert_urls:!1})},destroyTinymce:function(){var e=window.tinymce.get(this.tinymceId);this.fullscreen&&e.execCommand("mceFullScreen"),e&&e.destroy()},setContent:function(e){window.tinymce.get(this.tinymceId).setContent(e)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(e){var t=this;e.forEach((function(e){return window.tinymce.get(t.tinymceId).insertContent('<img class="wscnph" src="'.concat(e.url,'" >'))}))}}},x=k,j=(o("ac8b"),Object(c["a"])(x,a,n,!1,null,"ac80a932",null));t["a"]=j.exports},9373:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"goods-manage"},["index"===e.type?o("Index",{on:{changeComponents:e.changeComponents}}):e._e(),"add"===e.type?o("Add",{on:{changeComponents:e.changeComponents}}):e._e(),"edit"===e.type?o("Edit",{on:{changeComponents:e.changeComponents}}):e._e()],1)},n=[],s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"goods-manage-index"},[o("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.addSP}},[e._v("添加商品")]),o("el-button",{attrs:{type:"warning",icon:"el-icon-edit",disabled:1!==e.Mix_tableData.selectionObj.length},on:{click:function(t){return e.editSP(e.Mix_tableData.selectionObj[0])}}},[e._v("编辑")]),o("el-button",{attrs:{type:"danger",icon:"el-icon-delete",disabled:!e.Mix_tableData.selectionIds.length},on:{click:function(t){return e.delSP(e.Mix_tableData.selectionIds)}}},[e._v("批量删除")]),o("el-select",{attrs:{placeholder:"商品分类筛选",clearable:"",filterable:""},model:{value:e.tableData.type_id,callback:function(t){e.$set(e.tableData,"type_id",t)},expression:"tableData.type_id"}},e._l(e.goodsTypeList,(function(e){return o("el-option",{key:e.type_id,attrs:{label:e.type_name,value:e.type_id}})})),1),o("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入商品名称",maxlength:"20",clearable:""},model:{value:e.tableData.goods_name,callback:function(t){e.$set(e.tableData,"goods_name",t)},expression:"tableData.goods_name"}}),o("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.filterGoods}},[e._v("查询")]),o("el-button",{attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:e.resetSearch}},[e._v("重置")]),o("el-table",{ref:"table",staticClass:"mt15",attrs:{data:e.Mix_tableData.list,border:"",height:"calc(100vh - 225px)"},on:{"selection-change":function(t){return e.$selectionChange(t,"goods_id")}}},[o("el-table-column",{attrs:{type:"selection"}}),o("el-table-column",{attrs:{label:"ID",prop:"goods_id",width:"80"}}),o("el-table-column",{attrs:{label:"商品主图",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-image",{staticStyle:{width:"100%",height:"150px"},attrs:{src:e.baseUrl+t.row.goods_image,fit:"cover","preview-src-list":[e.baseUrl+t.row.goods_image]}})]}}])}),o("el-table-column",{attrs:{label:"商品名称",prop:"goods_name"}}),o("el-table-column",{attrs:{label:"商品价格(元)",prop:"goods_price"}}),o("el-table-column",{attrs:{label:"排序",prop:"sort"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-input",{attrs:{maxlength:"10"},on:{input:function(e){t.row.sort=+t.row.sort.replace(/[^\d]/g,"")}},model:{value:t.row.sort,callback:function(o){e.$set(t.row,"sort",o)},expression:"scope.row.sort"}})]}}])}),o("el-table-column",{attrs:{label:"状态",prop:"status"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(o){return e.SPstatusChange(t.row)}},model:{value:t.row.status,callback:function(o){e.$set(t.row,"status",o)},expression:"scope.row.status"}})]}}])}),o("el-table-column",{attrs:{label:"已售",prop:"goods_sold"}}),o("el-table-column",{attrs:{label:"库存",prop:"goods_stock"}}),o("el-table-column",{attrs:{label:"分类",prop:"type_name"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-tag",[e._v(e._s(t.row.type_name))])]}}])}),o("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"warning",icon:"el-icon-edit",size:"mini"},on:{click:function(o){return e.editSP(t.row)}}},[e._v("编辑")]),o("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(o){return e.delSP([t.row.goods_id])}}},[e._v("删除 ")])]}}])})],1),o("Pagination",{attrs:{tableData:e.Mix_tableData,getList:e.getSPList},on:{pageChange:e.$pageChange}})],1)},r=[],i=o("c7eb"),l=o("1da1"),c=o("b775");function u(e){return Object(c["a"])({url:"/shop.Goods/list",method:"post",data:e})}function d(e){return Object(c["a"])({url:"/shop.Goods/add",method:"post",data:e})}function m(e){return Object(c["a"])({url:"/shop.Goods/edit",method:"post",data:e})}function p(e){return Object(c["a"])({url:"/shop.Goods/del",method:"post",data:e})}var f=o("339b"),b={name:"goods-manage-index",data:function(){return{goodsTypeList:[],tableData:{goods_name:"",type_id:""}}},methods:{SPstatusChange:function(e){var t=this;return Object(l["a"])(Object(i["a"])().mark((function o(){return Object(i["a"])().wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,m({goods_id:e.goods_id,status:e.status}).then((function(){t.$message.success("修改成功"),t.getSPList()}));case 2:case"end":return o.stop()}}),o)})))()},resetSearch:function(){this.tableData.type_id="",this.tableData.goods_name=""},filterGoods:function(){this.Mix_tableData.currentPage=1,this.getSPList()},addSP:function(){this.$emit("changeComponents","add")},editSP:function(e){var t=this;return Object(l["a"])(Object(i["a"])().mark((function o(){return Object(i["a"])().wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,t.$store.dispatch("shopping-mall-manage/goods-manage/setGoodsData",e);case 2:t.$emit("changeComponents","edit");case 3:case"end":return o.stop()}}),o)})))()},delSP:function(e){var t=this;this.$confirm("您确定要删除该商品吗?","温馨提示",{cancelButtonText:"点错了",type:"warning"}).then(Object(l["a"])(Object(i["a"])().mark((function o(){return Object(i["a"])().wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,p({goods_id:e}).then((function(){t.$message.success("删除成功"),t.Mix_tableData.currentPage=1,t.getSPList()}));case 2:case"end":return o.stop()}}),o)})))).catch((function(){}))},getSPList:function(){var e=this;return Object(l["a"])(Object(i["a"])().mark((function t(){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u({page:e.Mix_tableData.currentPage,limit:e.Mix_tableData.pageSize,goods_name:e.tableData.goods_name,type_id:e.tableData.type_id}).then((function(t){e.Mix_tableData.list=t.list,e.Mix_tableData.total=t.count}));case 2:case"end":return t.stop()}}),t)})))()},getSPTypeList:function(){var e=this;return Object(l["a"])(Object(i["a"])().mark((function t(){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["d"])().then((function(t){e.goodsTypeList=t.list}));case 2:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.getSPList(),this.getSPTypeList()}},g=b,h=o("2877"),_=Object(h["a"])(g,s,r,!1,null,"23c1ec3a",null),v=_.exports,y=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"goods-manage-add"},[o("el-row",[o("el-col",[o("el-form",{ref:"form",attrs:{model:e.form,rules:e.formRules,"label-width":"120px"}},[o("el-form-item",{attrs:{label:"商品主图",prop:"goods_image"}},[o("el-upload",{attrs:{action:e.uploadURL,"before-upload":e.beforeUpload,"list-type":"picture-card",limit:1,"on-remove":e.removeUpload,"on-success":e.uploadSuccess}},[o("i",{staticClass:"el-icon-plus"})]),o("el-tag",{attrs:{type:"warning"}},[e._v("仅限上传一张，尺寸为1065*600")])],1),o("el-form-item",{attrs:{prop:"goods_name",label:"商品名称"}},[o("el-input",{attrs:{placeholder:"请输入商品名称",maxlength:"50"},model:{value:e.form.goods_name,callback:function(t){e.$set(e.form,"goods_name","string"===typeof t?t.trim():t)},expression:"form.goods_name"}})],1),o("el-form-item",{attrs:{prop:"shipping_remarks",label:"发货备注"}},[o("el-input",{attrs:{placeholder:"发货备注"},model:{value:e.form.shipping_remarks,callback:function(t){e.$set(e.form,"shipping_remarks","string"===typeof t?t.trim():t)},expression:"form.shipping_remarks"}})],1),o("el-form-item",{attrs:{prop:"goods_price",label:"商品价格"}},[o("el-input-number",{attrs:{min:0,max:5e5,precision:2},model:{value:e.form.goods_price,callback:function(t){e.$set(e.form,"goods_price",t)},expression:"form.goods_price"}})],1),o("el-form-item",{attrs:{prop:"goods_stock",label:"库存"}},[o("el-input-number",{attrs:{min:0,max:5e5,precision:0},model:{value:e.form.goods_stock,callback:function(t){e.$set(e.form,"goods_stock",t)},expression:"form.goods_stock"}})],1),o("el-form-item",{attrs:{prop:"goods_sold",label:"已售数量"}},[o("el-input-number",{attrs:{min:0,max:5e5,precision:0},model:{value:e.form.goods_sold,callback:function(t){e.$set(e.form,"goods_sold",t)},expression:"form.goods_sold"}})],1),o("el-form-item",{attrs:{prop:"type_id",label:"商品分类"}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.type_id,callback:function(t){e.$set(e.form,"type_id",t)},expression:"form.type_id"}},e._l(e.spTypeArr,(function(e){return o("el-option",{key:e.type_id,attrs:{label:e.type_name,value:e.type_id}})})),1)],1),o("el-form-item",{attrs:{prop:"sort",label:"排序"}},[o("el-input-number",{attrs:{min:0,max:5e5,precision:0},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1),o("el-form-item",{attrs:{prop:"recommend_status",label:"推荐"}},[o("el-radio",{attrs:{label:0},model:{value:e.form.recommend_status,callback:function(t){e.$set(e.form,"recommend_status",t)},expression:"form.recommend_status"}},[e._v("否")]),o("el-radio",{attrs:{label:1},model:{value:e.form.recommend_status,callback:function(t){e.$set(e.form,"recommend_status",t)},expression:"form.recommend_status"}},[e._v("是")])],1),o("el-form-item",{attrs:{prop:"status",label:"状态"}},[o("el-radio",{attrs:{label:0},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[e._v("禁用")]),o("el-radio",{attrs:{label:1},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[e._v("开启")])],1),o("el-form-item",{attrs:{prop:"goods_about",label:"商品介绍"}},[o("tinymce",{ref:"tinymce",attrs:{height:300},model:{value:e.form.goods_about,callback:function(t){e.$set(e.form,"goods_about",t)},expression:"form.goods_about"}})],1),o("el-form-item",[o("el-button",{attrs:{icon:"el-icon-back"},on:{click:e.back}},[e._v("返回")]),o("el-button",{attrs:{type:"primary",icon:"el-icon-check"},on:{click:e.submit}},[e._v("确定添加 ")])],1)],1)],1)],1)],1)},w=[],k=(o("d3b7"),o("ace4"),o("5cc6"),o("9a8c"),o("a975"),o("735e"),o("c1ac"),o("d139"),o("3a7b"),o("d5d6"),o("82f8"),o("e91f"),o("60bd"),o("5f96"),o("3280"),o("3fcc"),o("ca91"),o("25a1"),o("cd26"),o("3c5d"),o("2954"),o("649e"),o("219c"),o("170b"),o("b39a"),o("72f7"),o("8256")),x={name:"goods-manage-add",components:{Tinymce:k["a"]},data:function(){return{spTypeArr:[],form:{goods_image:"",goods_name:"",shipping_remarks:"",goods_price:"",goods_stock:"",goods_sold:0,recommend_status:0,goods_about:"",type_id:"",sort:0,status:1},formRules:{goods_image:[{required:!0,message:"请上传商品主图"}],goods_name:[{required:!0,message:"请输入商品名称"}],type_id:[{required:!0,message:"请选择商品类型"}]}}},methods:{beforeUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type,o=e.size/1024/1024<10,a=e.size/1024/1024;if(t){if(o){var n=this;return new Promise((function(t){var o=new FileReader,s=new Image;s.onload=function(o){var r=document.createElement("canvas"),i=r.getContext("2d"),l=s.width,c=s.height,u=800,d=800,m=l,p=c;(l>u||c>d)&&(l/c>u/d?(m=u,p=Math.round(u*(c/l))):(p=d,m=Math.round(d*(l/c)))),r.width=m,r.height=p,i.clearRect(0,0,m,p),i.drawImage(s,0,0,m,p);var f=1;a<1&&a>.3&&(f=.9);var b=r.toDataURL("image/jpeg",f),g=n.dataURItoBlob(b,"image/jpeg");console.log(e.size/1024),console.log(g.size/1024),t(g)},o.onload=function(e){s.src=e.target.result},o.readAsDataURL(e)}))}this.$message.error("文件不能超过10M！")}else this.$message.error("文件格式错误！");return t&&o},dataURItoBlob:function(e,t){for(var o=atob(e.split(",")[1]),a=[],n=0;n<o.length;n++)a.push(o.charCodeAt(n));return new Blob([new Uint8Array(a)],{type:t})},uploadSuccess:function(e){console.log("https://rrt-server.seekr.cc/"+e.data),this.form.goods_image=e.data},removeUpload:function(){this.form.goods_image=""},back:function(){this.$emit("changeComponents","index")},submit:function(){var e=this;this.$refs["form"].validate(function(){var t=Object(l["a"])(Object(i["a"])().mark((function t(o){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!o){t.next=5;break}return t.next=3,d(e.form).then((function(){e.$message.success("添加成功"),e.back()}));case 3:t.next=6;break;case 5:return t.abrupt("return",!1);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},getSPTypeList:function(){var e=this;return Object(l["a"])(Object(i["a"])().mark((function t(){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["d"])().then((function(t){e.spTypeArr=t.list}));case 2:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.getSPTypeList()}},j=x,O=Object(h["a"])(j,y,w,!1,null,"85c0741c",null),$=O.exports,S=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"goods-manage-edit"},[o("el-row",[o("el-col",[o("el-form",{ref:"form",attrs:{model:e.form,rules:e.formRules,"label-width":"120px"}},[o("el-form-item",{attrs:{label:"商品主图",prop:"goods_image"}},[o("el-upload",{attrs:{action:e.uploadURL,"before-upload":e.beforeUpload,"list-type":"picture-card",limit:1,"on-remove":e.removeUpload,"on-success":e.uploadSuccess,"file-list":e.fileList}},[o("i",{staticClass:"el-icon-plus"})]),o("el-tag",{attrs:{type:"warning"}},[e._v("仅限上传一张，尺寸为1065*600")])],1),o("el-form-item",{attrs:{prop:"goods_name",label:"商品名称"}},[o("el-input",{attrs:{placeholder:"请输入商品名称",maxlength:"50"},model:{value:e.form.goods_name,callback:function(t){e.$set(e.form,"goods_name","string"===typeof t?t.trim():t)},expression:"form.goods_name"}})],1),o("el-form-item",{attrs:{prop:"shipping_remarks",label:"发货备注"}},[o("el-input",{attrs:{placeholder:"发货备注"},model:{value:e.form.shipping_remarks,callback:function(t){e.$set(e.form,"shipping_remarks","string"===typeof t?t.trim():t)},expression:"form.shipping_remarks"}})],1),o("el-form-item",{attrs:{prop:"goods_price",label:"商品价格"}},[o("el-input-number",{attrs:{min:0,max:5e5,precision:2},model:{value:e.form.goods_price,callback:function(t){e.$set(e.form,"goods_price",t)},expression:"form.goods_price"}})],1),o("el-form-item",{attrs:{prop:"goods_stock",label:"库存"}},[o("el-input-number",{attrs:{min:0,max:5e5,precision:0},model:{value:e.form.goods_stock,callback:function(t){e.$set(e.form,"goods_stock",t)},expression:"form.goods_stock"}})],1),o("el-form-item",{attrs:{prop:"goods_sold",label:"已售数量"}},[o("el-input-number",{attrs:{min:0,max:5e5,precision:0},model:{value:e.form.goods_sold,callback:function(t){e.$set(e.form,"goods_sold",t)},expression:"form.goods_sold"}})],1),o("el-form-item",{attrs:{prop:"type_id",label:"商品分类"}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.type_id,callback:function(t){e.$set(e.form,"type_id",t)},expression:"form.type_id"}},e._l(e.spTypeArr,(function(e){return o("el-option",{key:e.type_id,attrs:{label:e.type_name,value:e.type_id}})})),1)],1),o("el-form-item",{attrs:{prop:"sort",label:"排序"}},[o("el-input-number",{attrs:{min:0,max:5e5,precision:0},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1),o("el-form-item",{attrs:{prop:"recommend_status",label:"推荐"}},[o("el-radio",{attrs:{label:0},model:{value:e.form.recommend_status,callback:function(t){e.$set(e.form,"recommend_status",t)},expression:"form.recommend_status"}},[e._v("否")]),o("el-radio",{attrs:{label:1},model:{value:e.form.recommend_status,callback:function(t){e.$set(e.form,"recommend_status",t)},expression:"form.recommend_status"}},[e._v("是")])],1),o("el-form-item",{attrs:{prop:"status",label:"状态"}},[o("el-radio",{attrs:{label:0},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[e._v("禁用")]),o("el-radio",{attrs:{label:1},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[e._v("开启")])],1),o("el-form-item",{attrs:{prop:"goods_about",label:"商品介绍"}},[o("tinymce",{ref:"tinymce",attrs:{height:300},model:{value:e.form.goods_about,callback:function(t){e.$set(e.form,"goods_about",t)},expression:"form.goods_about"}})],1),o("el-form-item",[o("el-button",{attrs:{icon:"el-icon-back"},on:{click:e.back}},[e._v("返回")]),o("el-button",{attrs:{type:"primary",icon:"el-icon-check"},on:{click:e.submit}},[e._v("确定修改")])],1)],1)],1)],1)],1)},C=[],L=o("5530"),U=o("2f62"),D={name:"goods-manage-eidt",components:{Tinymce:k["a"]},computed:Object(L["a"])({},Object(U["c"])({gooodsData:function(e){return e["shopping-mall-manage/goods-manage"].goodsData}})),data:function(){return{spTypeArr:[],form:{},fileList:[],formRules:{goods_image:[{required:!0,message:"请上传商品主图"}],goods_name:[{required:!0,message:"请输入商品名称"}],type_id:[{required:!0,message:"请选择商品类型"}]}}},methods:{beforeUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type,o=e.size/1024/1024<10,a=e.size/1024/1024;if(t){if(o){var n=this;return new Promise((function(t){var o=new FileReader,s=new Image;s.onload=function(o){var r=document.createElement("canvas"),i=r.getContext("2d"),l=s.width,c=s.height,u=800,d=800,m=l,p=c;(l>u||c>d)&&(l/c>u/d?(m=u,p=Math.round(u*(c/l))):(p=d,m=Math.round(d*(l/c)))),r.width=m,r.height=p,i.clearRect(0,0,m,p),i.drawImage(s,0,0,m,p);var f=1;a<1&&a>.3&&(f=.9);var b=r.toDataURL("image/jpeg",f),g=n.dataURItoBlob(b,"image/jpeg");console.log(e.size/1024),console.log(g.size/1024),t(g)},o.onload=function(e){s.src=e.target.result},o.readAsDataURL(e)}))}this.$message.error("文件不能超过10M！")}else this.$message.error("文件格式错误！");return t&&o},dataURItoBlob:function(e,t){for(var o=atob(e.split(",")[1]),a=[],n=0;n<o.length;n++)a.push(o.charCodeAt(n));return new Blob([new Uint8Array(a)],{type:t})},uploadSuccess:function(e){this.form.goods_image=e.data},removeUpload:function(){this.form.goods_image=""},back:function(){this.$emit("changeComponents","index")},submit:function(){var e=this;this.$refs["form"].validate(function(){var t=Object(l["a"])(Object(i["a"])().mark((function t(o){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!o){t.next=5;break}return t.next=3,m(e.form).then((function(){e.$message.success("修改成功"),e.back()}));case 3:t.next=6;break;case 5:return t.abrupt("return",!1);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},getSPTypeList:function(){var e=this;return Object(l["a"])(Object(i["a"])().mark((function t(){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["d"])().then((function(t){e.spTypeArr=t.list}));case 2:case"end":return t.stop()}}),t)})))()},initFileList:function(){this.fileList=[{name:"",url:this.baseUrl+this.form.goods_image}]}},mounted:function(){this.getSPTypeList(),this.form=this.gooodsData,this.initFileList()}},I=D,T=Object(h["a"])(I,S,C,!1,null,"276659c8",null),P=T.exports,R={name:"goods-manage",components:{Index:v,Add:$,Edit:P},data:function(){return{type:"index"}},methods:{changeComponents:function(e){this.type=e}}},M=R,z=Object(h["a"])(M,a,n,!1,null,"4588e1d0",null);t["default"]=z.exports},ac8b:function(e,t,o){"use strict";o("79a2")},b6d8:function(e,t,o){"use strict";o("f1c2")},f1c2:function(e,t,o){}}]);