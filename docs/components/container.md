# Container 容器布局

容器布局，采用了 flex 布局，一般用于后台管理项目的一些常用排版，方便快速搭建页面的基本结构：

- `nt-container`：外层容器，一般用于 `section` 标签，基本排版为水平左右排列，可以通过设置 `nt-layout-verticle` 调整为垂直上下排列。可以嵌套
- `nt-header`：顶栏容器，一般用于 `header` 标签
- `nt-aside`: 侧边栏容器，一般用于 `aside` 标签
- `nt-main`: 主要区域容器，一般用于 `main` 标签
- `nt-footer`: 底栏容器，一般用于 `footer` 标签

通常用于后台管理系统的首页排版

## 引入

由于使用不是特别频繁，所以没有封装为组件，在需要时手动引入样式表

```ts
import '@asteres/neatui-vue/style/container.css';
```

<script setup>
import CodePreview from '../../src/app_components/CodePreview.vue';
</script>

## 常见布局

### 上下两栏排版

<ClientOnly>
  <CodePreview class="mt-15">
  <textarea lang="html">
  <section class="nt-container nt-layout-vertical">
    <header class="nt-header">Header</header>
    <main class="nt-main">Main</main>
  </section>
  </textarea>
  </CodePreview>
</ClientOnly>

### 左右两栏排版

<ClientOnly><CodePreview class="mt-15">
<textarea lang="html">

  <section class="nt-container">
    <aside class="nt-aside">Aside</aside>
    <main class="nt-main">Main</main>
  </section>
  </textarea>
</CodePreview></ClientOnly>

### 上下两栏嵌套

<ClientOnly><CodePreview class="mt-15">
<textarea lang="html">

  <section class="nt-container nt-layout-vertical">
    <header class="nt-header">Header</header>
    <section class="nt-container">
      <aside class="nt-aside">Aside</aside>
      <main class="nt-main">Main</main>
    </section>
  </section>
  </textarea>
</CodePreview></ClientOnly>

### 左右两栏嵌套

<ClientOnly><CodePreview class="mt-15">
<textarea lang="html">

  <section class="nt-container">
    <aside class="nt-aside">Aside</aside>
    <section class="nt-container nt-layout-vertical">
      <header class="nt-header">Header</header>
      <main class="nt-main">Main</main>
    </section>
  </section>
  </textarea>
</CodePreview></ClientOnly>

### 上中下三栏

<ClientOnly><CodePreview class="mt-15">
<textarea lang="html">

  <section class="nt-container nt-layout-vertical">
    <header class="nt-header">Header</header>
    <main class="nt-main">Main</main>
    <footer class="nt-footer">Footer</footer>
  </section>
  </textarea>
</CodePreview></ClientOnly>

### 经典后台系统

在 `header` 里面放点东西就成了，就成了经典的后台管理系统的模板, 左边是图标，右边是登录用户；`Aside` 里面放菜单(`Menu`)，`Main` 里面放内容就是经典的后台管理系统模板

<ClientOnly><CodePreview>
<textarea lang="html">

  <section class="nt-container nt-layout-vertical">
    <header class="nt-header">
      <a href="#">NEATUI</a>
      <div>登录用户</div>
    </header>
    <section class="nt-container">
      <aside class="nt-aside">Aside</aside>
      <main class="nt-main">Main</main>
    </section>
  </section>
  </textarea>
</CodePreview></ClientOnly>

## 主题定制

### 样式变量

| 名称                 | 描述       | 默认值                          |
| -------------------- | ---------- | ------------------------------- |
| `--nt-header-height` | header高度 | `50px`                          |
| `--nt-aside-width`   | 侧边栏宽度 | `240px`                         |
| `--nt-footer-height` | 底栏高度   | `var(--nt-header-height, 50px)` |
