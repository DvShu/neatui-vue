import{u as w,j as h,k as r,l,_ as c}from"./chunks/theme.Ck1ydRZC.js";import{d as q,c as v,g as e,w as o,M as a,ae as f,b as d,Z as p,o as x,q as t}from"./chunks/framework.CqWuvRde.js";const g=f('<h1 id="form" tabindex="-1">Form <a class="header-anchor" href="#form" aria-label="Permalink to &quot;Form&quot;">​</a></h1><p>包含数据录入、校验以及对应样式。</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>基本的表单数据域控制展示，包含布局、初始化、验证、提交。数据验证采用 <a href="https://gitee.com/towardly/ph/wikis/utils/validator" target="_blank" rel="noreferrer">ph-utils/validator</a></p>',5),k=d("textarea",{lang:"vue"},`
  <script setup lang="ts">
    import { reactive, watch, ref } from 'vue'
    import { useFormReset } from '@asteres/neatui-vue'
    const { formFields, resetFields } = useFormReset({
      username: '',
      password: ''
    })
    const rules = [
      {
        key: 'username',
        rules: ['required'],
        message: '用户名不能为空'
      },
      {
        key: 'password',
        rules: [/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,15})$/],
        message: '密码为6~15位字母+数字'
      }
    ]
    function handleReset() {
      resetFields()
    }
  <\/script>
  <template>
    <nt-form :model="formFields" :rules="rules">
      <nt-form-item label="用户名" required name="username">
        <nt-input placeholder="请输入用户名" v-model="formFields.username"></nt-input>
      </nt-form-item>
      <nt-form-item label="密码" required name="password">
        <nt-input placeholder="请输入密码" v-model="formFields.password"></nt-input>
      </nt-form-item>
      <nt-form-item label="">
        <nt-button html-type="submit">提交</nt-button>
        <nt-button type="normal" @click="handleReset">重置</nt-button>
      </nt-form-item>
    </nt-form>
  </template>
  `,-1),y=d("h3",{id:"行内表单",tabindex:"-1"},[a("行内表单 "),d("a",{class:"header-anchor",href:"#行内表单","aria-label":'Permalink to "行内表单"'},"​")],-1),P=d("p",null,"当前表单较简单时，可以在一行内放置表单。",-1),V=d("p",null,[a("通过设置 "),d("code",null,"inline"),a(" 属性为 "),d("code",null,"true"),a(" 可以让表单域变为行内的表单域。")],-1),C=d("textarea",{lang:"vue-html"},`
  <nt-form inline>
    <nt-form-item label="用户名" required name="username">
      <nt-input placeholder="请输入用户名"></nt-input>
    </nt-form-item>
    <nt-form-item label="密码" required name="password">
      <nt-input placeholder="请输入密码"></nt-input>
    </nt-form-item>
    <nt-form-item>
      <nt-button html-type="submit">提交</nt-button>
    </nt-form-item>
  </nt-form>
  `,-1),R=d("h3",{id:"只使用-formitem",tabindex:"-1"},[a("只使用 FormItem "),d("a",{class:"header-anchor",href:"#只使用-formitem","aria-label":'Permalink to "只使用 FormItem"'},"​")],-1),I=d("p",null,[d("code",null,"FormItem"),a(" 可以不放在 "),d("code",null,"Form"),a(" 里面，从而进行单独使用。")],-1),A=d("textarea",{lang:"vue-html"},`
  <nt-form-item label="开关">
    <nt-switch />
  </nt-form-item>
  `,-1),$=f('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="form-props" tabindex="-1">Form Props <a class="header-anchor" href="#form-props" aria-label="Permalink to &quot;Form Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>model</code></td><td>表单数据对象</td><td><code>Record&lt;string, any&gt;</code></td><td>-</td></tr><tr><td><code>rules</code></td><td>表单验证规则</td><td><code>FormRule[]</code></td><td>-</td></tr><tr><td><code>label-width</code></td><td>标签的长度，例如 <code>50px</code>。 作为 <code>Form</code> 直接子元素的 <code>form-item</code> 会继承该值。</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="form-events" tabindex="-1">Form Events <a class="header-anchor" href="#form-events" aria-label="Permalink to &quot;Form Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td><code>submit</code></td><td>提交表单时触发</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="formitem-props" tabindex="-1">FormItem Props <a class="header-anchor" href="#formitem-props" aria-label="Permalink to &quot;FormItem Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>label</code></td><td>标签文本</td><td><code>string</code></td><td>-</td></tr><tr><td><code>required</code></td><td>是否为必填项，如不设置，则会根据校验规则确认</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>name</code></td><td><code>model</code> 的键名; 使用表单校验时必填</td><td><code>string</code></td><td>-</td></tr><tr><td><code>label-width</code></td><td>标签宽度，例如 <code>50px</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>error</code></td><td>表单域验证错误时的提示信息。设置该值会导致表单验证状态变为 <code>error</code>，并显示该错误信息。</td><td><code>string</code></td><td>-</td></tr></tbody></table>',7),O=JSON.parse('{"title":"Form","description":"","frontmatter":{},"headers":[],"relativePath":"components/form.md","filePath":"components/form.md","lastUpdated":1722397676000}'),N={name:"components/form.md"},U=q({...N,setup(Z){const{formFields:n,resetFields:b}=w({username:"",password:""}),_=[{key:"username",rules:["required"],message:"用户名不能为空"},{key:"password",rules:[/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,15})$/],message:"密码为6~15位字母+数字"}];function F(){b()}return(z,s)=>{const m=p("CodePreview"),i=p("ClientOnly");return x(),v("div",null,[g,e(i,null,{default:o(()=>[e(m,null,{preview:o(()=>[e(t(h),{model:t(n),rules:_},{default:o(()=>[e(t(r),{label:"用户名",name:"username"},{default:o(()=>[e(t(l),{placeholder:"请输入用户名",modelValue:t(n).username,"onUpdate:modelValue":s[0]||(s[0]=u=>t(n).username=u)},null,8,["modelValue"])]),_:1}),e(t(r),{label:"密码",required:"",name:"password"},{default:o(()=>[e(t(l),{placeholder:"请输入密码",modelValue:t(n).password,"onUpdate:modelValue":s[1]||(s[1]=u=>t(n).password=u)},null,8,["modelValue"])]),_:1}),e(t(r),{label:""},{default:o(()=>[e(t(c),{"html-type":"submit"},{default:o(()=>[a("提交")]),_:1}),e(t(c),{type:"normal",onClick:F},{default:o(()=>[a("重置")]),_:1})]),_:1})]),_:1},8,["model"])]),default:o(()=>[k]),_:1})]),_:1}),y,P,V,e(i,null,{default:o(()=>[e(m,null,{preview:o(()=>[e(t(h),{inline:""},{default:o(()=>[e(t(r),{label:"用户名",name:"username"},{default:o(()=>[e(t(l),{placeholder:"请输入用户名"})]),_:1}),e(t(r),{label:"密码",name:"password"},{default:o(()=>[e(t(l),{placeholder:"请输入密码"})]),_:1}),e(t(r),{label:"用户名",name:"username"},{default:o(()=>[e(t(l),{placeholder:"请输入用户名"})]),_:1}),e(t(r),{label:"密码",name:"password"},{default:o(()=>[e(t(l),{placeholder:"请输入密码"})]),_:1}),e(t(r),null,{default:o(()=>[e(t(c),{"html-type":"submit"},{default:o(()=>[a("提交")]),_:1})]),_:1})]),_:1})]),default:o(()=>[C]),_:1})]),_:1}),R,I,e(i,null,{default:o(()=>[e(m,null,{default:o(()=>[A]),_:1})]),_:1}),a("` "),$])}}});export{O as __pageData,U as default};
