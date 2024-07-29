import{B as o,C as d,E as _,F as u,G as p,H as f,I as y}from"./chunks/theme.BDs-Rhbx.js";import{e as v,o as x,c as g,g as a,w as t,ae as m,b as r,J as n,X as s,l as e}from"./chunks/framework.-x160Rg7.js";const P=m('<h1 id="tabbar-标签栏" tabindex="-1">Tabbar 标签栏 <a class="header-anchor" href="#tabbar-标签栏" aria-label="Permalink to &quot;Tabbar 标签栏&quot;">​</a></h1><p>使用场景如下:</p><ol><li>底部导航栏，用于在不同页面之间进行切换</li><li>标签切换</li><li>选项卡</li></ol><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="导航栏模式" tabindex="-1">导航栏模式 <a class="header-anchor" href="#导航栏模式" aria-label="Permalink to &quot;导航栏模式&quot;">​</a></h3><p>将 <code>type</code> 设置为 <code>nav</code>[默认]</p>',6),T=r("textarea",{lang:"vue-html"},`
  <nt-tabbar style="border: 1px solid #dedede">
    <nt-tabbar-item name="Reduction">
      <template #icon>
        <nt-reduction-icon />
      </template>
      <span>Reduction</span>
    </nt-tabbar-item>
    <nt-tabbar-item name="RefreshLeft">
      <template #icon>
        <nt-refresh-left-icon />
      </template>
      <span>RefreshLeft</span>
    </nt-tabbar-item>
    <nt-tabbar-item name="Search">
      <template #icon>
        <nt-search-icon />
      </template>
      <span>Search</span>
    </nt-tabbar-item>
    <nt-tabbar-item name="RefreshRight">
      <template #icon>
        <nt-refresh-right-icon />
      </template>
      <span>RefreshRight</span>
    </nt-tabbar-item>
    <nt-tabbar-item name="Sort">
      <template #icon>
        <nt-sort-icon />
      </template>
      <span>Sort</span>
    </nt-tabbar-item>
  </nt-tabbar>
  `,-1),S=r("span",null,"Reduction",-1),q=r("span",null,"RefreshLeft",-1),R=r("span",null,"Search",-1),C=r("span",null,"RefreshRight",-1),k=r("span",null,"Sort",-1),j=r("h3",{id:"选项卡",tabindex:"-1"},[n("选项卡 "),r("a",{class:"header-anchor",href:"#选项卡","aria-label":'Permalink to "选项卡"'},"​")],-1),V=r("p",null,"基础的、简洁的选项卡，初始选中第2项",-1),I=r("textarea",{lang:"vue"},`
  <template>
  <nt-tabbar type="bar" v-model='active2'>
    <nt-tabbar-item name="1">选项1</nt-tabbar-item>
    <nt-tabbar-item name="2">选项2</nt-tabbar-item>
    <nt-tabbar-item name="3">选项3</nt-tabbar-item>
  </nt-tabbar>
  </template>
  <script setup>
  import { ref } from 'vue';
  const active2 = ref('2')
  <\/script>
  `,-1),w=r("h3",{id:"排列方式",tabindex:"-1"},[n("排列方式 "),r("a",{class:"header-anchor",href:"#排列方式","aria-label":'Permalink to "排列方式"'},"​")],-1),A=r("p",null,[n("主轴的排列方式，只对 "),r("code",null,"bar"),n(" 类型生效。只需要将 "),r("code",null,"justify-content"),n(" 的属性设置为 "),r("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content#%E5%80%BC",target:"_blank",rel:"noreferrer"},"justify-content可用值"),n(" 即可。")],-1),N=r("textarea",{lang:"vue-html"},`
  <nt-tabbar type="bar" justify-content="center">
    <nt-tabbar-item name="1">选项1</nt-tabbar-item>
    <nt-tabbar-item name="2">选项2</nt-tabbar-item>
    <nt-tabbar-item name="3">选项3</nt-tabbar-item>
  </nt-tabbar>
  <hr />
  <nt-tabbar type="bar" justify-content="space-between">
    <nt-tabbar-item name="1">选项1</nt-tabbar-item>
    <nt-tabbar-item name="2">选项2</nt-tabbar-item>
    <nt-tabbar-item name="3">选项3</nt-tabbar-item>
  </nt-tabbar>
  <hr />
  <nt-tabbar type="bar" justify-content="space-around">
    <nt-tabbar-item name="1">选项1</nt-tabbar-item>
    <nt-tabbar-item name="2">选项2</nt-tabbar-item>
    <nt-tabbar-item name="3">选项3</nt-tabbar-item>
  </nt-tabbar>
  <hr />
  <nt-tabbar type="bar" justify-content="space-evenly">
    <nt-tabbar-item name="1">选项1</nt-tabbar-item>
    <nt-tabbar-item name="2">选项2</nt-tabbar-item>
    <nt-tabbar-item name="3">选项3</nt-tabbar-item>
  </nt-tabbar>
  `,-1),E=r("hr",null,null,-1),$=r("hr",null,null,-1),B=r("hr",null,null,-1),L=r("h3",{id:"卡片式",tabindex:"-1"},[n("卡片式 "),r("a",{class:"header-anchor",href:"#卡片式","aria-label":'Permalink to "卡片式"'},"​")],-1),O=r("p",null,[n("具有卡片风格的标签。只需要设置 "),r("code",null,"type"),n(" 属性为 "),r("code",null,"card"),n(" 就可以使选项卡改变为标签风格。 同时可以通过 "),r("code",null,"gap"),n(" 调整选项卡之间的间距。")],-1),D=r("textarea",{lang:"vue-html"},`
  <nt-tabbar type="card">
    <nt-tabbar-item name="1">选项1</nt-tabbar-item>
    <nt-tabbar-item name="2">选项2</nt-tabbar-item>
    <nt-tabbar-item name="3">选项3</nt-tabbar-item>
  </nt-tabbar>
  <hr />
  <nt-tabbar type="card" :gap="5">
    <nt-tabbar-item name="1">选项1</nt-tabbar-item>
    <nt-tabbar-item name="2">选项2</nt-tabbar-item>
    <nt-tabbar-item name="3">选项3</nt-tabbar-item>
  </nt-tabbar>
  `,-1),z=r("hr",null,null,-1),J=m('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="tabbar-props" tabindex="-1">Tabbar Props <a class="header-anchor" href="#tabbar-props" aria-label="Permalink to &quot;Tabbar Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>选中的选项卡</td><td><code>string</code></td><td>-</td></tr><tr><td><code>type</code></td><td>风格</td><td><code>nav</code>、<code>bar</code>、<code>card</code></td><td><code>nav</code></td></tr><tr><td><code>justify-content</code></td><td>主轴的排列方式</td><td><code>string</code></td><td><code>flex-start</code></td></tr><tr><td><code>gap</code></td><td>选项卡之间的间距</td><td><code>number</code></td><td><code>0</code></td></tr></tbody></table><h3 id="tabbar-events" tabindex="-1">Tabbar Events <a class="header-anchor" href="#tabbar-events" aria-label="Permalink to &quot;Tabbar Events&quot;">​</a></h3><p>| 事件名 | 说明 | 参数 | | <code>change</code> | 选项卡切换时触发 | <code>(active: string) =&gt; void</code> |</p><h3 id="tabbaritem-props" tabindex="-1">TabbarItem Props <a class="header-anchor" href="#tabbaritem-props" aria-label="Permalink to &quot;TabbarItem Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>name</code></td><td>选项卡的唯一标识</td><td><code>string</code> | <code>name</code></td><td>-</td></tr></tbody></table><h3 id="tabbaritem-slots" tabindex="-1">TabbarItem Slots <a class="header-anchor" href="#tabbaritem-slots" aria-label="Permalink to &quot;TabbarItem Slots&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td><code>icon</code></td><td>选项卡的图标</td></tr><tr><td><code>default</code></td><td>选项卡的内容</td></tr></tbody></table><h3 id="tabbar-css-vars" tabindex="-1">Tabbar Css Vars <a class="header-anchor" href="#tabbar-css-vars" aria-label="Permalink to &quot;Tabbar Css Vars&quot;">​</a></h3><table tabindex="0"><thead><tr><th>变量名</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--nt-tabbar-hover-color</code></td><td>选项卡的鼠标悬浮时的颜色</td><td><code>var(--nt-primary-color-light1)</code></td></tr><tr><td><code>--nt-tabbar-active-color</code></td><td>选项卡的选中时的颜色</td><td><code>var(--nt-primary-color)</code></td></tr><tr><td><code>--nt-tabbar-item-gap</code></td><td>选项卡之间的间距</td><td><code>0</code></td></tr><tr><td><code>--nt-tabbar-height</code></td><td>选项卡的高度</td><td><code>38px</code>[<code>nav</code>时默认为: <code>50px</code>]</td></tr><tr><td><code>--nt-tabbar-line-color</code></td><td>下划线的颜色</td><td><code>var(--nt-primary-color)</code></td></tr><tr><td><code>--nt-tabbar-card-border-color</code></td><td>卡片选项卡的边框颜色</td><td><code>#f5f7fa</code></td></tr><tr><td><code>--nt-tabbar-card-border-radius</code></td><td>卡片选项卡的边框圆角</td><td><code>5px</code></td></tr></tbody></table>',11),X=JSON.parse('{"title":"Tabbar 标签栏","description":"","frontmatter":{},"headers":[],"relativePath":"components/tabbar.md","filePath":"components/tabbar.md","lastUpdated":1719815324000}'),U={name:"components/tabbar.md"},K=Object.assign(U,{setup(F){const c=v("2");return(G,i)=>{const b=s("CodePreview"),l=s("ClientOnly");return x(),g("div",null,[P,a(l,null,{default:t(()=>[a(b,null,{preview:t(()=>[a(e(o),{style:{border:"1px solid #dedede"}},{default:t(()=>[a(e(d),{name:"Reduction"},{icon:t(()=>[a(e(_))]),default:t(()=>[S]),_:1}),a(e(d),{name:"RefreshLeft"},{icon:t(()=>[a(e(u))]),default:t(()=>[q]),_:1}),a(e(d),{name:"Search"},{icon:t(()=>[a(e(p))]),default:t(()=>[R]),_:1}),a(e(d),{name:"RefreshRight"},{icon:t(()=>[a(e(f))]),default:t(()=>[C]),_:1}),a(e(d),{name:"Sort"},{icon:t(()=>[a(e(y))]),default:t(()=>[k]),_:1})]),_:1})]),default:t(()=>[T]),_:1})]),_:1}),j,V,a(l,null,{default:t(()=>[a(b,null,{preview:t(()=>[a(e(o),{type:"bar",modelValue:c.value,"onUpdate:modelValue":i[0]||(i[0]=h=>c.value=h)},{default:t(()=>[a(e(d),{name:"1"},{default:t(()=>[n("选项1")]),_:1}),a(e(d),{name:"2"},{default:t(()=>[n("选项2")]),_:1}),a(e(d),{name:"3"},{default:t(()=>[n("选项3")]),_:1})]),_:1},8,["modelValue"])]),default:t(()=>[I]),_:1})]),_:1}),w,A,a(l,null,{default:t(()=>[a(b,null,{preview:t(()=>[a(e(o),{type:"bar","justify-content":"center"},{default:t(()=>[a(e(d),{name:"1"},{default:t(()=>[n("选项1")]),_:1}),a(e(d),{name:"2"},{default:t(()=>[n("选项2")]),_:1}),a(e(d),{name:"3"},{default:t(()=>[n("选项3")]),_:1})]),_:1}),E,a(e(o),{type:"bar","justify-content":"space-between"},{default:t(()=>[a(e(d),{name:"1"},{default:t(()=>[n("选项1")]),_:1}),a(e(d),{name:"2"},{default:t(()=>[n("选项2")]),_:1}),a(e(d),{name:"3"},{default:t(()=>[n("选项3")]),_:1})]),_:1}),$,a(e(o),{type:"bar","justify-content":"space-around"},{default:t(()=>[a(e(d),{name:"1"},{default:t(()=>[n("选项1")]),_:1}),a(e(d),{name:"2"},{default:t(()=>[n("选项2")]),_:1}),a(e(d),{name:"3"},{default:t(()=>[n("选项3")]),_:1})]),_:1}),B,a(e(o),{type:"bar","justify-content":"space-evenly"},{default:t(()=>[a(e(d),{name:"1"},{default:t(()=>[n("选项1")]),_:1}),a(e(d),{name:"2"},{default:t(()=>[n("选项2")]),_:1}),a(e(d),{name:"3"},{default:t(()=>[n("选项3")]),_:1})]),_:1})]),default:t(()=>[N]),_:1})]),_:1}),L,O,a(l,null,{default:t(()=>[a(b,null,{preview:t(()=>[a(e(o),{type:"card"},{default:t(()=>[a(e(d),{name:"1"},{default:t(()=>[n("选项1")]),_:1}),a(e(d),{name:"2"},{default:t(()=>[n("选项2")]),_:1}),a(e(d),{name:"3"},{default:t(()=>[n("选项3")]),_:1})]),_:1}),z,a(e(o),{type:"card",gap:5},{default:t(()=>[a(e(d),{name:"1"},{default:t(()=>[n("选项1")]),_:1}),a(e(d),{name:"2"},{default:t(()=>[n("选项2")]),_:1}),a(e(d),{name:"3"},{default:t(()=>[n("选项3")]),_:1})]),_:1})]),default:t(()=>[D]),_:1})]),_:1}),J])}}});export{X as __pageData,K as default};
