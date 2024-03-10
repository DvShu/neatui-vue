import{_ as s}from"./DocMain.vue_vue_type_style_index_0_lang-CPE3a1lM.js";import{_ as d}from"./CodeExample.vue_vue_type_style_index_0_lang-CxmZML-h.js";import{_ as o}from"./PcCodePreview.vue_vue_type_style_index_0_lang-eQfZEvOX.js";import{_ as a}from"./Button.vue_vue_type_script_setup_true_lang-CWxYsInT.js";import{_ as l}from"./SearchIcon.vue_vue_type_script_setup_true_lang-HlRJ7cL7.js";import{_ as p}from"./PropTable.vue_vue_type_script_setup_true_lang-B9bkwvPB.js";import{_ as m}from"./SlotTable.vue_vue_type_script_setup_true_lang-BJO5qNGt.js";import{_ as u}from"./ThemeTable.vue_vue_type_script_setup_true_lang-SgWKudEJ.js";import{d as b,o as f,c as _,w as n,a as t,b as e}from"./index-Dyi9F3Hy.js";import"./SourceCode.vue_vue_type_style_index_0_lang-X3cUeUeB.js";import"./Table.vue_vue_type_script_lang-CUBvzf7-.js";const h=e("h1",null,"Button 按钮",-1),y=e("p",null,"常用于响应用户点击行为，触发相应的业务逻辑。",-1),g=e("p",null,"使用 type 控制按钮类型, 提供三种类型: default, primary, text。",-1),v=e("p",null," 使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。 ",-1),x=e("p",null,"block 属性使按钮适合其父宽度。[100%]",-1),B=e("p",null,"按钮可以设置为圆形或者弧形",-1),D=e("p",null,"直接在 Button 内使用 Icon 组件。",-1),$=e("span",null,"Search",-1),k=e("p",null,"添加 loading 属性即可让按钮处于加载状态",-1),T=e("h2",null,"API",-1),w=`
<nt-button>Default</nt-button>
<nt-button type="primary" class="ml-10">Primary</nt-button>
<nt-button type="text" class="ml-10">Text</nt-button>
`,C=`
<nt-button disabled>Default</nt-button>
<nt-button type="text" class="ml-10" disabled>Text</nt-button>
`,P=`
<nt-button block>Default</nt-button>
<nt-button type="primary" block class="mt-10">Text</nt-button>
`,S=`
<nt-button circle>D</nt-button>
<nt-button type="primary" round class="ml-10">Text</nt-button>
`,I=`
<nt-button circle>
  <nt-search-icon />
</nt-button>
<nt-button type="primary" round class="ml-10">
  <template v-slot:default>
    <nt-search-icon />
    <span>Search</span>
  </template>
</nt-button>
`,N=`
<nt-button loading>Default</nt-button>
<nt-button type="primary" loading class="ml-10">Primary</nt-button>
`,Q=b({__name:"Button",setup(V){const r=[{name:"type",description:"按钮类型, primary、text、normal",default:"normal",type:"string"},{name:"disabled",description:"是否禁用状态",default:"false",type:"boolean"},{name:"htmlType",description:"原生的 type 属性; button、submit、reset",default:"button",type:"string"},{name:"block",description:"按钮是否适合其父宽度(宽度100%)",default:"false",type:"boolean"},{name:"circle",description:"是否是圆形按钮",default:"false",type:"boolean"},{name:"round",description:"是否是弧形按钮",default:"false",type:"boolean"},{name:"loading",description:"是否处于加载状态",default:"false",type:"boolean"},{name:"loadingText",description:"加载状态时显示的文字",default:"加载中……",type:"string"}],i=[{name:"default",param:"()",description:"内容区域"}],c=[{name:"--nt-btn-color",description:"按钮的文字颜色",default:"rgba(0, 0, 0, 0.65)"},{name:"--nt-btn-bg-color",description:"按钮的背景颜色",default:"#fff"},{name:"--nt-btn-border-color",description:"按钮的边框颜色",default:"#d9d9d9"},{name:"--nt-form-edit-height",description:"按钮的高度",default:"32px"},{name:"--nt-btn-hover-color",description:"鼠标悬浮时按钮的文字颜色",default:"#79b3f7"},{name:"--nt-btn-hover-border-color",description:"鼠标悬浮时按钮的边框颜色",default:"var(--nt-btn-hover-color)"},{name:"--nt-btn-hover-bg-color",description:"鼠标悬浮时按钮的背景颜色",default:"var(--nt-btn-bg-color)"},{name:"--nt-btn-active-color",description:"点击时按钮的颜色",default:"#197df1"},{name:"--nt-btn-active-bg-color",description:"点击时按钮的背景颜色",default:"var(--nt-btn-bg-color)"},{name:"--nt-btn-active-border-color",description:"点击时按钮的边框颜色",default:"var(--nt-btn-active-color)"},{name:"--nt-btn-disabled-color",description:"禁用时按钮的文字颜色",default:"#c9c9c9"},{name:"--nt-btn-disabled-bg-color",description:"禁用时按钮的背景颜色",default:"#fbfbfb"},{name:"--nt-btn-disabled-border-color",description:"禁用时按钮的边框颜色",default:"#e6e6e6"}];return(A,j)=>(f(),_(s,null,{default:n(()=>[h,y,t(d,null,{default:n(()=>[t(o,{lang:"html",title:"按钮类型",code:w},{description:n(()=>[g]),_:1}),t(o,{lang:"html",title:"禁用状态",code:C},{description:n(()=>[v]),_:1}),t(o,{lang:"html",title:"Block按钮",code:P},{description:n(()=>[x]),_:1}),t(o,{lang:"html",title:"按钮形状",code:S},{description:n(()=>[B]),_:1}),t(o,{lang:"html",title:"图标按钮",code:I},{description:n(()=>[D]),preview:n(()=>[t(a,{circle:""},{default:n(()=>[t(l)]),_:1}),t(a,{type:"primary",round:"",class:"ml-10"},{default:n(()=>[t(l),$]),_:1})]),_:1}),t(o,{lang:"html",title:"加载中状态",code:N},{description:n(()=>[k]),_:1})]),_:1}),T,t(p,{data:r,title:"Card Props"}),t(m,{data:i,title:"Card Slots"}),t(u,{rows:c})]),_:1}))}});export{Q as default};
