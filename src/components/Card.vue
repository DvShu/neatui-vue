<script lang="ts">
import { defineComponent, h } from 'vue';

export default defineComponent({
  props: {
    headerText: String,
    showHeader: {
      type: Boolean,
      default: true,
    },
    footerText: String,
    showFooter: { type: Boolean, default: false },
    bodyClass: String,
    headerClass: String,
    footerClass: String,
  },
  setup(props, { slots }) {
    return () =>
      h('div', { class: 'nt-card' }, [
        props.showHeader
          ? h('div', { class: ['nt-card__header', props.headerClass] }, [
              slots.header != null
                ? slots.header()
                : h('span', props.headerText),
              slots['header-extra'] != null
                ? h('div', slots['header-extra']())
                : undefined,
            ])
          : undefined,
        h('div', { class: ['nt-card__body', props.bodyClass] }, [
          slots.default != null ? slots.default() : undefined,
        ]),
        props.showFooter
          ? h(
              'div',
              { class: ['nt-card__footer', props.footerClass] },
              slots.footer != null
                ? slots.footer()
                : h('span', props.footerText),
            )
          : undefined,
      ]);
  },
});
</script>
