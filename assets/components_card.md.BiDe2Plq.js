import{a as n,_ as r}from"./chunks/theme.eiLntctg.js";import{c as i,l as a,w as t,b as e,z as d,ab as h,U as c,o as _,A as o}from"./chunks/framework.CsJhXCE_.js";const u=e("h1",{id:"card-卡片",tabindex:"-1"},[d("Card 卡片 "),e("a",{class:"header-anchor",href:"#card-卡片","aria-label":'Permalink to "Card 卡片"'},"​")],-1),p=e("p",null,"通用卡片应用，常用于后台概览页面。",-1),f=e("h2",{id:"典型卡片",tabindex:"-1"},[d("典型卡片 "),e("a",{class:"header-anchor",href:"#典型卡片","aria-label":'Permalink to "典型卡片"'},"​")],-1),m=e("p",null,"包含标题、内容、操作区域。",-1),x=e("textarea",{lang:"vue-html"},`
<nt-card header-text="card title">
<template v-slot:default>
<div>卡片内容</div>
</template>
<template v-slot:header-extra>
<nt-button type="text">按钮</nt-button>
</template>
</nt-card>
`,-1),v=e("div",null,"卡片内容",-1),b=e("h2",{id:"简洁卡片",tabindex:"-1"},[d("简洁卡片 "),e("a",{class:"header-anchor",href:"#简洁卡片","aria-label":'Permalink to "简洁卡片"'},"​")],-1),y=e("p",null,"只包含内容区域",-1),g=e("textarea",{lang:"vue-html"},`
<nt-card header-text="card title" :show-header="false">
<template v-slot:default>
<div>卡片内容</div>
</template>
</nt-card>
`,-1),w=e("div",null,"卡片内容",-1),P=e("h2",{id:"完整卡片",tabindex:"-1"},[d("完整卡片 "),e("a",{class:"header-anchor",href:"#完整卡片","aria-label":'Permalink to "完整卡片"'},"​")],-1),C=e("p",null,"卡片包含标题，内容、操作区域以及底部区域。",-1),k=e("textarea",{lang:"vue-html"},`
<nt-card header-text="card title" show-footer footer-text="底部区域">
<template v-slot:default>
<div>卡片内容</div>
</template>
<template v-slot:header-extra>
<nt-button type="text">按钮</nt-button>
</template>
</nt-card>
`,-1),T=e("div",null,"卡片内容",-1),S=h('<h2 id="卡片标题" tabindex="-1">卡片标题 <a class="header-anchor" href="#卡片标题" aria-label="Permalink to &quot;卡片标题&quot;">​</a></h2><p>标题和底部区域除了可以通过 <code>header-text</code> 和 <code>footer-text</code> 传递以外，也可以通过 <code>header</code> 和 <code>footer</code> <code>slot</code> 自定义 。</p>',2),A=e("textarea",{lang:"vue-html"},`
<nt-card :show-footer="true">
<template v-slot:header>
<span style="color: red">卡片标题</span>
</template>
<template v-slot:default>
<div>卡片内容</div>
</template>
<template v-slot:header-extra>
<nt-button type="text">按钮</nt-button>
</template>
<template v-slot:footer>
<span style="color: orange">卡片标题</span>
</template>
</nt-card>
`,-1),q=e("span",{style:{color:"red"}},"卡片标题",-1),V=e("div",null,"卡片内容",-1),N=e("span",{style:{color:"orange"}},"卡片标题",-1),I=e("h2",{id:"栅格卡片",tabindex:"-1"},[d("栅格卡片 "),e("a",{class:"header-anchor",href:"#栅格卡片","aria-label":'Permalink to "栅格卡片"'},"​")],-1),O=e("p",null,"在系统概览页面常常和栅格进行配合。通常用于管理后台的工作台聚合展示。",-1),B=e("p",null,[d("关于栅格布局，框架不提供，推荐使用 "),e("a",{href:"https://unocss.dev/interactive/?s=grid",target:"_blank",rel:"noreferrer"},"unocss"),d(" 或者 "),e("a",{href:"https://www.tailwindcss.cn/docs/display#grid",target:"_blank",rel:"noreferrer"},"tailwindcss"),d(" 的 "),e("code",null,"grid"),d(" 实现")],-1),D=e("textarea",{lang:"vue-html"},`
  <div class="grid grid-cols-3 gap-4">
    <nt-card header-text="卡片标题1">
      <template v-slot:default>
        <div>卡片内容1</div>
      </template>
      <template v-slot:header-extra>
        <nt-button type="text">按钮</nt-button>
      </template>
    </nt-card>
    <nt-card header-text="卡片标题2">
      <template v-slot:default>
        <div>卡片内容2</div>
      </template>
      <template v-slot:header-extra>
        <nt-button type="text">按钮</nt-button>
      </template>
    </nt-card>
    <nt-card header-text="卡片标题3">
      <template v-slot:default>
        <div>卡片内容3</div>
      </template>
      <template v-slot:header-extra>
        <nt-button type="text">按钮</nt-button>
      </template>
    </nt-card>
  </div>
  `,-1),E={class:"grid grid-cols-3 gap-4"},R=e("div",null,"卡片内容1",-1),U=e("div",null,"卡片内容2",-1),$=e("div",null,"卡片内容3",-1),j=h('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="card-props" tabindex="-1">Card Props <a class="header-anchor" href="#card-props" aria-label="Permalink to &quot;Card Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>header-text</code></td><td><code>string</code></td><td>-</td><td>标题</td></tr><tr><td><code>show-header</code></td><td><code>boolean</code></td><td><code>true</code></td><td>是否显示标题</td></tr><tr><td><code>footer-text</code></td><td><code>string</code></td><td>-</td><td>底部区域内容</td></tr><tr><td><code>show-footer</code></td><td><code>boolean</code></td><td><code>false</code></td><td>是否显示底部区域</td></tr><tr><td><code>body-class</code></td><td><code>string</code></td><td>-</td><td>内容区域样式</td></tr></tbody></table><h3 id="card-slots" tabindex="-1">Card Slots <a class="header-anchor" href="#card-slots" aria-label="Permalink to &quot;Card Slots&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td><code>default</code></td><td>内容区域内容</td></tr><tr><td><code>header</code></td><td>自定义标题内容</td></tr><tr><td><code>footer</code></td><td>自定义底部区域内容</td></tr><tr><td><code>header-extra</code></td><td>自定义标题右侧内容[操作区域]</td></tr></tbody></table>',5),L=JSON.parse('{"title":"Card 卡片","description":"","frontmatter":{},"headers":[],"relativePath":"components/card.md","filePath":"components/card.md","lastUpdated":1713346936000}'),z={name:"components/card.md"},M=Object.assign(z,{setup(J){return(F,G)=>{const l=c("CodePreview"),s=c("ClientOnly");return _(),i("div",null,[u,p,f,m,a(s,null,{default:t(()=>[a(l,null,{preview:t(()=>[a(o(n),{"header-text":"card title"},{default:t(()=>[v]),"header-extra":t(()=>[a(o(r),{type:"text"},{default:t(()=>[d("按钮")]),_:1})]),_:1})]),default:t(()=>[x]),_:1})]),_:1}),b,y,a(s,null,{default:t(()=>[a(l,null,{preview:t(()=>[a(o(n),{"header-text":"card title","show-header":!1},{default:t(()=>[w]),_:1})]),default:t(()=>[g]),_:1})]),_:1}),P,C,a(s,null,{default:t(()=>[a(l,null,{preview:t(()=>[a(o(n),{"header-text":"card title","show-footer":"","footer-text":"底部区域"},{default:t(()=>[T]),"header-extra":t(()=>[a(o(r),{type:"text"},{default:t(()=>[d("按钮")]),_:1})]),_:1})]),default:t(()=>[k]),_:1})]),_:1}),S,a(s,null,{default:t(()=>[a(l,null,{preview:t(()=>[a(o(n),{"show-footer":!0},{header:t(()=>[q]),default:t(()=>[V]),"header-extra":t(()=>[a(o(r),{type:"text"},{default:t(()=>[d("按钮")]),_:1})]),footer:t(()=>[N]),_:1})]),default:t(()=>[A]),_:1})]),_:1}),I,O,B,a(s,null,{default:t(()=>[a(l,null,{preview:t(()=>[e("div",E,[a(o(n),{"header-text":"卡片标题1"},{default:t(()=>[R]),"header-extra":t(()=>[a(o(r),{type:"text"},{default:t(()=>[d("按钮")]),_:1})]),_:1}),a(o(n),{"header-text":"卡片标题2"},{default:t(()=>[U]),"header-extra":t(()=>[a(o(r),{type:"text"},{default:t(()=>[d("按钮")]),_:1})]),_:1}),a(o(n),{"header-text":"卡片标题3"},{default:t(()=>[$]),"header-extra":t(()=>[a(o(r),{type:"text"},{default:t(()=>[d("按钮")]),_:1})]),_:1})])]),default:t(()=>[D]),_:1})]),_:1}),j])}}});export{L as __pageData,M as default};
