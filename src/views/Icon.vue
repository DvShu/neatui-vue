<template>
  <div class="nt-scrollbar doc-main">
    <h2>说明</h2>
    <p>
      推荐使用<a href="https://icon-sets.iconify.design/">iconify字体图标库</a
      >里面包含有很多平台资源，并且都是按需加载的。
    </p>
    <p>由于框架有的组件需要用到图标，所以框架也会内置一些图标库</p>
    <h3>使用内置图标</h3>
    <SourceCode lang="html" code="<nt-search-icon />"></SourceCode>
    <p>内置如下图标</p>
    <ul class="icon-list">
      <li
        v-for="item in components"
        :key="item.name"
        class="icon-item center"
        @click="handleCopyIcon(item.name)"
      >
        <component
          :is="item.component"
          :class="{
            'nt-rotate-anim': item.name.includes('loading'),
          }"
        ></component>
        <span class="icon-name">{{ item.name }}</span>
      </li>
    </ul>
    <h3>使用 iconfont 图标</h3>
    <p>使用时需要单独引入 Iconfont 图标组件。</p>
    <SourceCode lang="html" code='<nt-font-icon name="Search" />'></SourceCode>
    <p>name 属性填入引入的 iconfont 文件里面对应的 id 即可</p>
    <h3>颜色和尺寸</h3>
    <p>修改颜色和尺寸可以通过 color 和 font-size 修改</p>
    <SourceCode
      lang="html"
      code='<nt-search-icon style="color:red;font-size:16px" />'
    ></SourceCode>
    <p>
      如果不想直接修改 style，也能通过
      <a href="https://tailwindui.com/">Tailwind CSS</a>
      或者 <a href="https://unocss.dev/">unocss</a> 更简单的实现
    </p>
    <SourceCode
      lang="html"
      code='<nt-search-icon class="text-sm text-blue" />'
    ></SourceCode>
    <h3>自定义图标</h3>
    <p>
      可以通过使用 base-icon 然后加入自定义的 svg-path 路径来构建自定义的图标
    </p>
    <PcCodePreview lang="html" :code="code1"></PcCodePreview>
    <p>
      当然自定义图标，也可以使用
      <a href="https://github.com/unplugin/unplugin-icons">unplugin-icons</a>
      来实现
    </p>
    <h3>使用自定义图标库</h3>
    <p>
      本身提供的图标数量有限，如果不能满足需求，可以考虑使用通用性更强、数量更多的图标库。
    </p>
    <ul class="ul-list">
      <li>推荐图标格式：SVG</li>
      <li>
        推荐图标库：<a href="https://iconify.design/">iconify</a>，它提供了超过
        200000 个开源图标。
      </li>
      <li>
        两种方式可以使用 iconify:
        <a href="https://www.npmjs.com/package/@iconify/vue">@iconify/vue</a> 和
        <a href="https://github.com/unplugin/unplugin-icons">unplugin-icons</a>
      </li>
      <li>
        推荐使用
        <a href="https://github.com/unplugin/unplugin-icons">unplugin-icons</a>
        既能离线加载，也能自定义图标
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import type { Component } from 'vue';
import SourceCode from '../app_components/SourceCode.vue';
import PcCodePreview from '../app_components/PcCodePreview.vue';
import { copy } from 'ph-utils/copy';
import Message from '../components/Message/index';

/**
 * 将风格由大写风格转换为下划线风格: IconFont -> icon_font
 * @param name 命名, 例如: IconFont
 */
function snakeCaseStyle(name: string) {
  const snakeName = name.replace(/([A-Z])/g, (match) => {
    return `-${match.toLowerCase()}`;
  });
  return snakeName[0] === '-' ? snakeName.substring(1) : snakeName;
}

const modules = import.meta.glob('../components/*Icon.vue');
const components: { name: string; component: Component }[] = [];
for (const path in modules) {
  if (Object.hasOwn(modules, path)) {
    let name = path
      .replace('../components/', '')
      .replace('.vue', '')
      .replace('Icon', '');
    name = snakeCaseStyle(name);
    if (name !== '' && name !== 'font') {
      components.push({
        name,
        component: defineAsyncComponent(modules[path] as any),
      });
    }
  }
}

const code1 = `
<nt-base-icon>
  <path
    d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667"
    fill="#231F20"
  ></path>
</nt-base-icon>
`;

async function handleCopyIcon(name: string) {
  await copy(`<nt-${name}-icon />`);
  Message.success('复制成功');
}
</script>
