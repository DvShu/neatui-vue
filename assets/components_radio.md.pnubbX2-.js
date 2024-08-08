import{y as n,z as u}from"./chunks/theme.5So0_uGs.js";import{e as p,c as m,g as e,w as a,ae as _,b as t,M as d,Z as b,o as v,q as o}from"./chunks/framework.CqWuvRde.js";const f=_('<h1 id="radio-单选框" tabindex="-1">Radio 单选框 <a class="header-anchor" href="#radio-单选框" aria-label="Permalink to &quot;Radio 单选框&quot;">​</a></h1><p>在一组备选项中进行单选</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>当只有一个选项时，可以直接通过 <code>v-model</code> 绑定一个 <code>boolean</code> 值来控制是否选中；使用 <code>slot-default</code> 来重写选项的文字。</p>',5),x=t("textarea",{lang:"vue"},`
  <script setup>
    import { ref } from 'vue';
    const allowService = ref(false);
  <\/script>
  <template>
    <nt-radio v-model="allowService">
      <span>
        <span>同意</span>
        <a href='#'>隐私协议</a>
      </span>
    </nt-radio>
  </template>
  `,-1),P=t("span",null,[t("span",null,"同意"),t("a",{href:"#"},"隐私协议")],-1),g=t("h3",{id:"禁用状态",tabindex:"-1"},[d("禁用状态 "),t("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1),q=t("p",null,[d("设置 "),t("code",null,"disabled"),d(" 属性即可。")],-1),y=t("textarea",{lang:"vue-html"},`
  <nt-radio label="禁用" disabled></nt-radio>
  `,-1),V=t("h3",{id:"单选框组",tabindex:"-1"},[d("单选框组 "),t("a",{class:"header-anchor",href:"#单选框组","aria-label":'Permalink to "单选框组"'},"​")],-1),k=t("p",null,[d("结合 "),t("code",null,"nt-radio-group"),d(" 组件实现单选框组")],-1),R=t("textarea",{lang:"vue-html"},`
  <script setup>
    import { ref } from 'vue';
    const sex = ref('0');
  <\/script>
  <template>
    <nt-radio-group v-model="sex">
      <nt-radio label="男" value="0" />
      <nt-radio label="女" value="1" />
    </nt-radio-group>
  </template>
  `,-1),S=t("h3",{id:"按钮样式",tabindex:"-1"},[d("按钮样式 "),t("a",{class:"header-anchor",href:"#按钮样式","aria-label":'Permalink to "按钮样式"'},"​")],-1),T=t("p",null,[d("在单选框组基础上，设置 "),t("code",null,"nt-radio"),d(" 的 "),t("code",null,"type"),d(" 属性为 "),t("code",null,"button"),d(" 即可。")],-1),w=t("textarea",{lang:"vue-html"},`
  <template>
    <nt-radio-group v-model="sex">
      <nt-radio label="男" value="0" type="button" />
      <nt-radio label="女" value="1" type="button" />
    </nt-radio-group>
  </template>
  `,-1),C=_('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="radio-props" tabindex="-1">Radio Props <a class="header-anchor" href="#radio-props" aria-label="Permalink to &quot;Radio Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>model-value / v-model</code></td><td>是否选中</td><td><code>boolean</code></td><td>x</td></tr><tr><td><code>name</code></td><td>原生 <code>name</code> 属性</td><td><code>string</code></td><td>-</td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>value</code></td><td>原生 <code>value</code> 属性</td><td><code>string</code></td><td>-</td></tr><tr><td><code>label</code></td><td>显示的标签</td><td><code>string</code></td><td>-</td></tr><tr><td><code>type</code></td><td>是否设置为按钮风格</td><td><code>button</code></td><td>-</td></tr><tr><td><code>checked</code></td><td>是否选中</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="radiogroup-props" tabindex="-1">RadioGroup Props <a class="header-anchor" href="#radiogroup-props" aria-label="Permalink to &quot;RadioGroup Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>model-value / v-model</code></td><td>选中项绑定的值</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="radio-events" tabindex="-1">Radio Events <a class="header-anchor" href="#radio-events" aria-label="Permalink to &quot;Radio Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>change</code></td><td>选中项变化时触发</td><td><code>(checked: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="radiogroup-events" tabindex="-1">RadioGroup Events <a class="header-anchor" href="#radiogroup-events" aria-label="Permalink to &quot;RadioGroup Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>change</code></td><td>选中项变化时触发</td><td><code>(checkedValue: string) =&gt; void</code></td></tr></tbody></table><h3 id="radio-slots" tabindex="-1">Radio Slots <a class="header-anchor" href="#radio-slots" aria-label="Permalink to &quot;Radio Slots&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td><code>default</code></td><td>自定义 <code>label</code> 内容</td></tr></tbody></table>',11),O=JSON.parse('{"title":"Radio 单选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/radio.md","filePath":"components/radio.md","lastUpdated":1723109016000}'),A={name:"components/radio.md"},U=Object.assign(A,{setup(E){const i=p("0"),h=p(!1);return(N,l)=>{const s=b("CodePreview"),c=b("ClientOnly");return v(),m("div",null,[f,e(c,null,{default:a(()=>[e(s,null,{preview:a(()=>[e(o(n),{modelValue:h.value,"onUpdate:modelValue":l[0]||(l[0]=r=>h.value=r)},{default:a(()=>[P]),_:1},8,["modelValue"])]),default:a(()=>[x]),_:1})]),_:1}),g,q,e(c,null,{default:a(()=>[e(s,null,{preview:a(()=>[e(o(n),{label:"禁用",disabled:""})]),default:a(()=>[y]),_:1})]),_:1}),V,k,e(c,null,{default:a(()=>[e(s,null,{preview:a(()=>[e(o(u),{modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=r=>i.value=r)},{default:a(()=>[e(o(n),{label:"男",value:"0"}),e(o(n),{label:"女",value:"1"})]),_:1},8,["modelValue"])]),default:a(()=>[R]),_:1})]),_:1}),S,T,e(c,null,{default:a(()=>[e(s,null,{preview:a(()=>[e(o(u),{modelValue:i.value,"onUpdate:modelValue":l[2]||(l[2]=r=>i.value=r)},{default:a(()=>[e(o(n),{label:"男",value:"0",type:"button"}),e(o(n),{label:"女",value:"1",type:"button"})]),_:1},8,["modelValue"])]),default:a(()=>[w]),_:1})]),_:1}),C])}}});export{O as __pageData,U as default};
