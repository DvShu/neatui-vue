<script lang="ts">
import type { VNode } from 'vue';
import { defineComponent, h, defineAsyncComponent } from 'vue';
import { isBlank } from 'ph-utils';

function parseAttributes(child: Element) {
  const attrs: { [index: string]: any } = {};
  for (const name of child.getAttributeNames()) {
    const value = child.getAttribute(name);
    attrs[name] = isBlank(value) ? true : value;
  }
  return attrs;
}

const parseComponent = function (name: string) {
  if (name.startsWith('nt-')) {
    let tagname = parseAsyncComponentName(name);
    const filename = `../components/${tagname}.vue`;
    return defineAsyncComponent(() => import(filename));
  }
  return name;
};

function parseAsyncComponentName(tagName: string): string {
  if (tagName.startsWith('nt-')) {
    let name = tagName.substring(3);
    let nameItmes = name.split('-');
    nameItmes = nameItmes.map(
      (item) => item[0].toUpperCase() + item.substring(1),
    );
    name = nameItmes.join('');
    if (name.endsWith('Icon')) {
      name = `icon/${name.substring(0, name.length - 4)}`;
    }
    return name;
  }
  return tagName;
}

function renderChildren(children: HTMLCollection) {
  const renderCompts: VNode[] = [];
  for (const child of children) {
    const component = parseComponent(child.localName);
    if (child.children.length === 0) {
      if (child.localName.startsWith('nt-')) {
        renderCompts.push(
          h(component, parseAttributes(child), {
            default: () => child.textContent,
          }),
        );
      } else {
        console.log(component);
        renderCompts.push(
          h(component, parseAttributes(child), {
            default: () => child.textContent,
          }),
        );
      }
    } else {
      renderCompts.push(
        h(component, parseAttributes(child), {
          default: () => renderChildren(child.children),
        }),
      );
    }
  }
  return renderCompts;
}

export default defineComponent({
  name: 'CodeRender',
  setup(_props, { slots }) {
    return () => {
      if (slots.preview != null) {
        return (slots as any).preview();
      }
      if (slots.default != null) {
        let code = (slots as any).default()[0].children as string;
        code = code.trim().replaceAll('\n    ', '\n');
        if (!isBlank(code)) {
          const parser = new DOMParser();
          console.log(code);
          const doc = parser.parseFromString(code, 'text/html');
          console.log(doc.body);
          const renderCompts = renderChildren(doc.body.children);
          console.log(renderCompts);
          return renderCompts;
        }
      }
    };
  },
});
</script>
