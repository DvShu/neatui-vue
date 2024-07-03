import{L as l,_ as r}from"./chunks/theme.BXlgI-md.js";import{e as k,c as o,l as t,w as n,ab as g,b as a,z as e,S as m,o as c,s as h,A as s}from"./chunks/framework.RALdISJs.js";const C=g("",5),F=a("textarea",{lang:"vue-html"},`
  <div class="loading-demo" v-loading="loading">
    内容加载区域
  </div>
  `,-1),x={class:"loading-demo"},A=a("h3",{id:"自定义内容",tabindex:"-1"},[e("自定义内容 "),a("a",{class:"header-anchor",href:"#自定义内容","aria-label":'Permalink to "自定义内容"'},"​")],-1),T=a("p",null,"你可以自定义加载中组件的文字，背景颜色。",-1),L=a("p",null,[e("在绑定了 "),a("code",null,"v-loading"),e(" 指令的元素上添加 "),a("code",null,"nt-loading-text"),e(" 属性，其值会被渲染为加载文案，并显示在加载图标的下方；将其设置为空字符串可以用于取消文本。"),a("code",null,"nt-loading-background"),e(" 用来设定背景色值。")],-1),P=a("textarea",{lang:"vue-html"},`
  <div
    class="loading-demo"
    v-loading="loading"
    nt-loading-text="loading……"
    nt-loading-background="rgba(255, 255, 255, .9)"
  >
    内容加载区域
  </div>
  `,-1),B={class:"loading-demo","nt-loading-text":"loading……","nt-loading-background":"rgba(255, 255, 255, .9)"},D=a("h3",{id:"全屏",tabindex:"-1"},[e("全屏 "),a("a",{class:"header-anchor",href:"#全屏","aria-label":'Permalink to "全屏"'},"​")],-1),I=a("p",null,[e("通过传递 "),a("code",null,"fullscreen"),e(" 修饰符将遮罩插入至 "),a("code",null,"body"),e(" 上保证加载数据時显示全屏动画；当全屏时默认会禁止滚动，通过传递 "),a("code",null,"unlock"),e(" 修饰符可以允许滚动。")],-1),q=a("textarea",{lang:"vue"},`
  <script setup>
    const loading2 = ref(false)
    function handleOpenLoading() {
      loading2.value = true
      setTimeout(() => {
        loading2.value = false
      }, 3000);
    }
  <\/script>
  <template>
    <div v-loading.fullscreen="loading2">
      <nt-button @click="handleOpenLoading">加载</nt-button>
    </div>
  </template>
  `,-1),O=a("h3",{id:"进度条风格",tabindex:"-1"},[e("进度条风格 "),a("a",{class:"header-anchor",href:"#进度条风格","aria-label":'Permalink to "进度条风格"'},"​")],-1),w=a("p",null,[e("通过传递 "),a("code",null,"bar"),e(" 参数可以将圆形加载变为进度条风格。")],-1),N=a("textarea",{lang:"vue"},`
  <script setup>
    const loading3 = ref(false)
    function handleBarOpen() {
      loading3.value = true;
    }
    function handleBarClose() {
      loading3.value = false;
    }
  <\/script>
  <template>
    <div class="loading-demo" v-loading:bar.fullscreen.unlock="loading3">
      <nt-button @click="handleBarOpen">开始</nt-button>
      <nt-button @click="handleBarClose">结束</nt-button>
    </div>
  </template>
  `,-1),S={class:"loading-demo"},V=g("",7),j=a("textarea",{lang:"vue-html"},`
  <script setup>
    let loadingInstance;
    function handleApiOpen() {
      loadingInstance = NtLoading.open();
      setTimeout(() => {
        loadingInstance.close()
      }, 3000);
    }
  <\/script>
  <template>
    <nt-button @click="handleApiOpen">开始</nt-button>
  </template>
  `,-1),M=g("",5),G=JSON.parse('{"title":"Loading 加载","description":"","frontmatter":{},"headers":[],"relativePath":"components/loading.md","filePath":"components/loading.md","lastUpdated":1719994867000}'),R={name:"components/loading.md"},K=Object.assign(R,{setup(H){const _=k(!0),p=k(!1);function v(){p.value=!0,setTimeout(()=>{p.value=!1},3e3)}const u=k(!1);function E(){u.value=!0}function f(){u.value=!1}let b;function y(){b=l.open(),setTimeout(()=>{b.close()},3e3)}return(z,J)=>{const i=m("CodePreview"),d=m("ClientOnly");return c(),o("div",null,[C,t(d,null,{default:n(()=>[t(i,null,{preview:n(()=>[h((c(),o("div",x,[e(" 内容加载区域 ")])),[[s(l),_.value]])]),default:n(()=>[F]),_:1})]),_:1}),A,T,L,t(d,null,{default:n(()=>[t(i,null,{preview:n(()=>[h((c(),o("div",B,[e(" 内容加载区域 ")])),[[s(l),_.value]])]),default:n(()=>[P]),_:1})]),_:1}),D,I,t(d,null,{default:n(()=>[t(i,null,{preview:n(()=>[h((c(),o("div",null,[t(s(r),{onClick:v},{default:n(()=>[e("加载")]),_:1})])),[[s(l),p.value,void 0,{fullscreen:!0}]])]),default:n(()=>[q]),_:1})]),_:1}),O,w,t(d,null,{default:n(()=>[t(i,null,{preview:n(()=>[h((c(),o("div",S,[t(s(r),{onClick:E},{default:n(()=>[e("开始")]),_:1}),t(s(r),{onClick:f},{default:n(()=>[e("结束")]),_:1})])),[[s(l),u.value,"bar",{fullscreen:!0,unlock:!0}]])]),default:n(()=>[N]),_:1})]),_:1}),V,t(d,null,{default:n(()=>[t(i,null,{preview:n(()=>[t(s(r),{onClick:y},{default:n(()=>[e("开始")]),_:1})]),default:n(()=>[j]),_:1})]),_:1}),M])}}});export{G as __pageData,K as default};
