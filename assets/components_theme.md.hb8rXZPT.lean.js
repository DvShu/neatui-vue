const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/theme.D80Jzo0T.js","assets/chunks/framework.DcK8S9T6.js"])))=>i.map(i=>d[i]);
import{f as k,x as E,D as y,O as c,c as f,ag as h,l as e,w as a,b as t,R as o,a1 as u,o as v,u as n}from"./chunks/framework.DcK8S9T6.js";import{Y as _,Z as F,$ as C,a0 as T,o as w,p as d,a1 as A,K as x,J as B,a2 as D,a3 as q}from"./chunks/theme.D80Jzo0T.js";const O=JSON.parse('{"title":"Theme 主题切换","description":"","frontmatter":{},"headers":[],"relativePath":"components/theme.md","filePath":"components/theme.md","lastUpdated":1729613669000}'),$={name:"components/theme.md"},R=Object.assign($,{setup(P){const l=k(""),m=k("");E(l,i=>{c(()=>import("./chunks/theme.D80Jzo0T.js").then(s=>s.aA),__vite__mapDeps([0,1])).then(s=>s.applyTheme(i))}),y(()=>{c(()=>import("./chunks/theme.D80Jzo0T.js").then(i=>i.aA),__vite__mapDeps([0,1])).then(i=>{l.value=i.getTheme()})});function b(){const i=document.getElementById("color-theme-style");if(i!=null){let s=i.innerHTML;s=s.replace("{",` {\r
  `).replaceAll(";",`;\r
  `).replace("  }","}"),m.value=s}}return(i,s)=>{const r=u("CodePreview"),p=u("ClientOnly");return v(),f("div",null,[s[5]||(s[5]=h(`<h1 id="theme-主题切换" tabindex="-1">Theme 主题切换 <a class="header-anchor" href="#theme-主题切换" aria-label="Permalink to &quot;Theme 主题切换&quot;">​</a></h1><p>通过切换主题来减轻长时间使用屏幕带来的视觉疲劳</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><blockquote><ol><li>主题切换是通过 <a href="https://www.npmjs.com/package/ph-utils" target="_blank" rel="noreferrer">ph-utils</a> 工具库的 <code>theme</code> 工具类控制</li><li>为了每次切换主题后，重新加载能够生效，需要在应用开始的时候, 执行 <code>initTheme()</code> 方法</li></ol></blockquote><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ftpM6" id="tab-4c-J64R" checked><label data-title="main.ts" for="tab-4c-J64R">main.ts</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { initTheme } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ph-utils/theme&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">initTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(App).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(router).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#app&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div></div><h3 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h3><p>提供多种风格的主题切换按钮: 按钮、下拉选择、单选按钮组、开关</p>`,7)),e(p,null,{default:a(()=>[e(r,null,{preview:a(()=>[e(n(_)),e(n(F),{class:"ml-10"}),e(n(C),{class:"ml-10"}),e(n(T),{class:"mt-15"})]),default:a(()=>[s[1]||(s[1]=t("textarea",{lang:"vue-html"},`  <nt-theme-button></nt-theme-button>
  <nt-theme-select class="ml-10"></nt-theme-select>
  <nt-theme-switch class="ml-10"></nt-theme-switch>
  <nt-theme-radio class="mt-15"></nt-theme-radio>
  `,-1))]),_:1})]),_:1}),s[6]||(s[6]=h(`<blockquote><p>切换主题后，如果要让应用启动的时候也应用上一次切换的主题, 需要在应用开始的地方调用 <code>initTheme()</code> 函数</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// main.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { initTheme } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ph-utils/theme&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// await initTheme();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">initTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="自定义风格" tabindex="-1">自定义风格 <a class="header-anchor" href="#自定义风格" aria-label="Permalink to &quot;自定义风格&quot;">​</a></h3><p>框架内置的主题切换其实就是一个排版的样式，核心的主题切换的逻辑是调用的 <code>ph-utils</code> 库的 <code>theme</code> 模块相关函数来实现的。</p><p>通常调用的模块有: <code>getTheme()</code>、<code>applyTheme()</code></p><p>所以完全可以自定义按钮来实现主题切换, 下面就使用 <code>RadioGroup + Icon</code> 来实现。</p>`,6)),e(p,null,{default:a(()=>[e(r,null,{preview:a(()=>[e(n(w),{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=g=>l.value=g)},{default:a(()=>[e(n(d),{value:"auto",type:"button"},{default:a(()=>[e(n(A))]),_:1}),e(n(d),{value:"light",type:"button"},{default:a(()=>[e(n(x))]),_:1}),e(n(d),{value:"dark",type:"button"},{default:a(()=>[e(n(B))]),_:1})]),_:1},8,["modelValue"])]),default:a(()=>[s[2]||(s[2]=t("textarea",{lang:"vue"},`  <script setup lang="ts">
    import { ref, watch } from 'vue';
    import { getTheme, applyTheme } from 'ph-utils/theme';
    // 获取当前主题
    const theme = ref(getTheme());
    // 主题改变时, 应用主题
    watch(theme, (val) => {
      applyTheme(val).then();
    });
  <\/script>
  <template>
    <nt-radio-group v-model="theme">
      <nt-radio value="auto" type="button">
        <nt-theme-default-icon></nt-theme-default-icon>
      </nt-radio>
      <nt-radio value="light" type="button">
        <nt-sun-icon></nt-sun-icon>
      </nt-radio>
      <nt-radio value="dark" type="button">
        <nt-moon-icon></nt-moon-icon>
      </nt-radio>
    </nt-radio-group>
  </template>
  `,-1))]),_:1})]),_:1}),s[7]||(s[7]=t("h3",{id:"更改主题色",tabindex:"-1"},[o("更改主题色 "),t("a",{class:"header-anchor",href:"#更改主题色","aria-label":'Permalink to "更改主题色"'},"​")],-1)),s[8]||(s[8]=t("p",null,[o("除了修改主题风格，还可以修改主题色，通过修改 "),t("code",null,"ThemeColor"),o(" 来实现。")],-1)),e(p,null,{default:a(()=>[e(r,null,{preview:a(()=>[e(n(D),{onChange:b})]),default:a(()=>[s[3]||(s[3]=t("textarea",{lang:"vue-html"},`  <nt-theme-color></nt-theme-color>
  `,-1))]),_:1})]),_:1}),s[9]||(s[9]=t("p",null,"生成的主题色代码如下:",-1)),e(p,null,{default:a(()=>[e(q,{"source-code":m.value},{default:a(()=>s[4]||(s[4]=[t("textarea",{lang:"css"},`:root {
  --nt-primary-color: #722ed1;
  --nt-primary-color-light1: #9254de;
  --nt-primary-color-light2: #b37feb;
  --nt-primary-color-light3: #d3adf7;
  --nt-primary-color-light4: #efdbff;
  --nt-primary-color-light5: #f9f0ff;
  --nt-primary-color-dark1: #531dab;
}
`,-1)])),_:1},8,["source-code"])]),_:1}),s[10]||(s[10]=h(`<blockquote><p>跟主题模式一样，如果想要再下次启动时也应用选择的主题色，需要在应用启动时，调用 <code>initColorTheme()</code> 函数</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// main.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { initColorTheme } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ph-utils/theme&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">initColorTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,2))])}}});export{O as __pageData,R as default};
