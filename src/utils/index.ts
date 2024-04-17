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

function prefixWhitespace(indent: number) {
  const whitespace = [];
  for (let i = 0; i < indent * 2; i++) {
    whitespace.push('  ');
  }
  return whitespace.join('');
}

export function vnodesToHTML(vnodes: VNode[], base: string[] = [], indent = 0) {
  for (const vnode of vnodes) {
    const children = vnode.children;
    if (children instanceof Array) {
      vnodesToHTML(
        children as VNode[],
        base,
        base.length === 0 ? 0 : indent + 1,
      );
    } else {
      if (!isBlank(children as string)) {
        let space = prefixWhitespace(indent);
        if (typeof vnode.type === 'string') {
          let propStr = propsToString(vnode.props);
          propStr = !isBlank(propStr) ? ` ${propStr}` : '';
          base.push(
            `${space}<${vnode.type}${propStr}>${children}</${vnode.type}>`,
          );
        } else {
          base.push(`${space}${children}`);
        }
      }
    }
  }
  return base.join('');
}
