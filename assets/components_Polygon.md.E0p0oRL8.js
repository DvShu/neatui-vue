import{_ as o}from"./chunks/theme.CTWfthY6.js";import{c,k as e,w as a,ab as i,b as t,y as l,R as r,o as h,z as n}from"./chunks/framework.HjiSOcYz.js";const p=i('<h1 id="polygon-多边形" tabindex="-1">Polygon 多边形 <a class="header-anchor" href="#polygon-多边形" aria-label="Permalink to &quot;Polygon 多边形&quot;">​</a></h1><p>显示一些多边形，例如：三角形、菱形、六边形、梯形等；全部采用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path" target="_blank" rel="noreferrer">clip-path</a> 实现</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>默认提供了多种三角形，只需要配置 <code>shape</code> 属性即可。</p>',5),g=t("textarea",{lang:"vue-html"},`
  <div class="grid grid-cols-4">
    <div class="center flex-col">
      <Polygon shape="triangle-top"></Polygon>
      <span>triangle-top</span>
    </div>
    <div class="center flex-col">
      <Polygon shape="triangle-bottom"></Polygon>
      <span>triangle-bottom</span>
    </div>
    <div class="center flex-col">
      <Polygon shape="triangle-left"></Polygon>
      <span>triangle-left</span>
    </div>
    <div class="center flex-col">
      <Polygon shape="triangle-right"></Polygon>
      <span>triangle-right</span>
    </div>
  </div>
  <div class="grid grid-cols-4 mt-15">
    <div class="center flex-col">
      <Polygon shape="triangle-top-right"></Polygon>
      <span>triangle-top-right</span>
    </div>
    <div class="center flex-col">
      <Polygon shape="triangle-top-left"></Polygon>
      <span>triangle-top-left</span>
    </div>
    <div class="center flex-col">
      <Polygon shape="triangle-bottom-right"></Polygon>
      <span>triangle-bottom-right</span>
    </div>
    <div class="center flex-col">
      <Polygon shape="triangle-bottom-left"></Polygon>
      <span>triangle-bottom-left</span>
    </div>
  </div>
  `,-1),_={class:"grid grid-cols-4"},u={class:"center flex-col"},f=t("span",null,"triangle-top",-1),b={class:"center flex-col"},m=t("span",null,"triangle-bottom",-1),y={class:"center flex-col"},v=t("span",null,"triangle-left",-1),P={class:"center flex-col"},x=t("span",null,"triangle-right",-1),k={class:"grid grid-cols-4 mt-15"},T={class:"center flex-col"},q=t("span",null,"triangle-top-right",-1),C={class:"center flex-col"},S=t("span",null,"triangle-top-left",-1),A={class:"center flex-col"},N=t("span",null,"triangle-bottom-right",-1),V={class:"center flex-col"},w=t("span",null,"triangle-bottom-left",-1),z=t("h3",{id:"自定义菱形",tabindex:"-1"},[l("自定义菱形 "),t("a",{class:"header-anchor",href:"#自定义菱形","aria-label":'Permalink to "自定义菱形"'},"​")],-1),I=t("p",null,[l("传递 "),t("code",null,"shape"),l(" 为 "),t("code",null,"rhombus"),l("。然后自己定义 "),t("code",null,"nt-polygon-rhombus"),l(" 样式即可。同时可以通过 "),t("code",null,"background"),l(" 设置图形颜色")],-1),O=t("textarea",{lang:"vue"},`
  <template>
    <nt-polygon shape="rhombus" background="red"></nt-polygon>
  </template>
  <style>
    .nt-polygon-rhombus {
      clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    }
  </style>
  `,-1),B=i('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="shape-props" tabindex="-1">Shape Props <a class="header-anchor" href="#shape-props" aria-label="Permalink to &quot;Shape Props&quot;">​</a></h3><table><thead><tr><th>属性名</th><th>类型</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>shape</code></td><td><code>string</code></td><td>形状</td><td>-</td></tr><tr><td><code>background</code></td><td><code>string</code></td><td>背景色</td><td>-</td></tr></tbody></table><h3 id="样式变量" tabindex="-1">样式变量 <a class="header-anchor" href="#样式变量" aria-label="Permalink to &quot;样式变量&quot;">​</a></h3><table><thead><tr><th>变量名</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>--nt-polygen-size</code></td><td><code>10px</code></td><td>多边形大小</td></tr><tr><td><code>--nt-polygen-width</code></td><td><code>var(--nt-polygen-size)</code></td><td>多边形宽度</td></tr><tr><td><code>--nt-polygen-height</code></td><td><code>var(--nt-polygen-size)</code></td><td>多边形高度</td></tr><tr><td><code>--nt-polygen-background</code></td><td><code>#666</code></td><td>多边形背景色</td></tr></tbody></table>',5),W=JSON.parse('{"title":"Polygon 多边形","description":"","frontmatter":{},"headers":[],"relativePath":"components/Polygon.md","filePath":"components/Polygon.md","lastUpdated":1716541607000}'),D={name:"components/Polygon.md"},$=Object.assign(D,{setup(E){return(R,j)=>{const s=r("CodePreview"),d=r("ClientOnly");return h(),c("div",null,[p,e(d,null,{default:a(()=>[e(s,null,{preview:a(()=>[t("div",_,[t("div",u,[e(n(o),{shape:"triangle-top"}),f]),t("div",b,[e(n(o),{shape:"triangle-bottom"}),m]),t("div",y,[e(n(o),{shape:"triangle-left"}),v]),t("div",P,[e(n(o),{shape:"triangle-right"}),x])]),t("div",k,[t("div",T,[e(n(o),{shape:"triangle-top-right"}),q]),t("div",C,[e(n(o),{shape:"triangle-top-left"}),S]),t("div",A,[e(n(o),{shape:"triangle-bottom-right"}),N]),t("div",V,[e(n(o),{shape:"triangle-bottom-left"}),w])])]),default:a(()=>[g]),_:1})]),_:1}),z,I,e(d,null,{default:a(()=>[e(s,null,{preview:a(()=>[e(n(o),{shape:"rhombus",background:"red"})]),default:a(()=>[O]),_:1})]),_:1}),B])}}});export{W as __pageData,$ as default};
