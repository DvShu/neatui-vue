import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import '../../../style/icon';
import '../../../style/button';
import '../../../style/tooltip';
import '../../../style/util/transition.css';
import '../../../style/polygon';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    // app.component('MyGlobalComponent' /* ... */)
  },
} satisfies Theme;
