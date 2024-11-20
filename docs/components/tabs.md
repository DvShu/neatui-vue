# Tabs 标签页

选项卡切换组件；其实这个模块的内容就是 [Tabbar 标签栏](/components/tabbar) + 内容区域；所以就没有单独抽取为组件，转而提供 `css` 样式表，通过手动引入样式就能达到效果。

## 引入

```js
import 'litos-ui-vue/style/util/tabs.css';
```

## 演示

<script setup>
import { ref } from 'vue';
import { Tabbar, TabbarItem, Form, FormItem, Input, Button } from '../../src'

const active = ref('1');

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
</script>

### 基础用法

基础的、简洁的标签页。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
    import { ref } from 'vue';
    const active = ref('1');
  </script>
  <template>
  <div class="nt-tabs">
    <lt-tabbar v-model="active" type="bar">
      <lt-tabbar-item name="1">标签一</lt-tabbar-item>
      <lt-tabbar-item name="2">标签二</lt-tabbar-item>
    </lt-tabbar>
    <div class="nt-tabs-content">
      <div v-if="active === '1'">标签一</div>
      <div v-if="active === '2'">标签二</div>
    </div>
  </div>
  </template>
  </textarea>
  <template #preview>
  <div class="nt-tabs">
    <Tabbar v-model="active" type="bar">
      <TabbarItem name="1">标签一</TabbarItem>
      <TabbarItem name="2">标签二</TabbarItem>
    </Tabbar>
    <div class="nt-tabs-content">
      <div v-if="active === '1'">标签一</div>
      <div v-if="active === '2'">标签二</div>
    </div>
  </div>
  </template>
  </CodePreview>
</ClientOnly>

### 简单登录注册

通过组件搭配: [form 表单](/components/form)、[input 输入框](/components/input)、[button 按钮](/components/button)、[tabbar 选项卡](/components/tabbar) 等组件，实现简单的登录注册。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
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
  </script>
  <template>
    <div class="login-form-wrapper">
      <div class="nt-tabs">
        <lt-tabbar v-model="templateType" type="bar" justify-content="space-evenly">
          <lt-tabbar-item name="login">登录</lt-tabbar-item>
          <lt-tabbar-item name="regist">注册</lt-tabbar-item>
        </lt-tabbar>
        <div class="nt-tabs-content">
          <!-- 登录 -->
          <lt-form v-if="templateType === 'login'" :model="loginParams" :rules="loginRules">
            <lt-form-item label="用户名" required name="username">
              <lt-input placeholder="请输入用户名" v-model="loginParams.username"></lt-input>
            </lt-form-item>
            <lt-form-item label="密码" required name="password">
              <lt-input placeholder="请输入密码" v-model="loginParams.password" html-type="password"></lt-input>
            </lt-form-item>
            <lt-form-item label="">
              <lt-button html-type="submit">提交</lt-button>
            </lt-form-item>
          </lt-form>
          <!-- 注册 -->
          <lt-form v-if="templateType === 'regist'" :model="registParams" :rules="registRules">
            <lt-form-item label="用户名" required name="username">
              <lt-input placeholder="请输入用户名" v-model="registParams.username"></lt-input>
            </lt-form-item>
            <lt-form-item label="密码" required name="password">
              <lt-input placeholder="请输入密码" v-model="registParams.password" html-type="password"></lt-input>
            </lt-form-item>
            <lt-form-item label="确认密码" required name="password2">
              <lt-input placeholder="再次输入密码" v-model="registParams.password2" html-type="password"></lt-input>
            </lt-form-item>
            <lt-form-item label="">
              <lt-button html-type="submit">提交</lt-button>
            </lt-form-item>
          </lt-form>
        </div>
      </div>
    </div>
  </template>
  </textarea>
  <template #preview>
    <div class="login-form-wrapper">
      <div class="nt-tabs">
        <Tabbar v-model="templateType" type="bar" justify-content="space-evenly">
          <TabbarItem name="login">登录</TabbarItem>
          <TabbarItem name="regist">注册</TabbarItem>
        </Tabbar>
        <div class="nt-tabs-content">
          <!-- 登录 -->
          <Form v-if="templateType === 'login'" :model="loginParams" :rules="loginRules">
            <FormItem label="用户名" required name="username">
              <Input placeholder="请输入用户名" v-model="loginParams.username"></Input>
            </FormItem>
            <FormItem label="密码" required name="password">
              <Input placeholder="请输入密码" v-model="loginParams.password" html-type="password"></Input>
            </FormItem>
            <FormItem label="">
              <Button html-type="submit">提交</Button>
            </FormItem>
          </Form>
          <!-- 注册 -->
          <Form v-if="templateType === 'regist'" :model="registParams" :rules="registRules">
            <FormItem label="用户名" required name="username">
              <Input placeholder="请输入用户名" v-model="registParams.username"></Input>
            </FormItem>
            <FormItem label="密码" required name="password">
              <Input placeholder="请输入密码" v-model="registParams.password" html-type="password"></Input>
            </FormItem>
            <FormItem label="确认密码" required name="password2">
              <Input placeholder="再次输入密码" v-model="registParams.password2" html-type="password"></Input>
            </FormItem>
            <FormItem label="">
              <Button html-type="submit">提交</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
  </template>
  </CodePreview>
</ClientOnly>

### 卡片风格

通过设置 `tabbar` 的 `type=card` 来使用卡片风格。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
    import { ref } from 'vue';
    const active = ref('1');
  </script>
  <template>
  <div class="nt-tabs">
    <lt-tabbar v-model="active" type="card">
      <lt-tabbar-item name="1">标签一</lt-tabbar-item>
      <lt-tabbar-item name="2">标签二</lt-tabbar-item>
    </lt-tabbar>
    <div class="nt-tabs-content">
      <div v-if="active === '1'">标签一</div>
      <div v-if="active === '2'">标签二</div>
    </div>
  </div>
  </template>
  </textarea>
  <template #preview>
  <div class="nt-tabs">
    <Tabbar v-model="active" type="card">
      <TabbarItem name="1">标签一</TabbarItem>
      <TabbarItem name="2">标签二</TabbarItem>
    </Tabbar>
    <div class="nt-tabs-content">
      <div v-if="active === '1'">标签一</div>
      <div v-if="active === '2'">标签二</div>
    </div>
  </div>
  </template>
  </CodePreview>
</ClientOnly>

## 基本结构

```html
<div class="nt-tabs">
  <lt-tabbar></lt-tabbar>
  <div class="nt-tabs-content">
    <!-- 内容区域-->
  </div>
</div>
```
