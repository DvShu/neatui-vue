export interface AsideItem {
  name: string;
  text: string;
}

/** 所有的侧边栏列表 */
const asids: AsideItem[] = [
  {
    name: '$introduce',
    text: '介绍',
  },
  {
    name: '$usage',
    text: '快速上手',
  },
  {
    name: '---',
    text: '',
  },
];
export default asids;
