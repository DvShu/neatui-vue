# DatePickerOri

对于原生 `date`、`time`、`datetime-local` 的封装。

## 演示

<script setup>
  import { ref } from 'vue'
  import { DatePickerOri } from "../../src"

  const date = ref('')
  const time = ref('')
  const datetime = ref('')
</script>

### 基础用法

通过 `type` 属性来指定日期选择器的类型。可选值有: `date`、`time`、`datetime`。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
    import { ref } from 'vue'
    //-
    const date = ref('')
    const time = ref('')
    const datetime = ref('')
  </script>
  <template>
    <nt-date-picker-ori v-model="date" type="date" null-default="current"></nt-date-picker-ori>
    <nt-date-picker-ori v-model="time" type="time" class="ml-10" null-default="current"></nt-date-picker-ori>
    <nt-date-picker-ori v-model="datetime" type="datetime" class="ml-10" null-default="current"></nt-date-picker-ori>
  </template>
  </textarea>
  <template #preview>
    <DatePickerOri v-model="date" type="date" null-default="current"></DatePickerOri>
    <DatePickerOri v-model="time" type="time" class="ml-10" null-default="current"></DatePickerOri>
    <DatePickerOri v-model="datetime" type="datetime" class="ml-10" null-default="current"></DatePickerOri>
  </template>
  </CodePreview>
</ClientOnly>

## API

### DatePicker Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 绑定值 | `string` | - |
| `type` | 选择器类型 | `date`、`time`、`datetime` | `date` |
| `null-default` | 默认值, 如果设置为: `current` 则表明默认为当前时间 | `string` | `current` |
| `min` | 最小可选日期 | `string` | - |
| `max` | 最大可选日期 | `string` | - |
