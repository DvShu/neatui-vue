export interface AsideItem {
  name: string;
  text: string;
  showName?: boolean;
}

/** 所有的侧边栏列表 */
const asids: AsideItem[] = [
  {
    name: 'introduce',
    showName: false,
    text: '介绍',
  },
  {
    name: 'usage',
    showName: false,
    text: '快速上手',
  },
  {
    name: 'reset',
    showName: false,
    text: '样式重置',
  },
  {
    name: 'css_util',
    showName: false,
    text: '工具样式',
  },
  {
    name: '---',
    text: '',
    showName: false,
  },
  {
    name: 'Container',
    text: '容器布局',
  },
  {
    name: 'Directives',
    text: '指令',
  },
  {
    name: 'Icon',
    text: '图标',
  },
  {
    name: 'Tooltip',
    text: '文字提示',
  },
  {
    name: 'Message',
    text: '消息提示',
  },
  {
    name: 'Card',
    text: '卡片',
  },
  {
    name: 'Input',
    text: '输入框',
  },
  {
    name: 'Button',
    text: '按钮',
  },
  {
    name: 'Qrcode',
    text: '二维码',
  },
];
export default asids;
