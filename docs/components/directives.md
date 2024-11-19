# Directives 指令

提供了一些常用的自定义指令

### 1. `vClickoutside`

点击元素外事件, 常用于需要点击元素外，关闭某个弹窗; 例如: `Select`、`Tooltip`

::: code-group

```ts [script]
function handleOutside() {
  console.log('点击了元素外');
}
```

```vue-html [template]
<lt-input placeholder="输入过滤" v-clickoutside="handleOutside"></lt-input>
```

:::
