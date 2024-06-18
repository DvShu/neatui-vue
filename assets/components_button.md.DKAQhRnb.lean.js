import{a as l}from"./chunks/theme.6pyZgfxv.js";import{c as b,k as d,w as e,aa as s,b as t,y as o,R as c,o as i,z as r}from"./chunks/framework.Yy9K0PbY.js";const u=s("",5),h=t("textarea",{lang:"vue-html"},`
  <nt-button type="normal">Default</nt-button>
  <nt-button type="primary" class="ml-10">Primary</nt-button>
  <nt-button type="text" class="ml-10">Text</nt-button>
  `,-1),_=t("h3",{id:"按钮禁用",tabindex:"-1"},[o("按钮禁用 "),t("a",{class:"header-anchor",href:"#按钮禁用","aria-label":'Permalink to "按钮禁用"'},"​")],-1),p=t("p",null,[o("使用 "),t("code",null,"disabled"),o(" 控制按钮禁用状态, 禁用状态下不可点击。该属性接受一个 Boolean 类型的值。")],-1),f=t("textarea",{lang:"vue-html"},`
<nt-button disabled type="normal">Default</nt-button>
<nt-button type="text" class="ml-10" disabled>Text</nt-button>
`,-1),m=t("h3",{id:"按钮加载状态",tabindex:"-1"},[o("按钮加载状态 "),t("a",{class:"header-anchor",href:"#按钮加载状态","aria-label":'Permalink to "按钮加载状态"'},"​")],-1),y=t("p",null,[o("使用 "),t("code",null,"loading"),o(" 控制按钮加载状态, 加载状态下不可点击。")],-1),g=t("textarea",{lang:"vue-html"},`
<nt-button loading type="normal">Default</nt-button>
<nt-button type="primary" loading class="ml-10">Primary</nt-button>
`,-1),x=t("h3",{id:"block-按钮",tabindex:"-1"},[t("code",null,"Block"),o(" 按钮 "),t("a",{class:"header-anchor",href:"#block-按钮","aria-label":'Permalink to "`Block` 按钮"'},"​")],-1),k=t("p",null,[t("code",null,"block"),o(" 属性使按钮适合其父宽度。[100%]")],-1),v=t("textarea",{lang:"vue-html"},`
<nt-button block type="normal">Default</nt-button>
<nt-button type="primary" block class="mt-15">Text</nt-button>
`,-1),P=t("h3",{id:"按钮形状",tabindex:"-1"},[o("按钮形状 "),t("a",{class:"header-anchor",href:"#按钮形状","aria-label":'Permalink to "按钮形状"'},"​")],-1),T=t("p",null,"按钮可以设置为圆形或者弧形",-1),q=t("textarea",{lang:"vue-html"},`
<nt-button circle type="normal">D</nt-button>
<nt-button type="primary" round class="ml-10">Text</nt-button>
`,-1),B=t("h3",{id:"图标按钮",tabindex:"-1"},[o("图标按钮 "),t("a",{class:"header-anchor",href:"#图标按钮","aria-label":'Permalink to "图标按钮"'},"​")],-1),S=t("p",null,"直接在 Button 内使用 Icon 组件。",-1),C=t("textarea",{lang:"vue-html"},`
<nt-button circle type="normal">
<nt-search-icon></nt-search-icon>
</nt-button>
<nt-button type="primary" round class="ml-10">
<nt-search-icon></nt-search-icon>
<span>Search</span>
</nt-button>
`,-1),A=t("h3",{id:"透明背景",tabindex:"-1"},[o("透明背景 "),t("a",{class:"header-anchor",href:"#透明背景","aria-label":'Permalink to "透明背景"'},"​")],-1),D=t("p",null,[t("code",null,"ghost"),o(" 背景变为透明，常用在有色背景上")],-1),V=t("textarea",{lang:"vue-html"},`
  <nt-button type="primary" ghost>透明按钮</nt-button>
  `,-1),I=t("h3",{id:"自定义颜色",tabindex:"-1"},[o("自定义颜色 "),t("a",{class:"header-anchor",href:"#自定义颜色","aria-label":'Permalink to "自定义颜色"'},"​")],-1),N=t("textarea",{lang:"vue-html"},`
  <nt-button color="#722ed1">按钮</nt-button>
  <nt-button color="#eb2f96" ghost class="ml-10">按钮</nt-button>
  `,-1),w=t("h3",{id:"扩展-type",tabindex:"-1"},[o("扩展 "),t("code",null,"type"),o(),t("a",{class:"header-anchor",href:"#扩展-type","aria-label":'Permalink to "扩展 `type`"'},"​")],-1),O=t("p",null,[o("通过给 "),t("code",null,"type"),o(" 设置一个非预设的值，然后定义 "),t("code",null,".nt-btn-x"),o(" 的样式。")],-1),E=t("textarea",{lang:"vue"},`
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
  `,-1),R=s("",7),G=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/button.md","filePath":"components/button.md","lastUpdated":1717058498000}'),j={name:"components/button.md"},H=Object.assign(j,{setup(z){return(J,U)=>{const n=c("CodePreview"),a=c("ClientOnly");return i(),b("div",null,[u,d(a,null,{default:e(()=>[d(n,null,{default:e(()=>[h]),_:1})]),_:1}),_,p,d(a,null,{default:e(()=>[d(n,null,{default:e(()=>[f]),_:1})]),_:1}),m,y,d(a,null,{default:e(()=>[d(n,null,{default:e(()=>[g]),_:1})]),_:1}),x,k,d(a,null,{default:e(()=>[d(n,null,{default:e(()=>[v]),_:1})]),_:1}),P,T,d(a,null,{default:e(()=>[d(n,null,{default:e(()=>[q]),_:1})]),_:1}),B,S,d(a,null,{default:e(()=>[d(n,null,{default:e(()=>[C]),_:1})]),_:1}),A,D,d(a,null,{default:e(()=>[d(n,null,{default:e(()=>[V]),_:1})]),_:1}),I,d(a,null,{default:e(()=>[d(n,null,{default:e(()=>[N]),_:1})]),_:1}),w,O,d(a,null,{default:e(()=>[d(n,null,{preview:e(()=>[d(r(l),{type:"blue"},{default:e(()=>[o("蓝色按钮")]),_:1}),d(r(l),{type:"gradient",class:"ml-10"},{default:e(()=>[o("渐变按钮")]),_:1})]),default:e(()=>[E]),_:1})]),_:1}),R])}}});export{G as __pageData,H as default};
