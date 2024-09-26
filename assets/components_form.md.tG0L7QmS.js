import{u as P,k as v,l as a,m as n,_ as h,n as y,o as m}from"./chunks/theme.nxusEVzu.js";import{d as _,f as F,e as V,c as A,af as g,p as e,w as l,b as d,P as r,$ as w,o as R,u as o}from"./chunks/framework.BKc52Jce.js";const z=JSON.parse('{"title":"Form","description":"","frontmatter":{},"headers":[],"relativePath":"components/form.md","filePath":"components/form.md","lastUpdated":1727321359000}'),I={name:"components/form.md"},Z=_({...I,setup($){const c=F("right"),p=F("null"),s=V(()=>p.value==="null"?null:p.value),{formFields:u,resetFields:q}=P({username:"",password:""}),x=[{key:"username",rules:["required"],message:"用户名不能为空"},{key:"password",rules:[/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,15})$/],message:"密码为6~15位字母+数字"}];function k(){q()}return(C,t)=>{const f=w("CodePreview"),b=w("ClientOnly");return R(),A("div",null,[t[12]||(t[12]=g('<h1 id="form" tabindex="-1">Form <a class="header-anchor" href="#form" aria-label="Permalink to &quot;Form&quot;">​</a></h1><p>包含数据录入、校验以及对应样式。</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>基本的表单数据域控制展示，包含布局、初始化、验证、提交。数据验证采用 <a href="https://gitee.com/towardly/ph/wikis/utils/validator" target="_blank" rel="noreferrer">ph-utils/validator</a></p>',5)),e(b,null,{default:l(()=>[e(f,null,{preview:l(()=>[e(o(v),{model:o(u),rules:x},{default:l(()=>[e(o(a),{label:"用户名",name:"username"},{default:l(()=>[e(o(n),{placeholder:"请输入用户名",modelValue:o(u).username,"onUpdate:modelValue":t[0]||(t[0]=i=>o(u).username=i)},null,8,["modelValue"])]),_:1}),e(o(a),{label:"密码",required:"",name:"password"},{default:l(()=>[e(o(n),{placeholder:"请输入密码",modelValue:o(u).password,"onUpdate:modelValue":t[1]||(t[1]=i=>o(u).password=i)},null,8,["modelValue"])]),_:1}),e(o(a),{label:""},{default:l(()=>[e(o(h),{"html-type":"submit"},{default:l(()=>t[4]||(t[4]=[r("提交")])),_:1}),e(o(h),{type:"normal",onClick:k},{default:l(()=>t[5]||(t[5]=[r("重置")])),_:1})]),_:1})]),_:1},8,["model"])]),default:l(()=>[t[6]||(t[6]=d("textarea",{lang:"vue"},`  <script setup lang="ts">
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
  `,-1))]),_:1})]),_:1}),t[13]||(t[13]=d("h3",{id:"行内表单",tabindex:"-1"},[r("行内表单 "),d("a",{class:"header-anchor",href:"#行内表单","aria-label":'Permalink to "行内表单"'},"​")],-1)),t[14]||(t[14]=d("p",null,"当前表单较简单时，可以在一行内放置表单。",-1)),t[15]||(t[15]=d("p",null,[r("通过设置 "),d("code",null,"inline"),r(" 属性为 "),d("code",null,"true"),r(" 可以让表单域变为行内的表单域。")],-1)),e(b,null,{default:l(()=>[e(f,null,{preview:l(()=>[e(o(v),{inline:""},{default:l(()=>[e(o(a),{label:"用户名",name:"username"},{default:l(()=>[e(o(n),{placeholder:"请输入用户名"})]),_:1}),e(o(a),{label:"密码",name:"password"},{default:l(()=>[e(o(n),{placeholder:"请输入密码"})]),_:1}),e(o(a),{label:"用户名",name:"username"},{default:l(()=>[e(o(n),{placeholder:"请输入用户名"})]),_:1}),e(o(a),{label:"密码",name:"password"},{default:l(()=>[e(o(n),{placeholder:"请输入密码"})]),_:1}),e(o(a),null,{default:l(()=>[e(o(h),{"html-type":"submit"},{default:l(()=>t[7]||(t[7]=[r("提交")])),_:1})]),_:1})]),_:1})]),default:l(()=>[t[8]||(t[8]=d("textarea",{lang:"vue-html"},`  <nt-form inline>
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
  `,-1))]),_:1})]),_:1}),t[16]||(t[16]=d("h3",{id:"只使用-formitem",tabindex:"-1"},[r("只使用 FormItem "),d("a",{class:"header-anchor",href:"#只使用-formitem","aria-label":'Permalink to "只使用 FormItem"'},"​")],-1)),t[17]||(t[17]=d("p",null,[d("code",null,"FormItem"),r(" 可以不放在 "),d("code",null,"Form"),r(" 里面，从而进行单独使用。")],-1)),e(b,null,{default:l(()=>[e(f,null,{default:l(()=>t[9]||(t[9]=[d("textarea",{lang:"vue-html"},`  <nt-form-item label="开关">
    <nt-switch />
  </nt-form-item>
  `,-1)])),_:1})]),_:1}),t[18]||(t[18]=g('<h3 id="对齐方式" tabindex="-1">对齐方式 <a class="header-anchor" href="#对齐方式" aria-label="Permalink to &quot;对齐方式&quot;">​</a></h3><p>通过设置 <code>label-position</code> 来应用标签和内容的对齐方式。</p><p>您可以分别设置 <code>nt-form-item</code> 的 <code>label-position</code>. 如果值为空, 则会使用 <code>nt-form</code> 的 <code>label-position</code>。</p>',3)),e(b,null,{default:l(()=>[e(f,null,{preview:l(()=>[e(o(v),{"label-width":"120px","label-position":c.value},{default:l(()=>[e(o(a),{label:"FormAlign","label-position":s.value},{default:l(()=>[e(y,{modelValue:c.value,"onUpdate:modelValue":t[2]||(t[2]=i=>c.value=i)},{default:l(()=>[e(m,{label:"Left",value:"left",type:"button"}),e(m,{label:"Right",value:"right",type:"button"}),e(m,{label:"Top",value:"top",type:"button"})]),_:1},8,["modelValue"])]),_:1},8,["label-position"]),e(o(a),{label:"FormItemAlign","label-position":s.value},{default:l(()=>[e(y,{modelValue:p.value,"onUpdate:modelValue":t[3]||(t[3]=i=>p.value=i)},{default:l(()=>[e(m,{label:"Null",value:"null",type:"button"}),e(m,{label:"Left",value:"left",type:"button"}),e(m,{label:"Right",value:"right",type:"button"}),e(m,{label:"Top",value:"top",type:"button"})]),_:1},8,["modelValue"])]),_:1},8,["label-position"]),e(o(a),{label:"用户名","label-position":s.value},{default:l(()=>[e(o(n),{placeholder:"请输入用户名"})]),_:1},8,["label-position"]),e(o(a),{label:"密码","label-position":s.value},{default:l(()=>[e(o(n),{placeholder:"请输入密码"})]),_:1},8,["label-position"]),e(o(a),{label:"","label-position":s.value},{default:l(()=>[e(o(h),{"html-type":"submit"},{default:l(()=>t[10]||(t[10]=[r("提交")])),_:1})]),_:1},8,["label-position"])]),_:1},8,["label-position"])]),default:l(()=>[t[11]||(t[11]=d("textarea",{lang:"vue-html"},`  <nt-form label-position="right">
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
  `,-1))]),_:1})]),_:1}),t[19]||(t[19]=g('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="form-props" tabindex="-1">Form Props <a class="header-anchor" href="#form-props" aria-label="Permalink to &quot;Form Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>model</code></td><td>表单数据对象</td><td><code>Record&lt;string, any&gt;</code></td><td>-</td></tr><tr><td><code>rules</code></td><td>表单验证规则</td><td><code>FormRule[]</code></td><td>-</td></tr><tr><td><code>label-width</code></td><td>标签的长度，例如 <code>50px</code>。 作为 <code>Form</code> 直接子元素的 <code>form-item</code> 会继承该值。</td><td><code>string</code></td><td>-</td></tr><tr><td><code>label-position</code></td><td>标签的位置</td><td><code>left</code>、<code>right</code>、<code>top</code></td><td><code>right</code></td></tr></tbody></table><h3 id="form-events" tabindex="-1">Form Events <a class="header-anchor" href="#form-events" aria-label="Permalink to &quot;Form Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td><code>submit</code></td><td>提交表单时触发</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="formitem-props" tabindex="-1">FormItem Props <a class="header-anchor" href="#formitem-props" aria-label="Permalink to &quot;FormItem Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>label</code></td><td>标签文本</td><td><code>string</code></td><td>-</td></tr><tr><td><code>required</code></td><td>是否为必填项，如不设置，则会根据校验规则确认</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>name</code></td><td><code>model</code> 的键名; 使用表单校验时必填</td><td><code>string</code></td><td>-</td></tr><tr><td><code>label-width</code></td><td>标签宽度，例如 <code>50px</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>error</code></td><td>表单域验证错误时的提示信息。设置该值会导致表单验证状态变为 <code>error</code>，并显示该错误信息。</td><td><code>string</code></td><td>-</td></tr><tr><td><code>label-position</code></td><td>标签位置, <em>可选</em></td><td><code>left</code>、<code>right</code>、<code>top</code></td><td>-</td></tr></tbody></table>',7))])}}});export{z as __pageData,Z as default};
