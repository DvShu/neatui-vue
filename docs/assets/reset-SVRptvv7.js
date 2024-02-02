import{_ as e}from"./SourceCode.vue_vue_type_style_index_0_lang-QsnfW6Zg.js";import{_ as o}from"./DocMain.vue_vue_type_style_index_0_lang-MoBQsxAA.js";import{d as s,o as a,e as i,w as r,b as t,u as l,a as n}from"./index-AcABN1G1.js";import"./Button.vue_vue_type_script_setup_true_lang-kwCzU75B.js";const c=`/* 一般开发网页的时候，都是按照100%来开发 */
html,
body {
  height: 100%;
}
body {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}
/* 修复由于 inline baseline 导致的图片下方的空白间隙问题 */
img {
  vertical-align: top;
}
/* 非大面积文字排版网站通常不需要列表项，如果需要可单独设置 */
ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
/* 统一采用盒子模式 */
div {
  box-sizing: border-box;
}
/*
 * 去除链接默认的下划线，提高文字可读性
 */
a {
  text-decoration: none;
  color: #4998f6;
  cursor: pointer;
  transition: color 0.3s;
}
a:hover {
  color: #5ba2f7; /* less tint(#4998f6, 10%) */
}
a:active {
  color: #64a7f7; /* less tint(#4998f6, 15%) */
}`,d=n("p",null,"组件默认是没有进行样式重置，但是也提供了样式重置文件，可以手动引入",-1),_=n("p",null,"建议将样式重置放在最开始引入。",-1),p=n("p",null,"重置样式包含如下内容：",-1),v=s({__name:"reset",setup(f){return(m,u)=>(a(),i(o,{"has-aside":!1},{default:r(()=>[d,t(e,{code:"import 'neatui-vue/style/reset.css'"}),_,p,t(e,{lang:"css",code:l(c)},null,8,["code"])]),_:1}))}});export{v as default};
