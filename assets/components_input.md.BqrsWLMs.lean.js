import{l as h}from"./chunks/theme.5So0_uGs.js";import{d as m,e as _,c as f,g as a,w as o,ae as p,b as e,M as d,Z as i,o as b,q as v}from"./chunks/framework.CqWuvRde.js";const x=p('<h1 id="input-输入框" tabindex="-1">Input 输入框 <a class="header-anchor" href="#input-输入框" aria-label="Permalink to &quot;Input 输入框&quot;">​</a></h1><p>通过鼠标或键盘输入内容，是最基础的表单域的包装。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><h3 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h3><p>文本输入的基础用法。</p>',5),P=e("textarea",{lang:"vue-html"},`
<nt-input placeholder="请输入内容"></nt-input>
`,-1),g=e("h3",{id:"输入解析",tabindex:"-1"},[d("输入解析 "),e("a",{class:"header-anchor",href:"#输入解析","aria-label":'Permalink to "输入解析"'},"​")],-1),I=e("p",null,[d("通过传递 "),e("code",null,"parser"),d(" 在接受到输入值的时候进行解析，例如：只允许输入正整数")],-1),q=e("textarea",{lang:"vue"},`
  <script setup lang="ts">
    import { Input } from '../../src';
    import { ref } from 'vue';
    //-
    const inputInt = ref('')
    //-
    function numericParse(value: string) {
      let val = parseInt(value, 10)
      if (Number.isNaN(val)) {
        val = ''
      } else {
        val = Math.abs(val)
      }
      return String(val);
    }
  <\/script>
  <template>
    <nt-input v-model="inputInt" placeholder="请输入正整数" :parser="numericParse"></nt-input>
  </template>
  `,-1),N=p('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="input-props" tabindex="-1">Input Props <a class="header-anchor" href="#input-props" aria-label="Permalink to &quot;Input Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>html-type</code></td><td>原始的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#input_%E7%B1%BB%E5%9E%8B" target="_blank" rel="noreferrer">type</a></td><td><code>string</code></td><td><code>text</code></td></tr><tr><td><code>model-value</code> / <code>v-model</code></td><td>绑定值</td><td><code>string</code></td><td>—</td></tr><tr><td><code>placeholder</code></td><td>占位文本</td><td><code>string</code></td><td>—</td></tr><tr><td><code>parser</code></td><td>输入时解析值</td><td><code>(value: string) =&gt; string</code></td><td>—</td></tr></tbody></table><h3 id="input-exposes" tabindex="-1">Input Exposes <a class="header-anchor" href="#input-exposes" aria-label="Permalink to &quot;Input Exposes&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td><code>focus</code></td><td>使输入框获取焦点</td><td><code>() =&gt; void</code></td></tr></tbody></table>',5),E=JSON.parse('{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/input.md","filePath":"components/input.md","lastUpdated":1722397676000}'),k={name:"components/input.md"},V=m({...k,setup(y){const n=_("");function c(r){let t=parseInt(r,10);return Number.isNaN(t)?t="":t=Math.abs(t),String(t)}return(r,t)=>{const l=i("CodePreview"),s=i("ClientOnly");return b(),f("div",null,[x,a(s,null,{default:o(()=>[a(l,null,{default:o(()=>[P]),_:1})]),_:1}),g,I,a(s,null,{default:o(()=>[a(l,null,{preview:o(()=>[a(v(h),{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=u=>n.value=u),placeholder:"请输入正整数",parser:c},null,8,["modelValue"])]),default:o(()=>[q]),_:1})]),_:1}),N])}}});export{E as __pageData,V as default};
