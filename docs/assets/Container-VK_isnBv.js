import{_ as s}from"./SourceCode.vue_vue_type_style_index_0_lang-ecsAkHiK.js";import{_ as n}from"./PcCodePreview.vue_vue_type_script_lang-U_lT3Sv6.js";import{d as i,o,c,a as e,b as a,e as t}from"./index-BY3UnrMK.js";const d={class:"nt-scrollbar doc-main"},l=a('<p> 容器布局，采用了 flex 布局，一般用于后台管理项目的一些常用排版，方便快速搭建页面的基本结构： </p><ul class="ul-list"><li> nt-container：外层容器，一般用于 section 标签，基本排版为水平左右排列，可以通过设置 nt-layout-verticle 调整为垂直上下排列。可以嵌套 </li><li>nt-header：顶栏容器，一般用于 header 标签。</li><li>nt-aside: 侧边栏容器，一般用于 aside 标签。</li><li>nt-main: 主要区域容器，一般用于 main 标签。</li><li>nt-footer: 底部，一般用于 footer 标签。</li></ul><p>通常在做后台管理系统的首页排版上</p><h2>引入</h2><p>由于使用不是特别频繁，所以没有封装为组件</p><p>样式需要单独引入</p>',6),r=t("p",null,"在使用时，需要手动引入",-1),h=t("h2",null,"常见布局",-1),m=t("h3",null,"1. 上下两栏排版",-1),_=t("h3",null,"2. 左右两列布局",-1),p=t("h3",null,"3. 上下两栏，下栏又包含左右两列排版",-1),u=t("h3",null,"4. 后台管理系统模板",-1),f=t("p",null," 在 header 里面放点东西就成了，就成了经典的后台管理系统的模板, 左右是图标，右边是登录用户 ",-1),v=t("h3",null,"5. 左右两列，右边又包含上下两栏排版",-1),g=t("h3",null,"6. 上中下三栏",-1),y=a('<h2>主题定制</h2><h3>样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，</p><table class="nt-table"><thead><tr><th>名称</th><th>描述</th><th>默认值</th></tr></thead><tbody><tr><td>--nt-header-height</td><td>header高度</td><td>50px</td></tr><tr><td>--nt-footer-height</td><td>footer高度</td><td>var(--nt-header-height, 50px)</td></tr><tr><td>--nt-aside-width</td><td>侧边栏宽度</td><td>240px</td></tr></tbody></table>',4),b=`
<section class="nt-container nt-layout-vertical">
  <header class="nt-header">Header</header>
  <main class="nt-main">Main</main>
</section>
`,x=`
<section class="nt-container">
  <aside class="nt-aside">Aside</aside>
  <main class="nt-main">Main</main>
</section>
`,M=`
<section class="nt-container nt-layout-vertical">
  <header class="nt-header">Header</header>
  <section class="nt-container">
    <aside class="nt-aside">Aside</aside>
    <main class="nt-main">Main</main>
  </section>
</section>
`,A=`
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
`,N=`
<section class="nt-container nt-layout-vertical">
  <header class="nt-header">Header</header>
  <main class="nt-main">Main</main>
  <footer class="nt-footer">Footer</footer>
</section>
`,$=i({__name:"Container",setup(B){return(C,S)=>(o(),c("div",d,[l,e(s,{lang:"js",code:"import 'neatui-vue/style/container.css'"}),r,h,m,e(n,{code:b,lang:"html"}),_,e(n,{code:x,lang:"html"}),p,e(n,{code:M,lang:"html"}),u,f,e(n,{code:A,lang:"html"}),v,e(n,{code:H,lang:"html"}),g,e(n,{code:N,lang:"html"}),y]))}});export{$ as default};
