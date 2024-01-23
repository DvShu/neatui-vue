<script lang="ts">
import type { VNode } from 'vue';
import { defineComponent, h } from 'vue';
import { isBlank } from 'ph-utils';

function parseAttributes(child: Element) {
  const attrs: { [index: string]: any } = {};
  for (const name of child.getAttributeNames()) {
    const value = child.getAttribute(name);
    attrs[name] = isBlank(value) ? true : value;
  }
  return attrs;
}

function renderChildren(children: HTMLCollection) {
  const renderCompts: VNode[] = [];
  for (const child of children) {
    if (child.children.length === 0) {
      renderCompts.push(
        h(child.localName, parseAttributes(child), child.textContent as string),
      );
    } else {
      renderCompts.push(
        h(
          child.localName,
          parseAttributes(child),
          renderChildren(child.children),
        ),
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
      const parser = new DOMParser();
      const doc = parser.parseFromString(props.code, 'text/html');
      const renderCompts = renderChildren(doc.body.children);
      return () => renderCompts;
    }
  },
});
</script>
