import{p}from"./chunks/theme.1ktC8hXP.js";import{e as f,c as s,g as a,w as t,ae as x,b as e,M as o,Z as m,o as l,q as r,F as v,z as b,t as d}from"./chunks/framework.CqWuvRde.js";const k=x('<h1 id="list" tabindex="-1">List <a class="header-anchor" href="#list" aria-label="Permalink to &quot;List&quot;">​</a></h1><p>无限加载数据的列表。滚动至底部时，加载更多数据。</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>滚动到底部触发 <code>load-more</code> 加载更多事件，通过 <code>finish</code> 属性决定是否加载完成。</p>',5),q={lang:"vue"},T={class:"list-wrapper"},L=e("blockquote",null,[e("p",null,[o("内部是使用 "),e("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API",target:"_blank",rel:"noreferrer"},"IntersectionObserver"),o(" 实现")])],-1),y=e("h3",{id:"普通列表",tabindex:"-1"},[o("普通列表 "),e("a",{class:"header-anchor",href:"#普通列表","aria-label":'Permalink to "普通列表"'},"​")],-1),g=e("p",null,[o("通过传递 "),e("code",null,"infinite=false"),o(" 禁用滚动加载这样就成了一个单纯的可以滚动的列表。")],-1),C={lang:"vue-html"},A={class:"list-wrapper"},I=x('<blockquote><p>可以选择搭配 <a href="/neatui-vue/css-util#_3-滚动条样式">css-util</a> 来美化滚动条样式</p></blockquote><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="list-props" tabindex="-1">List Props <a class="header-anchor" href="#list-props" aria-label="Permalink to &quot;List Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>finish</code></td><td>是否加载完成</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>infinite</code></td><td>否显示无限加载模式</td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table><h3 id="list-events" tabindex="-1">List Events <a class="header-anchor" href="#list-events" aria-label="Permalink to &quot;List Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>load-more</code></td><td>继续加载的回调函数</td><td>-</td></tr></tbody></table>',6),E=JSON.parse('{"title":"List","description":"","frontmatter":{},"headers":[],"relativePath":"components/list.md","filePath":"components/list.md","lastUpdated":1721968438000}'),w={name:"components/list.md"},D=Object.assign(w,{setup(S){const c=f(!1);let n=f(15);function P(){setTimeout(()=>{n.value=n.value+15,n.value>=50&&(c.value=!0)},1500)}return(h,N)=>{const _=m("CodePreview"),u=m("ClientOnly");return l(),s("div",null,[k,a(u,null,{default:t(()=>[a(_,null,{preview:t(()=>[e("div",T,[a(r(p),{finish:c.value,onLoadMore:P},{default:t(()=>[(l(!0),s(v,null,b(r(n),i=>(l(),s("div",{class:"list-item",key:i},d(i),1))),128))]),_:1},8,["finish"])])]),default:t(()=>[e("textarea",q,`
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
  `,1)]),_:1})]),_:1}),L,y,g,a(u,null,{default:t(()=>[a(_,null,{preview:t(()=>[e("div",A,[a(r(p),{infinite:!1},{default:t(()=>[(l(),s(v,null,b(100,i=>e("div",{class:"list-item",key:i},d(i),1)),64))]),_:1})])]),default:t(()=>[e("textarea",C,`
  <div class="list-wrapper">
    <List :infinite="false">
      <div class="list-item" v-for="i in 100" :key="i">`+d(h.i)+`</div>
    </List>
  </div>
  `,1)]),_:1})]),_:1}),I])}}});export{E as __pageData,D as default};
