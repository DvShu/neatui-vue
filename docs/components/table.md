# Table 表格

用于展示大量结构化数据

这个表格只是一个简单的数据展示功能，只包含有固定表头和列、排序功能。如果当前组件不能满足需求需要使用更多功能的时候，可以考虑使用 [TanstackTable](/components/tanstacktable)

## 演示

<script setup>
  import { h, ref } from 'vue'
  import { Table, Button, Input } from '../../src'

  const dataSource1 = [
    {
      name: '李四',
      age: 19,
      address: '北京朝阳',

    },
    {
      name: '张三',
      age: 18,
      address: '北京朝阳',
    },
    {
      name: '王五',
      age: 20,
      address: '北京朝阳',
    },
  ]

  const dataSource2 = [
    {
      name: '张三',
      age: 18,
      address: '北京朝阳',
    },
    {
      name: '李四',
      age: 19,
      address: '北京朝阳',
    },
    {
      name: '王五',
      age: 20,
      address: '北京朝阳',
    },
    {
      name: '张三',
      age: 18,
      address: '北京朝阳',
    },
    {
      name: '李四',
      age: 19,
      address: '北京朝阳',
    },
    {
      name: '王五',
      age: 20,
      address: '北京朝阳',
    },
    {
      name: '张三',
      age: 18,
      address: '北京朝阳',
    },
    {
      name: '李四',
      age: 19,
      address: '北京朝阳',
    },
    {
      name: '王五',
      age: 20,
      address: '北京朝阳',
    },
  ]

  const dataSource3 = [
    {
      name: '李四',
      age: 19,
      address: '北京朝阳',
    },
    {
      name: '李四',
      age: 19,
      address: '北京西城',
    },
    {
      name: '王五',
      age: 18,
      address: '北京朝阳',
    },
    {
      name: '张三',
      age: 20,
      address: '北京朝阳',
    },
  ]

   const dataSource4 = ref([
    {
      name: '李四',
      age: 19,
      address: '北京朝阳',
    },
    {
      name: '张三',
      age: 18,
      address: '北京朝阳',
    },
    {
      name: '王五',
      age: 20,
      address: '北京朝阳',
    },
  ])

  const columns1 = [{
    title: '姓名',
    key: 'name',
  }, {
    title: '年龄',
    key: 'age',
  }, {
    title: '住址',
    key: 'address'
  }, {
    title: '操作',
    key: 'action',
    render: () => [
      h(Button, { type: 'primary', text: true }, { default: () => '编辑'}),
      h(Button, { type: 'primary', text: true }, { default: () => '删除'})
    ]
  }]
  const columns2 = [{
    title: '姓名',
    key: 'name',
    fixed: 'left',
    width: 80,
  }, {
    title: '年龄',
    key: 'age',
    width: 200,
  }, {
    title: '住址',
    key: 'address',
    width: 200,
  }, {
    title: '操作',
    key: 'action',
    width: 200,
    fixed: 'right',
    render: () => [
      h(Button, { type: 'primary', text: true }, { default: () => '编辑'}),
      h(Button, { type: 'primary', text: true }, { default: () => '删除'})
    ]
  }]
  const columns3 = [{
    title: '姓名',
    key: 'name',
  }, {
    title: '年龄',
    key: 'age',
    sorter: true
  }, {
    title: '住址',
    key: 'address'
  }, {
    title: '操作',
    key: 'action',
    render: () => [
      h(Button, { type: 'primary', text: true }, { default: () => '编辑'}),
      h(Button, { type: 'primary', text: true }, { default: () => '删除'})
    ]
  }]
  const columns4 = [{
    title: '姓名',
    key: 'name'
  }, {
    title: '基本信息',
    children: [{
      title: '年龄',
      key: 'age',
      sorter: true,
    }, {
      title: '住址',
      key: 'address'
    }]
  }, {
    title: '操作',
    key: 'action',
    render: () => [
      h(Button, { type: 'primary', text: true }, { default: () => '编辑'}),
      h(Button, { type: 'primary', text: true }, { default: () => '删除'})
    ]
  }]

  const columns5 = [{
    title: '姓名',
    key: 'name',
    colspan: (rowData, rowIndex) => {
      if (rowIndex === 2) {
        return 2
      }
      return 1
    },
    rowspan: (rowData, rowIndex) => {
      if (rowIndex === 0) {
        return 2
      } else if (rowIndex === 1) {
        return 0
      } else {
        return 1
      }
    }
  }, {
    title: '基本信息',
    children: [{
      title: '年龄',
      key: 'age',
      colspan: (rowData, rowIndex) => {
        if (rowIndex === 2) {
          return 0
        }
        return 1
      },
      rowspan: (rowData, rowIndex) => {
        if (rowIndex === 0) {
          return 2
        } else if (rowIndex === 1) {
          return 0
        } else {
          return 1
        }
      }
    }, {
      title: '住址',
      key: 'address'
    }]
  }, {
    title: '操作',
    key: 'action',
    render: () => [
      h(Button, { type: 'primary', text: true }, { default: () => '编辑'}),
      h(Button, { type: 'primary', text: true }, { default: () => '删除'})
    ]
  }]

  const columns6 = [{
    title: '姓名',
    key: 'name',
  }, {
    title: '年龄',
    key: 'age',
    render: (row, index) => {
      return h(Input, {
        modelValue: row.age,
        htmlType: 'number',
        'onUpdate:modelValue': (value) => {
          const newData = [...dataSource4.value]
          newData[index].age = value
          dataSource4.value = newData
        }
      })
    }
  }, {
    title: '住址',
    key: 'address'
  }, {
    title: '操作',
    key: 'action',
    render: () => [
      h(Button, { type: 'primary', text: true }, { default: () => '编辑'}),
      h(Button, { type: 'primary', text: true }, { default: () => '删除'})
    ]
  }]

  const defaultSort = { key: 'age', order: 'desc' }

  function renderSummary() {
    return h('tr', [
      h('td', '合计'),
      h('td', { colspan: '3' },dataSource1.reduce((sum, item) => sum + item.age, 0)),
    ])
  }

  function rowKey(rowData) {
    return rowData.name
  }

  function handleSelectChange(v) {
    console.log(v)
  }
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
      width: 80
    }, {
      title: '年龄',
      key: 'age',
      width: 80
    }, {
      title: '住址',
      key: 'address',
      width: 80
    }, {
      title: '操作',
      width: 80,
      render: () => [
        h(NtButton, { type: 'text' }, { default: () => '编辑'}),
        h(NtButton, { type: 'text' }, { default: () => '删除'})
      ]
    }]
  </script>
  <template>
    <lt-table :data="dataSource" :columns="columns"></lt-table>
  </template>
  </textarea>
  <template #preview>
    <Table :data="dataSource1" :columns="columns1"></Table>
  </template>
  </CodePreview>
