<template>
  <DocMain>
    <p>
      容器布局，采用了 flex
      布局，一般用于后台管理项目的一些常用排版，方便快速搭建页面的基本结构：
    </p>
    <ul class="ul-list">
      <li>
        nt-container：外层容器，一般用于 section
        标签，基本排版为水平左右排列，可以通过设置 nt-layout-verticle
        调整为垂直上下排列。可以嵌套
      </li>
      <li>nt-header：顶栏容器，一般用于 header 标签。</li>
      <li>nt-aside: 侧边栏容器，一般用于 aside 标签。</li>
      <li>nt-main: 主要区域容器，一般用于 main 标签。</li>
      <li>nt-footer: 底部，一般用于 footer 标签。</li>
    </ul>
    <p>通常在做后台管理系统的首页排版上</p>
    <h2>引入</h2>
    <p>由于使用不是特别频繁，所以没有封装为组件</p>
    <p>样式需要单独引入</p>
    <SourceCode
      lang="js"
      code="import 'neatui-vue/style/container.css'"
    ></SourceCode>
    <p>在使用时，需要手动引入</p>
    <h2>常见布局</h2>
    <CodeExample>
      <PcCodePreview :code="code1" lang="html" title="上下两栏排版" />
      <PcCodePreview :code="code2" lang="html" title="左右两栏排版" />
      <PcCodePreview :code="code3" lang="html" title="上下两栏嵌套" />
      <PcCodePreview :code="code4" lang="html" title="经典后台系统">
        <template v-slot:description>
          <p>
            在 header 里面放点东西就成了，就成了经典的后台管理系统的模板,
            左右是图标，右边是登录用户
          </p>
        </template>
      </PcCodePreview>
      <PcCodePreview :code="code5" lang="html" title="左右两栏嵌套" />
      <PcCodePreview :code="code6" lang="html" title="上中下三栏" />
    </CodeExample>

    <ThemeTable :rows="varRows"></ThemeTable>
  </DocMain>
</template>

<script lang="ts" setup>
import SourceCode from '../app_components/SourceCode.vue';
import PcCodePreview from '../app_components/PcCodePreview.vue';
import DocMain from '../app_components/DocMain.vue';
import CodeExample from '../app_components/CodeExample.vue';
import ThemeTable from '../app_components/ThemeTable.vue';

const code1 = `
<section class="nt-container nt-layout-vertical">
  <header class="nt-header">Header</header>
  <main class="nt-main">Main</main>
</section>
`;

const code2 = `
<section class="nt-container">
  <aside class="nt-aside">Aside</aside>
  <main class="nt-main">Main</main>
</section>
`;

const code3 = `
<section class="nt-container nt-layout-vertical">
  <header class="nt-header">Header</header>
  <section class="nt-container">
    <aside class="nt-aside">Aside</aside>
    <main class="nt-main">Main</main>
  </section>
</section>
`;

const code4 = `
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
`;

const code5 = `
<section class="nt-container">
  <aside class="nt-aside">Aside</aside>
  <section class="nt-container nt-layout-vertical">
    <header class="nt-header">Header</header>
    <main class="nt-main">Main</main>
  </section>
</section>
`;

const code6 = `
<section class="nt-container nt-layout-vertical">
  <header class="nt-header">Header</header>
  <main class="nt-main">Main</main>
  <footer class="nt-footer">Footer</footer>
</section>
`;

const varRows = [
  {
    name: '--nt-header-height',
    description: 'header高度',
    default: '50px',
  },
  {
    name: '--nt-footer-height',
    description: 'footer高度',
    default: 'var(--nt-header-height, 50px)',
  },
  {
    name: '--nt-aside-width',
    description: '侧边栏宽度',
    default: '240px',
  },
];
</script>
