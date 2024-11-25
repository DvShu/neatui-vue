import{n as u}from"./chunks/theme.DASJ6p6U.js";import{d as x,f as i,c as P,ag as s,l as t,w as l,b as a,R as o,a1 as v,o as V,u as p}from"./chunks/framework.DdiFAQ9y.js";const w=JSON.parse('{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/input.md","filePath":"components/input.md","lastUpdated":1732085261000}'),I={name:"components/input.md"},y=x({...I,setup(q){const m=i(""),c=i(""),h=i(""),b=i("");function g(f){let e=parseInt(f,10);return Number.isNaN(e)?e="":e=Math.abs(e),String(e)}return(f,e)=>{const n=v("CodePreview"),r=v("ClientOnly");return V(),P("div",null,[e[8]||(e[8]=s('<h1 id="input-输入框" tabindex="-1">Input 输入框 <a class="header-anchor" href="#input-输入框" aria-label="Permalink to &quot;Input 输入框&quot;">​</a></h1><p>通过鼠标或键盘输入内容，是最基础的表单域的包装。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><h3 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h3><p>文本输入的基础用法。</p>',5)),t(r,null,{default:l(()=>[t(n,null,{default:l(()=>e[4]||(e[4]=[a("textarea",{lang:"vue-html"},`<lt-input placeholder="请输入内容"></lt-input>
`,-1)])),_:1})]),_:1}),e[9]||(e[9]=a("h3",{id:"输入解析",tabindex:"-1"},[o("输入解析 "),a("a",{class:"header-anchor",href:"#输入解析","aria-label":'Permalink to "输入解析"'},"​")],-1)),e[10]||(e[10]=a("p",null,[o("通过传递 "),a("code",null,"parser"),o(" 在接受到输入值的时候进行解析，例如：只允许输入正整数")],-1)),t(r,null,{default:l(()=>[t(n,null,{preview:l(()=>[t(p(u),{modelValue:m.value,"onUpdate:modelValue":e[0]||(e[0]=d=>m.value=d),placeholder:"请输入正整数",parser:g},null,8,["modelValue"])]),default:l(()=>[e[5]||(e[5]=a("textarea",{lang:"vue"},`  <script setup lang="ts">
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
    <lt-input v-model="inputInt" placeholder="请输入正整数" :parser="numericParse"></lt-input>
  </template>
  `,-1))]),_:1})]),_:1}),e[11]||(e[11]=s('<h3 id="允许输入的值" tabindex="-1">允许输入的值 <a class="header-anchor" href="#允许输入的值" aria-label="Permalink to &quot;允许输入的值&quot;">​</a></h3><p>通过传递 <code>allow-input</code> 来限制输入的值。<code>integer</code> 只能输入正整数, <code>number</code> 只能输入正数；以 <code>-</code> 开头表明允许输入负数; 以 <code>.2</code> 结尾表明小数点后精度; 例如: <code>-number.4</code> 表明允许输入数字，且小数点后保留4位小数。</p>',2)),t(r,null,{default:l(()=>[t(n,null,{preview:l(()=>[t(p(u),{modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=d=>c.value=d),placeholder:"只能输入正整数","allow-input":"integer"},null,8,["modelValue"]),t(p(u),{modelValue:h.value,"onUpdate:modelValue":e[2]||(e[2]=d=>h.value=d),placeholder:"只能输入整数","allow-input":"-integer"},null,8,["modelValue"]),t(p(u),{modelValue:b.value,"onUpdate:modelValue":e[3]||(e[3]=d=>b.value=d),placeholder:"输入数字,保留2位小数","allow-input":"-number.2"},null,8,["modelValue"])]),default:l(()=>[e[6]||(e[6]=a("textarea",{lang:"vue"},`  <script setup lang="ts">
  <\/script>
  <template>
    <hr />
  </template>
  `,-1))]),_:1})]),_:1}),e[12]||(e[12]=a("h3",{id:"禁用状态",tabindex:"-1"},[o("禁用状态 "),a("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),e[13]||(e[13]=a("p",null,[o("通过 "),a("code",null,"disabled"),o(" 属性设置输入框为禁用状态。")],-1)),t(r,null,{default:l(()=>[t(n,null,{default:l(()=>e[7]||(e[7]=[a("textarea",{lang:"vue-html"},`  <lt-input placeholder="请输入内容" disabled></lt-input>
  `,-1)])),_:1})]),_:1}),e[14]||(e[14]=s('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="input-props" tabindex="-1">Input Props <a class="header-anchor" href="#input-props" aria-label="Permalink to &quot;Input Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>html-type</code></td><td>原始的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#input_%E7%B1%BB%E5%9E%8B" target="_blank" rel="noreferrer">type</a></td><td><code>string</code></td><td><code>text</code></td></tr><tr><td><code>model-value</code> / <code>v-model</code></td><td>绑定值</td><td><code>string</code></td><td>—</td></tr><tr><td><code>placeholder</code></td><td>占位文本</td><td><code>string</code></td><td>—</td></tr><tr><td><code>parser</code></td><td>输入时解析值</td><td><code>(value: string) =&gt; string</code></td><td>—</td></tr><tr><td><code>allow-input</code></td><td>允许输入的值; <code>number</code>、<code>integer</code>,前面包含 <code>-</code> 表明允许小数, 以 <code>.2</code> 结尾表明小数点后精度</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="input-exposes" tabindex="-1">Input Exposes <a class="header-anchor" href="#input-exposes" aria-label="Permalink to &quot;Input Exposes&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td><code>focus</code></td><td>使输入框获取焦点</td><td><code>() =&gt; void</code></td></tr></tbody></table>',5))])}}});export{w as __pageData,y as default};
