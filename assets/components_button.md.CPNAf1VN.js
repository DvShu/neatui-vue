import{_ as l}from"./chunks/theme.BPBBkDg1.js";import{o as b,c as u,g as o,w as d,ae as s,b as t,J as e,X as c,l as r}from"./chunks/framework.-x160Rg7.js";const i=s('<h3 id="button-按钮" tabindex="-1">Button 按钮 <a class="header-anchor" href="#button-按钮" aria-label="Permalink to &quot;Button 按钮&quot;">​</a></h3><p>常用于响应用户点击行为，触发相应的业务逻辑。</p><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2><h3 id="按钮类型" tabindex="-1">按钮类型 <a class="header-anchor" href="#按钮类型" aria-label="Permalink to &quot;按钮类型&quot;">​</a></h3><p>使用 <code>type</code> 控制按钮类型, 提供两种类型: <code>normal</code>, <code>primary</code>。</p>',5),h=t("textarea",{lang:"vue-html"},`
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
  `,-1),J=t("h3",{id:"扩展-type",tabindex:"-1"},[e("扩展 "),t("code",null,"type"),e(),t("a",{class:"header-anchor",href:"#扩展-type","aria-label":'Permalink to "扩展 `type`"'},"​")],-1),R=t("p",null,[e("通过给 "),t("code",null,"type"),e(" 设置一个非预设的值，然后定义 "),t("code",null,".nt-btn-x"),e(" 的样式。")],-1),j=t("textarea",{lang:"vue"},`
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
  `,-1),U=s('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="button-props" tabindex="-1">Button Props <a class="header-anchor" href="#button-props" aria-label="Permalink to &quot;Button Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td>按钮类型, <code>normal</code>, <code>primary</code>, <code>text</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>disabled</code></td><td>按钮禁用状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>loading</code></td><td>按钮加载状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>block</code></td><td>按钮是否为块级元素[适合其父宽度(宽度100%)]</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>round</code></td><td>按钮是否为圆角[弧形按钮]</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>circle</code></td><td>按钮是否为圆形</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>htmlType</code></td><td>原生的 <code>type</code> 属性; <code>button</code>、submit<code>、</code>reset`</td><td><code>string</code></td><td><code>button</code></td></tr><tr><td><code>loadingText</code></td><td>加载状态时显示的文字</td><td><code>string</code></td><td><code>加载中……</code></td></tr></tbody></table><h3 id="button-slots" tabindex="-1">Button Slots <a class="header-anchor" href="#button-slots" aria-label="Permalink to &quot;Button Slots&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td><code>default</code></td><td>按钮内容</td></tr></tbody></table><h3 id="样式变量" tabindex="-1">样式变量 <a class="header-anchor" href="#样式变量" aria-label="Permalink to &quot;样式变量&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>描述</th><th>默认值</th></tr></thead><tbody><tr><td><code>--nt-btn-text-color</code></td><td>按钮的文字颜色</td><td><code>rgba(0, 0, 0, 0.65)</code></td></tr><tr><td><code>--nt-btn-background</code></td><td>按钮的背景颜色</td><td><code> #fff</code></td></tr><tr><td><code>--nt-btn-border-color</code></td><td>按钮的边框颜色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--nt-form-edit-height</code></td><td>按钮的高度</td><td><code>32px</code></td></tr><tr><td><code>--nt-btn-hover-text-color</code></td><td>鼠标悬浮时按钮的文字颜色</td><td><code>#79b3f7</code></td></tr><tr><td><code>--nt-btn-hover-border-color</code></td><td>鼠标悬浮时按钮的边框颜色</td><td><code>var(--nt-btn-hover-color)</code></td></tr><tr><td><code>--nt-btn-hover-background</code></td><td>鼠标悬浮时按钮的背景颜色</td><td><code>var(--nt-btn-background)</code></td></tr><tr><td><code>--nt-btn-active-text-color</code></td><td>点击时按钮的颜色</td><td><code>#197df1</code></td></tr><tr><td><code>--nt-btn-active-background</code></td><td>点击时按钮的背景颜色</td><td><code>var(--nt-btn-background)</code></td></tr><tr><td><code>--nt-btn-active-border-color</code></td><td>点击时按钮的边框颜色</td><td><code>var(--nt-btn-active-color)</code></td></tr><tr><td><code>--nt-btn-disabled-color</code></td><td>禁用时按钮的文字颜色</td><td><code>#c9c9c9</code></td></tr><tr><td><code>--nt-btn-disabled-background</code></td><td>禁用时按钮的背景颜色</td><td><code>#fbfbfb</code></td></tr><tr><td><code>--nt-btn-disabled-border-color</code></td><td>禁用时按钮的边框颜色</td><td><code>#e6e6e6</code></td></tr></tbody></table>',7),K=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/button.md","filePath":"components/button.md","lastUpdated":1721968438000}'),X={name:"components/button.md"},L=Object.assign(X,{setup($){return(z,F)=>{const n=c("CodePreview"),a=c("ClientOnly");return b(),u("div",null,[i,o(a,null,{default:d(()=>[o(n,null,{default:d(()=>[h]),_:1})]),_:1}),_,p,o(a,null,{default:d(()=>[o(n,null,{default:d(()=>[f]),_:1})]),_:1}),m,y,o(a,null,{default:d(()=>[o(n,null,{default:d(()=>[x]),_:1})]),_:1}),g,k,o(a,null,{default:d(()=>[o(n,null,{default:d(()=>[v]),_:1})]),_:1}),P,T,o(a,null,{default:d(()=>[o(n,null,{default:d(()=>[q]),_:1})]),_:1}),B,S,o(a,null,{default:d(()=>[o(n,null,{default:d(()=>[C]),_:1})]),_:1}),D,A,o(a,null,{default:d(()=>[o(n,null,{default:d(()=>[V]),_:1})]),_:1}),I,N,o(a,null,{default:d(()=>[o(n,null,{default:d(()=>[w]),_:1})]),_:1}),O,o(a,null,{default:d(()=>[o(n,null,{default:d(()=>[E]),_:1})]),_:1}),J,R,o(a,null,{default:d(()=>[o(n,null,{preview:d(()=>[o(r(l),{type:"blue"},{default:d(()=>[e("蓝色按钮")]),_:1}),o(r(l),{type:"gradient",class:"ml-10"},{default:d(()=>[e("渐变按钮")]),_:1})]),default:d(()=>[j]),_:1})]),_:1}),U])}}});export{K as __pageData,L as default};