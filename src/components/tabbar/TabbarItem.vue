<script lang="ts">
import { defineComponent, h, inject } from 'vue';
import { tabbarContext } from './constant';

export default defineComponent({
  props: {
    name: {
      type: [String, Number],
      required: true,
    },
  },
  setup(props, { slots }) {
    const tabbarCtx = inject(tabbarContext);

    function handleToggle() {
      if (tabbarCtx != null) {
        tabbarCtx.change(props.name);
      }
    }

    return () =>
      h(
        'div',
        {
          class:
            'nt-tabbar-item' +
            (tabbarCtx?.active.value === props.name ? ' active' : ''),
          onClick: handleToggle,
          'data-name': props.name,
        },
        [
          slots.icon
            ? h(
                'div',
                {
                  class: 'nt-tabbar-item-icon',
                },
                [slots.icon()],
              )
            : null,
          slots.default ? slots.default() : null,
        ],
      );
  },
});
</script>
