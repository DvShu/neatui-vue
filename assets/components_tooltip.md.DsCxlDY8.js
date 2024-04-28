import{c as i,a as r}from"./chunks/theme.BELXmYxf.js";import{P as l,c as s,f as e,w as o,ab as p,b as t,q as n,o as h,u as c}from"./chunks/framework.B2jEF4L8.js";const _=p('<h1 id="tooltip-文字提示" tabindex="-1">Tooltip 文字提示 <a class="header-anchor" href="#tooltip-文字提示" aria-label="Permalink to &quot;Tooltip 文字提示&quot;">​</a></h1><p>常用于展示鼠标 hover 时的提示信息。</p><p>可用来代替系统默认的 <code>title</code> 提示，通常用于针对一个图标按钮的鼠标悬浮显示简单说明</p><p>该提示使用纯 <code>CSS</code> 实现，所以气泡框位置通常需要手动设置</p><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>使用 <code>title</code> 属性来决定 <code>hover</code> 时的提示信息。 由 <code>placement</code> 属性决定展示位置: <code>topStart</code>、<code>top[默认]</code>、<code>topEnd</code>、<code>bottomStart</code>、<code>bottom</code>、<code>bottomEnd</code></p>',6),m=t("textarea",{lang:"vue-html"},`
  <div class="flex-between">
    <nt-tooltip placement="topStart" title="prompt text">
      <nt-button>topStart</nt-button>
    </nt-tooltip>
    <nt-tooltip placement="top" title="prompt text">
      <nt-button>top</nt-button>
    </nt-tooltip>
    <nt-tooltip placement="topEnd" title="prompt text">
      <nt-button>topEnd</nt-button>
    </nt-tooltip>
  </div>
  <div class="flex-between mt-15">
    <nt-tooltip placement="bottomStart" title="prompt text">
      <nt-button>bottomStart</nt-button>
    </nt-tooltip>
    <nt-tooltip placement="bottom" title="prompt text">
      <nt-button>bottom</nt-button>
    </nt-tooltip>
    <nt-tooltip placement="bottomEnd" title="prompt text">
      <nt-button>bottomEnd</nt-button>
    </nt-tooltip>
  </div>
  `,-1),u=t("h3",{id:"自定义提示",tabindex:"-1"},[n("自定义提示 "),t("a",{class:"header-anchor",href:"#自定义提示","aria-label":'Permalink to "自定义提示"'},"​")],-1),b=t("p",null,[n("通过使用 "),t("code",null,"title"),n(" 插槽来渲染自定义的提示; 如果同时传递 "),t("code",null,"title"),n(" 和 插槽，则 "),t("code",null,"title"),n(" 属性为准")],-1),f=t("textarea",{lang:"vue-html"},`
<nt-tooltip>
<nt-button>自定义提示</nt-button>
<template v-slot:title>
<span style="color:red;">custome propmt text</span>
</template>
</nt-tooltip>
`,-1),x=t("span",{style:{color:"red"}},"custome propmt text",-1),S=p('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="tooltip-props" tabindex="-1">Tooltip Props <a class="header-anchor" href="#tooltip-props" aria-label="Permalink to &quot;Tooltip Props&quot;">​</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td><code>title</code></td><td>提示文字</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td><code>placement</code></td><td>提示框出现位置</td><td><code>string</code></td><td><code>topStart</code>、<code>top</code>、<code>topEnd</code>、<code>bottomStart</code>、<code>bottom</code>、<code>bottomEnd</code></td><td><code>top</code></td></tr></tbody></table><h3 id="tooltip-slots" tabindex="-1">Tooltip Slots <a class="header-anchor" href="#tooltip-slots" aria-label="Permalink to &quot;Tooltip Slots&quot;">​</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>title</code></td><td>自定义提示内容以及样式</td><td><code>()</code></td></tr></tbody></table>',5),k=JSON.parse('{"title":"Tooltip 文字提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/tooltip.md","filePath":"components/tooltip.md","lastUpdated":1713346936000}'),T={name:"components/tooltip.md"},y=Object.assign(T,{setup(P){return(v,q)=>{const d=l("CodePreview"),a=l("ClientOnly");return h(),s("div",null,[_,e(a,null,{default:o(()=>[e(d,null,{default:o(()=>[m]),_:1})]),_:1}),u,b,e(a,null,{default:o(()=>[e(d,null,{preview:o(()=>[e(c(i),null,{title:o(()=>[x]),default:o(()=>[e(c(r),null,{default:o(()=>[n("自定义提示")]),_:1})]),_:1})]),default:o(()=>[f]),_:1})]),_:1}),S])}}});export{k as __pageData,y as default};
