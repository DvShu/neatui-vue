# Shadow 阴影

这个组件通常作为一些基础依赖组件使用，比如：

- [Image](./image.md): 图片显示预览的时候，需要显示背景阴影
- [Dialog](./dialog.md): 弹窗的时候，需要显示背景阴影

## 演示

<script setup>
import { Shadow } from '../../src'
</script>

### 基础使用

```vue
<lt-shadow @shadow-click="">
  <div style="width:100px;height:100px;background: #ccc">
    Hello World!!!
  </div>
</lt-shadow>
```

## API

### Shadow Props

| 参数           | 说明                                     | 类型      | 默认值  |
| -------------- | ---------------------------------------- | --------- | ------- |
| `shadow-class` | 传递给 shadow 主体的样式，而不是顶层样式 | `string`  | -       |
| `transparent`  | shadow 的背景是否是透明                  | `boolean` | `false` |

### Shadow Events

| 事件           | 说明               |
| -------------- | ------------------ |
| `shadow-click` | 点击 `shadow` 触发 |
