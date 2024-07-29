import{f as i}from"./chunks/theme.BDs-Rhbx.js";import{o as d,c as l,g as a,w as t,ae as o,b as e,J as n,X as c}from"./chunks/framework.-x160Rg7.js";const r=o('<h1 id="container-容器布局" tabindex="-1">Container 容器布局 <a class="header-anchor" href="#container-容器布局" aria-label="Permalink to &quot;Container 容器布局&quot;">​</a></h1><p>容器布局，采用了 flex 布局，一般用于后台管理项目的一些常用排版，方便快速搭建页面的基本结构：</p><ul><li><code>nt-container</code>：外层容器，一般用于 <code>section</code> 标签，基本排版为水平左右排列，可以通过设置 <code>nt-layout-verticle</code> 调整为垂直上下排列。可以嵌套</li><li><code>nt-header</code>：顶栏容器，一般用于 <code>header</code> 标签</li><li><code>nt-aside</code>: 侧边栏容器，一般用于 <code>aside</code> 标签</li><li><code>nt-main</code>: 主要区域容器，一般用于 <code>main</code> 标签</li><li><code>nt-footer</code>: 底栏容器，一般用于 <code>footer</code> 标签</li></ul><p>通常用于后台管理系统的首页排版</p><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><p>由于使用不是特别频繁，所以没有封装为组件，在需要时手动引入样式表</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@asteres/neatui-vue/style/container.css&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="常见布局" tabindex="-1">常见布局 <a class="header-anchor" href="#常见布局" aria-label="Permalink to &quot;常见布局&quot;">​</a></h2><h3 id="上下两栏排版" tabindex="-1">上下两栏排版 <a class="header-anchor" href="#上下两栏排版" aria-label="Permalink to &quot;上下两栏排版&quot;">​</a></h3>',9),h=e("textarea",{lang:"html"},`
  <section class="nt-container nt-layout-vertical">
    <header class="nt-header">Header</header>
    <main class="nt-main">Main</main>
  </section>
  `,-1),_=e("h3",{id:"左右两栏排版",tabindex:"-1"},[n("左右两栏排版 "),e("a",{class:"header-anchor",href:"#左右两栏排版","aria-label":'Permalink to "左右两栏排版"'},"​")],-1),m=e("textarea",{lang:"html"},`
  <section class="nt-container">
    <aside class="nt-aside">Aside</aside>
    <main class="nt-main">Main</main>
  </section>
  `,-1),u=e("h3",{id:"上下两栏嵌套",tabindex:"-1"},[n("上下两栏嵌套 "),e("a",{class:"header-anchor",href:"#上下两栏嵌套","aria-label":'Permalink to "上下两栏嵌套"'},"​")],-1),p=e("textarea",{lang:"html"},`
  <section class="nt-container nt-layout-vertical">
    <header class="nt-header">Header</header>
    <section class="nt-container">
      <aside class="nt-aside">Aside</aside>
      <main class="nt-main">Main</main>
    </section>
  </section>
  `,-1),f=e("h3",{id:"左右两栏嵌套",tabindex:"-1"},[n("左右两栏嵌套 "),e("a",{class:"header-anchor",href:"#左右两栏嵌套","aria-label":'Permalink to "左右两栏嵌套"'},"​")],-1),b=e("textarea",{lang:"html"},`
  <section class="nt-container">
    <aside class="nt-aside">Aside</aside>
    <section class="nt-container nt-layout-vertical">
      <header class="nt-header">Header</header>
      <main class="nt-main">Main</main>
    </section>
  </section>
  `,-1),x=e("h3",{id:"上中下三栏",tabindex:"-1"},[n("上中下三栏 "),e("a",{class:"header-anchor",href:"#上中下三栏","aria-label":'Permalink to "上中下三栏"'},"​")],-1),k=e("textarea",{lang:"html"},`
  <section class="nt-container nt-layout-vertical">
    <header class="nt-header">Header</header>
    <main class="nt-main">Main</main>
    <footer class="nt-footer">Footer</footer>
  </section>
  `,-1),g=e("h3",{id:"经典后台系统",tabindex:"-1"},[n("经典后台系统 "),e("a",{class:"header-anchor",href:"#经典后台系统","aria-label":'Permalink to "经典后台系统"'},"​")],-1),v=e("p",null,[n("在 "),e("code",null,"header"),n(" 里面放点东西就成了，就成了经典的后台管理系统的模板, 左边是图标，右边是登录用户；"),e("code",null,"Aside"),n(" 里面放菜单("),e("code",null,"Menu"),n(")，"),e("code",null,"Main"),n(" 里面放内容就是经典的后台管理系统模板")],-1),P=e("textarea",{lang:"html"},`
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
  `,-1),y=o('<h2 id="主题定制" tabindex="-1">主题定制 <a class="header-anchor" href="#主题定制" aria-label="Permalink to &quot;主题定制&quot;">​</a></h2><h3 id="样式变量" tabindex="-1">样式变量 <a class="header-anchor" href="#样式变量" aria-label="Permalink to &quot;样式变量&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>描述</th><th>默认值</th></tr></thead><tbody><tr><td><code>--nt-header-height</code></td><td>header高度</td><td><code>50px</code></td></tr><tr><td><code>--nt-aside-width</code></td><td>侧边栏宽度</td><td><code>240px</code></td></tr><tr><td><code>--nt-footer-height</code></td><td>底栏高度</td><td><code>var(--nt-header-height, 50px)</code></td></tr></tbody></table>',3),N=JSON.parse('{"title":"Container 容器布局","description":"","frontmatter":{},"headers":[],"relativePath":"components/container.md","filePath":"components/container.md","lastUpdated":1714270621000}'),C={name:"components/container.md"},S=Object.assign(C,{setup(T){return(A,q)=>{const s=c("ClientOnly");return d(),l("div",null,[r,a(s,null,{default:t(()=>[a(i,{class:"mt-15"},{default:t(()=>[h]),_:1})]),_:1}),_,a(s,null,{default:t(()=>[a(i,{class:"mt-15"},{default:t(()=>[m]),_:1})]),_:1}),u,a(s,null,{default:t(()=>[a(i,{class:"mt-15"},{default:t(()=>[p]),_:1})]),_:1}),f,a(s,null,{default:t(()=>[a(i,{class:"mt-15"},{default:t(()=>[b]),_:1})]),_:1}),x,a(s,null,{default:t(()=>[a(i,{class:"mt-15"},{default:t(()=>[k]),_:1})]),_:1}),g,v,a(s,null,{default:t(()=>[a(i,null,{default:t(()=>[P]),_:1})]),_:1}),y])}}});export{N as __pageData,S as default};
