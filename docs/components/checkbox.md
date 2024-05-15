# Checkbox 复选框

在一组备选项中进行多选。适用提醒用户勾选场景，突出多选框选项，可以有效增加用户识别度。

## 演示

<script setup lang="ts">
  import { ref } from 'vue'
  import { Checkbox, CheckboxGroup } from '../../src'

  const cities= [['CD', '成都'], ['BJ', '北京'], ['SZ', '深圳'], ['HZ', '杭州']]

  const checkedCities = ref(['CD', 'SZ'])
  const checkAll = ref(false)
  const isIndeterminate = ref(true)

  function handleCheckAllChange(val: boolean) {
    checkedCities.value = val ? cities.map(c => c[0]) : []
    isIndeterminate.value = false
  }
  function handleGroupChange(val: string[]) {
    const checkedCount = val.length
    checkAll.value = checkedCount === cities.length
    isIndeterminate.value = checkedCount < cities.length
  }
</script>

### 基础用法

单独使用可以表示两种状态之间的切换；在 `nt-checkbox` 元素中定义 `v-model` 绑定变量，单一的 `checkbox` 中，默认绑定变量的值会是 `Boolean`，选中为 `true`。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-checkbox label="Option1"></nt-checkbox>
  </textarea>
  </CodePreview>
</ClientOnly>

### 禁用状态

多选框不可用状态, 设置 `disabled` 属性即可。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-checkbox label="Option1" disabled></nt-checkbox>
  </textarea>
  </CodePreview>
</ClientOnly>

### 选项框组

使用 `nt-checkbox-group` 元素来包裹 `nt-checkbox` 元素，实现复选框组。使用时需要给 `nt-checkbox` 传递 `value` 属性。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
    import { ref } from 'vue';
    const cities= [['CD', '成都'], ['BJ', '北京'], ['SZ', '深圳'], ['HZ', '杭州']];
    const checkedCities = ref(['CD', 'SZ']);
  </script>
  <template>
    <nt-checkbox-group v-model="checkedCities">
      <nt-checkbox v-for="city in cities" :key="city[0]" :value="city[0]" :label="city[1]"></nt-checkbox>
    </nt-checkbox-group>
  </template>
  </textarea>
  <template #preview>
    <CheckboxGroup v-model="checkedCities">
      <Checkbox v-for="city in cities" :key="city[0]" :value="city[0]" :label="city[1]"></Checkbox>
    </CheckboxGroup>
  </template>
  </CodePreview>
</ClientOnly>

### 中间状态

设置 `indeterminate` 属性，表示不确定状态，一般用于实现全选的效果，实现部分选中的状态。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
    import { ref } from 'vue';
    import { Checkbox, CheckboxGroup } from '../../src';
    const cities= [['CD', '成都'], ['BJ', '北京'], ['SZ', '深圳'], ['HZ', '杭州']];
    const checkedCities = ref(['CD', 'SZ']);
    const checkAll = ref(false);
    const isIndeterminate = ref(true);
    function handleCheckAllChange(val: boolean) {
      checkedCities.value = val ? cities.map(c => c[0]) : [];
      isIndeterminate.value = false;
    }
    function handleGroupChange(val: string[]) {
      const checkedCount = val.length;
      checkAll.value = checkedCount === cities.length;
      isIndeterminate.value = checkedCount < cities.length;
    }
  </script>
  <template>
    <nt-checkbox
      v-model="checkAll"
      label="全选"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
    />
    <nt-checkbox-group
      v-model="checkedCities"
      @change="handleGroupChange"
    >
      <nt-checkbox
        v-for="city in cities"
        :key="city[0]"
        :value="city[0]"
        :label="city[1]"
      ></nt-checkbox>
    </nt-checkbox-group>
  </template>
  </textarea>
  <template #preview>
    <Checkbox
      v-model="checkAll"
      label="全选"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
    />
    <CheckboxGroup
      v-model="checkedCities"
      @change="handleGroupChange"
    >
      <Checkbox
        v-for="city in cities"
        :key="city[0]"
        :value="city[0]"
        :label="city[1]"
      ></Checkbox>
    </CheckboxGroup>
  </template>
  </CodePreview>
</ClientOnly>

## API

### Checkbox Props

| 参数                    | 说明                           | 类型      | 默认值  |
| ----------------------- | ------------------------------ | --------- | ------- |
| `model-value / v-model` | 选中项绑定的值                 | `boolean` | -       |
| `indeterminate`         | 设置不确定状态，仅负责样式控制 | `boolean` | `false` |
| `name`                  | 原生 `name` 属性               | `string`  | -       |
| `disabled`              | 是否禁用                       | `boolean` | `false` |
| `value`                 | 原生 `value` 属性              | `string`  | -       |
| `label`                 | 显示的标签                     | `string`  | -       |

### CheckboxGroup Props

| 参数                    | 说明           | 类型       | 默认值 |
| ----------------------- | -------------- | ---------- | ------ |
| `model-value / v-model` | 选中项绑定的值 | `string[]` | -      |

### Checkbox Events

| 事件     | 说明             | 参数                         |
| -------- | ---------------- | ---------------------------- |
| `change` | 选中项变化时触发 | `(checked: boolean) => void` |

### CheckboxGroup Events

| 事件     | 说明             | 参数                            |
| -------- | ---------------- | ------------------------------- |
| `change` | 选中项变化时触发 | `(checkList: string[]) => void` |
