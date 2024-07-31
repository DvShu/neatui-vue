# Form

包含数据录入、校验以及对应样式。

## 演示

<script setup lang="ts">
  import { reactive, watch, ref } from 'vue'
  import { FormItem, Input, Form, Button, useFormReset } from '../../src'

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
</script>

### 基础用法

基本的表单数据域控制展示，包含布局、初始化、验证、提交。数据验证采用 [ph-utils/validator](https://gitee.com/towardly/ph/wikis/utils/validator)

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
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
  </script>
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
  </textarea>
  <template #preview>
    <Form :model="formFields" :rules="rules">
      <FormItem label="用户名" name="username">
        <Input placeholder="请输入用户名" v-model="formFields.username"></Input>
      </FormItem>
      <FormItem label="密码" required name="password">
        <Input placeholder="请输入密码" v-model="formFields.password"></Input>
      </FormItem>
      <FormItem label="">
        <Button html-type="submit">提交</Button>
        <Button type="normal" @click="handleReset">重置</Button>
      </FormItem>
    </Form>
  </template>
  </CodePreview>
</ClientOnly>

### 行内表单

当前表单较简单时，可以在一行内放置表单。

通过设置 `inline` 属性为 `true` 可以让表单域变为行内的表单域。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
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
  </textarea>
  <template #preview>
    <Form inline>
      <FormItem label="用户名" name="username">
        <Input placeholder="请输入用户名"></Input>
      </FormItem>
      <FormItem label="密码" name="password">
        <Input placeholder="请输入密码"></Input>
      </FormItem>
      <FormItem label="用户名" name="username">
        <Input placeholder="请输入用户名"></Input>
      </FormItem>
      <FormItem label="密码" name="password">
        <Input placeholder="请输入密码"></Input>
      </FormItem>
      <FormItem>
        <Button html-type="submit">提交</Button>
      </FormItem>
    </Form>
  </template>
  </CodePreview>
</ClientOnly>

### 只使用 FormItem

`FormItem` 可以不放在 `Form` 里面，从而进行单独使用。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-form-item label="开关">
    <nt-switch />
  </nt-form-item>
  </textarea>
  </CodePreview>
</ClientOnly>`

## API

### Form Props

| 参数          | 说明                                                                        | 类型                  | 默认值 |
| ------------- | --------------------------------------------------------------------------- | --------------------- | ------ |
| `model`       | 表单数据对象                                                                | `Record<string, any>` | -      |
| `rules`       | 表单验证规则                                                                | `FormRule[]`          | -      |
| `label-width` | 标签的长度，例如 `50px`。 作为 `Form` 直接子元素的 `form-item` 会继承该值。 | `string`              | -      |

### Form Events

| 事件名   | 说明           | 类型         |
| -------- | -------------- | ------------ |
| `submit` | 提交表单时触发 | `() => void` |

### FormItem Props

| 参数          | 说明                                                                                   | 类型      | 默认值 |
| ------------- | -------------------------------------------------------------------------------------- | --------- | ------ |
| `label`       | 标签文本                                                                               | `string`  | -      |
| `required`    | 是否为必填项，如不设置，则会根据校验规则确认                                           | `boolean` | -      |
| `name`        | `model` 的键名; 使用表单校验时必填                                                     | `string`  | -      |
| `label-width` | 标签宽度，例如 `50px`                                                                  | `string`  | -      |
| `error`       | 表单域验证错误时的提示信息。设置该值会导致表单验证状态变为 `error`，并显示该错误信息。 | `string`  | -      |
