import{B as o,E as d,F as _,G as u,H as p,I as f,J as y}from"./chunks/theme.5So0_uGs.js";import{e as v,c as x,g as a,w as t,ae as m,b as r,M as n,Z as s,o as g,q as e}from"./chunks/framework.CqWuvRde.js";const P=m("",6),T=r("textarea",{lang:"vue-html"},`
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
  `,-1),S=r("span",null,"Reduction",-1),q=r("span",null,"RefreshLeft",-1),R=r("span",null,"Search",-1),k=r("span",null,"RefreshRight",-1),C=r("span",null,"Sort",-1),j=r("h3",{id:"选项卡",tabindex:"-1"},[n("选项卡 "),r("a",{class:"header-anchor",href:"#选项卡","aria-label":'Permalink to "选项卡"'},"​")],-1),V=r("p",null,"基础的、简洁的选项卡，初始选中第2项",-1),I=r("textarea",{lang:"vue"},`
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
  `,-1),z=r("hr",null,null,-1),J=m("",11),W=JSON.parse('{"title":"Tabbar 标签栏","description":"","frontmatter":{},"headers":[],"relativePath":"components/tabbar.md","filePath":"components/tabbar.md","lastUpdated":1719815324000}'),U={name:"components/tabbar.md"},Z=Object.assign(U,{setup(F){const c=v("2");return(G,i)=>{const b=s("CodePreview"),l=s("ClientOnly");return g(),x("div",null,[P,a(l,null,{default:t(()=>[a(b,null,{preview:t(()=>[a(e(o),{style:{border:"1px solid #dedede"}},{default:t(()=>[a(e(d),{name:"Reduction"},{icon:t(()=>[a(e(_))]),default:t(()=>[S]),_:1}),a(e(d),{name:"RefreshLeft"},{icon:t(()=>[a(e(u))]),default:t(()=>[q]),_:1}),a(e(d),{name:"Search"},{icon:t(()=>[a(e(p))]),default:t(()=>[R]),_:1}),a(e(d),{name:"RefreshRight"},{icon:t(()=>[a(e(f))]),default:t(()=>[k]),_:1}),a(e(d),{name:"Sort"},{icon:t(()=>[a(e(y))]),default:t(()=>[C]),_:1})]),_:1})]),default:t(()=>[T]),_:1})]),_:1}),j,V,a(l,null,{default:t(()=>[a(b,null,{preview:t(()=>[a(e(o),{type:"bar",modelValue:c.value,"onUpdate:modelValue":i[0]||(i[0]=h=>c.value=h)},{default:t(()=>[a(e(d),{name:"1"},{default:t(()=>[n("选项1")]),_:1}),a(e(d),{name:"2"},{default:t(()=>[n("选项2")]),_:1}),a(e(d),{name:"3"},{default:t(()=>[n("选项3")]),_:1})]),_:1},8,["modelValue"])]),default:t(()=>[I]),_:1})]),_:1}),w,A,a(l,null,{default:t(()=>[a(b,null,{preview:t(()=>[a(e(o),{type:"bar","justify-content":"center"},{default:t(()=>[a(e(d),{name:"1"},{default:t(()=>[n("选项1")]),_:1}),a(e(d),{name:"2"},{default:t(()=>[n("选项2")]),_:1}),a(e(d),{name:"3"},{default:t(()=>[n("选项3")]),_:1})]),_:1}),E,a(e(o),{type:"bar","justify-content":"space-between"},{default:t(()=>[a(e(d),{name:"1"},{default:t(()=>[n("选项1")]),_:1}),a(e(d),{name:"2"},{default:t(()=>[n("选项2")]),_:1}),a(e(d),{name:"3"},{default:t(()=>[n("选项3")]),_:1})]),_:1}),$,a(e(o),{type:"bar","justify-content":"space-around"},{default:t(()=>[a(e(d),{name:"1"},{default:t(()=>[n("选项1")]),_:1}),a(e(d),{name:"2"},{default:t(()=>[n("选项2")]),_:1}),a(e(d),{name:"3"},{default:t(()=>[n("选项3")]),_:1})]),_:1}),B,a(e(o),{type:"bar","justify-content":"space-evenly"},{default:t(()=>[a(e(d),{name:"1"},{default:t(()=>[n("选项1")]),_:1}),a(e(d),{name:"2"},{default:t(()=>[n("选项2")]),_:1}),a(e(d),{name:"3"},{default:t(()=>[n("选项3")]),_:1})]),_:1})]),default:t(()=>[N]),_:1})]),_:1}),L,O,a(l,null,{default:t(()=>[a(b,null,{preview:t(()=>[a(e(o),{type:"card"},{default:t(()=>[a(e(d),{name:"1"},{default:t(()=>[n("选项1")]),_:1}),a(e(d),{name:"2"},{default:t(()=>[n("选项2")]),_:1}),a(e(d),{name:"3"},{default:t(()=>[n("选项3")]),_:1})]),_:1}),z,a(e(o),{type:"card",gap:5},{default:t(()=>[a(e(d),{name:"1"},{default:t(()=>[n("选项1")]),_:1}),a(e(d),{name:"2"},{default:t(()=>[n("选项2")]),_:1}),a(e(d),{name:"3"},{default:t(()=>[n("选项3")]),_:1})]),_:1})]),default:t(()=>[D]),_:1})]),_:1}),J])}}});export{W as __pageData,Z as default};
