import{r as g,t as u,i as d,j as b,_ as E,h as w}from"./chunks/theme.BXlgI-md.js";import{e as k,c,l as e,w as a,ab as y,b as l,z as i,S as V,o as p,A as s,g as m,a as q}from"./chunks/framework.RALdISJs.js";const A=y("",7),C=l("textarea",{lang:"vue"},`
  <script setup>
    import { ref } from 'vue';
    const active = ref('1');
  <\/script>
  <template>
  <div class="nt-tabs">
    <nt-tabbar v-model="active" type="bar">
      <nt-tabbar-item name="1">标签一</nt-tabbar-item>
      <nt-tabbar-item name="2">标签二</nt-tabbar-item>
    </nt-tabbar>
    <div class="nt-tabs-content">
      <div v-if="active === '1'">标签一</div>
      <div v-if="active === '2'">标签二</div>
    </div>
  </div>
  </template>
  `,-1),x={class:"nt-tabs"},F={class:"nt-tabs-content"},D={key:0},S={key:1},$=y("",2),z=l("textarea",{lang:"vue"},`
  <script setup>
    const templateType = ref('login');
    const loginParams = ref({
      username: '',
      password: ''
    });
    const registParams = ref({
      username: '',
      password: '',
      password2: ''
    })
    const loginRules = [
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
    ];
    const registRules = [
      {
        key: 'username',
        rules: ['required'],
        message: '用户名不能为空'
      },
      {
        key: 'password',
        rules: [/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,15})$/],
        message: '密码为6~15位字母+数字'
      },
      {
        key: 'password2',
        rules: ['required', 'same:password'],
        message: '两次密码输入不一致'
      }
    ]
  <\/script>
  <template>
    <div class="login-form-wrapper">
      <div class="nt-tabs">
        <nt-tabbar v-model="templateType" type="bar" justify-content="space-evenly">
          <nt-tabbar-item name="login">登录</nt-tabbar-item>
          <nt-tabbar-item name="regist">注册</nt-tabbar-item>
        </nt-tabbar>
        <div class="nt-tabs-content">
          <!-- 登录 -->
          <nt-form v-if="templateType === 'login'" :model="loginParams" :rules="loginRules">
            <nt-form-item label="用户名" required name="username">
              <nt-input placeholder="请输入用户名" v-model="loginParams.username"></nt-input>
            </nt-form-item>
            <nt-form-item label="密码" required name="password">
              <nt-input placeholder="请输入密码" v-model="loginParams.password" html-type="password"></nt-input>
            </nt-form-item>
            <nt-form-item label="">
              <nt-button html-type="submit">提交</nt-button>
            </nt-form-item>
          </nt-form>
          <!-- 注册 -->
          <nt-form v-if="templateType === 'regist'" :model="registParams" :rules="registRules">
            <nt-form-item label="用户名" required name="username">
              <nt-input placeholder="请输入用户名" v-model="registParams.username"></nt-input>
            </nt-form-item>
            <nt-form-item label="密码" required name="password">
              <nt-input placeholder="请输入密码" v-model="registParams.password" html-type="password"></nt-input>
            </nt-form-item>
            <nt-form-item label="确认密码" required name="password2">
              <nt-input placeholder="再次输入密码" v-model="registParams.password2" html-type="password"></nt-input>
            </nt-form-item>
            <nt-form-item label="">
              <nt-button html-type="submit">提交</nt-button>
            </nt-form-item>
          </nt-form>
        </div>
      </div>
    </div>
  </template>
  `,-1),B={class:"login-form-wrapper"},N={class:"nt-tabs"},R={class:"nt-tabs-content"},U=l("h3",{id:"卡片风格",tabindex:"-1"},[i("卡片风格 "),l("a",{class:"header-anchor",href:"#卡片风格","aria-label":'Permalink to "卡片风格"'},"​")],-1),Z=l("p",null,[i("通过设置 "),l("code",null,"tabbar"),i(" 的 "),l("code",null,"type=card"),i(" 来使用卡片风格。")],-1),j=l("textarea",{lang:"vue"},`
  <script setup>
    import { ref } from 'vue';
    const active = ref('1');
  <\/script>
  <template>
  <div class="nt-tabs">
    <nt-tabbar v-model="active" type="card">
      <nt-tabbar-item name="1">标签一</nt-tabbar-item>
      <nt-tabbar-item name="2">标签二</nt-tabbar-item>
    </nt-tabbar>
    <div class="nt-tabs-content">
      <div v-if="active === '1'">标签一</div>
      <div v-if="active === '2'">标签二</div>
    </div>
  </div>
  </template>
  `,-1),I={class:"nt-tabs"},O={class:"nt-tabs-content"},J={key:0},G={key:1},H=y("",2),X=JSON.parse('{"title":"Tabs 标签页","description":"","frontmatter":{},"headers":[],"relativePath":"components/tabs.md","filePath":"components/tabs.md","lastUpdated":1719815324000}'),K={name:"components/tabs.md"},Y=Object.assign(K,{setup(L){const r=k("1"),v=k("login"),h=k({username:"",password:""}),o=k({username:"",password:"",password2:""}),P=[{key:"username",rules:["required"],message:"用户名不能为空"},{key:"password",rules:[/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,15})$/],message:"密码为6~15位字母+数字"}],T=[{key:"username",rules:["required"],message:"用户名不能为空"},{key:"password",rules:[/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,15})$/],message:"密码为6~15位字母+数字"},{key:"password2",rules:["required","same:password"],message:"两次密码输入不一致"}];return(M,t)=>{const _=V("CodePreview"),f=V("ClientOnly");return p(),c("div",null,[A,e(f,null,{default:a(()=>[e(_,null,{preview:a(()=>[l("div",x,[e(s(g),{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=n=>r.value=n),type:"bar"},{default:a(()=>[e(s(u),{name:"1"},{default:a(()=>[i("标签一")]),_:1}),e(s(u),{name:"2"},{default:a(()=>[i("标签二")]),_:1})]),_:1},8,["modelValue"]),l("div",F,[r.value==="1"?(p(),c("div",D,"标签一")):m("",!0),r.value==="2"?(p(),c("div",S,"标签二")):m("",!0)])])]),default:a(()=>[C]),_:1})]),_:1}),$,e(f,null,{default:a(()=>[e(_,null,{preview:a(()=>[l("div",B,[l("div",N,[e(s(g),{modelValue:v.value,"onUpdate:modelValue":t[1]||(t[1]=n=>v.value=n),type:"bar","justify-content":"space-evenly"},{default:a(()=>[e(s(u),{name:"login"},{default:a(()=>[i("登录")]),_:1}),e(s(u),{name:"regist"},{default:a(()=>[i("注册")]),_:1})]),_:1},8,["modelValue"]),l("div",R,[v.value==="login"?(p(),q(s(w),{key:0,model:h.value,rules:P},{default:a(()=>[e(s(d),{label:"用户名",required:"",name:"username"},{default:a(()=>[e(s(b),{placeholder:"请输入用户名",modelValue:h.value.username,"onUpdate:modelValue":t[2]||(t[2]=n=>h.value.username=n)},null,8,["modelValue"])]),_:1}),e(s(d),{label:"密码",required:"",name:"password"},{default:a(()=>[e(s(b),{placeholder:"请输入密码",modelValue:h.value.password,"onUpdate:modelValue":t[3]||(t[3]=n=>h.value.password=n),"html-type":"password"},null,8,["modelValue"])]),_:1}),e(s(d),{label:""},{default:a(()=>[e(s(E),{"html-type":"submit"},{default:a(()=>[i("提交")]),_:1})]),_:1})]),_:1},8,["model"])):m("",!0),v.value==="regist"?(p(),q(s(w),{key:1,model:o.value,rules:T},{default:a(()=>[e(s(d),{label:"用户名",required:"",name:"username"},{default:a(()=>[e(s(b),{placeholder:"请输入用户名",modelValue:o.value.username,"onUpdate:modelValue":t[4]||(t[4]=n=>o.value.username=n)},null,8,["modelValue"])]),_:1}),e(s(d),{label:"密码",required:"",name:"password"},{default:a(()=>[e(s(b),{placeholder:"请输入密码",modelValue:o.value.password,"onUpdate:modelValue":t[5]||(t[5]=n=>o.value.password=n),"html-type":"password"},null,8,["modelValue"])]),_:1}),e(s(d),{label:"确认密码",required:"",name:"password2"},{default:a(()=>[e(s(b),{placeholder:"再次输入密码",modelValue:o.value.password2,"onUpdate:modelValue":t[6]||(t[6]=n=>o.value.password2=n),"html-type":"password"},null,8,["modelValue"])]),_:1}),e(s(d),{label:""},{default:a(()=>[e(s(E),{"html-type":"submit"},{default:a(()=>[i("提交")]),_:1})]),_:1})]),_:1},8,["model"])):m("",!0)])])])]),default:a(()=>[z]),_:1})]),_:1}),U,Z,e(f,null,{default:a(()=>[e(_,null,{preview:a(()=>[l("div",I,[e(s(g),{modelValue:r.value,"onUpdate:modelValue":t[7]||(t[7]=n=>r.value=n),type:"card"},{default:a(()=>[e(s(u),{name:"1"},{default:a(()=>[i("标签一")]),_:1}),e(s(u),{name:"2"},{default:a(()=>[i("标签二")]),_:1})]),_:1},8,["modelValue"]),l("div",O,[r.value==="1"?(p(),c("div",J,"标签一")):m("",!0),r.value==="2"?(p(),c("div",G,"标签二")):m("",!0)])])]),default:a(()=>[j]),_:1})]),_:1}),H])}}});export{X as __pageData,Y as default};
