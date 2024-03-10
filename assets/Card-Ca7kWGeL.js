import{_ as p}from"./DocMain.vue_vue_type_style_index_0_lang-CPE3a1lM.js";import{_ as i}from"./CodeExample.vue_vue_type_style_index_0_lang-CxmZML-h.js";import{_ as d,a as r}from"./PcCodePreview.vue_vue_type_style_index_0_lang-eQfZEvOX.js";import{_ as l}from"./Button.vue_vue_type_script_setup_true_lang-CWxYsInT.js";import{_ as c}from"./PropTable.vue_vue_type_script_setup_true_lang-B9bkwvPB.js";import{_}from"./SlotTable.vue_vue_type_script_setup_true_lang-BJO5qNGt.js";import{d as h,o as m,c as u,w as t,a as e,e as o,b as a}from"./index-Dyi9F3Hy.js";import"./SourceCode.vue_vue_type_style_index_0_lang-X3cUeUeB.js";import"./Table.vue_vue_type_script_lang-CUBvzf7-.js";const f=a("h1",null,"Card 卡片",-1),x=a("p",null,"通用卡片应用，常用于后台概览页面。",-1),v=a("p",null,"卡片内容",-1),y=a("p",null,"包含标题、内容、操作区域。",-1),w=a("p",null,"卡片内容",-1),g=a("p",null,"只包含内容区域",-1),C=a("p",null,"卡片内容",-1),B=a("p",null,"卡片包含标题，内容、操作区域以及底部区域。",-1),b=a("span",{style:{color:"red"}},"卡片标题",-1),$=a("p",null,"卡片内容",-1),N=a("span",{style:{color:"orange"}},"卡片标题",-1),V=a("p",null," 标题和底部区域除了可以通过 header-text 和 footer-text 传递以外，也可以通过 header 和 footer slot 自定义 。 ",-1),k={class:"grid grid-cols-3 gap-4"},D=a("p",null,"卡片内容1",-1),P=a("p",null,"卡片内容2",-1),A=a("p",null,"卡片内容3",-1),I=a("p",null," 在系统概览页面常常和栅格进行配合。通常用于管理后台的工作台聚合展示。 ",-1),S=a("p",null,[o(" 关于栅格布局，框架不提供，推荐使用 "),a("a",{href:"https://unocss.dev/interactive/?s=grid"},"unocss"),o(" 或者 "),a("a",{href:"https://www.tailwindcss.cn/docs/display#grid"},"tailwindcss"),o(" 的 grid 实现 ")],-1),T=a("h2",null,"API",-1),j=`
<nt-card header-text="card title" >
  <template v-slot:default>
    <p>卡片内容</p>
  </template>
  <template v-slot:header-extra>
    <nt-button type="text">按钮</nt-button>
  </template>
</nt-card>
`,q=`
<nt-card header-text="card title" :show-header="false">
  <template v-slot:default>
    <p>卡片内容</p>
  </template>
</nt-card>
`,z=`
<nt-card header-text="card title" show-footer footer-text="底部区域">
  <template v-slot:default>
    <p>卡片内容</p>
  </template>
  <template v-slot:header-extra>
    <nt-button type="text">按钮</nt-button>
  </template>
</nt-card>
`,E=`
<nt-card :show-footer="true">
  <template v-slot:header>
    <span style="color: red">卡片标题</span>
  </template>
  <template v-slot:default>
    <p>卡片内容</p>
  </template>
  <template v-slot:header-extra>
    <Button type="text">按钮</Button>
  </template>
  <template v-slot:footer>
    <span style="color: orange">卡片标题</span>
  </template>
</nt-card>
`,F=`
<div class="grid grid-cols-3 gap-4">
  <Card header-text="卡片标题1">
    <template v-slot:default>
      <p>卡片内容1</p>
    </template>
    <template v-slot:header-extra>
      <Button type="text">按钮</Button>
    </template>
  </Card>
  <Card header-text="卡片标题2">
    <template v-slot:default>
      <p>卡片内容2</p>
    </template>
    <template v-slot:header-extra>
      <Button type="text">按钮</Button>
    </template>
  </Card>
  <Card header-text="卡片标题3">
    <template v-slot:default>
      <p>卡片内容3</p>
    </template>
    <template v-slot:header-extra>
      <Button type="text">按钮</Button>
    </template>
  </Card>
</div>
`,Y=h({__name:"Card",setup(G){const s=[{name:"header-text",description:"标题内容",default:"",type:"string"},{name:"footer-text",description:"底部区域文本",default:"",type:"string"},{name:"show-header",description:"是否显示标题区域",default:"true",type:"boolean"},{name:"show-footer",description:"是否显示底部区域",default:"false",type:"boolean"},{name:"body-class",description:"内容区域样式",default:"",type:"string"}],n=[{name:"default",param:"()",description:"内容区域"},{name:"header-extra",param:"()",description:"标题操作区域"},{name:"footer",param:"()",description:"底部区域内容"},{name:"header",param:"()",description:"标题区域内容"}];return(H,J)=>(m(),u(p,null,{default:t(()=>[f,x,e(i,null,{default:t(()=>[e(d,{lang:"html",code:j,title:"典型卡片"},{preview:t(()=>[e(r,{"header-text":"卡片标题"},{default:t(()=>[v]),"header-extra":t(()=>[e(l,{type:"text"},{default:t(()=>[o("按钮")]),_:1})]),_:1})]),description:t(()=>[y]),_:1}),e(d,{lang:"html",code:q,title:"简洁卡片"},{preview:t(()=>[e(r,{"header-text":"卡片标题","show-header":!1},{default:t(()=>[w]),_:1})]),description:t(()=>[g]),_:1}),e(d,{lang:"html",code:z,title:"完整卡片"},{preview:t(()=>[e(r,{"header-text":"卡片标题","show-footer":!0,"footer-text":"底部区域"},{default:t(()=>[C]),"header-extra":t(()=>[e(l,{type:"text"},{default:t(()=>[o("按钮")]),_:1})]),_:1})]),description:t(()=>[B]),_:1}),e(d,{lang:"html",code:E,title:"自定义标题"},{preview:t(()=>[e(r,{"show-footer":!0},{header:t(()=>[b]),default:t(()=>[$]),"header-extra":t(()=>[e(l,{type:"text"},{default:t(()=>[o("按钮")]),_:1})]),footer:t(()=>[N]),_:1})]),description:t(()=>[V]),_:1})]),_:1}),e(d,{lang:"html",code:F,title:"栅格卡片"},{preview:t(()=>[a("div",k,[e(r,{"header-text":"卡片标题1"},{default:t(()=>[D]),"header-extra":t(()=>[e(l,{type:"text"},{default:t(()=>[o("按钮")]),_:1})]),_:1}),e(r,{"header-text":"卡片标题2"},{default:t(()=>[P]),"header-extra":t(()=>[e(l,{type:"text"},{default:t(()=>[o("按钮")]),_:1})]),_:1}),e(r,{"header-text":"卡片标题3"},{default:t(()=>[A]),"header-extra":t(()=>[e(l,{type:"text"},{default:t(()=>[o("按钮")]),_:1})]),_:1})])]),description:t(()=>[I,S]),_:1}),T,e(c,{data:s,title:"Card Props"}),e(_,{data:n,title:"Card Slots"})]),_:1}))}});export{Y as default};
