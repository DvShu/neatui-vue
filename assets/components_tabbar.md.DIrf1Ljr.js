import{N as b,O as l,Q as f,R as h,S as y,T as v,U as c}from"./chunks/theme.CPmK6aLA.js";import{f as x,c as g,ag as s,l as e,w as a,b as d,R as n,a1 as u,o as P,u as r}from"./chunks/framework.DdiFAQ9y.js";const j=JSON.parse('{"title":"Tabbar 标签栏","description":"","frontmatter":{},"headers":[],"relativePath":"components/tabbar.md","filePath":"components/tabbar.md","lastUpdated":1732085261000}'),q={name:"components/tabbar.md"},C=Object.assign(q,{setup(R){const m=x("2");return(k,t)=>{const o=u("CodePreview"),i=u("ClientOnly");return P(),g("div",null,[t[35]||(t[35]=s('<h1 id="tabbar-标签栏" tabindex="-1">Tabbar 标签栏 <a class="header-anchor" href="#tabbar-标签栏" aria-label="Permalink to &quot;Tabbar 标签栏&quot;">​</a></h1><p>使用场景如下:</p><ol><li>底部导航栏，用于在不同页面之间进行切换</li><li>标签切换</li><li>选项卡</li></ol><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="导航栏模式" tabindex="-1">导航栏模式 <a class="header-anchor" href="#导航栏模式" aria-label="Permalink to &quot;导航栏模式&quot;">​</a></h3><p>将 <code>type</code> 设置为 <code>nav</code>[默认]</p>',6)),e(i,null,{default:a(()=>[e(o,null,{preview:a(()=>[e(r(b),{style:{border:"1px solid #dedede"}},{default:a(()=>[e(r(l),{name:"Reduction"},{icon:a(()=>[e(r(f))]),default:a(()=>[t[1]||(t[1]=d("span",null,"Reduction",-1))]),_:1}),e(r(l),{name:"RefreshLeft"},{icon:a(()=>[e(r(h))]),default:a(()=>[t[2]||(t[2]=d("span",null,"RefreshLeft",-1))]),_:1}),e(r(l),{name:"Search"},{icon:a(()=>[e(r(y))]),default:a(()=>[t[3]||(t[3]=d("span",null,"Search",-1))]),_:1}),e(r(l),{name:"RefreshRight"},{icon:a(()=>[e(r(v))]),default:a(()=>[t[4]||(t[4]=d("span",null,"RefreshRight",-1))]),_:1}),e(r(l),{name:"Sort"},{icon:a(()=>[e(r(c))]),default:a(()=>[t[5]||(t[5]=d("span",null,"Sort",-1))]),_:1})]),_:1})]),default:a(()=>[t[6]||(t[6]=d("textarea",{lang:"vue-html"},`  <lt-tabbar style="border: 1px solid #dedede">
    <lt-tabbar-item name="Reduction">
      <template #icon>
        <lt-reduction-icon />
      </template>
      <span>Reduction</span>
    </lt-tabbar-item>
    <lt-tabbar-item name="RefreshLeft">
      <template #icon>
        <lt-refresh-left-icon />
      </template>
      <span>RefreshLeft</span>
    </lt-tabbar-item>
    <lt-tabbar-item name="Search">
      <template #icon>
        <lt-search-icon />
      </template>
      <span>Search</span>
    </lt-tabbar-item>
    <lt-tabbar-item name="RefreshRight">
      <template #icon>
        <lt-refresh-right-icon />
      </template>
      <span>RefreshRight</span>
    </lt-tabbar-item>
    <lt-tabbar-item name="Sort">
      <template #icon>
        <lt-sort-icon />
      </template>
      <span>Sort</span>
    </lt-tabbar-item>
  </lt-tabbar>
  `,-1))]),_:1})]),_:1}),t[36]||(t[36]=d("h3",{id:"选项卡",tabindex:"-1"},[n("选项卡 "),d("a",{class:"header-anchor",href:"#选项卡","aria-label":'Permalink to "选项卡"'},"​")],-1)),t[37]||(t[37]=d("p",null,"基础的、简洁的选项卡，初始选中第2项",-1)),e(i,null,{default:a(()=>[e(o,null,{preview:a(()=>[e(r(b),{type:"bar",modelValue:m.value,"onUpdate:modelValue":t[0]||(t[0]=p=>m.value=p)},{default:a(()=>[e(r(l),{name:"1"},{default:a(()=>t[7]||(t[7]=[n("选项1")])),_:1}),e(r(l),{name:"2"},{default:a(()=>t[8]||(t[8]=[n("选项2")])),_:1}),e(r(l),{name:"3"},{default:a(()=>t[9]||(t[9]=[n("选项3")])),_:1})]),_:1},8,["modelValue"])]),default:a(()=>[t[10]||(t[10]=d("textarea",{lang:"vue"},`  <template>
  <lt-tabbar type="bar" v-model='active2'>
    <lt-tabbar-item name="1">选项1</lt-tabbar-item>
    <lt-tabbar-item name="2">选项2</lt-tabbar-item>
    <lt-tabbar-item name="3">选项3</lt-tabbar-item>
  </lt-tabbar>
  </template>
  <script setup>
  import { ref } from 'vue';
  const active2 = ref('2')
  <\/script>
  `,-1))]),_:1})]),_:1}),t[38]||(t[38]=d("h3",{id:"排列方式",tabindex:"-1"},[n("排列方式 "),d("a",{class:"header-anchor",href:"#排列方式","aria-label":'Permalink to "排列方式"'},"​")],-1)),t[39]||(t[39]=d("p",null,[n("主轴的排列方式，只对 "),d("code",null,"bar"),n(" 类型生效。只需要将 "),d("code",null,"justify-content"),n(" 的属性设置为 "),d("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content#%E5%80%BC",target:"_blank",rel:"noreferrer"},"justify-content可用值"),n(" 即可。")],-1)),e(i,null,{default:a(()=>[e(o,null,{preview:a(()=>[e(r(b),{type:"bar","justify-content":"center"},{default:a(()=>[e(r(l),{name:"1"},{default:a(()=>t[11]||(t[11]=[n("选项1")])),_:1}),e(r(l),{name:"2"},{default:a(()=>t[12]||(t[12]=[n("选项2")])),_:1}),e(r(l),{name:"3"},{default:a(()=>t[13]||(t[13]=[n("选项3")])),_:1})]),_:1}),t[23]||(t[23]=d("hr",null,null,-1)),e(r(b),{type:"bar","justify-content":"space-between"},{default:a(()=>[e(r(l),{name:"1"},{default:a(()=>t[14]||(t[14]=[n("选项1")])),_:1}),e(r(l),{name:"2"},{default:a(()=>t[15]||(t[15]=[n("选项2")])),_:1}),e(r(l),{name:"3"},{default:a(()=>t[16]||(t[16]=[n("选项3")])),_:1})]),_:1}),t[24]||(t[24]=d("hr",null,null,-1)),e(r(b),{type:"bar","justify-content":"space-around"},{default:a(()=>[e(r(l),{name:"1"},{default:a(()=>t[17]||(t[17]=[n("选项1")])),_:1}),e(r(l),{name:"2"},{default:a(()=>t[18]||(t[18]=[n("选项2")])),_:1}),e(r(l),{name:"3"},{default:a(()=>t[19]||(t[19]=[n("选项3")])),_:1})]),_:1}),t[25]||(t[25]=d("hr",null,null,-1)),e(r(b),{type:"bar","justify-content":"space-evenly"},{default:a(()=>[e(r(l),{name:"1"},{default:a(()=>t[20]||(t[20]=[n("选项1")])),_:1}),e(r(l),{name:"2"},{default:a(()=>t[21]||(t[21]=[n("选项2")])),_:1}),e(r(l),{name:"3"},{default:a(()=>t[22]||(t[22]=[n("选项3")])),_:1})]),_:1})]),default:a(()=>[t[26]||(t[26]=d("textarea",{lang:"vue-html"},`  <lt-tabbar type="bar" justify-content="center">
    <lt-tabbar-item name="1">选项1</lt-tabbar-item>
    <lt-tabbar-item name="2">选项2</lt-tabbar-item>
    <lt-tabbar-item name="3">选项3</lt-tabbar-item>
  </lt-tabbar>
  <hr />
  <lt-tabbar type="bar" justify-content="space-between">
    <lt-tabbar-item name="1">选项1</lt-tabbar-item>
    <lt-tabbar-item name="2">选项2</lt-tabbar-item>
    <lt-tabbar-item name="3">选项3</lt-tabbar-item>
  </lt-tabbar>
  <hr />
  <lt-tabbar type="bar" justify-content="space-around">
    <lt-tabbar-item name="1">选项1</lt-tabbar-item>
    <lt-tabbar-item name="2">选项2</lt-tabbar-item>
    <lt-tabbar-item name="3">选项3</lt-tabbar-item>
  </lt-tabbar>
  <hr />
  <lt-tabbar type="bar" justify-content="space-evenly">
    <lt-tabbar-item name="1">选项1</lt-tabbar-item>
    <lt-tabbar-item name="2">选项2</lt-tabbar-item>
    <lt-tabbar-item name="3">选项3</lt-tabbar-item>
  </lt-tabbar>
  `,-1))]),_:1})]),_:1}),t[40]||(t[40]=d("h3",{id:"卡片式",tabindex:"-1"},[n("卡片式 "),d("a",{class:"header-anchor",href:"#卡片式","aria-label":'Permalink to "卡片式"'},"​")],-1)),t[41]||(t[41]=d("p",null,[n("具有卡片风格的标签。只需要设置 "),d("code",null,"type"),n(" 属性为 "),d("code",null,"card"),n(" 就可以使选项卡改变为标签风格。 同时可以通过 "),d("code",null,"gap"),n(" 调整选项卡之间的间距。")],-1)),e(i,null,{default:a(()=>[e(o,null,{preview:a(()=>[e(r(b),{type:"card"},{default:a(()=>[e(r(l),{name:"1"},{default:a(()=>t[27]||(t[27]=[n("选项1")])),_:1}),e(r(l),{name:"2"},{default:a(()=>t[28]||(t[28]=[n("选项2")])),_:1}),e(r(l),{name:"3"},{default:a(()=>t[29]||(t[29]=[n("选项3")])),_:1})]),_:1}),t[33]||(t[33]=d("hr",null,null,-1)),e(r(b),{type:"card",gap:5},{default:a(()=>[e(r(l),{name:"1"},{default:a(()=>t[30]||(t[30]=[n("选项1")])),_:1}),e(r(l),{name:"2"},{default:a(()=>t[31]||(t[31]=[n("选项2")])),_:1}),e(r(l),{name:"3"},{default:a(()=>t[32]||(t[32]=[n("选项3")])),_:1})]),_:1})]),default:a(()=>[t[34]||(t[34]=d("textarea",{lang:"vue-html"},`  <lt-tabbar type="card">
    <lt-tabbar-item name="1">选项1</lt-tabbar-item>
    <lt-tabbar-item name="2">选项2</lt-tabbar-item>
    <lt-tabbar-item name="3">选项3</lt-tabbar-item>
  </lt-tabbar>
  <hr />
  <lt-tabbar type="card" :gap="5">
    <lt-tabbar-item name="1">选项1</lt-tabbar-item>
    <lt-tabbar-item name="2">选项2</lt-tabbar-item>
    <lt-tabbar-item name="3">选项3</lt-tabbar-item>
  </lt-tabbar>
  `,-1))]),_:1})]),_:1}),t[42]||(t[42]=s('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="tabbar-props" tabindex="-1">Tabbar Props <a class="header-anchor" href="#tabbar-props" aria-label="Permalink to &quot;Tabbar Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>选中的选项卡</td><td><code>string</code></td><td>-</td></tr><tr><td><code>type</code></td><td>风格</td><td><code>nav</code>、<code>bar</code>、<code>card</code></td><td><code>nav</code></td></tr><tr><td><code>justify-content</code></td><td>主轴的排列方式</td><td><code>string</code></td><td><code>flex-start</code></td></tr><tr><td><code>gap</code></td><td>选项卡之间的间距</td><td><code>number</code></td><td><code>0</code></td></tr></tbody></table><h3 id="tabbar-events" tabindex="-1">Tabbar Events <a class="header-anchor" href="#tabbar-events" aria-label="Permalink to &quot;Tabbar Events&quot;">​</a></h3><p>| 事件名 | 说明 | 参数 | | <code>change</code> | 选项卡切换时触发 | <code>(active: string) =&gt; void</code> |</p><h3 id="tabbaritem-props" tabindex="-1">TabbarItem Props <a class="header-anchor" href="#tabbaritem-props" aria-label="Permalink to &quot;TabbarItem Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>name</code></td><td>选项卡的唯一标识</td><td><code>string</code> | <code>name</code></td><td>-</td></tr></tbody></table><h3 id="tabbaritem-slots" tabindex="-1">TabbarItem Slots <a class="header-anchor" href="#tabbaritem-slots" aria-label="Permalink to &quot;TabbarItem Slots&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td><code>icon</code></td><td>选项卡的图标</td></tr><tr><td><code>default</code></td><td>选项卡的内容</td></tr></tbody></table><h3 id="tabbar-css-vars" tabindex="-1">Tabbar Css Vars <a class="header-anchor" href="#tabbar-css-vars" aria-label="Permalink to &quot;Tabbar Css Vars&quot;">​</a></h3><table tabindex="0"><thead><tr><th>变量名</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--nt-tabbar-hover-color</code></td><td>选项卡的鼠标悬浮时的颜色</td><td><code>var(--nt-primary-color-light1)</code></td></tr><tr><td><code>--nt-tabbar-active-color</code></td><td>选项卡的选中时的颜色</td><td><code>var(--nt-primary-color)</code></td></tr><tr><td><code>--nt-tabbar-item-gap</code></td><td>选项卡之间的间距</td><td><code>0</code></td></tr><tr><td><code>--nt-tabbar-height</code></td><td>选项卡的高度</td><td><code>38px</code>[<code>nav</code>时默认为: <code>50px</code>]</td></tr><tr><td><code>--nt-tabbar-line-color</code></td><td>下划线的颜色</td><td><code>var(--nt-primary-color)</code></td></tr><tr><td><code>--nt-tabbar-card-border-color</code></td><td>卡片选项卡的边框颜色</td><td><code>#f5f7fa</code></td></tr><tr><td><code>--nt-tabbar-card-border-radius</code></td><td>卡片选项卡的边框圆角</td><td><code>5px</code></td></tr></tbody></table>',11))])}}});export{j as __pageData,C as default};
