import{q as p}from"./chunks/theme.BDs-Rhbx.js";import{e as f,o as s,c as l,g as a,w as t,ae as x,b as e,J as o,X as m,l as r,F as v,y as b,t as d}from"./chunks/framework.-x160Rg7.js";const k=x("",5),q={lang:"vue"},T={class:"list-wrapper"},y=e("blockquote",null,[e("p",null,[o("内部是使用 "),e("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API",target:"_blank",rel:"noreferrer"},"IntersectionObserver"),o(" 实现")])],-1),L=e("h3",{id:"普通列表",tabindex:"-1"},[o("普通列表 "),e("a",{class:"header-anchor",href:"#普通列表","aria-label":'Permalink to "普通列表"'},"​")],-1),g=e("p",null,[o("通过传递 "),e("code",null,"infinite=false"),o(" 禁用滚动加载这样就成了一个单纯的可以滚动的列表。")],-1),C={lang:"vue-html"},A={class:"list-wrapper"},I=x("",6),E=JSON.parse('{"title":"List","description":"","frontmatter":{},"headers":[],"relativePath":"components/list.md","filePath":"components/list.md","lastUpdated":1721968438000}'),w={name:"components/list.md"},D=Object.assign(w,{setup(S){const c=f(!1);let n=f(15);function P(){setTimeout(()=>{n.value=n.value+15,n.value>=50&&(c.value=!0)},1500)}return(h,N)=>{const _=m("CodePreview"),u=m("ClientOnly");return s(),l("div",null,[k,a(u,null,{default:t(()=>[a(_,null,{preview:t(()=>[e("div",T,[a(r(p),{finish:c.value,onLoadMore:P},{default:t(()=>[(s(!0),l(v,null,b(r(n),i=>(s(),l("div",{class:"list-item",key:i},d(i),1))),128))]),_:1},8,["finish"])])]),default:t(()=>[e("textarea",q,`
  <template>
  <div style="height: 300px">
    <nt-list :finish="finish" @load-more="handleLoadmore">
      <div style="padding: 10px; border-bottom: 1px solid #dedede;" v-for="i in max" :key="i">`+d(h.i)+`</div>
    </nt-list>
  </div>
  </template>
  <script setup>
    import { ref } from 'vue'
    let max = ref(15)
    function handleLoadmore() {
      // 模拟数据加载
      setTimeout(() => {
        max.value = max.value + 15
        if (max.value >= 50) {
          finish.value = true
        }
      }, 1500);
    }
  <\/script>
  `,1)]),_:1})]),_:1}),y,L,g,a(u,null,{default:t(()=>[a(_,null,{preview:t(()=>[e("div",A,[a(r(p),{infinite:!1},{default:t(()=>[(s(),l(v,null,b(100,i=>e("div",{class:"list-item",key:i},d(i),1)),64))]),_:1})])]),default:t(()=>[e("textarea",C,`
  <div class="list-wrapper">
    <List :infinite="false">
      <div class="list-item" v-for="i in 100" :key="i">`+d(h.i)+`</div>
    </List>
  </div>
  `,1)]),_:1})]),_:1}),I])}}});export{E as __pageData,D as default};
