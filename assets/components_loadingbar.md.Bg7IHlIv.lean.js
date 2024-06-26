import{L as h,_ as o}from"./chunks/theme.7WQpfgwM.js";import{e as v,p as x,c as B,k as n,w as t,ab as _,b as a,y as e,S as u,o as P,z as d}from"./chunks/framework.C7U4UM-I.js";const T=_("",5),L=a("textarea",{lang:"vue"},`
  <script setup>
    const loadingBar = new NtLoadingBar('#loading-bar-demo');
    function onLoading() {
      loadingBar.start()
    }
    function onFinish() {
      loadingBar.finish()
    }
    function onError() {
      loadingBar.error()
    }
  <\/script>
  <template>
    <nt-button @click="onLoading">开始</nt-button>
    <nt-button @click="onFinish">结束</nt-button>
    <nt-button @click="onError">出错</nt-button>
  </template>
  `,-1),C=a("h3",{id:"局部使用",tabindex:"-1"},[e("局部使用 "),a("a",{class:"header-anchor",href:"#局部使用","aria-label":'Permalink to "局部使用"'},"​")],-1),y=a("p",null,[e("构建对象的时候，传递一个 "),a("code",null,"to"),e(" 属性指向一个节点即可将加载条渲染到该节点下")],-1),q=a("textarea",{lang:"vue"},`
  <script setup>
    import { ref } from 'vue'
    const $parent = ref<HTMLDivElement>()
    let loadingBar;
    onMounted(() => {
      loadingBar = new LoadingBar($parent)
    })
    function onLoading() {
      loadingBar.start()
    }
    function onFinish(params) {
      loadingBar.finish()
    }
  <\/script>
  <template>
    <div ref="$parent" id="loading-bar-demo" class="loading-bar-demo">
      <div>这是主要内容区域，数据待加载中……</div>
      <div>
        <nt-button @click="onLoading">开始</nt-button>
        <nt-button @click="onFinish">结束</nt-button>
      </div>
    </div>
  </template>
  <style>
    .loading-bar-demo {
      height: 100px;
      border: 1px solid #4998f4;
      padding: 10px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  </style>
  `,-1),w=a("div",null,"这是主要内容区域，数据待加载中……",-1),E=_("",5),I=JSON.parse('{"title":"LoadingBar 加载条","description":"","frontmatter":{},"headers":[],"relativePath":"components/loadingbar.md","filePath":"components/loadingbar.md","lastUpdated":1719375961000}'),S={name:"components/loadingbar.md"},$=Object.assign(S,{setup(A){const i=new h;let r;const l=v(null);function f(){i.start()}function p(){i.finish()}function b(){i.error()}function m(){r.start()}function g(k){r.finish()}return x(()=>{setTimeout(()=>{r=new h(l)},0)}),(k,N)=>{const s=u("CodePreview"),c=u("ClientOnly");return P(),B("div",null,[T,n(c,null,{default:t(()=>[n(s,null,{preview:t(()=>[n(d(o),{onClick:f},{default:t(()=>[e("开始")]),_:1}),n(d(o),{onClick:p},{default:t(()=>[e("结束")]),_:1}),n(d(o),{onClick:b},{default:t(()=>[e("出错")]),_:1})]),default:t(()=>[L]),_:1})]),_:1}),C,y,n(c,null,{default:t(()=>[n(s,null,{preview:t(()=>[a("div",{ref_key:"$parent",ref:l,id:"loading-bar-demo",class:"loading-bar-demo"},[w,a("div",null,[n(d(o),{onClick:m},{default:t(()=>[e("开始")]),_:1}),n(d(o),{onClick:g},{default:t(()=>[e("结束")]),_:1})])],512)]),default:t(()=>[q]),_:1})]),_:1}),E])}}});export{I as __pageData,$ as default};
