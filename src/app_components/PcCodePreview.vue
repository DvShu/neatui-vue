<script lang="ts">
import { defineComponent, h } from 'vue';
import SourceCode from './SourceCode.vue';
import CodeRender from './CodeRender.vue';

export default defineComponent({
  name: 'PcCodePreview',
  props: {
    code: {
      type: String,
      required: true,
    },
    lang: {
      type: String,
      required: false,
      default: 'js',
    },
  },
  setup(props, { slots }) {
    const renderChildren =
      slots.default == null ? undefined : (slots as any).default();
    return () =>
      h('div', { class: 'pc-doc-previewer' }, [
        h(
          'div',
          { class: 'pc-doc' },
          h(SourceCode, {
            lang: props.lang,
            code: props.code,
          }),
        ),
        h(
          'div',
          {
            class: 'pc-previewer',
          },
          h(
            CodeRender,
            {
              code: props.code,
            },
            renderChildren,
          ),
        ),
      ]);
  },
});
</script>
