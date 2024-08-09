import{_ as l}from"./chunks/theme.1ktC8hXP.js";import{c as b,g as o,w as d,ae as s,b as t,M as e,Z as c,o as u,q as r}from"./chunks/framework.CqWuvRde.js";const i=s("",5),h=t("textarea",{lang:"vue-html"},`
  <nt-button type="normal">Default</nt-button>
  <nt-button type="primary" class="ml-10">Primary</nt-button>
  `,-1),_=t("h3",{id:"文本按钮",tabindex:"-1"},[e("文本按钮 "),t("a",{class:"header-anchor",href:"#文本按钮","aria-label":'Permalink to "文本按钮"'},"​")],-1),p=t("p",null,[e("通过传递 "),t("code",null,"text"),e(" 属性将按钮变为文本按钮，配合 "),t("code",null,"type"),e(" 能有更多风格。")],-1),f=t("textarea",{lang:"vue-html"},`
  <nt-button type="normal" text>Default</nt-button>
  <nt-button type="primary" text class="ml-10">Primary</nt-button>
  `,-1),m=t("h3",{id:"按钮禁用",tabindex:"-1"},[e("按钮禁用 "),t("a",{class:"header-anchor",href:"#按钮禁用","aria-label":'Permalink to "按钮禁用"'},"​")],-1),y=t("p",null,[e("使用 "),t("code",null,"disabled"),e(" 控制按钮禁用状态, 禁用状态下不可点击。该属性接受一个 Boolean 类型的值。")],-1),x=t("textarea",{lang:"vue-html"},`
<nt-button disabled type="normal">Default</nt-button>
<nt-button type="text" class="ml-10" disabled>Text</nt-button>
`,-1),g=t("h3",{id:"按钮加载状态",tabindex:"-1"},[e("按钮加载状态 "),t("a",{class:"header-anchor",href:"#按钮加载状态","aria-label":'Permalink to "按钮加载状态"'},"​")],-1),k=t("p",null,[e("使用 "),t("code",null,"loading"),e(" 控制按钮加载状态, 加载状态下不可点击。")],-1),v=t("textarea",{lang:"vue-html"},`
<nt-button loading type="normal">Default</nt-button>
<nt-button type="primary" loading class="ml-10">Primary</nt-button>
`,-1),P=t("h3",{id:"block-按钮",tabindex:"-1"},[t("code",null,"Block"),e(" 按钮 "),t("a",{class:"header-anchor",href:"#block-按钮","aria-label":'Permalink to "`Block` 按钮"'},"​")],-1),T=t("p",null,[t("code",null,"block"),e(" 属性使按钮适合其父宽度。[100%]")],-1),q=t("textarea",{lang:"vue-html"},`
<nt-button block type="normal">Default</nt-button>
<nt-button type="primary" block class="mt-15">Text</nt-button>
`,-1),B=t("h3",{id:"按钮形状",tabindex:"-1"},[e("按钮形状 "),t("a",{class:"header-anchor",href:"#按钮形状","aria-label":'Permalink to "按钮形状"'},"​")],-1),S=t("p",null,"按钮可以设置为圆形或者弧形",-1),C=t("textarea",{lang:"vue-html"},`
<nt-button circle type="normal">D</nt-button>
<nt-button type="primary" round class="ml-10">Text</nt-button>
`,-1),D=t("h3",{id:"图标按钮",tabindex:"-1"},[e("图标按钮 "),t("a",{class:"header-anchor",href:"#图标按钮","aria-label":'Permalink to "图标按钮"'},"​")],-1),A=t("p",null,"直接在 Button 内使用 Icon 组件。",-1),V=t("textarea",{lang:"vue-html"},`
<nt-button circle type="normal">
<nt-search-icon></nt-search-icon>
</nt-button>
<nt-button type="primary" round class="ml-10">
<nt-search-icon></nt-search-icon>
<span>Search</span>
</nt-button>
`,-1),I=t("h3",{id:"透明背景",tabindex:"-1"},[e("透明背景 "),t("a",{class:"header-anchor",href:"#透明背景","aria-label":'Permalink to "透明背景"'},"​")],-1),N=t("p",null,[t("code",null,"ghost"),e(" 背景变为透明，常用在有色背景上")],-1),w=t("textarea",{lang:"vue-html"},`
  <nt-button type="primary" ghost>透明按钮</nt-button>
  `,-1),O=t("h3",{id:"自定义颜色",tabindex:"-1"},[e("自定义颜色 "),t("a",{class:"header-anchor",href:"#自定义颜色","aria-label":'Permalink to "自定义颜色"'},"​")],-1),E=t("textarea",{lang:"vue-html"},`
  <nt-button color="#722ed1">按钮</nt-button>
  <nt-button color="#eb2f96" ghost class="ml-10">按钮</nt-button>
  <nt-button color="#4998f4" text class="ml-10">按钮</nt-button>
  `,-1),R=t("h3",{id:"扩展-type",tabindex:"-1"},[e("扩展 "),t("code",null,"type"),e(),t("a",{class:"header-anchor",href:"#扩展-type","aria-label":'Permalink to "扩展 `type`"'},"​")],-1),j=t("p",null,[e("通过给 "),t("code",null,"type"),e(" 设置一个非预设的值，然后定义 "),t("code",null,".nt-btn-x"),e(" 的样式。")],-1),J=t("textarea",{lang:"vue"},`
  <template>
    <nt-button type="blue">蓝色按钮</nt-button>
    <nt-button type="gradient" class="ml-10">渐变按钮</nt-button>
  </template>
  <style>
    .nt-btn-blue {
      --nt-btn-border-color: #1677ff;
      --nt-btn-hover-border-color: #4096ff;
      --nt-btn-active-border-color: #0958d9;
    }
    .nt-btn-gradient {
      border: none;
      --nt-btn-color: #389e0d;
      --nt-btn-active-color: #0fd850;
      --nt-btn-background: linear-gradient(90deg, #0fd850 0%, #f9f047 100%);
      --nt-btn-hover-background: linear-gradient(90deg, #2af06a 0%, #fbf478 100%);
      --nt-btn-active-background: linear-gradient(90deg, #0a9036 0%, #ece008 100%);
    }
  </style>
  `,-1),M=s("",7),H=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/button.md","filePath":"components/button.md","lastUpdated":1721968438000}'),U={name:"components/button.md"},K=Object.assign(U,{setup(Z){return($,z)=>{const n=c("CodePreview"),a=c("ClientOnly");return u(),b("div",null,[i,o(a,null,{default:d(()=>[o(n,null,{default:d(()=>[h]),_:1})]),_:1}),_,p,o(a,null,{default:d(()=>[o(n,null,{default:d(()=>[f]),_:1})]),_:1}),m,y,o(a,null,{default:d(()=>[o(n,null,{default:d(()=>[x]),_:1})]),_:1}),g,k,o(a,null,{default:d(()=>[o(n,null,{default:d(()=>[v]),_:1})]),_:1}),P,T,o(a,null,{default:d(()=>[o(n,null,{default:d(()=>[q]),_:1})]),_:1}),B,S,o(a,null,{default:d(()=>[o(n,null,{default:d(()=>[C]),_:1})]),_:1}),D,A,o(a,null,{default:d(()=>[o(n,null,{default:d(()=>[V]),_:1})]),_:1}),I,N,o(a,null,{default:d(()=>[o(n,null,{default:d(()=>[w]),_:1})]),_:1}),O,o(a,null,{default:d(()=>[o(n,null,{default:d(()=>[E]),_:1})]),_:1}),R,j,o(a,null,{default:d(()=>[o(n,null,{preview:d(()=>[o(r(l),{type:"blue"},{default:d(()=>[e("蓝色按钮")]),_:1}),o(r(l),{type:"gradient",class:"ml-10"},{default:d(()=>[e("渐变按钮")]),_:1})]),default:d(()=>[J]),_:1})]),_:1}),M])}}});export{H as __pageData,K as default};
