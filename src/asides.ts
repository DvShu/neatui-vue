export interface AsideItem {
  name: string;
  text: string;
  showName: boolean;
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
    name: '---',
    text: '',
    showName: false,
  },
];
export default asids;