</ClientOnly>

### 斑马纹

表格默认带斑马纹，可以通过设置 `stripe` 为 `false` 来取消斑马纹

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <template>
    <lt-table :data="dataSource" :columns="columns" :stripe="false"></lt-table>
  </template>
  </textarea>
  <template #preview>
    <Table :data="dataSource1" :columns="columns1" :stripe="false"></Table>
  </template>
  </CodePreview>
</ClientOnly>

### 边框

默认情况下，`Table` 组件是不具有竖直方向的边框的， 如果需要，可以使用 `border` 属性，把该属性设置为 `true` 即可启用。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <template>
    <lt-table :data="dataSource" :columns="columns" border></lt-table>
  </template>
  </textarea>
  <template #preview>
    <Table :data="dataSource1" :columns="columns1" border></Table>
  </template>
  </CodePreview>
</ClientOnly>

### 空表格

数据列表没有数据时，显示空表格

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <template>
    <lt-table :data="[]" :columns="columns"></lt-table>
  </template>
  </textarea>
  <template #preview>
    <Table :data="[]" :columns="columns1"></Table>
  </template>
  </CodePreview>
</ClientOnly>

### 固定表头和列

给表格设置 `max-height` 样式，然后设置 `fixed-head` 属性为 `true` 即可实现固定表头。 将需要固定的列设置 `fixed` 为 `left` 或 `right`，就能实现固定列。

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
    const columns2 = [{
      title: '姓名',
      key: 'name',
      fixed: 'left',
      width: 80,
    }, {
      title: '年龄',
      key: 'age',
      width: 200,
    }, {
      title: '住址',
      key: 'address',
      width: 200,
    }, {
      title: '操作',
      key: 'action',
      width: 200,
      fixed: 'right',
      render: () => [
        h(Button, { type: 'text' }, { default: () => '编辑'}),
        h(Button, { type: 'text' }, { default: () => '删除'})
      ]
    }]
  </script>
  <template>
    <lt-table :data="dataSource2" :columns="columns" fixed-head style="max-height:200px;" class="nt-scrollbar"></lt-table>
  </template>
  </textarea>
  <template #preview>
    <Table :data="dataSource2" :columns="columns2" fixed-head style="max-height:200px;" class="nt-scrollbar"></Table>
  </template>
  </CodePreview>
