import{_ as i}from"./SourceCode.vue_vue_type_style_index_0_lang-e1zMp6eg.js";import{_ as n}from"./PcCodePreview.vue_vue_type_style_index_0_lang-HeqXio4D.js";import{_ as o}from"./DocMain.vue_vue_type_style_index_0_lang-9TYAKqAK.js";import{_ as c}from"./CodeExample.vue_vue_type_style_index_0_lang-dFm28aL0.js";import{_ as l}from"./ThemeTable.vue_vue_type_script_setup_true_lang-M9hPoyPu.js";import{d,o as r,e as m,w as a,b as t,a as e}from"./index-aWLd-FXG.js";import"./Button.vue_vue_type_script_setup_true_lang-5x5K2nS-.js";import"./Table.vue_vue_type_script_lang-TeoTULpr.js";const h=e("p",null," 容器布局，采用了 flex 布局，一般用于后台管理项目的一些常用排版，方便快速搭建页面的基本结构： ",-1),_=e("ul",{class:"ul-list"},[e("li",null," nt-container：外层容器，一般用于 section 标签，基本排版为水平左右排列，可以通过设置 nt-layout-verticle 调整为垂直上下排列。可以嵌套 "),e("li",null,"nt-header：顶栏容器，一般用于 header 标签。"),e("li",null,"nt-aside: 侧边栏容器，一般用于 aside 标签。"),e("li",null,"nt-main: 主要区域容器，一般用于 main 标签。"),e("li",null,"nt-footer: 底部，一般用于 footer 标签。")],-1),u=e("p",null,"通常在做后台管理系统的首页排版上",-1),f=e("h2",null,"引入",-1),p=e("p",null,"由于使用不是特别频繁，所以没有封装为组件",-1),v=e("p",null,"样式需要单独引入",-1),g=e("p",null,"在使用时，需要手动引入",-1),x=e("h2",null,"常见布局",-1),y=e("p",null," 在 header 里面放点东西就成了，就成了经典的后台管理系统的模板, 左右是图标，右边是登录用户 ",-1),M=`
<section class="nt-container nt-layout-vertical">
  <header class="nt-header">Header</header>
  <main class="nt-main">Main</main>
</section>
`,w=`
<section class="nt-container">
  <aside class="nt-aside">Aside</aside>
  <main class="nt-main">Main</main>
</section>
`,A=`
<section class="nt-container nt-layout-vertical">
  <header class="nt-header">Header</header>
  <section class="nt-container">
    <aside class="nt-aside">Aside</aside>
    <main class="nt-main">Main</main>
  </section>
</section>
`,$=`
<section class="nt-container nt-layout-vertical">
  <header class="nt-header">
    <a href="#">NEATUI</a>
    <div>登录用户</div>
  </header>
  <section class="nt-container">
    <aside class="nt-aside">Aside</aside>
    <main class="nt-main">Main</main>
  </section>
</section>
`,H=`
<section class="nt-container">
  <aside class="nt-aside">Aside</aside>
  <section class="nt-container nt-layout-vertical">
    <header class="nt-header">Header</header>
    <main class="nt-main">Main</main>
  </section>
</section>
`,B=`
<section class="nt-container nt-layout-vertical">
  <header class="nt-header">Header</header>
  <main class="nt-main">Main</main>
  <footer class="nt-footer">Footer</footer>
</section>
`,U=d({__name:"Container",setup(C){const s=[{name:"--nt-header-height",description:"header高度",default:"50px"},{name:"--nt-footer-height",description:"footer高度",default:"var(--nt-header-height, 50px)"},{name:"--nt-aside-width",description:"侧边栏宽度",default:"240px"}];return(N,k)=>(r(),m(o,null,{default:a(()=>[h,_,u,f,p,v,t(i,{lang:"js",code:"import 'neatui-vue/style/container.css'"}),g,x,t(c,null,{default:a(()=>[t(n,{code:M,lang:"html",title:"上下两栏排版"}),t(n,{code:w,lang:"html",title:"左右两栏排版"}),t(n,{code:A,lang:"html",title:"上下两栏嵌套"}),t(n,{code:$,lang:"html",title:"经典后台系统"},{description:a(()=>[y]),_:1}),t(n,{code:H,lang:"html",title:"左右两栏嵌套"}),t(n,{code:B,lang:"html",title:"上中下三栏"})]),_:1}),t(l,{rows:s})]),_:1}))}});export{U as default};
