import{B as s}from"./chunks/theme.DASJ6p6U.js";import{f as p,c as r,ag as f,l as t,w as a,b as o,R as n,a1 as u,o as i,h as m,u as v}from"./chunks/framework.DdiFAQ9y.js";const b={class:"loading-demo"},h={class:"loading-demo"},q=JSON.parse('{"title":"BorderLoadingDirective 边框加载动画","description":"","frontmatter":{},"headers":[],"relativePath":"components/border_loading.md","filePath":"components/border_loading.md","lastUpdated":1729613669000}'),_={name:"components/border_loading.md"},w=Object.assign(_,{setup(x){const g=p(!0),c=p(15);return(B,e)=>{const l=u("CodePreview"),d=u("ClientOnly");return i(),r("div",null,[e[4]||(e[4]=f('<h1 id="borderloadingdirective-边框加载动画" tabindex="-1">BorderLoadingDirective 边框加载动画 <a class="header-anchor" href="#borderloadingdirective-边框加载动画" aria-label="Permalink to &quot;BorderLoadingDirective 边框加载动画&quot;">​</a></h1><p>另一种加载动画</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="区域加载" tabindex="-1">区域加载 <a class="header-anchor" href="#区域加载" aria-label="Permalink to &quot;区域加载&quot;">​</a></h3><p>在某一个区域加载数据时展示, 只需要设置 <code>v-border-loading</code> 属性即可。</p>',5)),t(d,null,{default:a(()=>[t(l,null,{preview:a(()=>[m((i(),r("div",b,e[0]||(e[0]=[n(" 内容加载区域 ")]))),[[v(s),g.value]])]),default:a(()=>[e[1]||(e[1]=o("textarea",{lang:"vue"},`  <script setup>
    import { ref } from 'vue';
    //-
    const loading = ref(true);
  <\/script>
  <template>
    <div class="loading-demo" v-border-loading="loading">
      内容加载区域
    </div>
  </template>
`,-1))]),_:1})]),_:1}),e[5]||(e[5]=o("h3",{id:"更改动画时长",tabindex:"-1"},[n("更改动画时长 "),o("a",{class:"header-anchor",href:"#更改动画时长","aria-label":'Permalink to "更改动画时长"'},"​")],-1)),e[6]||(e[6]=o("p",null,[n("只需要将 "),o("code",null,"v-border-loading"),n(" 指向一个数字即可。")],-1)),t(d,null,{default:a(()=>[t(l,null,{preview:a(()=>[m((i(),r("div",h,e[2]||(e[2]=[n(" 内容加载区域 ")]))),[[v(s),c.value]])]),default:a(()=>[e[3]||(e[3]=o("textarea",{lang:"vue"},`  <script setup>
    import { ref } from 'vue';
    //-
    const loading1 = ref(15)
  <\/script>
  <template>
    <div class="loading-demo" v-border-loading="loading1">
      内容加载区域
    </div>
  </template>
  `,-1))]),_:1})]),_:1}),e[7]||(e[7]=o("blockquote",null,[o("p",null,[n("指令需要设置相对定位: "),o("code",null,"position: relative")])],-1))])}}});export{q as __pageData,w as default};
