import{t as d,k as u,v as _}from"./chunks/theme.Dvi9yxM-.js";import{e as g,c as m,g as e,w as a,ae as h,b as t,M as n,Z as s,o as b,q as o}from"./chunks/framework.CqWuvRde.js";const f=h('<h1 id="pagination-分页" tabindex="-1">Pagination 分页 <a class="header-anchor" href="#pagination-分页" aria-label="Permalink to &quot;Pagination 分页&quot;">​</a></h1><p>当数据量过多时，使用分页分批次加载数据。</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>只需要传递 <code>total</code> 或者 <code>page-count</code> 就能显示一个分页组件. 在 <code>change</code> 事件中进行分页处理.</p>',5),P=t("textarea",{lang:"vue"},`
  <script setup lang="ts">
    function handlePageChange(currentPage: number) {
      console.log(currentPage)
    }
  <\/script>
  <template>
    <nt-pagination :total="100" @change="handlePageChange"></nt-pagination>
  </template>
  `,-1),v=t("h3",{id:"对齐方式",tabindex:"-1"},[n("对齐方式 "),t("a",{class:"header-anchor",href:"#对齐方式","aria-label":'Permalink to "对齐方式"'},"​")],-1),x=t("p",null,[n("通过 "),t("code",null,"align"),n(" 可以设置对齐方式，取值有: "),t("code",null,"start"),t("strong",null,"默认"),n("、"),t("code",null,"center"),n("、"),t("code",null,"end")],-1),q=t("textarea",{lang:"vue-html"},`
  <nt-pagination :total="100" align="start"></nt-pagination>
  <hr />
  <nt-pagination :total="100" align="center"></nt-pagination>
  <hr />
  <nt-pagination :total="100" align="end"></nt-pagination>
  `,-1),T=t("hr",null,null,-1),k=t("hr",null,null,-1),C=t("h3",{id:"单页隐藏",tabindex:"-1"},[n("单页隐藏 "),t("a",{class:"header-anchor",href:"#单页隐藏","aria-label":'Permalink to "单页隐藏"'},"​")],-1),V=t("p",null,[n("当只有一页时，通过 "),t("code",null,"single-hide"),n(" 配置隐藏分页")],-1),w=t("textarea",{lang:"vue"},`
  <script setup lang="ts">
    const singleHide = ref(false)
  <\/script>
  <template>
    <nt-form-item label="单页隐藏">
      <nt-switch v-model="singleHide" />
    </nt-form-item>
    <hr />
    <nt-pagination :page-count="1" :hide-on-single-page="singleHide"></nt-pagination>
  </template>
  `,-1),A=t("hr",null,null,-1),S=t("h3",{id:"简单分页",tabindex:"-1"},[n("简单分页 "),t("a",{class:"header-anchor",href:"#简单分页","aria-label":'Permalink to "简单分页"'},"​")],-1),N=t("p",null,"简单的分页，在空间有限的情况下，可以使用简单分页。",-1),y=t("textarea",{lang:"vue-html"},`
  <nt-pagination :page-count="100" simple></nt-pagination>
  `,-1),I=h('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="pagination-props" tabindex="-1">Pagination Props <a class="header-anchor" href="#pagination-props" aria-label="Permalink to &quot;Pagination Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>total</code></td><td>数据总数</td><td><code>number</code></td><td>-</td></tr><tr><td><code>page-count</code></td><td>页码总数, <code>total</code> 和 <code>page-count</code> 设置任意一个就可以达到显示页码的功能</td><td><code>number</code></td><td>-</td></tr><tr><td><code>page-size</code></td><td>每页的数据条数</td><td><code>number</code></td><td><code>10</code></td></tr><tr><td><code>default-current-page</code></td><td>当前页数的默认初始值，不设置时默认为 1</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td><code>align</code></td><td>对齐方式</td><td><code>start | center | end</code></td><td><code>start</code></td></tr><tr><td><code>hide-on-single-page</code></td><td>只有一页时是否隐藏分页器</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>simple</code></td><td>简单分页</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>page | v-model:page</code></td><td>当前页数[受控模式]</td><td><code>number</code></td><td>-</td></tr></tbody></table><h3 id="pagination-emits" tabindex="-1">Pagination Emits <a class="header-anchor" href="#pagination-emits" aria-label="Permalink to &quot;Pagination Emits&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>change</code></td><td>当前页改变时触发</td><td><code>currentPage: number</code></td></tr></tbody></table>',5),$=JSON.parse('{"title":"Pagination 分页","description":"","frontmatter":{},"headers":[],"relativePath":"components/pagination.md","filePath":"components/pagination.md","lastUpdated":1722397676000}'),E={name:"components/pagination.md"},R=Object.assign(E,{setup(H){const c=g(!1);return(O,r)=>{const l=s("CodePreview"),i=s("ClientOnly");return b(),m("div",null,[f,e(i,null,{default:a(()=>[e(l,null,{preview:a(()=>[e(o(d),{total:100})]),default:a(()=>[P]),_:1})]),_:1}),v,x,e(i,null,{default:a(()=>[e(l,null,{preview:a(()=>[e(o(d),{total:100,align:"start"}),T,e(o(d),{total:100,align:"center"}),k,e(o(d),{total:100,align:"end"})]),default:a(()=>[q]),_:1})]),_:1}),C,V,e(i,null,{default:a(()=>[e(l,null,{preview:a(()=>[e(o(u),{label:"单页隐藏"},{default:a(()=>[e(o(_),{modelValue:c.value,"onUpdate:modelValue":r[0]||(r[0]=p=>c.value=p)},null,8,["modelValue"])]),_:1}),A,e(o(d),{"page-count":1,"hide-on-single-page":c.value},null,8,["hide-on-single-page"])]),default:a(()=>[w]),_:1})]),_:1}),S,N,e(i,null,{default:a(()=>[e(l,null,{preview:a(()=>[e(o(d),{"page-count":100,simple:""})]),default:a(()=>[y]),_:1})]),_:1}),I])}}});export{$ as __pageData,R as default};