</ClientOnly>

> 1. 设置 `max-height` 可以通过直接设置 `style`；也可以通过 [tailwindcss-max-height](https://www.tailwindcss.cn/docs/max-height#setting-the-maximum-height)
> 2. 如果想改变滚动条样式，参考 [工具样式-滚动条](../css-util#_2-滚动条样式)；引入样式表，然后给 `Table` 组件, 添加 `nt-scrollbar` 的类名: `<lt-table ... fixed-head class="max-h-24 nt-scrollbar"></lt-table>`

### 排序

给列的选项增加 `sorter` 为 `true`，同时配置 `key` 字段就能实现排序；可以通过 `defaultSort` 设置初始排序；也可以添加 `sorter` 回调函数来启用手动排序

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
  const columns3 = [{
    title: '姓名',
    key: 'name',
  }, {
    title: '年龄',
    key: 'age',
    sorter: true
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
  const defaultSort = { key: 'age', order: 'desc' }
  </script>
  <template>
    <lt-table :data="dataSource1" :columns="columns3" :default-sort="defaultSort"></lt-table>
  </template>
  </textarea>
  <template #preview>
    <Table :data="dataSource1" :columns="columns3" :default-sort="defaultSort"></Table>
  </template>
  </CodePreview>
</ClientOnly>

### 表尾合计行

设置 `renderSummary` 函数来渲染表尾合计行

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
    function renderSummary() {
      return h('tr', [
        h('td', '合计'),
        h('td', { colspan: '3' },dataSource1.reduce((sum, item) => sum + item.age, 0)),
      ])
    }
  </script>
  <template>
    <lt-table :data="dataSource1" :columns="columns3" :render-summary="renderSummary"></lt-table>
  </template>
  </textarea>
  <template #preview>
    <Table :data="dataSource1" :columns="columns3" :render-summary="renderSummary"></Table>
  </template>
  </CodePreview>
</ClientOnly>

### 多级表头

配置 `columns` 的时候，给某一列增加一个 `children` 就能实现表头分组

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
    const columns4 = [{
      title: '姓名',
      key: 'name'
    }, {
      title: '基本信息',
      children: [{
        title: '年龄',
        key: 'age',
        sorter: true,
      }, {
        title: '住址',
        key: 'address'
      }]
    }, {
      title: '操作',
      key: 'action',
      render: () => [
        h(NtButton, { type: 'text' }, { default: () => '编辑'}),
        h(NtButton, { type: 'text' }, { default: () => '删除'})
      ]
    }]
  </script>
  <template>
    <lt-table :data="dataSource1" :columns="columns4" border></lt-table>
  </template>
  </textarea>
  <template #preview>
    <Table :data="dataSource1" :columns="columns4" border></Table>
  </template>
  </CodePreview>
</ClientOnly>

### 合并单元格

通过配置 `columns` 中的 `colspan`、`rowspan` 来实现合并单元格；当 `colspan` 或者 `rowspan` 为 `0` 时，则不显示当前单元格

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <template>
    <lt-table :data="dataSource3" :columns="columns5" border></lt-table>
  </template>
  </textarea>
  <template #preview>
    <Table :data="dataSource3" :columns="columns5" border></Table>
  </template>
  </CodePreview>
</ClientOnly>

### 可编辑表格

通过自定义渲染的形式能够快速实现单元格的编辑

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
    const dataSource4 = ref([
      {
        name: '李四',
        age: 19,
        address: '北京朝阳',
      },
      {
        name: '张三',
        age: 18,
        address: '北京朝阳',
      },
      {
        name: '王五',
        age: 20,
        address: '北京朝阳',
      },
    ])
    const columns6 = [{
      title: '姓名',
      key: 'name',
    }, {
      title: '年龄',
      key: 'age',
      render: (row, index) => {
        return h(Input, {
          modelValue: row.age,
          htmlType: 'number',
          'onUpdate:modelValue': (value) => {
            const newData = [...dataSource4.value]
            newData[index].age = value
            dataSource4.value = newData
          }
        })
      }
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
    <lt-table :data="dataSource4" :columns="columns6" border></lt-table>
  </template>
  </textarea>
  <template #preview>
    <Table :data="dataSource4" :columns="columns6" border></Table>
    <hr />
    <div>{{ JSON.stringify(dataSource4, null, 2) }}</div>
  </template>
  </CodePreview>
</ClientOnly>

### 基本结构

整个表格的基本结构为：

```vue-html
<!-- 外层容器, 当需要固定行滚动时, 以及后续需要处理虚拟滚动操作 -->
<div class="nt-table-wrapper" style="max-height:300px;">
  <table class="nt-table nt-table-stripe nt-table-fixed">
    <thead class="nt-fixed">
      <th class="nt-fixed" style="left: 0"></th>
      <th></th>
      <th class="nt-fixed" style="right: 0"></th>
    </thead>
    <tbody>
      <tr>
        <td class="nt-fixed" style="left: 0"></td>
        <td></td>
        <td class="nt-fixed" style="right: 0"></td>
      </tr>
    </tbody>
  </table>
</div>
```

说明:

- `div.nt-table-wrapper`: 外层容器, 当需要固定行滚动时, 以及后续需要处理虚拟滚动操作; 如果需要固定表头, 则添加 `max-height` 样式.
- `table.nt-table`: 表格容器; 如果需要为表格添加斑马纹则添加 `nt-table-stripe` 类; 如果需要固定列则添加 `nt-table-fixed` 类用于改变表格的 `table-layout` 布局.
- `thead`: 如果需要固定表头, 则添加 `nt-fixed` 类否则不用添加.
- `th.fixed,td.fixed`: 如果需要固定列则给列添加 `nt-fixed` 类, 然后设置 `left` 或者 `right` 样式.

## API

### Table Props

| 参数             | 说明                           | 类型                     | 默认值  |
| ---------------- | ------------------------------ | ------------------------ | ------- |
| `data`           | 数据源                         | `array`                  | -       |
| `columns`        | 表格列配置                     | `ColumnOption[]`         | -       |
| `default-sort`   | 初始排序                       | `SortOption`             | -       |
| `stripe`         | 是否为斑马纹                   | `boolean`                | `true`  |
| `border`         | 是否显示四周边框               | `boolean`                | `false` |
| `fixed-head`     | 是否固定表头                   | `boolean`                | `false` |
| `sorter`         | 使用手动排序                   | `(data: any[]) => any[]` | -       |
| `render-summary` | 渲染表尾合计行                 | `() => VNode \| VNode[]` | -       |
| `table-layout`   | 表格的 `table-layout` 样式属性 | `fixed`、`auto`          | `auto`  |

`ColumnOption` 选项:

<!-- prettier-ignore -->
| 字段           | 说明                   | 类型                                                     | 默认值  |
| -------------- | ---------------------- | -------------------------------------------------------- | ------- |
| `title`        | 列名                   | `string`                                                 | -       |
| `key`          | 列标识, 自动排序时必传 | `string`                                                 | -       |
| `width`        | 列宽                   | `string`、`number`                                       | -       |
| `fixed`        | 列是否固定             | `left`、`right`                                          | -       |
| `sorter`       | 是否排序               | `boolean`                                                | `false` |
| `render`       | 自定义渲染             | `(row: any, index: number) => VNode \| VNode[]`          | -       |
| `titleRowspan` | 表头的行所占的行数     | `number`                                                 | -       |
| `titleColspan` | 表头的单元格所占的列数 | `number`                                                 | -       |
| `rowspan`      | 单元格的 `rowspan`     | `number` \| `(rowData: any, rowIndex: number) => number` | -       |
| `colspan`      | 单元格的 `colspan`     | `number` \| `(rowData: any, rowIndex: number) => number` | -       |
| `style`        | 表格单元格的样式       | `CSSProperties`                                          | -       |
| `class` | 表格单元格的类名 | `string` | - |

`SortOption` 选项

| 字段    | 说明                   | 类型                        |
| ------- | ---------------------- | --------------------------- |
| `key`   | 列标识, 自动排序时必传 | `string`                    |
| `order` | 排序方式               | `asc` - 升序、`desc` - 降序 |
