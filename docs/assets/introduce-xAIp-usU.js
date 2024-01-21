const r=`<div id="introduce" class="doc-wrapper">\r
  <div class="nt-scrollbar doc-main">\r
    <h3>介绍</h3>\r
    <p>\r
      Neat UI 是一个基于 Vue3 的轻量级的 UI 组件库，提供基础的 UI\r
      组件，方便开发。\r
    </p>\r
    <p>\r
      这不是一个完整的 UI 库，全是一些根据实际业务实践中整理的组件库,\r
      库不全所以需要配合其它UI库使用。\r
    </p>\r
    <p>\r
      这个库本身不是专门的PC的，也不是专门的移动的，可能会同时存在两端都有的\r
    </p>\r
    <h3>特性</h3>\r
    <ul class="ul-list">\r
      <li>支持按需引入和 Tree Shaking</li>\r
      <li>详尽的文档和示例</li>\r
      <li>使用 TypeScript 编写，提供完整的类型定义</li>\r
      <li>轻量，组件平均体积小于 1KB</li>\r
      <li>全样式可控</li>\r
    </ul>\r
    <h3>写作背景</h3>\r
    <p>\r
      不管是 PC 端，还是移动端市场上已经有了许许多多的 UI\r
      库，为什么还要再开发一个 UI 库呢？\r
    </p>\r
    <ul class="ul-list">\r
      <li>\r
        因为很多项目中，需要使用一些基础的 UI\r
        组件，但是这些组件库的提供的功能太过繁杂但我只取其中一瓢，为了一瓢水而引入江河有点不划算\r
      </li>\r
      <li>需要使用一些特殊的功能，因此需要自己开发一个</li>\r
      <li>\r
        自己写并维护一个 UI\r
        组件库，这也是对于自己的一个总结；把自己会的归纳总结为一个组件。\r
      </li>\r
      <li>\r
        现在的UI库把PC和移动端分的太开了，但是很多时候实际工作的时候，可能我们的页面虽然是PC的，但是也要考虑移动适配。针对某些组件比如:\r
        Select，在 PC\r
        选项卡可以在下面弹出、而在移动端可以考虑从底部弹出，做不同的针对适配。\r
      </li>\r
    </ul>\r
  </div>\r
</div>\r
`;export{r as default};
