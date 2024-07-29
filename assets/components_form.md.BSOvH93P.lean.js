import{u as q,k as h,l as o,m as l,_ as i}from"./chunks/theme.DSy2rScv.js";import{d as F,o as v,c as y,g as t,w as d,ae as f,b as a,J as r,X as p,l as e}from"./chunks/framework.-x160Rg7.js";const g=f('<h1 id="form" tabindex="-1">Form <a class="header-anchor" href="#form" aria-label="Permalink to &quot;Form&quot;">​</a></h1><p>包含数据录入、校验以及对应样式。</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>基本的表单数据域控制展示，包含布局、初始化、验证、提交。数据验证采用 <a href="https://gitee.com/towardly/ph/wikis/utils/validator" target="_blank" rel="noreferrer">ph-utils/validator</a></p>',5),k=a("textarea",{lang:"vue"},`
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
  `,-1),x=a("h3",{id:"行内表单",tabindex:"-1"},[r("行内表单 "),a("a",{class:"header-anchor",href:"#行内表单","aria-label":'Permalink to "行内表单"'},"​")],-1),P=a("p",null,"当前表单较简单时，可以在一行内放置表单。",-1),V=a("p",null,[r("通过设置 "),a("code",null,"inline"),r(" 属性为 "),a("code",null,"true"),r(" 可以让表单域变为行内的表单域。")],-1),C=a("textarea",{lang:"vue-html"},`
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
  `,-1),R=f('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="form-props" tabindex="-1">Form Props <a class="header-anchor" href="#form-props" aria-label="Permalink to &quot;Form Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>model</code></td><td>表单数据对象</td><td><code>Record&lt;string, any&gt;</code></td><td>-</td></tr><tr><td><code>rules</code></td><td>表单验证规则</td><td><code>FormRule[]</code></td><td>-</td></tr><tr><td><code>label-width</code></td><td>标签的长度，例如 <code>50px</code>。 作为 <code>Form</code> 直接子元素的 <code>form-item</code> 会继承该值。</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="form-events" tabindex="-1">Form Events <a class="header-anchor" href="#form-events" aria-label="Permalink to &quot;Form Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td><code>submit</code></td><td>提交表单时触发</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="formitem-props" tabindex="-1">FormItem Props <a class="header-anchor" href="#formitem-props" aria-label="Permalink to &quot;FormItem Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>label</code></td><td>标签文本</td><td><code>string</code></td><td>-</td></tr><tr><td><code>required</code></td><td>是否为必填项，如不设置，则会根据校验规则确认</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>name</code></td><td><code>model</code> 的键名; 使用表单校验时必填</td><td><code>string</code></td><td>-</td></tr><tr><td><code>label-width</code></td><td>标签宽度，例如 <code>50px</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>error</code></td><td>表单域验证错误时的提示信息。设置该值会导致表单验证状态变为 <code>error</code>，并显示该错误信息。</td><td><code>string</code></td><td>-</td></tr></tbody></table>',7),Z=JSON.parse('{"title":"Form","description":"","frontmatter":{},"headers":[],"relativePath":"components/form.md","filePath":"components/form.md","lastUpdated":1720163887000}'),A={name:"components/form.md"},B=F({...A,setup($){const{formFields:n,resetFields:b}=q({username:"",password:""}),_=[{key:"username",rules:["required"],message:"用户名不能为空"},{key:"password",rules:[/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,15})$/],message:"密码为6~15位字母+数字"}];function w(){b()}return(N,s)=>{const u=p("CodePreview"),c=p("ClientOnly");return v(),y("div",null,[g,t(c,null,{default:d(()=>[t(u,null,{preview:d(()=>[t(e(h),{model:e(n),rules:_},{default:d(()=>[t(e(o),{label:"用户名",name:"username"},{default:d(()=>[t(e(l),{placeholder:"请输入用户名",modelValue:e(n).username,"onUpdate:modelValue":s[0]||(s[0]=m=>e(n).username=m)},null,8,["modelValue"])]),_:1}),t(e(o),{label:"密码",required:"",name:"password"},{default:d(()=>[t(e(l),{placeholder:"请输入密码",modelValue:e(n).password,"onUpdate:modelValue":s[1]||(s[1]=m=>e(n).password=m)},null,8,["modelValue"])]),_:1}),t(e(o),{label:""},{default:d(()=>[t(e(i),{"html-type":"submit"},{default:d(()=>[r("提交")]),_:1}),t(e(i),{type:"normal",onClick:w},{default:d(()=>[r("重置")]),_:1})]),_:1})]),_:1},8,["model"])]),default:d(()=>[k]),_:1})]),_:1}),x,P,V,t(c,null,{default:d(()=>[t(u,null,{preview:d(()=>[t(e(h),{inline:""},{default:d(()=>[t(e(o),{label:"用户名",name:"username"},{default:d(()=>[t(e(l),{placeholder:"请输入用户名"})]),_:1}),t(e(o),{label:"密码",name:"password"},{default:d(()=>[t(e(l),{placeholder:"请输入密码"})]),_:1}),t(e(o),{label:"用户名",name:"username"},{default:d(()=>[t(e(l),{placeholder:"请输入用户名"})]),_:1}),t(e(o),{label:"密码",name:"password"},{default:d(()=>[t(e(l),{placeholder:"请输入密码"})]),_:1}),t(e(o),null,{default:d(()=>[t(e(i),{"html-type":"submit"},{default:d(()=>[r("提交")]),_:1})]),_:1})]),_:1})]),default:d(()=>[C]),_:1})]),_:1}),R])}}});export{Z as __pageData,B as default};
