# Radio 单选框

在一组备选项中进行单选

## 演示

<script setup>
  import { ref } from 'vue'
  import { Radio, RadioGroup, Button } from '../../src'

  const sex = ref('0')

  const allowService = ref(false)
</script>

### 基础用法

当只有一个选项时，可以直接通过 `v-model` 绑定一个 `boolean` 值来控制是否选中；使用 `slot-default` 来重写选项的文字。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
    import { ref } from 'vue';
    const allowService = ref(false);
  </script>
  <template>
    <lt-radio v-model="allowService">
      <span>
        <span>同意</span>
        <a href='#'>隐私协议</a>
      </span>
    </lt-radio>
  </template>
  </textarea>
  <template #preview>
    <Radio v-model="allowService">
      <span>
        <span>同意</span>
        <a href='#'>隐私协议</a>
      </span>
    </Radio>
  </template>
  </CodePreview>
</ClientOnly>

### 禁用状态

设置 `disabled` 属性即可。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <lt-radio label="禁用" disabled></lt-radio>
  </textarea>
  <template #preview>
    <Radio label="禁用" disabled />
  </template>
  </CodePreview>
</ClientOnly>

### 单选框组

结合 `nt-radio-group` 组件实现单选框组

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <script setup>
    import { ref } from 'vue';
    const sex = ref('0');
  </script>
  <template>
    <lt-radio-group v-model="sex">
      <lt-radio label="男" value="0" />
      <lt-radio label="女" value="1" />
    </lt-radio-group>
  </template>
  </textarea>
  <template #preview>
    <RadioGroup v-model="sex">
      <Radio label="男" value="0" />
      <Radio label="女" value="1" />
    </RadioGroup>
  </template>
  </CodePreview>
</ClientOnly>

### 按钮样式

在单选框组基础上，设置 `nt-radio` 的 `type` 属性为 `button` 即可。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <template>
    <lt-radio-group v-model="sex">
      <lt-radio label="男" value="0" type="button" />
      <lt-radio label="女" value="1" type="button" />
    </lt-radio-group>
  </template>
  </textarea>
  <template #preview>
    <RadioGroup v-model="sex">
      <Radio label="男" value="0" type="button" />
      <Radio label="女" value="1" type="button" />
    </RadioGroup>
  </template>
  </CodePreview>
</ClientOnly>

## API

### Radio Props

| 参数                    | 说明               | 类型      | 默认值  |
| ----------------------- | ------------------ | --------- | ------- |
| `model-value / v-model` | 是否选中           | `boolean` | x       |
| `name`                  | 原生 `name` 属性   | `string`  | -       |
| `disabled`              | 是否禁用           | `boolean` | `false` |
| `value`                 | 原生 `value` 属性  | `string`  | -       |
| `label`                 | 显示的标签         | `string`  | -       |
| `type`                  | 是否设置为按钮风格 | `button`  | -       |
| `checked`               | 是否选中           | `boolean` | -       |

### RadioGroup Props

| 参数                    | 说明           | 类型     | 默认值 |
| ----------------------- | -------------- | -------- | ------ |
| `model-value / v-model` | 选中项绑定的值 | `string` | -      |

### Radio Events

| 事件     | 说明             | 参数                         |
| -------- | ---------------- | ---------------------------- |
| `change` | 选中项变化时触发 | `(checked: boolean) => void` |

### RadioGroup Events

| 事件     | 说明             | 参数                             |
| -------- | ---------------- | -------------------------------- |
| `change` | 选中项变化时触发 | `(checkedValue: string) => void` |

### Radio Slots

| 名称      | 说明                |
| --------- | ------------------- |
| `default` | 自定义 `label` 内容 |
