import{a as n,_ as r}from"./chunks/theme.BfzKFjlx.js";import{c as i,k as a,w as t,b as e,y as d,aa as h,R as c,o as _,z as o}from"./chunks/framework.B0dyP2Dw.js";const u=e("h1",{id:"card-卡片",tabindex:"-1"},[d("Card 卡片 "),e("a",{class:"header-anchor",href:"#card-卡片","aria-label":'Permalink to "Card 卡片"'},"​")],-1),p=e("p",null,"通用卡片应用，常用于后台概览页面。",-1),f=e("h2",{id:"典型卡片",tabindex:"-1"},[d("典型卡片 "),e("a",{class:"header-anchor",href:"#典型卡片","aria-label":'Permalink to "典型卡片"'},"​")],-1),m=e("p",null,"包含标题、内容、操作区域。",-1),x=e("textarea",{lang:"vue-html"},`
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
`,-1),T=e("div",null,"卡片内容",-1),S=h("",2),q=e("textarea",{lang:"vue-html"},`
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
`,-1),A=e("span",{style:{color:"red"}},"卡片标题",-1),V=e("div",null,"卡片内容",-1),N=e("span",{style:{color:"orange"}},"卡片标题",-1),I=e("h2",{id:"栅格卡片",tabindex:"-1"},[d("栅格卡片 "),e("a",{class:"header-anchor",href:"#栅格卡片","aria-label":'Permalink to "栅格卡片"'},"​")],-1),O=e("p",null,"在系统概览页面常常和栅格进行配合。通常用于管理后台的工作台聚合展示。",-1),B=e("p",null,[d("关于栅格布局，框架不提供，推荐使用 "),e("a",{href:"https://unocss.dev/interactive/?s=grid",target:"_blank",rel:"noreferrer"},"unocss"),d(" 或者 "),e("a",{href:"https://www.tailwindcss.cn/docs/display#grid",target:"_blank",rel:"noreferrer"},"tailwindcss"),d(" 的 "),e("code",null,"grid"),d(" 实现")],-1),D=e("textarea",{lang:"vue-html"},`
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
  `,-1),E={class:"grid grid-cols-3 gap-4"},R=e("div",null,"卡片内容1",-1),$=e("div",null,"卡片内容2",-1),j=e("div",null,"卡片内容3",-1),z=h("",5),L=JSON.parse('{"title":"Card 卡片","description":"","frontmatter":{},"headers":[],"relativePath":"components/card.md","filePath":"components/card.md","lastUpdated":1713346936000}'),J={name:"components/card.md"},M=Object.assign(J,{setup(U){return(F,G)=>{const l=c("CodePreview"),s=c("ClientOnly");return _(),i("div",null,[u,p,f,m,a(s,null,{default:t(()=>[a(l,null,{preview:t(()=>[a(o(n),{"header-text":"card title"},{default:t(()=>[v]),"header-extra":t(()=>[a(o(r),{type:"text"},{default:t(()=>[d("按钮")]),_:1})]),_:1})]),default:t(()=>[x]),_:1})]),_:1}),b,y,a(s,null,{default:t(()=>[a(l,null,{preview:t(()=>[a(o(n),{"header-text":"card title","show-header":!1},{default:t(()=>[w]),_:1})]),default:t(()=>[g]),_:1})]),_:1}),P,C,a(s,null,{default:t(()=>[a(l,null,{preview:t(()=>[a(o(n),{"header-text":"card title","show-footer":"","footer-text":"底部区域"},{default:t(()=>[T]),"header-extra":t(()=>[a(o(r),{type:"text"},{default:t(()=>[d("按钮")]),_:1})]),_:1})]),default:t(()=>[k]),_:1})]),_:1}),S,a(s,null,{default:t(()=>[a(l,null,{preview:t(()=>[a(o(n),{"show-footer":!0},{header:t(()=>[A]),default:t(()=>[V]),"header-extra":t(()=>[a(o(r),{type:"text"},{default:t(()=>[d("按钮")]),_:1})]),footer:t(()=>[N]),_:1})]),default:t(()=>[q]),_:1})]),_:1}),I,O,B,a(s,null,{default:t(()=>[a(l,null,{preview:t(()=>[e("div",E,[a(o(n),{"header-text":"卡片标题1"},{default:t(()=>[R]),"header-extra":t(()=>[a(o(r),{type:"text"},{default:t(()=>[d("按钮")]),_:1})]),_:1}),a(o(n),{"header-text":"卡片标题2"},{default:t(()=>[$]),"header-extra":t(()=>[a(o(r),{type:"text"},{default:t(()=>[d("按钮")]),_:1})]),_:1}),a(o(n),{"header-text":"卡片标题3"},{default:t(()=>[j]),"header-extra":t(()=>[a(o(r),{type:"text"},{default:t(()=>[d("按钮")]),_:1})]),_:1})])]),default:t(()=>[D]),_:1})]),_:1}),z])}}});export{L as __pageData,M as default};
