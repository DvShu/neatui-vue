import{I as c,J as u,l as d,m as h,_ as w,k as q}from"./chunks/theme.D9bEuVpp.js";import{f,c as v,af as E,l as a,w as s,b as l,P as i,$ as V,o as p,u as t,k as m,a as _}from"./chunks/framework.BMugtFyW.js";const x={class:"nt-tabs"},C={class:"nt-tabs-content"},F={key:0},$={key:1},D={class:"login-form-wrapper"},T={class:"nt-tabs"},B={class:"nt-tabs-content"},U={class:"nt-tabs"},z={class:"nt-tabs-content"},Z={key:0},N={key:1},I=JSON.parse('{"title":"Tabs 标签页","description":"","frontmatter":{},"headers":[],"relativePath":"components/tabs.md","filePath":"components/tabs.md","lastUpdated":1720107457000}'),R={name:"components/tabs.md"},G=Object.assign(R,{setup(j){const r=f("1"),k=f("login"),b=f({username:"",password:""}),o=f({username:"",password:"",password2:""}),P=[{key:"username",rules:["required"],message:"用户名不能为空"},{key:"password",rules:[/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,15})$/],message:"密码为6~15位字母+数字"}],A=[{key:"username",rules:["required"],message:"用户名不能为空"},{key:"password",rules:[/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,15})$/],message:"密码为6~15位字母+数字"},{key:"password2",rules:["required","same:password"],message:"两次密码输入不一致"}];return(O,e)=>{const g=V("CodePreview"),y=V("ClientOnly");return p(),v("div",null,[e[19]||(e[19]=E('<h1 id="tabs-标签页" tabindex="-1">Tabs 标签页 <a class="header-anchor" href="#tabs-标签页" aria-label="Permalink to &quot;Tabs 标签页&quot;">​</a></h1><p>选项卡切换组件；其实这个模块的内容就是 <a href="/neatui-vue/components/tabbar">Tabbar 标签栏</a> + 内容区域；所以就没有单独抽取为组件，转而提供 <code>css</code> 样式表，通过手动引入样式就能达到效果。</p><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@asteres/neatui-vue/style/util/tabs.css&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>基础的、简洁的标签页。</p>',7)),a(y,null,{default:s(()=>[a(g,null,{preview:s(()=>[l("div",x,[a(t(c),{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=n=>r.value=n),type:"bar"},{default:s(()=>[a(t(u),{name:"1"},{default:s(()=>e[8]||(e[8]=[i("标签一")])),_:1}),a(t(u),{name:"2"},{default:s(()=>e[9]||(e[9]=[i("标签二")])),_:1})]),_:1},8,["modelValue"]),l("div",C,[r.value==="1"?(p(),v("div",F,"标签一")):m("",!0),r.value==="2"?(p(),v("div",$,"标签二")):m("",!0)])])]),default:s(()=>[e[10]||(e[10]=l("textarea",{lang:"vue"},`  <script setup>
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
  `,-1))]),_:1})]),_:1}),e[20]||(e[20]=E('<h3 id="简单登录注册" tabindex="-1">简单登录注册 <a class="header-anchor" href="#简单登录注册" aria-label="Permalink to &quot;简单登录注册&quot;">​</a></h3><p>通过组件搭配: <a href="/neatui-vue/components/form">form 表单</a>、<a href="/neatui-vue/components/input">input 输入框</a>、<a href="/neatui-vue/components/button">button 按钮</a>、<a href="/neatui-vue/components/tabbar">tabbar 选项卡</a> 等组件，实现简单的登录注册。</p>',2)),a(y,null,{default:s(()=>[a(g,null,{preview:s(()=>[l("div",D,[l("div",T,[a(t(c),{modelValue:k.value,"onUpdate:modelValue":e[1]||(e[1]=n=>k.value=n),type:"bar","justify-content":"space-evenly"},{default:s(()=>[a(t(u),{name:"login"},{default:s(()=>e[11]||(e[11]=[i("登录")])),_:1}),a(t(u),{name:"regist"},{default:s(()=>e[12]||(e[12]=[i("注册")])),_:1})]),_:1},8,["modelValue"]),l("div",B,[k.value==="login"?(p(),_(t(q),{key:0,model:b.value,rules:P},{default:s(()=>[a(t(d),{label:"用户名",required:"",name:"username"},{default:s(()=>[a(t(h),{placeholder:"请输入用户名",modelValue:b.value.username,"onUpdate:modelValue":e[2]||(e[2]=n=>b.value.username=n)},null,8,["modelValue"])]),_:1}),a(t(d),{label:"密码",required:"",name:"password"},{default:s(()=>[a(t(h),{placeholder:"请输入密码",modelValue:b.value.password,"onUpdate:modelValue":e[3]||(e[3]=n=>b.value.password=n),"html-type":"password"},null,8,["modelValue"])]),_:1}),a(t(d),{label:""},{default:s(()=>[a(t(w),{"html-type":"submit"},{default:s(()=>e[13]||(e[13]=[i("提交")])),_:1})]),_:1})]),_:1},8,["model"])):m("",!0),k.value==="regist"?(p(),_(t(q),{key:1,model:o.value,rules:A},{default:s(()=>[a(t(d),{label:"用户名",required:"",name:"username"},{default:s(()=>[a(t(h),{placeholder:"请输入用户名",modelValue:o.value.username,"onUpdate:modelValue":e[4]||(e[4]=n=>o.value.username=n)},null,8,["modelValue"])]),_:1}),a(t(d),{label:"密码",required:"",name:"password"},{default:s(()=>[a(t(h),{placeholder:"请输入密码",modelValue:o.value.password,"onUpdate:modelValue":e[5]||(e[5]=n=>o.value.password=n),"html-type":"password"},null,8,["modelValue"])]),_:1}),a(t(d),{label:"确认密码",required:"",name:"password2"},{default:s(()=>[a(t(h),{placeholder:"再次输入密码",modelValue:o.value.password2,"onUpdate:modelValue":e[6]||(e[6]=n=>o.value.password2=n),"html-type":"password"},null,8,["modelValue"])]),_:1}),a(t(d),{label:""},{default:s(()=>[a(t(w),{"html-type":"submit"},{default:s(()=>e[14]||(e[14]=[i("提交")])),_:1})]),_:1})]),_:1},8,["model"])):m("",!0)])])])]),default:s(()=>[e[15]||(e[15]=l("textarea",{lang:"vue"},`  <script setup>
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
  `,-1))]),_:1})]),_:1}),e[21]||(e[21]=l("h3",{id:"卡片风格",tabindex:"-1"},[i("卡片风格 "),l("a",{class:"header-anchor",href:"#卡片风格","aria-label":'Permalink to "卡片风格"'},"​")],-1)),e[22]||(e[22]=l("p",null,[i("通过设置 "),l("code",null,"tabbar"),i(" 的 "),l("code",null,"type=card"),i(" 来使用卡片风格。")],-1)),a(y,null,{default:s(()=>[a(g,null,{preview:s(()=>[l("div",U,[a(t(c),{modelValue:r.value,"onUpdate:modelValue":e[7]||(e[7]=n=>r.value=n),type:"card"},{default:s(()=>[a(t(u),{name:"1"},{default:s(()=>e[16]||(e[16]=[i("标签一")])),_:1}),a(t(u),{name:"2"},{default:s(()=>e[17]||(e[17]=[i("标签二")])),_:1})]),_:1},8,["modelValue"]),l("div",z,[r.value==="1"?(p(),v("div",Z,"标签一")):m("",!0),r.value==="2"?(p(),v("div",N,"标签二")):m("",!0)])])]),default:s(()=>[e[18]||(e[18]=l("textarea",{lang:"vue"},`  <script setup>
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
  `,-1))]),_:1})]),_:1}),e[23]||(e[23]=E(`<h2 id="基本结构" tabindex="-1">基本结构 <a class="header-anchor" href="#基本结构" aria-label="Permalink to &quot;基本结构&quot;">​</a></h2><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nt-tabs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">nt-tabbar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">nt-tabbar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nt-tabs-content&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- 内容区域--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,2))])}}});export{I as __pageData,G as default};
