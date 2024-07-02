import{n as h,_ as o}from"./chunks/theme.DaxL35U6.js";import{e as v,p as x,c as B,k as n,w as t,ab as _,b as a,y as e,S as u,o as P,z as d}from"./chunks/framework.DQF4kMpX.js";const T=_('<h1 id="loadingbar-加载条" tabindex="-1">LoadingBar 加载条 <a class="header-anchor" href="#loadingbar-加载条" aria-label="Permalink to &quot;LoadingBar 加载条&quot;">​</a></h1><p>通常用于在页面初始化的时候，加载初始化数据</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>在顶部显示一个不定进度条</p>',5),C=a("textarea",{lang:"vue"},`
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
  `,-1),L=a("h3",{id:"局部使用",tabindex:"-1"},[e("局部使用 "),a("a",{class:"header-anchor",href:"#局部使用","aria-label":'Permalink to "局部使用"'},"​")],-1),y=a("p",null,[e("构建对象的时候，传递一个 "),a("code",null,"to"),e(" 属性指向一个节点即可将加载条渲染到该节点下")],-1),q=a("textarea",{lang:"vue"},`
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
  `,-1),w=a("div",null,"这是主要内容区域，数据待加载中……",-1),E=_('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="构造参数" tabindex="-1">构造参数 <a class="header-anchor" href="#构造参数" aria-label="Permalink to &quot;构造参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>to</code></td><td>加载条的挂载位置</td><td><code>string</code>、<code>HTMLElement</code>、<code>Ref&lt;HTMLElement&gt;</code></td><td>-</td></tr></tbody></table><h3 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h3><table tabindex="0"><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td><code>start()</code></td><td>开始显示进度条</td></tr><tr><td><code>finish()</code></td><td>结束显示进度条</td></tr><tr><td><code>error()</code></td><td>出错显示进度条</td></tr><tr><td><code>close()</code></td><td>关闭进度条, 通常不用手动调用，内部在进度完成后会自动调用</td></tr><tr><td><code>destroy()</code></td><td>关闭进度条，同时销毁资源，<strong>调用该函数后，就不能再调用其它函数</strong></td></tr></tbody></table>',5),I=JSON.parse('{"title":"LoadingBar 加载条","description":"","frontmatter":{},"headers":[],"relativePath":"components/loadingbar.md","filePath":"components/loadingbar.md","lastUpdated":1719375961000}'),S={name:"components/loadingbar.md"},$=Object.assign(S,{setup(A){const i=new h;let r;const l=v(null);function f(){i.start()}function p(){i.finish()}function b(){i.error()}function m(){r.start()}function g(k){r.finish()}return x(()=>{setTimeout(()=>{r=new h(l)},0)}),(k,N)=>{const s=u("CodePreview"),c=u("ClientOnly");return P(),B("div",null,[T,n(c,null,{default:t(()=>[n(s,null,{preview:t(()=>[n(d(o),{onClick:f},{default:t(()=>[e("开始")]),_:1}),n(d(o),{onClick:p},{default:t(()=>[e("结束")]),_:1}),n(d(o),{onClick:b},{default:t(()=>[e("出错")]),_:1})]),default:t(()=>[C]),_:1})]),_:1}),L,y,n(c,null,{default:t(()=>[n(s,null,{preview:t(()=>[a("div",{ref_key:"$parent",ref:l,id:"loading-bar-demo",class:"loading-bar-demo"},[w,a("div",null,[n(d(o),{onClick:m},{default:t(()=>[e("开始")]),_:1}),n(d(o),{onClick:g},{default:t(()=>[e("结束")]),_:1})])],512)]),default:t(()=>[q]),_:1})]),_:1}),E])}}});export{I as __pageData,$ as default};
