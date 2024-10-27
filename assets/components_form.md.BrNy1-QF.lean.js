import{u as P,k as v,l as a,m as n,_ as h,n as y,o as m}from"./chunks/theme.CVO0TTn9.js";import{d as _,f as F,e as V,c as A,af as g,l as t,w as o,b as d,Q as r,a0 as q,o as R,u as l}from"./chunks/framework.hs56f8h4.js";const z=JSON.parse('{"title":"Form","description":"","frontmatter":{},"headers":[],"relativePath":"components/form.md","filePath":"components/form.md","lastUpdated":1729613669000}'),I={name:"components/form.md"},Z=_({...I,setup(C){const c=F("right"),p=F("null"),s=V(()=>p.value==="null"?null:p.value),{formFields:u,resetFields:w}=P({username:"",password:""}),x=[{key:"username",rules:["required"],message:"用户名不能为空"},{key:"password",rules:[/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,15})$/],message:"密码为6~15位字母+数字"}];function k(){w()}return($,e)=>{const f=q("CodePreview"),b=q("ClientOnly");return R(),A("div",null,[e[12]||(e[12]=g('<h1 id="form" tabindex="-1">Form <a class="header-anchor" href="#form" aria-label="Permalink to &quot;Form&quot;">​</a></h1><p>包含数据录入、校验以及对应样式。</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>基本的表单数据域控制展示，包含布局、初始化、验证、提交。数据验证采用 <a href="https://gitee.com/towardly/ph/wikis/utils/validator" target="_blank" rel="noreferrer">ph-utils/validator</a></p>',5)),t(b,null,{default:o(()=>[t(f,null,{preview:o(()=>[t(l(v),{model:l(u),rules:x},{default:o(()=>[t(l(a),{label:"用户名",name:"username"},{default:o(()=>[t(l(n),{placeholder:"请输入用户名",modelValue:l(u).username,"onUpdate:modelValue":e[0]||(e[0]=i=>l(u).username=i)},null,8,["modelValue"])]),_:1}),t(l(a),{label:"密码",required:"",name:"password"},{default:o(()=>[t(l(n),{placeholder:"请输入密码",modelValue:l(u).password,"onUpdate:modelValue":e[1]||(e[1]=i=>l(u).password=i)},null,8,["modelValue"])]),_:1}),t(l(a),{label:""},{default:o(()=>[t(l(h),{"html-type":"submit"},{default:o(()=>e[4]||(e[4]=[r("提交")])),_:1}),t(l(h),{type:"normal",onClick:k},{default:o(()=>e[5]||(e[5]=[r("重置")])),_:1})]),_:1})]),_:1},8,["model"])]),default:o(()=>[e[6]||(e[6]=d("textarea",{lang:"vue"},`  <script setup lang="ts">
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
    <nt-form :model="formFields" :rules="rules" >
      <nt-form-item label="用户名" required name="username" >
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
  `,-1))]),_:1})]),_:1}),e[13]||(e[13]=d("h3",{id:"行内表单",tabindex:"-1"},[r("行内表单 "),d("a",{class:"header-anchor",href:"#行内表单","aria-label":'Permalink to "行内表单"'},"​")],-1)),e[14]||(e[14]=d("p",null,"当前表单较简单时，可以在一行内放置表单。",-1)),e[15]||(e[15]=d("p",null,[r("通过设置 "),d("code",null,"inline"),r(" 属性为 "),d("code",null,"true"),r(" 可以让表单域变为行内的表单域。")],-1)),t(b,null,{default:o(()=>[t(f,null,{preview:o(()=>[t(l(v),{inline:""},{default:o(()=>[t(l(a),{label:"用户名",name:"username"},{default:o(()=>[t(l(n),{placeholder:"请输入用户名"})]),_:1}),t(l(a),{label:"密码",name:"password"},{default:o(()=>[t(l(n),{placeholder:"请输入密码"})]),_:1}),t(l(a),{label:"用户名",name:"username"},{default:o(()=>[t(l(n),{placeholder:"请输入用户名"})]),_:1}),t(l(a),{label:"密码",name:"password"},{default:o(()=>[t(l(n),{placeholder:"请输入密码"})]),_:1}),t(l(a),null,{default:o(()=>[t(l(h),{"html-type":"submit"},{default:o(()=>e[7]||(e[7]=[r("提交")])),_:1})]),_:1})]),_:1})]),default:o(()=>[e[8]||(e[8]=d("textarea",{lang:"vue-html"},`  <nt-form inline>
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
  `,-1))]),_:1})]),_:1}),e[16]||(e[16]=d("h3",{id:"只使用-formitem",tabindex:"-1"},[r("只使用 FormItem "),d("a",{class:"header-anchor",href:"#只使用-formitem","aria-label":'Permalink to "只使用 FormItem"'},"​")],-1)),e[17]||(e[17]=d("p",null,[d("code",null,"FormItem"),r(" 可以不放在 "),d("code",null,"Form"),r(" 里面，从而进行单独使用。")],-1)),t(b,null,{default:o(()=>[t(f,null,{default:o(()=>e[9]||(e[9]=[d("textarea",{lang:"vue-html"},`  <nt-form-item label="开关">
    <nt-switch />
  </nt-form-item>
  `,-1)])),_:1})]),_:1}),e[18]||(e[18]=g('<h3 id="对齐方式" tabindex="-1">对齐方式 <a class="header-anchor" href="#对齐方式" aria-label="Permalink to &quot;对齐方式&quot;">​</a></h3><p>通过设置 <code>label-position</code> 来应用标签和内容的对齐方式。</p><p>您可以分别设置 <code>nt-form-item</code> 的 <code>label-position</code>. 如果值为空, 则会使用 <code>nt-form</code> 的 <code>label-position</code>。</p>',3)),t(b,null,{default:o(()=>[t(f,null,{preview:o(()=>[t(l(v),{"label-width":"120px","label-position":c.value},{default:o(()=>[t(l(a),{label:"FormAlign","label-position":s.value},{default:o(()=>[t(y,{modelValue:c.value,"onUpdate:modelValue":e[2]||(e[2]=i=>c.value=i)},{default:o(()=>[t(m,{label:"Left",value:"left",type:"button"}),t(m,{label:"Right",value:"right",type:"button"}),t(m,{label:"Top",value:"top",type:"button"})]),_:1},8,["modelValue"])]),_:1},8,["label-position"]),t(l(a),{label:"FormItemAlign","label-position":s.value},{default:o(()=>[t(y,{modelValue:p.value,"onUpdate:modelValue":e[3]||(e[3]=i=>p.value=i)},{default:o(()=>[t(m,{label:"Null",value:"null",type:"button"}),t(m,{label:"Left",value:"left",type:"button"}),t(m,{label:"Right",value:"right",type:"button"}),t(m,{label:"Top",value:"top",type:"button"})]),_:1},8,["modelValue"])]),_:1},8,["label-position"]),t(l(a),{label:"用户名","label-position":s.value},{default:o(()=>[t(l(n),{placeholder:"请输入用户名"})]),_:1},8,["label-position"]),t(l(a),{label:"密码","label-position":s.value},{default:o(()=>[t(l(n),{placeholder:"请输入密码"})]),_:1},8,["label-position"]),t(l(a),{label:"","label-position":s.value},{default:o(()=>[t(l(h),{"html-type":"submit"},{default:o(()=>e[10]||(e[10]=[r("提交")])),_:1})]),_:1},8,["label-position"])]),_:1},8,["label-position"])]),default:o(()=>[e[11]||(e[11]=d("textarea",{lang:"vue-html"},`  <nt-form label-position="right">
    <nt-form-item label="用户名">
      <nt-input placeholder="请输入用户名"></nt-input>
    </nt-form-item>
    <nt-form-item label="密码">
      <nt-input placeholder="请输入密码"></nt-input>
    </nt-form-item>
    <nt-form-item>
      <nt-button html-type="submit">提交</nt-button>
    </nt-form-item>
  </nt-form>
  `,-1))]),_:1})]),_:1}),e[19]||(e[19]=g('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="form-props" tabindex="-1">Form Props <a class="header-anchor" href="#form-props" aria-label="Permalink to &quot;Form Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>model</code></td><td>表单数据对象</td><td><code>Record&lt;string, any&gt;</code></td><td>-</td></tr><tr><td><code>rules</code></td><td>表单验证规则</td><td><code>FormRule[]</code></td><td>-</td></tr><tr><td><code>label-width</code></td><td>标签的长度，例如 <code>50px</code>。 作为 <code>Form</code> 直接子元素的 <code>form-item</code> 会继承该值。</td><td><code>string</code></td><td>-</td></tr><tr><td><code>label-position</code></td><td>标签的位置</td><td><code>left</code>、<code>right</code>、<code>top</code></td><td><code>right</code></td></tr></tbody></table><h3 id="form-events" tabindex="-1">Form Events <a class="header-anchor" href="#form-events" aria-label="Permalink to &quot;Form Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td><code>submit</code></td><td>提交表单时触发</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="formitem-props" tabindex="-1">FormItem Props <a class="header-anchor" href="#formitem-props" aria-label="Permalink to &quot;FormItem Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>label</code></td><td>标签文本</td><td><code>string</code></td><td>-</td></tr><tr><td><code>required</code></td><td>是否为必填项，如不设置，则会根据校验规则确认</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>name</code></td><td><code>model</code> 的键名; 使用表单校验时必填</td><td><code>string</code></td><td>-</td></tr><tr><td><code>label-width</code></td><td>标签宽度，例如 <code>50px</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>error</code></td><td>表单域验证错误时的提示信息。设置该值会导致表单验证状态变为 <code>error</code>，并显示该错误信息。</td><td><code>string</code></td><td>-</td></tr><tr><td><code>label-position</code></td><td>标签位置, <em>可选</em></td><td><code>left</code>、<code>right</code>、<code>top</code></td><td>-</td></tr></tbody></table><h3 id="form-methods" tabindex="-1">Form Methods <a class="header-anchor" href="#form-methods" aria-label="Permalink to &quot;Form Methods&quot;">​</a></h3><table tabindex="0"><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>validate</code></td><td>对整个表单进行校验的方法</td><td><code>() =&gt; void</code></td></tr><tr><td><code>validateField</code></td><td>对部分表单字段进行校验的方法</td><td><code>(field: string | string[]) =&gt; void</code></td></tr><tr><td><code>clearValidate</code></td><td>移除表单项的校验结果</td><td><code>-</code></td></tr></tbody></table>',9))])}}});export{z as __pageData,Z as default};
