import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'NeatUi',
  description:
    'Neat UI 是一个基于 Vue3 的轻量级的 UI 组件库，提供基础的 UI 组件，方便开发。',
  base: '/neatui-vue/',
  cleanUrls: true,
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/neatui-vue/logo.svg' }]],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: '/logo.svg',
    outline: {
      level: [1, 4],
    },
    siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/usage' },
      { text: '组件', link: '/components/container' },
    ],

    sidebar: [
      {
        text: '指南',
        collapsed: false,
        items: [
          { text: '快速上手', link: '/usage' },
          { text: '样式重置', link: '/reset' },
          { text: '工具样式', link: '/css-util' },
        ],
      },
      {
        text: '组件',
        collapsed: false,
        items: [{ text: 'Container 容器布局', link: '/components/container' }],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DvShu/neatui-vue' },
    ],

    footer: {
      message: 'Released under the MulanPSL2 License.',
      copyright: 'Copyright © 2019-present Shu',
    },
    search: {
      provider: 'local',
    },
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色主题',
    darkModeSwitchTitle: '切换到深色主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    externalLinkIcon: true,
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
  },
});
