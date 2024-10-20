<script lang="ts">
import {
  defineComponent,
  h,
  VNode,
  Teleport,
  ref,
  Transition,
  nextTick,
  withDirectives,
  onMounted,
  watch,
  vShow,
} from 'vue';
import { popoverProps } from './constant';
import Clickoutside from '../../directives/clickoutside';
import { round } from 'ph-utils';
import { elem } from 'ph-utils/dom';
import {
  getPopoverOffsetX,
  getPopoverOffsetY,
  impactDetect,
} from '../../utils';

const POS_REG = /^(left|right|top|bottom)(Start|Center|End)?$/;

function getFirstTriggerVNode(slots: any): VNode | null {
  if (slots.trigger != null) {
    return slots.trigger()[0];
  }
  return null;
}

export default defineComponent({
  props: popoverProps,
  inheritAttrs: false,
  setup(props, { slots, attrs, expose }) {
    const show = ref(false);
    const place = ref(props.placement);

    const $popover = ref<HTMLDivElement>();

    let closeT: number | undefined;

    const posStyle = ref({});

    onMounted(() => {
      if (props.visible === true) {
        showVisible();
      }
    });

    watch(
      () => props.visible,
      () => {
        if (props.visible === true) {
          showVisible();
        } else {
          show.value = false;
        }
      },
    );

    function showVisible() {
      if (props.to != null) {
        if (props.to instanceof HTMLElement) {
          showFn(props.to);
        } else if (typeof props.to === 'string') {
          showFn(elem(props.to)[0]);
        } else {
          showFn(props.to.value);
        }
      }
    }

    function showFn($target: HTMLElement) {
      if (show.value) {
        clearHide();
        return;
      }
      if ($target.classList.contains('nt-popover')) return;
      show.value = true;

      nextTick(() => {
        // 获取水平和垂直方向的位置
        let mainPos = 'bottom';
        let crossPos = '';
        const poss = props.placement.match(POS_REG);
        if (poss != null) {
          mainPos = poss[1];
          crossPos = poss[2] || '';
        }
        let x = 0,
          y = 0;
        // 获取滚动容器
        const container = document.documentElement;
        // 滚动条水平方向滚动距离
        const scrollLeft = container.scrollLeft;
        // 滚动条垂直方向滚动距离
        const scrollTop = container.scrollTop;

        if ($popover.value != null) {
          const popoverRect = $popover.value.getBoundingClientRect();
          const targetRect = $target.getBoundingClientRect();
          // 获取水平、垂直方向弹窗坐标点偏移
          const yOffset = getPopoverOffsetY(
            targetRect,
            popoverRect,
            mainPos,
            crossPos,
          );
          const xOffset = getPopoverOffsetX(
            targetRect,
            popoverRect,
            mainPos,
            crossPos,
          );
          // 碰撞检测
          const impactRes = impactDetect(
            targetRect,
            popoverRect,
            mainPos,
            crossPos,
            scrollLeft,
            scrollTop,
            xOffset,
            yOffset,
          );
          x = impactRes.x;
          y = impactRes.y;
          mainPos = impactRes.mainAlign;
          crossPos = impactRes.crossAlign;
        }

        posStyle.value = {
          top: `${round(y)}px`,
          left: `${round(x)}px`,
        };
        place.value = `${mainPos}${crossPos}` as any;
      });
    }

    function hideFn() {
      closeT = setTimeout(() => {
        show.value = false;
      }, 50) as any;
    }

    function clearHide() {
      if (closeT != null) {
        clearTimeout(closeT);
        closeT = undefined;
      }
    }

    function handleMouseEnter(e: Event) {
      showFn(e.target as HTMLElement);
    }

    /** 鼠标离开事件 */
    function hanldeMouseLeave() {
      hideFn();
    }

    function close() {
      show.value = false;
    }

    function handleClick(e: Event) {
      const $target = e.currentTarget as HTMLElement;
      // 点击的不是 popover 元素，才切换 popover
      if (!$target.classList.contains('nt-popover')) {
        if (!show.value) {
          showFn(e.target as HTMLElement);
        } else {
          show.value = false;
        }
      } else {
        if (closeT != null) {
          clearTimeout(closeT);
          closeT = undefined;
        }
      }
    }

    function handleOutside() {
      hideFn();
    }

    expose({
      close,
    });

    return () => {
      const firstVNode = getFirstTriggerVNode(slots);

      const prop: any = {};
      if (props.visible == null) {
        if (props.trigger === 'hover') {
          prop.onMouseenter = handleMouseEnter;
          prop.onMouseleave = hanldeMouseLeave;
        } else {
          prop.onClick = handleClick;
        }
      }

      return [
        firstVNode
          ? props.trigger === 'click'
            ? withDirectives(h(firstVNode, prop), [
                [Clickoutside, handleOutside],
              ])
            : h(firstVNode, prop)
          : null,
        h(
          Teleport,
          { to: 'body' },
          h(
            Transition,
            { name: 'nt-opacity' },
            {
              default: () =>
                withDirectives(
                  h(
                    'div',
                    {
                      ...attrs,
                      class: [
                        'nt-popover',
                        `nt-popover-${place.value}`,
                        attrs.class,
                      ],
                      style: [attrs.style, posStyle.value],
                      ref: $popover,
                      ...prop,
                    },
                    [
                      slots.default != null
                        ? slots.default()
                        : props.content != null
                          ? h('span', props.content)
                          : null,
                      props.showArrow
                        ? h('span', { class: 'nt-popover-arrow' })
                        : null,
                    ],
                  ),
                  [[vShow, show.value]],
                ),
            },
          ),
        ),
      ];
    };
  },
});
</script>
