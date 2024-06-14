import{e as p,c as l,k as a,w as t,aa as u,b as e,y as n,R as v,o as d,z as b,T as h,g as _}from"./chunks/framework.Yy9K0PbY.js";import{e as r,a as f}from"./chunks/theme.699TBE5S.js";const k=u('<h2 id="_1-vue3-transition-渐变" tabindex="-1">1. <code>Vue3 Transition</code> 渐变 <a class="header-anchor" href="#_1-vue3-transition-渐变" aria-label="Permalink to &quot;1. `Vue3 Transition` 渐变&quot;">​</a></h2><h3 id="_1-1-引入样式" tabindex="-1">1.1 引入样式 <a class="header-anchor" href="#_1-1-引入样式" aria-label="Permalink to &quot;1.1 引入样式&quot;">​</a></h3><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@asteres/neatui-vue/style/util/transition.css&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_1-2-使用" tabindex="-1">1.2 使用 <a class="header-anchor" href="#_1-2-使用" aria-label="Permalink to &quot;1.2 使用&quot;">​</a></h3><p>所有的渐变都支持传递 <code>--nt-transition-times</code> 控制时长, 默认为 <code>0.3s</code>；只需要简单的添加相应的 <code>Transition-name</code> 属性即可。</p><h4 id="_1-2-1-nt-opacity" tabindex="-1">1.2.1 <code>nt-opacity</code> <a class="header-anchor" href="#_1-2-1-nt-opacity" aria-label="Permalink to &quot;1.2.1 `nt-opacity`&quot;">​</a></h4><p>普通渐变进入/退出</p>',7),g=e("textarea",{lang:"vue-html"},`
<nt-button @click="show = !show">Toggle</nt-button>
<Transition name="nt-opacity">
<p v-if="show">Hello world</p>
</Transition>
`,-1),x={key:0,class:"ml-10"},y=e("h4",{id:"_1-2-2-nt-fadein",tabindex:"-1"},[n("1.2.2 "),e("code",null,"nt-fadein"),n(),e("a",{class:"header-anchor",href:"#_1-2-2-nt-fadein","aria-label":'Permalink to "1.2.2 `nt-fadein`"'},"​")],-1),T=e("p",null,[n("从顶部往下移动渐变的进入/退出; 支持通过 "),e("code",null,"--nt-fadein-offset"),n(" 控制距离, 默认为 "),e("code",null,"-20px")],-1),w=e("textarea",{lang:"vue-html"},`
<nt-button @click="show = !show">Toggle</nt-button>
<Transition name="nt-fadein">
<p v-if="show">Hello world</p>
</Transition>
<Transition name="nt-fadein">
<p v-if="show" style="--nt-fadein-offset:-50px;">Hello world</p>
</Transition>
`,-1),C={key:0,class:"inline ml-10"},P={key:0,class:"inline ml-10",style:{"--nt-fadein-offset":"-50px"}},q=u('<h3 id="样式变量" tabindex="-1">样式变量 <a class="header-anchor" href="#样式变量" aria-label="Permalink to &quot;样式变量&quot;">​</a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式</p><table tabindex="0"><thead><tr><th>名称</th><th>描述</th><th>默认值</th></tr></thead><tbody><tr><td><code>--nt-transition-times</code></td><td>渐变时长, 所有渐变都支持</td><td><code>0.3s</code></td></tr><tr><td><code>--nt-fadein-offset</code></td><td>渐变距离, 支持的渐变有: <code>nt-fadein</code></td><td><code>-20px</code></td></tr></tbody></table><h2 id="_2-滚动条样式" tabindex="-1">2. 滚动条样式 <a class="header-anchor" href="#_2-滚动条样式" aria-label="Permalink to &quot;2. 滚动条样式&quot;">​</a></h2><p>如果觉得默认滚动条不好看，想修改滚动条样式</p><h3 id="引入滚动条样式表" tabindex="-1">引入滚动条样式表 <a class="header-anchor" href="#引入滚动条样式表" aria-label="Permalink to &quot;引入滚动条样式表&quot;">​</a></h3><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@asteres/neatui-vue/style/util/scrollbar.css&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><p>只需要在滚动容器添加 <code>nt-scrollbar</code> 类即可</p>',9),S=e("textarea",{lang:"html"},`
  <div class="nt-scrollbar" style="width:100%;height:80px;border:1px solid #dedede;overflow:auto;">
    <div style="width:150%;height:150px;">ScrollBar</div>
  </div>
  `,-1),E=e("h4",{id:"更改滚动条颜色以及大小",tabindex:"-1"},[n("更改滚动条颜色以及大小 "),e("a",{class:"header-anchor",href:"#更改滚动条颜色以及大小","aria-label":'Permalink to "更改滚动条颜色以及大小"'},"​")],-1),V=e("p",null,[n("通过使用下面表格中的 "),e("code",null,"CSS"),n(" 变量，可以更改滚动条的颜色以及大小")],-1),A=e("textarea",{lang:"html"},`
  <div class="nt-scrollbar" style="--nt-scrollbar-bg:orange;--nt-scrollbar-hover:red;--nt-scrollbar-size:8px;width:100%;height:80px;border:1px solid #dedede;overflow:auto;">
    <div style="width:150%;height:150px;">ScrollBar</div>
  </div>
  `,-1),N=u('<h3 id="主题定制-样式变量" tabindex="-1">主题定制 - 样式变量 <a class="header-anchor" href="#主题定制-样式变量" aria-label="Permalink to &quot;主题定制 - 样式变量&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>描述</th><th>默认值</th></tr></thead><tbody><tr><td><code>--nt-scrollbar-bg</code></td><td>滑块背景色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--nt-scrollbar-hover</code></td><td>鼠标悬浮时滑块颜色</td><td><code>#bfbfbf</code></td></tr><tr><td><code>--nt-scrollbar-size</code></td><td>滑块尺寸, 水平滚动条时为高度，垂直时为宽度</td><td><code>10px</code></td></tr></tbody></table>',2),O=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"css-util.md","filePath":"css-util.md","lastUpdated":1713346936000}'),F={name:"css-util.md"},R=Object.assign(F,{setup(B){const c=p(!0),s=p(!0);return(D,i)=>{const o=v("ClientOnly");return d(),l("div",null,[k,a(o,null,{default:t(()=>[a(r,{class:"mb-15"},{preview:t(()=>[a(b(f),{onClick:i[0]||(i[0]=m=>c.value=!c.value)},{default:t(()=>[n("Toggle")]),_:1}),a(h,{name:"nt-opacity"},{default:t(()=>[c.value?(d(),l("span",x,"Hello World")):_("",!0)]),_:1})]),default:t(()=>[g]),_:1})]),_:1}),y,T,a(o,null,{default:t(()=>[a(r,{class:"mb-15"},{preview:t(()=>[a(b(f),{onClick:i[1]||(i[1]=m=>s.value=!s.value)},{default:t(()=>[n("Toggle")]),_:1}),a(h,{name:"nt-fadein"},{default:t(()=>[s.value?(d(),l("div",C,"Hello World")):_("",!0)]),_:1}),a(h,{name:"nt-fadein"},{default:t(()=>[s.value?(d(),l("div",P,"Hello World")):_("",!0)]),_:1})]),default:t(()=>[w]),_:1})]),_:1}),q,a(o,null,{default:t(()=>[a(r,{class:"mb-15"},{default:t(()=>[S]),_:1})]),_:1}),E,V,a(o,null,{default:t(()=>[a(r,null,{default:t(()=>[A]),_:1})]),_:1}),N])}}});export{O as __pageData,R as default};