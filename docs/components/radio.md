# Radio 单选框

在一组备选项中进行单选

## 演示

<script setup>
  import { ref } from 'vue'
  import { Radio, RadioGroup } from '../../src'

  const sex = ref(0)
</script>

<RadioGroup v-model="sex">
  <Radio label="男" :value="0" />
  <Radio label="女" :value="1" />
</RadioGroup>
### 基础用法

基础用法

## API

### Radio Props

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| x    | x    | x    | x      |
