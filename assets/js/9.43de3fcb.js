(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{578:function(t,e,o){"use strict";o.r(e);o(335),o(56),o(36);var n={name:"demo",props:["title","description","data","option"],data:function(){return{codeParent:[],codeHeightArr:[],isShow:[],codeStr:"\n          <g-button>默认按钮</g-button>\n        ".replace(/^\s*/gm,"").trim()}},methods:{showCode:function(t){var e=this;this.$set(this.isShow,t,!this.isShow[t]),this.$nextTick((function(){!0===e.isShow[t]?e.codeParent[t].style.height=+e.codeHeightArr[t]+25+"px":e.codeParent[t].style.height=0}))},getCodesHeight:function(){var t=document.getElementsByClassName("code-content-height");this.codeParent=document.getElementsByClassName("code-content");for(var e=t.length,o=0;o<e;o++)this.codeHeightArr.push(t[o].getBoundingClientRect().height),this.isShow.push(!1)}},mounted:function(){var t=this;this.$nextTick((function(){t.getCodesHeight()}))}},s=o(6),i=Object(s.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"component-wrapper"},[o("div",{staticClass:"component-wrapper-demo"},[t._t("default")],2),t._v(" "),o("div",{staticClass:"code-content",staticStyle:{height:"0"}},[o("div",{staticClass:"code-content-height"},[o("pre",[t._v("            "),o("code",{staticClass:"vue"},[t._v("\n"+t._s(t.description)+"\n\ndata: "+t._s(t.data)+"\n\noption: "+t._s(t.option)+"\n            ")]),t._v("\n        ")])])]),t._v(" "),o("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(e){return t.showCode(0)}}},[o("i",{staticClass:"icon-down",class:!1===t.isShow[0]?"el-icon-caret-bottom":"el-icon-caret-top"}),t._v(" "),o("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow[0]?"显示代码":"隐藏代码"))])])])}),[],!1,null,"edb8e220",null);e.default=i.exports}}]);