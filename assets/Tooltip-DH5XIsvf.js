import{_ as i}from"./DocMain.vue_vue_type_style_index_0_lang-CPE3a1lM.js";import{_ as a}from"./CodeExample.vue_vue_type_style_index_0_lang-CxmZML-h.js";import{_ as n,b as s}from"./PcCodePreview.vue_vue_type_style_index_0_lang-eQfZEvOX.js";import{_ as m}from"./Button.vue_vue_type_script_setup_true_lang-CWxYsInT.js";import{_ as r}from"./PropTable.vue_vue_type_script_setup_true_lang-B9bkwvPB.js";import{_ as c}from"./SlotTable.vue_vue_type_script_setup_true_lang-BJO5qNGt.js";import{d as _,o as d,c as u,w as t,a as e,e as b,b as o}from"./index-Dyi9F3Hy.js";import"./SourceCode.vue_vue_type_style_index_0_lang-X3cUeUeB.js";import"./Table.vue_vue_type_script_lang-CUBvzf7-.js";const f=o("h1",null,"Tooltip 文字提示",-1),h=o("p",null,"常用于展示鼠标 hover 时的提示信息。",-1),x=o("p",null," 可用来代替系统默认的 title 提示，通常用于针对一个图标按钮的鼠标悬浮显示简单说明 ",-1),S=o("p",null,"该提示使用纯 CSS 实现，所以气泡框位置通常需要手动设置",-1),v=o("p",null," 使用 title 属性来决定 hover 时的提示信息。 由 placement 属性决定展示位置: topStart、top[默认]、topEnd、bottomStart、bottom、bottomEnd ",-1),E=o("p",null," 通过使用 title 插槽来渲染自定义的提示; 如果同时传递 title 和 插槽，则 title 属性为准 ",-1),$=o("span",{style:{color:"red"}},"custome propmt text",-1),w=o("h2",null,"API",-1),T=`
<div class="demo-row">
  <nt-tooltip placement="topStart" title="prompt text"><nt-button>topStart</nt-button></nt-tooltip>
  <nt-tooltip placement="top" title="prompt text"><nt-button>top</nt-button></nt-tooltip>
  <nt-tooltip placement="topEnd" title="prompt text"><nt-button>topEnd</nt-button></nt-tooltip>
</div>
<div class="demo-row mt-10">
  <nt-tooltip placement="bottomStart" title="prompt text"><nt-button>bottomStart</nt-button></nt-tooltip>
  <nt-tooltip placement="bottom" title="prompt text"><nt-button>bottom</nt-button></nt-tooltip>
  <nt-tooltip placement="bottomEnd" title="prompt text"><nt-button>bottomEnd</nt-button></nt-tooltip>
</div>
`,g=`
<nt-tooltip>
  <nt-button>自定义提示</nt-button>
  <template v-slot:title>
    <span style="color: red;">custome propmt text</span>
  </template>
</nt-tooltip>
`,z=_({__name:"Tooltip",setup(y){const p=[{name:"title",description:"提示信息",type:"string",default:""},{name:"placement",description:"气泡位置, top、bottom、topStart、topEnd、bottomStart、bottomEnd",type:"string",default:"top"}],l=[{name:"title",param:"()",description:"自定义提示内容"}];return(B,C)=>(d(),u(i,null,{default:t(()=>[f,h,x,S,e(a,null,{default:t(()=>[e(n,{lang:"html",code:T,title:"基础用法",class:"tooltip-demo"},{description:t(()=>[v]),_:1}),e(n,{lang:"html",code:g,title:"自定义提示",class:"tooltip-demo"},{description:t(()=>[E]),preview:t(()=>[e(s,{placement:"topStart"},{title:t(()=>[$]),default:t(()=>[e(m,null,{default:t(()=>[b("自定义提示")]),_:1})]),_:1})]),_:1})]),_:1}),w,e(r,{data:p,title:"Tooltip Props"}),e(c,{data:l,title:"Tooltip Slots"})]),_:1}))}});export{z as default};
