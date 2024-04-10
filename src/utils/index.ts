import type { VNode } from 'vue';
import { isBlank } from 'ph-utils';

function propsToString(props: any) {
  const propStrs = [];
  for (const key in props) {
    const value = props[key];
    if (isBlank(value)) {
      propStrs.push(key);
    } else {
      propStrs.push(`${key}="${value}"`);
    }
  }
  return propStrs.join(' ');
}

export function vnodesToHTML(vnodes: VNode[], base: string[] = []) {
  for (const vnode of vnodes) {
    const children = vnode.children;
    if (children instanceof Array) {
      vnodesToHTML(children as VNode[], base);
    } else {
      if (!isBlank(children as string)) {
        if (typeof vnode.type === 'string') {
          let propStr = propsToString(vnode.props);
          propStr = !isBlank(propStr) ? ` ${propStr}` : '';
          base.push(`<${vnode.type}${propStr}>${children}</${vnode.type}>`);
        } else {
          base.push(children as string);
        }
      }
    }
  }
  return base.join('');
}
