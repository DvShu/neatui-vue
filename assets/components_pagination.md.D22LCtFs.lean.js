import{r as d,k as u,t as _}from"./chunks/theme.5So0_uGs.js";import{e as g,c as m,g as e,w as a,ae as h,b as t,M as n,Z as s,o as b,q as o}from"./chunks/framework.CqWuvRde.js";const f=h("",5),P=t("textarea",{lang:"vue"},`
  <script setup lang="ts">
    function handlePageChange(currentPage: number) {
      console.log(currentPage)
    }
  <\/script>
  <template>
    <nt-pagination :total="100" @change="handlePageChange"></nt-pagination>
  </template>
  `,-1),x=t("h3",{id:"对齐方式",tabindex:"-1"},[n("对齐方式 "),t("a",{class:"header-anchor",href:"#对齐方式","aria-label":'Permalink to "对齐方式"'},"​")],-1),v=t("p",null,[n("通过 "),t("code",null,"align"),n(" 可以设置对齐方式，取值有: "),t("code",null,"start"),t("strong",null,"默认"),n("、"),t("code",null,"center"),n("、"),t("code",null,"end")],-1),q=t("textarea",{lang:"vue-html"},`
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
  `,-1),I=h("",5),$=JSON.parse('{"title":"Pagination 分页","description":"","frontmatter":{},"headers":[],"relativePath":"components/pagination.md","filePath":"components/pagination.md","lastUpdated":1722397676000}'),E={name:"components/pagination.md"},R=Object.assign(E,{setup(H){const c=g(!1);return(O,r)=>{const l=s("CodePreview"),i=s("ClientOnly");return b(),m("div",null,[f,e(i,null,{default:a(()=>[e(l,null,{preview:a(()=>[e(o(d),{total:100})]),default:a(()=>[P]),_:1})]),_:1}),x,v,e(i,null,{default:a(()=>[e(l,null,{preview:a(()=>[e(o(d),{total:100,align:"start"}),T,e(o(d),{total:100,align:"center"}),k,e(o(d),{total:100,align:"end"})]),default:a(()=>[q]),_:1})]),_:1}),C,V,e(i,null,{default:a(()=>[e(l,null,{preview:a(()=>[e(o(u),{label:"单页隐藏"},{default:a(()=>[e(o(_),{modelValue:c.value,"onUpdate:modelValue":r[0]||(r[0]=p=>c.value=p)},null,8,["modelValue"])]),_:1}),A,e(o(d),{"page-count":1,"hide-on-single-page":c.value},null,8,["hide-on-single-page"])]),default:a(()=>[w]),_:1})]),_:1}),S,N,e(i,null,{default:a(()=>[e(l,null,{preview:a(()=>[e(o(d),{"page-count":100,simple:""})]),default:a(()=>[y]),_:1})]),_:1}),I])}}});export{$ as __pageData,R as default};
