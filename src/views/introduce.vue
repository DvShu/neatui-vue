<template>
  <DocMain :has-aside="false">
    <h1>介绍</h1>
    <p>
      Neat UI 是一个基于 Vue3 的轻量级的 UI 组件库，提供基础的 UI
      组件，方便开发。
    </p>
    <p>
      这不是一个完整的 UI 库，全是一些根据实际业务实践中整理的组件库,
      库不全所以需要配合其它UI库使用。
    </p>
    <p>
      这个库本身不是专门的PC的，也不是专门的移动的，可能会同时存在两端都有的
    </p>
    <h3>特性</h3>
    <ul class="ul-list">
      <li>支持按需引入和 Tree Shaking</li>
      <li>详尽的文档和示例</li>
      <li>使用 TypeScript 编写，提供完整的类型定义</li>
      <li>轻量，组件平均体积小于 1KB</li>
      <li>全样式可控</li>
    </ul>
    <h3>写作背景</h3>
    <p>
      不管是 PC 端，还是移动端市场上已经有了许许多多的 UI
      库，为什么还要再开发一个 UI 库呢？
    </p>
    <ul class="ul-list">
      <li>
        因为很多项目中，需要使用一些基础的 UI
        组件，但是这些组件库的提供的功能太过繁杂但我只取其中一瓢，为了一瓢水而引入江河有点不划算
      </li>
      <li>需要使用一些特殊的功能，因此需要自己开发一个</li>
      <li>
        自己写并维护一个 UI
        组件库，这也是对于自己的一个总结；把自己会的归纳总结为一个组件。
      </li>
      <li>
        现在的UI库把PC和移动端分的太开了，但是很多时候实际工作的时候，可能我们的页面虽然是PC的，但是也要考虑移动适配。针对某些组件比如:
        Select，在 PC
        选项卡可以在下面弹出、而在移动端可以考虑从底部弹出，做不同的针对适配。
      </li>
    </ul>
  </DocMain>
</template>

<script setup lang="ts">
import DocMain from '../app_components/DocMain.vue';
</script>
