### Button 按钮

常用于响应用户点击行为，触发相应的业务逻辑。

## 基础使用

### 按钮类型

使用 `type` 控制按钮类型, 提供三种类型: `default`, `primary`, `text`。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-button>Default</nt-button>
  <nt-button type="primary" class="ml-10">Primary</nt-button>
  <nt-button type="text" class="ml-10">Text</nt-button>
  </textarea>
  </CodePreview>
</ClientOnly>

### 按钮禁用

使用 `disabled` 控制按钮禁用状态, 禁用状态下不可点击。该属性接受一个 Boolean 类型的值。

<ClientOnly><CodePreview>
<textarea lang="vue-html">
<nt-button disabled>Default</nt-button>
<nt-button type="text" class="ml-10" disabled>Text</nt-button>
</textarea>
</CodePreview></ClientOnly>

### 按钮加载状态

使用 `loading` 控制按钮加载状态, 加载状态下不可点击。

<ClientOnly><CodePreview>
<textarea lang="vue-html">
<nt-button loading>Default</nt-button>
<nt-button type="primary" loading class="ml-10">Primary</nt-button>
</textarea>
</CodePreview></ClientOnly>

### `Block` 按钮

`block` 属性使按钮适合其父宽度。[100%]

<ClientOnly><CodePreview>
<textarea lang="vue-html">
<nt-button block>Default</nt-button>
<nt-button type="primary" block class="mt-15">Text</nt-button>
</textarea>
</CodePreview></ClientOnly>

### 按钮形状

按钮可以设置为圆形或者弧形

<ClientOnly><CodePreview>
<textarea lang="vue-html">
<nt-button circle>D</nt-button>
<nt-button type="primary" round class="ml-10">Text</nt-button>
</textarea>
</CodePreview></ClientOnly>

### 图标按钮

直接在 Button 内使用 Icon 组件。

<ClientOnly><CodePreview>
<textarea lang="vue-html">
<nt-button circle>
<nt-search-icon></nt-search-icon>
</nt-button>
<nt-button type="primary" round class="ml-10">
<nt-search-icon></nt-search-icon>
<span>Search</span>
</nt-button>
</textarea>
</CodePreview></ClientOnly>

## API

### Button Props

| 名称          | 说明                                           | 类型      | 默认值     |
| ------------- | ---------------------------------------------- | --------- | ---------- |
| `type`        | 按钮类型, `normal`, `primary`, `text`          | `string`  | `normal`   |
| `disabled`    | 按钮禁用状态                                   | `boolean` | `false`    |
| `loading`     | 按钮加载状态                                   | `boolean` | `false`    |
| `block`       | 按钮是否为块级元素[适合其父宽度(宽度100%)]     | `boolean` | false      |
| `round`       | 按钮是否为圆角[弧形按钮]                       | `boolean` | `false`    |
| `circle`      | 按钮是否为圆形                                 | `boolean` | `false`    |
| `htmlType`    | 原生的 `type` 属性; `button`、submit`、`reset` | `string`  | `button`   |
| `loadingText` | 加载状态时显示的文字                           | `string`  | `加载中……` |

### Button Slots

| 名称      | 说明     |
| --------- | -------- |
| `default` | 按钮内容 |

### 样式变量

| 名称                             | 描述                     | 默认值                       |
| -------------------------------- | ------------------------ | ---------------------------- |
| `--nt-btn-color`                 | 按钮的文字颜色           | `rgba(0, 0, 0, 0.65)`        |
| `--nt-btn-bg-color`              | 按钮的背景颜色           | `	#fff`                       |
| `--nt-btn-border-color`          | 按钮的边框颜色           | `#d9d9d9`                    |
| `--nt-form-edit-height`          | 按钮的高度               | `32px`                       |
| `--nt-btn-hover-color`           | 鼠标悬浮时按钮的文字颜色 | `#79b3f7`                    |
| `--nt-btn-hover-border-color`    | 鼠标悬浮时按钮的边框颜色 | `var(--nt-btn-hover-color)`  |
| `--nt-btn-hover-bg-color`        | 鼠标悬浮时按钮的背景颜色 | `var(--nt-btn-bg-color)`     |
| `--nt-btn-active-color`          | 点击时按钮的颜色         | `#197df1`                    |
| `--nt-btn-active-bg-color`       | 点击时按钮的背景颜色     | `var(--nt-btn-bg-color)`     |
| `--nt-btn-active-border-color`   | 点击时按钮的边框颜色     | `var(--nt-btn-active-color)` |
| `--nt-btn-disabled-color`        | 禁用时按钮的文字颜色     | `#c9c9c9`                    |
| `--nt-btn-disabled-bg-color`     | 禁用时按钮的背景颜色     | `#fbfbfb`                    |
| `--nt-btn-disabled-border-color` | 禁用时按钮的边框颜色     | `#e6e6e6`                    |
