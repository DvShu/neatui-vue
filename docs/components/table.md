# Table 表格

用于展示大量结构化数据

## 演示

<script setup>
  import { h } from 'vue'
  import { Table, Button } from '../../src'

  const dataSource1 = [
    {
      id: 1,
      name: '张三',
      age: 18,
      address: '北京朝阳',
    },
    {
      id: 2,
      name: '李四',
      age: 19,
      address: '北京朝阳',
    },
    {
      id: 3,
      name: '王五',
      age: 20,
      address: '北京朝阳',
    },
  ]

  const columns1 = [{
    title: '姓名',
    key: 'name'
  }, {
    title: '年龄',
    key: 'age'
  }, {
    title: '住址',
    key: 'address'
  }, {
    title: '操作',
    key: 'action',
    render: () => [
      h(Button, { type: 'text' }, { default: () => '编辑'}),
      h(Button, { type: 'text' }, { default: () => '删除'})
    ]
  }]
</script>

### 基础表格

通过 `data` 定义数据源, 通过 `columns` 定义列，最后一列为各种操作

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
    import { h } from 'vue';
    const dataSource = [
      {
        id: 1,
        name: '张三',
        age: 18,
        address: '北京朝阳',
      },
      {
        id: 2,
        name: '李四',
        age: 19,
        address: '北京朝阳',
      },
      {
        id: 3,
        name: '王五',
        age: 20,
        address: '北京朝阳',
      },
    ]
    const columns = [{
      title: '姓名',
      key: 'name'
    }, {
      title: '年龄',
      key: 'age'
    }, {
      title: '住址',
      key: 'address'
    }, {
      title: '操作',
      key: 'action',
      render: () => [
        h(Button, { type: 'text' }, { default: () => '编辑'}),
        h(Button, { type: 'text' }, { default: () => '删除'})
      ]
    }]
  </script>
  <template>
    <nt-table :data="dataSource1" :columns="columns1"></nt-table>
  </template>
  </textarea>
  <template #preview>
    <Table :data="dataSource1" :columns="columns1"></Table>
  </template>
  </CodePreview>
</ClientOnly>
