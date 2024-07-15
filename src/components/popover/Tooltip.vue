<script lang="ts">
import { defineComponent, h } from 'vue';
import Popover from './Popover.vue';
import { popoverProps } from './constant';

export default defineComponent({
  props: popoverProps,
  setup(props, { slots, attrs }) {
    return () => {
      return h(
        Popover,
        { ...props, ...attrs, class: ['nt-tooltip', attrs.class] },
        {
          trigger: () => (slots.default != null ? slots.default() : null),
          content: () => (slots.content != null ? slots.content() : null),
        },
      );
    };
  },
});
</script>

<style></style>
