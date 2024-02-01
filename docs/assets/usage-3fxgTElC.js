import{_ as n}from"./SourceCode.vue_vue_type_style_index_0_lang-e1zMp6eg.js";import{_ as s}from"./DocMain.vue_vue_type_style_index_0_lang-9TYAKqAK.js";import{d as l,o as c,e as i,w as u,b as t,u as r,a as o,k as e}from"./index-aWLd-FXG.js";import"./Button.vue_vue_type_script_setup_true_lang-5x5K2nS-.js";const p=`:root {
  /* button、input 元素高度 */
  --nt-form-edit-height: 32px;
  /* 主题(primary)颜色 */
  --nt-primary-color: #4998f6;
  /* 表示错误(error)的颜色 */
  --nt-error-color: #ed3f13;
  /* 表示成功(success)的颜色 */
  --nt-success-color: #19bf6c;
  /* 表示警告(warn)的颜色 */
  --nt-warn-color: #f90;
  /* 表示信息(info)的颜色 */
  --nt-info-color: #999;
  /* 边框颜色 */
  --nt-border-color: #dedede;
}
`,_=o("h1",null,"使用介绍",-1),a=o("p",null,[e(" UI库除了依赖于 Vue3 外，还依赖于 "),o("a",{href:"https://gitee.com/towardly/ph/wikis/Home"},"ph-utils: 一个自己整理的一些常用的工具类")],-1),d=o("h2",null,"使用",-1),h=o("h3",null,"1. 安装依赖",-1),m=o("h3",null,"2. 按需引入",-1),v=o("p",null,"当前按需引入只支持在 Vite 中配合自动导入实现",-1),f=o("p",null,[e(" 安装依赖"),o("a",{href:"https://www.npmjs.com/package/unplugin-vue-components"},"unplugin-vue-components"),e(" + "),o("a",{href:"https://www.npmjs.com/package/neatui-vue-resolver"},"neatui-vue-resolver")],-1),g=o("p",null,"在 vite.config.ts 的 plugins 添加如下代码：",-1),w=o("p",null,"当然如果不想自动引入，也可以手动引入组件和样式文件，例如：",-1),x=o("h3",null,"3. 全局CSS样式",-1),y=o("p",null," 组件库的样式全部使用 CSS 变量控制，为了让样式可控变得简单化，所以需要手动引入全局变量文件 ",-1),b=o("p",null,"在入口文件，如 main.ts 中引入",-1),k=o("p",null,"该变量样式文件包含如下内容",-1),C=o("h2",null,"样式修改",-1),B=o("h3",null,"修改全局变量",-1),N=o("p",null," 这之后如果想要修改样式，在需要在该引入的地方，重新引入一个新的样式表，然后覆盖上面的样式即可 ",-1),V=o("p",null,"例如，想把侧边栏宽度改为 200px, 可以通过下面这样",-1),S={class:"ul-list"},j=o("p",null,"1. 在 main.ts 引入样式表",-1),R=o("p",null,"2. 在 style.css 中添加样式",-1),$=o("p",null,"通过上面就能修改，当然也能在侧边栏的样式的地方，手动覆盖变量也能实现",-1),D=o("h3",null,"修改组件样式",-1),H=o("p",null," 组件所有的样式都基本只有一层，所以如果要修改样式，在需要套一个层级就能修改 ",-1),I=o("p",null,"比如想修改 Button 样式, 只需要给根节点添加一个样式，例如: #app",-1),T=o("p",null,"然后就能修改样式，如下：",-1),U=o("h2",null,"浏览器兼容性",-1),q=o("p",null,"所有的组件尽量保证 ios 能够兼容到11",-1),z=`
import Components from 'unplugin-vue-components/vite'
import NeatuiResolver from 'neatui-vue-resolver'

plugins: [
  // ...
  Components({
    dts: 'src/components.d.ts',
    resolvers: [NeatuiResolver()],
  }),
]
`,A=`
import { Button } from 'neatui-vue'
import 'neatui-vue/style/button/index.css'
`,E=`
import 'neatui-vue/style/vars.css';
import './style.css'
`,F=`
:root {
  --nt-aside-width: 200px;
}
`,G=`
#app .nt-button {
  background-color: red;
}
`,W=l({__name:"usage",setup(J){return(K,L)=>(c(),i(s,null,{default:u(()=>[_,a,d,h,t(n,{code:"npm install ph-utils @asteres/neatui-vue",lang:"shell"}),m,v,f,t(n,{code:"npm install unplugin-vue-components neatui-vue-resolver -D",lang:"shell"}),g,t(n,{code:z}),w,t(n,{code:A}),x,y,b,t(n,{code:"import 'neatui-vue/style/vars.css';"}),k,t(n,{code:r(p),lang:"css"},null,8,["code"]),C,B,N,V,o("ul",S,[o("li",null,[j,t(n,{code:E})]),o("li",null,[R,t(n,{code:F,lang:"css"})])]),$,D,H,I,T,t(n,{code:G,lang:"css"}),U,q]),_:1}))}});export{W as default};
