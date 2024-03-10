import{_ as t}from"./SourceCode.vue_vue_type_style_index_0_lang-X3cUeUeB.js";import{_ as n}from"./DocMain.vue_vue_type_style_index_0_lang-CPE3a1lM.js";import{d as l,o as c,c as u,w as r,a as e,u as i,b as o,e as s}from"./index-Dyi9F3Hy.js";import"./Button.vue_vue_type_script_setup_true_lang-CWxYsInT.js";const a=`:root {
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
`,p=o("h1",null,"使用介绍",-1),_=o("p",null,[s(" UI库除了依赖于 Vue3 外，还依赖于 "),o("a",{href:"https://gitee.com/towardly/ph/wikis/Home"},"ph-utils: 一个自己整理的一些常用的工具类")],-1),d=o("h2",null,"使用",-1),h=o("h3",null,"1. 安装依赖",-1),m=o("h3",null,"2. 按需引入",-1),v=o("p",null,"当前按需引入只支持在 Vite 中配合自动导入实现",-1),f=o("p",null,[s(" 安装依赖"),o("a",{href:"https://www.npmjs.com/package/unplugin-vue-components"},"unplugin-vue-components"),s(" + "),o("a",{href:"https://www.npmjs.com/package/neatui-vue-resolver"},"neatui-vue-resolver")],-1),g=o("p",null,"在 vite.config.ts 的 plugins 添加如下代码：",-1),w=o("p",null,"当然如果不想自动引入，也可以手动引入组件和样式文件，例如：",-1),b=o("h3",null,"3. 全局CSS样式",-1),y=o("p",null," 组件库的样式全部使用 CSS 变量控制，为了让样式可控变得简单化，所以需要手动引入全局变量文件 ",-1),x=o("p",null,"在入口文件，如 main.ts 中引入",-1),C=o("p",null,"该变量样式文件包含如下内容",-1),k=o("h2",null,"样式修改",-1),N=o("h3",null,"修改全局变量",-1),B=o("p",null," 这之后如果想要修改样式，在需要在该引入的地方，重新引入一个新的样式表，然后覆盖上面的样式即可 ",-1),V=o("p",null,"例如，想把侧边栏宽度改为 200px, 可以通过下面这样",-1),S={class:"ul-list"},R=o("p",null,"1. 在 main.ts 引入样式表",-1),j=o("p",null,"2. 在 style.css 中添加样式",-1),I=o("p",null,"通过上面就能修改，当然也能在侧边栏的样式的地方，手动覆盖变量也能实现",-1),$=o("h3",null,"修改组件样式",-1),A=o("p",null," 组件所有的样式都基本只有一层，所以如果要修改样式，在需要套一个层级就能修改 ",-1),D=o("p",null,"比如想修改 Button 样式, 只需要给根节点添加一个样式，例如: #app",-1),H=o("p",null,"然后就能修改样式，如下：",-1),T=o("h2",null,"浏览器兼容性",-1),U=o("p",null,"所有的组件尽量保证 ios 能够兼容到11",-1),q=`
import Components from 'unplugin-vue-components/vite'
import NeatuiResolver from 'neatui-vue-resolver'

plugins: [
  // ...
  AutoImport({
		resolvers: [NeatuiResolver()],
		dts: "src/auto-imports.d.ts",
	}),
  Components({
    dts: 'src/components.d.ts',
    resolvers: [NeatuiResolver()],
  }),
]
`,z=`
import { Button } from '@asteres/neatui-vue'
import '@asteres/neatui-vue/style/button/index.css'
`,E=`
import '@asteres/neatui-vue/style/vars.css';
import './style.css'
`,F=`
:root {
  --nt-border-color: red;
}
`,G=`
#app .nt-button {
  background-color: red;
}
`,W=l({__name:"usage",setup(J){return(K,L)=>(c(),u(n,null,{default:r(()=>[p,_,d,h,e(t,{code:"npm install ph-utils @asteres/neatui-vue",lang:"shell"}),m,v,f,e(t,{code:"npm install unplugin-vue-components unplugin-auto-import neatui-vue-resolver -D",lang:"shell"}),g,e(t,{code:q}),w,e(t,{code:z}),b,y,x,e(t,{code:"import '@asteres/neatui-vue/style/vars.css';"}),C,e(t,{code:i(a),lang:"css"},null,8,["code"]),k,N,B,V,o("ul",S,[o("li",null,[R,e(t,{code:E})]),o("li",null,[j,e(t,{code:F,lang:"css"})])]),I,$,A,D,H,e(t,{code:G,lang:"css"}),T,U]),_:1}))}});export{W as default};
