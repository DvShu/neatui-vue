import{E as n}from"./chunks/theme.DASJ6p6U.js";import{c as g,ag as i,l as o,w as a,b as e,R as d,a1 as p,o as h,u as l}from"./chunks/framework.DdiFAQ9y.js";const c={class:"grid grid-cols-4"},u={class:"center flex-col"},b={class:"center flex-col"},f={class:"center flex-col"},m={class:"center flex-col"},y={class:"grid grid-cols-4 mt-15"},v={class:"center flex-col"},P={class:"center flex-col"},x={class:"center flex-col"},k={class:"center flex-col"},S=JSON.parse('{"title":"Polygon 多边形","description":"","frontmatter":{},"headers":[],"relativePath":"components/polygon.md","filePath":"components/polygon.md","lastUpdated":1732085261000}'),_={name:"components/polygon.md"},z=Object.assign(_,{setup(q){return(C,t)=>{const r=p("CodePreview"),s=p("ClientOnly");return h(),g("div",null,[t[10]||(t[10]=i('<h1 id="polygon-多边形" tabindex="-1">Polygon 多边形 <a class="header-anchor" href="#polygon-多边形" aria-label="Permalink to &quot;Polygon 多边形&quot;">​</a></h1><p>显示一些多边形，例如：三角形、菱形、六边形、梯形等；全部采用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path" target="_blank" rel="noreferrer">clip-path</a> 实现</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>默认提供了多种三角形，只需要配置 <code>shape</code> 属性即可。</p>',5)),o(s,null,{default:a(()=>[o(r,null,{preview:a(()=>[e("div",c,[e("div",u,[o(l(n),{shape:"triangle-top"}),t[0]||(t[0]=e("span",null,"triangle-top",-1))]),e("div",b,[o(l(n),{shape:"triangle-bottom"}),t[1]||(t[1]=e("span",null,"triangle-bottom",-1))]),e("div",f,[o(l(n),{shape:"triangle-left"}),t[2]||(t[2]=e("span",null,"triangle-left",-1))]),e("div",m,[o(l(n),{shape:"triangle-right"}),t[3]||(t[3]=e("span",null,"triangle-right",-1))])]),e("div",y,[e("div",v,[o(l(n),{shape:"triangle-top-right"}),t[4]||(t[4]=e("span",null,"triangle-top-right",-1))]),e("div",P,[o(l(n),{shape:"triangle-top-left"}),t[5]||(t[5]=e("span",null,"triangle-top-left",-1))]),e("div",x,[o(l(n),{shape:"triangle-bottom-right"}),t[6]||(t[6]=e("span",null,"triangle-bottom-right",-1))]),e("div",k,[o(l(n),{shape:"triangle-bottom-left"}),t[7]||(t[7]=e("span",null,"triangle-bottom-left",-1))])])]),default:a(()=>[t[8]||(t[8]=e("textarea",{lang:"vue-html"},`  <div class="grid grid-cols-4">
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
  `,-1))]),_:1})]),_:1}),t[11]||(t[11]=e("h3",{id:"自定义菱形",tabindex:"-1"},[d("自定义菱形 "),e("a",{class:"header-anchor",href:"#自定义菱形","aria-label":'Permalink to "自定义菱形"'},"​")],-1)),t[12]||(t[12]=e("p",null,[d("传递 "),e("code",null,"shape"),d(" 为 "),e("code",null,"rhombus"),d("。然后自己定义 "),e("code",null,"nt-polygon-rhombus"),d(" 样式即可。同时可以通过 "),e("code",null,"background"),d(" 设置图形颜色")],-1)),o(s,null,{default:a(()=>[o(r,null,{preview:a(()=>[o(l(n),{shape:"rhombus",background:"red"})]),default:a(()=>[t[9]||(t[9]=e("textarea",{lang:"vue"},`  <template>
    <lt-polygon shape="rhombus" background="red"></lt-polygon>
  </template>
  <style>
    .nt-polygon-rhombus {
      clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    }
  </style>
  `,-1))]),_:1})]),_:1}),t[13]||(t[13]=i('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="shape-props" tabindex="-1">Shape Props <a class="header-anchor" href="#shape-props" aria-label="Permalink to &quot;Shape Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>shape</code></td><td><code>string</code></td><td>形状</td><td>-</td></tr><tr><td><code>background</code></td><td><code>string</code></td><td>背景色</td><td>-</td></tr></tbody></table><h3 id="样式变量" tabindex="-1">样式变量 <a class="header-anchor" href="#样式变量" aria-label="Permalink to &quot;样式变量&quot;">​</a></h3><table tabindex="0"><thead><tr><th>变量名</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>--nt-polygen-size</code></td><td><code>10px</code></td><td>多边形大小</td></tr><tr><td><code>--nt-polygen-width</code></td><td><code>var(--nt-polygen-size)</code></td><td>多边形宽度</td></tr><tr><td><code>--nt-polygen-height</code></td><td><code>var(--nt-polygen-size)</code></td><td>多边形高度</td></tr><tr><td><code>--nt-polygen-background</code></td><td><code>#666</code></td><td>多边形背景色</td></tr></tbody></table>',5))])}}});export{S as __pageData,z as default};
