import type { InjectionKey, Ref } from 'vue';

export const collapseContext = Symbol('collapseContext') as InjectionKey<{
  /** 箭头位置 */
  arrowPlacement: 'left' | 'right';
  /** 头部对齐方式 */
  headerJustify?: 'space-between' | 'flex-start';
  actives: Ref<(string | number)[]>;
  toggle: (active: string | number) => void;
}>;
