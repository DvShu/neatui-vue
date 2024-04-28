import{c as i,a as r}from"./chunks/theme.BELXmYxf.js";import{P as l,c as s,f as e,w as o,ab as p,b as t,q as n,o as h,u as c}from"./chunks/framework.B2jEF4L8.js";const _=p("",6),m=t("textarea",{lang:"vue-html"},`
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
`,-1),x=t("span",{style:{color:"red"}},"custome propmt text",-1),S=p("",5),k=JSON.parse('{"title":"Tooltip 文字提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/tooltip.md","filePath":"components/tooltip.md","lastUpdated":1713346936000}'),T={name:"components/tooltip.md"},y=Object.assign(T,{setup(P){return(v,q)=>{const d=l("CodePreview"),a=l("ClientOnly");return h(),s("div",null,[_,e(a,null,{default:o(()=>[e(d,null,{default:o(()=>[m]),_:1})]),_:1}),u,b,e(a,null,{default:o(()=>[e(d,null,{preview:o(()=>[e(c(i),null,{title:o(()=>[x]),default:o(()=>[e(c(r),null,{default:o(()=>[n("自定义提示")]),_:1})]),_:1})]),default:o(()=>[f]),_:1})]),_:1}),S])}}});export{k as __pageData,y as default};
