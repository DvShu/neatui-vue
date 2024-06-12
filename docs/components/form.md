# Form

包含数据录入、校验以及对应样式。

## 演示

<script setup lang="ts">
  import { reactive, watch } from 'vue'
  import { FormItem, Input, Form, Button } from '../../src'

  const formData = reactive({
    /** 用户名 */
    username: '',
    /** 密码 */
    password: ''
  })

</script>

### 基础用法

基本的表单数据域控制展示，包含布局、初始化、验证、提交。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
  </script>
  <template>
  </template>
  </textarea>
  <template #preview>
    <Form :model="formData">
      <FormItem label="用户名" required prop="username">
        <Input placeholder="请输入用户名" v-model="formData.username"></Input>
      </FormItem>
      <FormItem label="密码" required>
        <Input placeholder="请输入密码" v-model="formData.password"></Input>
      </FormItem>
      <FormItem>
        <Button html-type="submit">提交</Button>
      </FormItem>
    </Form>
  </template>
  </CodePreview>
</ClientOnly>

基础用法

## API

### Form Props

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| x    | x    | x    | x      |
