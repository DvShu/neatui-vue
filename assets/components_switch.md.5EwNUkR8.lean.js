import{v as i,E as m,F as b}from"./chunks/theme.Dvi9yxM-.js";import{e as w,c as f,g as a,w as e,ae as p,b as t,M as d,Z as u,o as r,q as l,a as _}from"./chunks/framework.CqWuvRde.js";const v=p("",5),x=t("textarea",{lang:"vue"},`
  <script setup>
    import { ref } from 'vue';
    const open = ref(true);
  <\/script>
  <template>
    <nt-switch v-model="open"></nt-switch>
  </template>
  `,-1),k=t("h3",{id:"文字描述",tabindex:"-1"},[d("文字描述 "),t("a",{class:"header-anchor",href:"#文字描述","aria-label":'Permalink to "文字描述"'},"​")],-1),S=t("p",null,[d("使用 "),t("code",null,"checked-text"),d(" 和 "),t("code",null,"unchecked-text"),d(" 属性来设置开关的文字描述。")],-1),P=t("textarea",{lang:"vue"},`
  <template>
    <nt-switch v-model="open" checked-text="Y" unchecked-text="N"></nt-switch>
  </template>
  `,-1),V=t("h3",{id:"自定义操作图标",tabindex:"-1"},[d("自定义操作图标 "),t("a",{class:"header-anchor",href:"#自定义操作图标","aria-label":'Permalink to "自定义操作图标"'},"​")],-1),q=t("p",null,[d("使用 "),t("code",null,"action"),d(" 插槽, 配合 "),t("code",null,"props-checked"),d(" 作用域来自定义渲染操作图标。")],-1),T=t("textarea",{lang:"vue-html"},`
  <template>
    <nt-switch v-model="open">
      <template #action="slotProp">
        <nt-moon-icon v-if="slotProp.checked"></nt-moon-icon>
        <nt-sun-icon v-else></nt-sun-icon>
      </template>
    </nt-switch>
  </template>
  `,-1),y=p("",9),I=JSON.parse('{"title":"Switch 开关","description":"","frontmatter":{},"headers":[],"relativePath":"components/switch.md","filePath":"components/switch.md","lastUpdated":1723542361000}'),C={name:"components/switch.md"},B=Object.assign(C,{setup(g){const n=w(!0);return(N,c)=>{const h=u("CodePreview"),s=u("ClientOnly");return r(),f("div",null,[v,a(s,null,{default:e(()=>[a(h,null,{preview:e(()=>[a(l(i),{modelValue:n.value,"onUpdate:modelValue":c[0]||(c[0]=o=>n.value=o)},null,8,["modelValue"])]),default:e(()=>[x]),_:1})]),_:1}),k,S,a(s,null,{default:e(()=>[a(h,null,{preview:e(()=>[a(l(i),{modelValue:n.value,"onUpdate:modelValue":c[1]||(c[1]=o=>n.value=o),"checked-text":"Y","unchecked-text":"N"},null,8,["modelValue"])]),default:e(()=>[P]),_:1})]),_:1}),V,q,a(s,null,{default:e(()=>[a(h,null,{preview:e(()=>[a(l(i),{modelValue:n.value,"onUpdate:modelValue":c[2]||(c[2]=o=>n.value=o)},{action:e(o=>[o.checked?(r(),_(l(m),{key:0})):(r(),_(l(b),{key:1}))]),_:1},8,["modelValue"])]),default:e(()=>[T]),_:1})]),_:1}),y])}}});export{I as __pageData,B as default};
