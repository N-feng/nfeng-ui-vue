(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{579:function(e,a,t){"use strict";t.r(a);var r=t(57),n=(t(123),{data:function(){return{dic:{dicData:[{label:"男",value:0},{label:"女",value:1}]},formData:{},option:{title:"新增表单",labelWidth:"80px",operate:[{title:"保存",operate:"handleSave"}],items:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex",type:"select",dicName:"dicData",options:[],labelKey:"label",valueKey:"value"},{label:"日期",prop:"date",type:"date"}]}}},methods:{handleSave:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$refs.form.submitForm();case 2:if(t=a.sent,t.valid){a.next=6;break}return a.abrupt("return");case 6:e.$message.success(JSON.stringify(e.formData));case 7:case"end":return a.stop()}}),a)})))()}}}),o=t(6),l=Object(o.a)(n,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("ygp-form",{ref:"form",attrs:{dic:e.dic,option:e.option},on:{handleSave:e.handleSave},model:{value:e.formData,callback:function(a){e.formData=a},expression:"formData"}})],1)}),[],!1,null,null,null);a.default=l.exports}}]);