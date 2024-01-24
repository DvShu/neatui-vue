import{_ as r}from"./SourceCode.vue_vue_type_style_index_0_lang-ecsAkHiK.js";import{d as t,o,c as s,a as e,u as i,e as n}from"./index-BY3UnrMK.js";const a=`/* 一般开发网页的时候，都是按照100%来开发 */\r
html,\r
body {\r
  height: 100%;\r
}\r
body {\r
  margin: 0;\r
  font-size: 14px;\r
  line-height: 1.6;\r
  -webkit-text-size-adjust: 100%;\r
  -webkit-tap-highlight-color: transparent;\r
}\r
/* 修复由于 inline baseline 导致的图片下方的空白间隙问题 */\r
img {\r
  vertical-align: top;\r
}\r
/* 非大面积文字排版网站通常不需要列表项，如果需要可单独设置 */\r
ul,\r
ol {\r
  list-style: none;\r
  margin: 0;\r
  padding: 0;\r
}\r
/* 统一采用盒子模式 */\r
div {\r
  box-sizing: border-box;\r
}\r
/*\r
 * 去除链接默认的下划线，提高文字可读性\r
 */\r
a {\r
  text-decoration: none;\r
  color: #4998f6;\r
  cursor: pointer;\r
  transition: color 0.3s;\r
}\r
a:hover {\r
  color: #5ba2f7; /* less tint(#4998f6, 10%) */\r
}\r
a:active {\r
  color: #64a7f7; /* less tint(#4998f6, 15%) */\r
}`,l={class:"nt-scrollbar doc-main"},c=n("p",null,"组件默认是没有进行样式重置，但是也提供了样式重置文件，可以手动引入",-1),d=n("p",null,"建议将样式重置放在最开始引入。",-1),_=n("p",null,"重置样式包含如下内容：",-1),g=t({__name:"reset",setup(p){return(m,u)=>(o(),s("div",l,[c,e(r,{code:"import 'neatui-vue/style/reset.css'"}),d,_,e(r,{lang:"css",code:i(a)},null,8,["code"])]))}});export{g as default};
