import{L as l,_ as r}from"./chunks/theme.9mRyZSWZ.js";import{e as k,c as o,l as t,w as n,ab as g,b as a,G as e,U as m,o as c,s as h,z as s}from"./chunks/framework.MCgil6G4.js";const C=g('<h1 id="loading-加载" tabindex="-1">Loading 加载 <a class="header-anchor" href="#loading-加载" aria-label="Permalink to &quot;Loading 加载&quot;">​</a></h1><p>数据加载时显示的动效。</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="区域加载" tabindex="-1">区域加载 <a class="header-anchor" href="#区域加载" aria-label="Permalink to &quot;区域加载&quot;">​</a></h3><p>在某一个区域加载数据时展示加载动画，防止页面失去响应，提高用户体验</p>',5),F=a("textarea",{lang:"vue-html"},`
  <div class="loading-demo" v-loading="loading">
    内容加载区域
  </div>
  `,-1),x={class:"loading-demo"},T=a("h3",{id:"自定义内容",tabindex:"-1"},[e("自定义内容 "),a("a",{class:"header-anchor",href:"#自定义内容","aria-label":'Permalink to "自定义内容"'},"​")],-1),A=a("p",null,"你可以自定义加载中组件的文字，背景颜色。",-1),L=a("p",null,[e("在绑定了 "),a("code",null,"v-loading"),e(" 指令的元素上添加 "),a("code",null,"nt-loading-text"),e(" 属性，其值会被渲染为加载文案，并显示在加载图标的下方；将其设置为空字符串可以用于取消文本。"),a("code",null,"nt-loading-background"),e(" 用来设定背景色值。")],-1),P=a("textarea",{lang:"vue-html"},`
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
  `,-1),S={class:"loading-demo"},V=g(`<h3 id="编程式调用" tabindex="-1">编程式调用 <a class="header-anchor" href="#编程式调用" aria-label="Permalink to &quot;编程式调用&quot;">​</a></h3><p>通过调用 <code>open</code> 函数来显示加载动画，例如：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> loadingInstance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NtLoading.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(options);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>其中 <code>options</code> 参数为 <code>Loading</code> 的配置项，具体见下表。该会返回一个 <code>Loading</code> 实例，可通过调用该实例的 <code>close</code> 方法来关闭它：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> loadingInstance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NtLoading.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(options);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nextTick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Loading should be closed asynchronously</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  loadingInstance.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">close</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>需要注意的是，以编程方式创建的 <code>Loading</code> 默认为全屏的且该全屏 <code>Loading</code> 是单例的。 若在前一个全屏 <code>Loading</code> 关闭前再次调用全屏 <code>Loading</code>，并不会创建一个新的 <code>Loading</code> 实例，而是返回现有全屏 <code>Loading</code> 的实例，只要其中一个实例关闭，其它都关闭：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> loadingInstance1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NtLoading.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> loadingInstance2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NtLoading.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">loadingInstance2.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">close</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,7),j=a("textarea",{lang:"vue-html"},`
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
  `,-1),M=g('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="配置项" tabindex="-1">配置项 <a class="header-anchor" href="#配置项" aria-label="Permalink to &quot;配置项&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>to</code></td><td>加载条的挂载位置；可传入一个 <code>DOM</code> 对象或字符串； 若传入字符串，则会将其作为参数传入 <code>document.querySelector</code> 以获取到对应 <code>DOM</code> 节点</td><td><code>string</code>、<code>HTMLElement</code>、<code>Ref&lt;HTMLElement&gt;</code></td><td><code>document.body</code></td></tr><tr><td><code>fullscreen</code></td><td>是否为全屏加载</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>unlock</code></td><td>是否取消禁止页面滚动</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>text</code></td><td>显示在加载图标下方的加载文案; 通过传递空字符串可以用于不显示文本</td><td><code>string</code></td><td><code>加载中……</code></td></tr><tr><td><code>bar</code></td><td>加载条是否显示为进度条样式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>background</code></td><td>遮罩层背景色</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="指定" tabindex="-1">指定 <a class="header-anchor" href="#指定" aria-label="Permalink to &quot;指定&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td><code>v-loading</code></td><td>是否显示加载组件</td><td><code>boolean</code></td></tr><tr><td><code>nt-loading-text</code></td><td>显示在加载图标下方的加载文案</td><td><code>string</code></td></tr><tr><td><code>nt-loading-background</code></td><td>遮罩层背景色</td><td><code>string</code></td></tr></tbody></table>',5),$=JSON.parse('{"title":"Loading 加载","description":"","frontmatter":{},"headers":[],"relativePath":"components/loading.md","filePath":"components/loading.md","lastUpdated":1720107457000}'),R={name:"components/loading.md"},K=Object.assign(R,{setup(H){const _=k(!0),p=k(!1);function v(){p.value=!0,setTimeout(()=>{p.value=!1},3e3)}const u=k(!1);function E(){u.value=!0}function f(){u.value=!1}let b;function y(){b=l.open(),setTimeout(()=>{b.close()},3e3)}return(U,z)=>{const i=m("CodePreview"),d=m("ClientOnly");return c(),o("div",null,[C,t(d,null,{default:n(()=>[t(i,null,{preview:n(()=>[h((c(),o("div",x,[e(" 内容加载区域 ")])),[[s(l),_.value]])]),default:n(()=>[F]),_:1})]),_:1}),T,A,L,t(d,null,{default:n(()=>[t(i,null,{preview:n(()=>[h((c(),o("div",B,[e(" 内容加载区域 ")])),[[s(l),_.value]])]),default:n(()=>[P]),_:1})]),_:1}),D,I,t(d,null,{default:n(()=>[t(i,null,{preview:n(()=>[h((c(),o("div",null,[t(s(r),{onClick:v},{default:n(()=>[e("加载")]),_:1})])),[[s(l),p.value,void 0,{fullscreen:!0}]])]),default:n(()=>[q]),_:1})]),_:1}),O,w,t(d,null,{default:n(()=>[t(i,null,{preview:n(()=>[h((c(),o("div",S,[t(s(r),{onClick:E},{default:n(()=>[e("开始")]),_:1}),t(s(r),{onClick:f},{default:n(()=>[e("结束")]),_:1})])),[[s(l),u.value,"bar",{fullscreen:!0,unlock:!0}]])]),default:n(()=>[N]),_:1})]),_:1}),V,t(d,null,{default:n(()=>[t(i,null,{preview:n(()=>[t(s(r),{onClick:y},{default:n(()=>[e("开始")]),_:1})]),default:n(()=>[j]),_:1})]),_:1}),M])}}});export{$ as __pageData,K as default};
