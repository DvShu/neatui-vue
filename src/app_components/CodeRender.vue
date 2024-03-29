<script lang="ts">
import type { VNode } from 'vue';
import { defineComponent, h, defineAsyncComponent, Template } from 'vue';
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
    return defineAsyncComponent(() => import(`../components/${tagname}.vue`));
  }
  return name;
};

function parseAsyncComponentName(tagName: string): string {
  if (tagName.startsWith('nt-')) {
    let name = tagName.substring(3);
    if (name === 'base-icon') {
      return 'Icon';
    } else {
      let nameItmes = name.split('-');
      nameItmes = nameItmes.map(
        (item) => item[0].toUpperCase() + item.substring(1),
      );
      name = nameItmes.join('');
      return name;
    }
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
  props: {
    code: {
      type: String,
      required: false,
    },
  },
  setup(props, { slots }) {
    if (slots.default != null) {
      return () => (slots as any).default();
    }
    if (props.code != null) {
      console.log(props.code);
      const parser = new DOMParser();
      const doc = parser.parseFromString(props.code, 'text/html');
      console.log(doc);
      const renderCompts = renderChildren(doc.body.children);
      return () => renderCompts;
    }
  },
});
</script>
