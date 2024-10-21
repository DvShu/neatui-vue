## 暗黑模式

组件库内置暗色的主题，你可以轻易的切换到暗色。

### 切换暗黑模式

组件库通过给根 `html` 添加 `dark` 的 `class` 类来标明当前的主题，所以你只要修改这个属性，即可完成主题的切换。

```js
document.documentElement.classList.toggle('dark');
```

> 当然也可以通过内置的组件 [Theme](/components/theme) 或者通过 `ph-utils/theme` 模块的 `applyTheme、initTheme` 来实现暗黑模式切换
