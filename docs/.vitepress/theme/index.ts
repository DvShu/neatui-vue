import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import '../../../style/icon';
import '../../../style/button';
import '../../../style/tooltip';
import '../../../style/util/transition.css';
import '../../../style/polygon';
import '../../../style/vars.css';
import '../../../style/reset.css';
import '../../../src/style.css';
import '../../../style/util/scrollbar.css';
import '../../../style/container.css';
import '../../../style/input';
import '../../../style/card';
import '../../../style/input';
import '../../../style/image';
import '../../../style/image-preview';
import CodePreview from '../../../src/app_components/CodePreview.vue';
import '../../../style/message';
import '../../../style/shadow';
import '../../../style/table';
import '../../../style/switch';
import '../../../style/form';
import '../../../style/collapse';
import '../../../style/progress';
import '../../../style/loading-bar';
import '../../../style/description-panel';
import '../../../style/tabbar';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.component('CodePreview', CodePreview);
  },
} satisfies Theme;
