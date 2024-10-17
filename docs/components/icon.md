# Icon 图标

## 说明

推荐使用 [iconify字体图标库](https://icon-sets.iconify.design/)，里面包含有很多平台资源，并且都是按需加载的。

由于框架有的组件需要用到图标，所以框架也会内置一些图标库

### 内置图标

```vue-html
<nt-search-icon />
<nt-error-icon />
<nt-loading-icon />
// ......
```

<script setup>
import IconList from '../../src/app_components/IconList.vue'
</script>

框架内置的图标如下：

<IconList />

### 使用 `iconfont` 图标

使用时需要单独引入 `iconfont` 图标文件。

```vue-html
<nt-font-icon name="Search" />
```

`name` 属性填入引入的 `iconfont` 文件里面对应的 `id` 即可

### 颜色和尺寸

修改颜色和尺寸可以通过 `color` 和 `font-size` 修改

```vue-html
<nt-search-icon style="color:red;font-size:16px" />
```

如果不想直接修改 `style`，也能通过 [Tailwind CSS](https://tailwindui.com/) 或者 [unocss](https://unocss.dev/)，然后直接添加 `class`

```vue-html
<nt-search-icon class="text-sm text-blue" />
```

### 自定义图标

可以通过使用 `base-icon` 然后加入自定义的 `svg-path` 路径来构建自定义的图标

<ClientOnly><CodePreview>
<textarea lang="vue-html">
<nt-base-icon>
<path
      d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667"
      fill="#231F20"
    ></path>
</nt-base-icon>
</textarea>
</CodePreview></ClientOnly>

当然自定义图标，也可以使用 [unplugin-icons](https://github.com/unplugin/unplugin-icons?tab=readme-ov-file#custom-icons) 实现

### 使用其它图标库

本身提供的图标数量有限，如果不能满足需求，可以考虑使用通用性更强、数量更多的图标库。

- 推荐图标格式：`SVG`
- 推荐图标库：[iconify](https://iconify.design/) 它提供了超过 200000 个开源图标。
- 两种方式可以使用 `iconify`: [@iconify/vue](https://www.npmjs.com/package/@iconify/vue) 和 [unplugin-icons](https://github.com/unplugin/unplugin-icons)
- 推荐使用 [unplugin-icons](https://github.com/unplugin/unplugin-icons) 既能离线加载，也能自定义图标
- 其它图标库: [Lucide](https://lucide.dev/)
