import{f as l}from"./chunks/theme.D80Jzo0T.js";import{c as o,ag as d,l as t,w as n,b as a,R as i,a1 as r,o as c}from"./chunks/framework.DcK8S9T6.js";const b=JSON.parse('{"title":"Container 容器布局","description":"","frontmatter":{},"headers":[],"relativePath":"components/container.md","filePath":"components/container.md","lastUpdated":1714270621000}'),h={name:"components/container.md"},x=Object.assign(h,{setup(m){return(u,e)=>{const s=r("ClientOnly");return c(),o("div",null,[e[6]||(e[6]=d('<h1 id="container-容器布局" tabindex="-1">Container 容器布局 <a class="header-anchor" href="#container-容器布局" aria-label="Permalink to &quot;Container 容器布局&quot;">​</a></h1><p>容器布局，采用了 flex 布局，一般用于后台管理项目的一些常用排版，方便快速搭建页面的基本结构：</p><ul><li><code>nt-container</code>：外层容器，一般用于 <code>section</code> 标签，基本排版为水平左右排列，可以通过设置 <code>nt-layout-verticle</code> 调整为垂直上下排列。可以嵌套</li><li><code>nt-header</code>：顶栏容器，一般用于 <code>header</code> 标签</li><li><code>nt-aside</code>: 侧边栏容器，一般用于 <code>aside</code> 标签</li><li><code>nt-main</code>: 主要区域容器，一般用于 <code>main</code> 标签</li><li><code>nt-footer</code>: 底栏容器，一般用于 <code>footer</code> 标签</li></ul><p>通常用于后台管理系统的首页排版</p><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><p>由于使用不是特别频繁，所以没有封装为组件，在需要时手动引入样式表</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@asteres/neatui-vue/style/container.css&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="常见布局" tabindex="-1">常见布局 <a class="header-anchor" href="#常见布局" aria-label="Permalink to &quot;常见布局&quot;">​</a></h2><h3 id="上下两栏排版" tabindex="-1">上下两栏排版 <a class="header-anchor" href="#上下两栏排版" aria-label="Permalink to &quot;上下两栏排版&quot;">​</a></h3>',9)),t(s,null,{default:n(()=>[t(l,{class:"mt-15"},{default:n(()=>e[0]||(e[0]=[a("textarea",{lang:"html"},`  <section class="nt-container nt-layout-vertical">
    <header class="nt-header">Header</header>
    <main class="nt-main">Main</main>
  </section>
  `,-1)])),_:1})]),_:1}),e[7]||(e[7]=a("h3",{id:"左右两栏排版",tabindex:"-1"},[i("左右两栏排版 "),a("a",{class:"header-anchor",href:"#左右两栏排版","aria-label":'Permalink to "左右两栏排版"'},"​")],-1)),t(s,null,{default:n(()=>[t(l,{class:"mt-15"},{default:n(()=>e[1]||(e[1]=[a("textarea",{lang:"html"},`  <section class="nt-container">
    <aside class="nt-aside">Aside</aside>
    <main class="nt-main">Main</main>
  </section>
  `,-1)])),_:1})]),_:1}),e[8]||(e[8]=a("h3",{id:"上下两栏嵌套",tabindex:"-1"},[i("上下两栏嵌套 "),a("a",{class:"header-anchor",href:"#上下两栏嵌套","aria-label":'Permalink to "上下两栏嵌套"'},"​")],-1)),t(s,null,{default:n(()=>[t(l,{class:"mt-15"},{default:n(()=>e[2]||(e[2]=[a("textarea",{lang:"html"},`  <section class="nt-container nt-layout-vertical">
    <header class="nt-header">Header</header>
    <section class="nt-container">
      <aside class="nt-aside">Aside</aside>
      <main class="nt-main">Main</main>
    </section>
  </section>
  `,-1)])),_:1})]),_:1}),e[9]||(e[9]=a("h3",{id:"左右两栏嵌套",tabindex:"-1"},[i("左右两栏嵌套 "),a("a",{class:"header-anchor",href:"#左右两栏嵌套","aria-label":'Permalink to "左右两栏嵌套"'},"​")],-1)),t(s,null,{default:n(()=>[t(l,{class:"mt-15"},{default:n(()=>e[3]||(e[3]=[a("textarea",{lang:"html"},`  <section class="nt-container">
    <aside class="nt-aside">Aside</aside>
    <section class="nt-container nt-layout-vertical">
      <header class="nt-header">Header</header>
      <main class="nt-main">Main</main>
    </section>
  </section>
  `,-1)])),_:1})]),_:1}),e[10]||(e[10]=a("h3",{id:"上中下三栏",tabindex:"-1"},[i("上中下三栏 "),a("a",{class:"header-anchor",href:"#上中下三栏","aria-label":'Permalink to "上中下三栏"'},"​")],-1)),t(s,null,{default:n(()=>[t(l,{class:"mt-15"},{default:n(()=>e[4]||(e[4]=[a("textarea",{lang:"html"},`  <section class="nt-container nt-layout-vertical">
    <header class="nt-header">Header</header>
    <main class="nt-main">Main</main>
    <footer class="nt-footer">Footer</footer>
  </section>
  `,-1)])),_:1})]),_:1}),e[11]||(e[11]=a("h3",{id:"经典后台系统",tabindex:"-1"},[i("经典后台系统 "),a("a",{class:"header-anchor",href:"#经典后台系统","aria-label":'Permalink to "经典后台系统"'},"​")],-1)),e[12]||(e[12]=a("p",null,[i("在 "),a("code",null,"header"),i(" 里面放点东西就成了，就成了经典的后台管理系统的模板, 左边是图标，右边是登录用户；"),a("code",null,"Aside"),i(" 里面放菜单("),a("code",null,"Menu"),i(")，"),a("code",null,"Main"),i(" 里面放内容就是经典的后台管理系统模板")],-1)),t(s,null,{default:n(()=>[t(l,null,{default:n(()=>e[5]||(e[5]=[a("textarea",{lang:"html"},`  <section class="nt-container nt-layout-vertical">
    <header class="nt-header">
      <a href="#">NEATUI</a>
      <div>登录用户</div>
    </header>
    <section class="nt-container">
      <aside class="nt-aside">Aside</aside>
      <main class="nt-main">Main</main>
    </section>
  </section>
  `,-1)])),_:1})]),_:1}),e[13]||(e[13]=d('<h2 id="主题定制" tabindex="-1">主题定制 <a class="header-anchor" href="#主题定制" aria-label="Permalink to &quot;主题定制&quot;">​</a></h2><h3 id="样式变量" tabindex="-1">样式变量 <a class="header-anchor" href="#样式变量" aria-label="Permalink to &quot;样式变量&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>描述</th><th>默认值</th></tr></thead><tbody><tr><td><code>--nt-header-height</code></td><td>header高度</td><td><code>50px</code></td></tr><tr><td><code>--nt-aside-width</code></td><td>侧边栏宽度</td><td><code>240px</code></td></tr><tr><td><code>--nt-footer-height</code></td><td>底栏高度</td><td><code>var(--nt-header-height, 50px)</code></td></tr></tbody></table>',3))])}}});export{b as __pageData,x as default};
