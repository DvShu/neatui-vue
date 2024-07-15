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

const XM_REG = /^(left)|(right)/;

function getFirstTriggerVNode(slots: any): VNode | null {
  if (slots.trigger != null) {
    return slots.trigger()[0];
  }
  return null;
}

/** 获取某个节点距离容器顶部和左边的距离 */
function getDistanceToContainer(el: HTMLElement) {
  let offsetLeft = 0;
  let offsetTop = 0;
  let top = 0;
  let bottom = 0;
  let left = 0;
  let right = 0;
  while (el) {
    const rect = el.getBoundingClientRect();
    offsetTop += el.offsetTop;
    offsetLeft += el.offsetLeft;
    top = rect.top;
    bottom = rect.bottom;
    left = rect.left;
    right = rect.right;
    el = el.offsetParent as HTMLElement;
  }

  return { offsetLeft, offsetTop, top, bottom, left, right };
}

export default defineComponent({
  props: popoverProps,
  setup(props, { slots, attrs }) {
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
        const { offsetLeft, offsetTop, top, left } =
          getDistanceToContainer($target);
        let topDiff = 0;
        let leftDiff = 0;
        let tmpPlace = props.placement;
        if ($popover.value != null) {
          const popoverRect = $popover.value.getBoundingClientRect();
          const targetRect = $target.getBoundingClientRect();
          if (props.placement.startsWith('top')) {
            topDiff = popoverRect.height + 8;
          } else if (props.placement.startsWith('bottom')) {
            topDiff = -(targetRect.height + 8);
          } else if (
            props.placement === 'left' ||
            props.placement === 'right'
          ) {
            topDiff = popoverRect.height / 2 - targetRect.height / 2;
          } else if (
            props.placement === 'leftBottom' ||
            props.placement === 'rightBottom'
          ) {
            topDiff = popoverRect.height - targetRect.height;
          }

          if (props.placement.startsWith('left')) {
            leftDiff = popoverRect.width + 8;
          } else if (props.placement.startsWith('right')) {
            leftDiff = -(targetRect.width + 8);
          } else if (
            props.placement === 'top' ||
            props.placement === 'bottom'
          ) {
            leftDiff = popoverRect.width / 2 - targetRect.width / 2;
          } else if (
            props.placement === 'bottomRight' ||
            props.placement === 'topRight'
          ) {
            leftDiff = popoverRect.width - targetRect.width;
          }

          const posLeft = offsetLeft - leftDiff;
          let xPos = '';
          let yPos = '';

          if (
            offsetTop - topDiff + popoverRect.height >=
            Math.abs(top) + window.innerHeight - 15
          ) {
            if (props.placement.match(XM_REG)) {
              yPos = 'bottom';
              topDiff = popoverRect.height - targetRect.height;
            } else {
              yPos = 'top';
              topDiff = popoverRect.height + 8;
            }
          }
          if (offsetTop - topDiff <= Math.abs(top)) {
            if (props.placement.match(XM_REG)) {
              yPos = 'top';
              topDiff = 0;
            } else {
              yPos = 'bottom';
              topDiff = -(targetRect.height + 8);
            }
          }

          if (posLeft <= Math.abs(left)) {
            xPos = 'right';
            leftDiff = -(targetRect.width + 8);
          }
          if (
            posLeft + popoverRect.width >=
            Math.abs(left) + window.innerWidth - 15
          ) {
            xPos = 'left';
            leftDiff = popoverRect.width + 8;
          }
          if (xPos === '' && yPos === '') {
            tmpPlace = props.placement;
          } else {
            if (xPos === '') {
              if (props.placement.match(/left/i)) {
                xPos = 'left';
              } else if (props.placement.match(/right/i)) {
                xPos = 'right';
              }
            }
            if (yPos === '') {
              if (props.placement.match(/top/i)) {
                yPos = 'top';
              }
              if (props.placement.match(/bottom/i)) {
                yPos = 'bottom';
              }
            }
            if (props.placement.match(/^(left)|(right)/)) {
              const yName =
                yPos === '' ? '' : yPos[0].toUpperCase() + yPos.substring(1);
              tmpPlace = `${xPos}${yName}` as any;
            } else if (props.placement.match(/^(top)|(bottom)/)) {
              const xName =
                xPos === '' ? '' : xPos[0].toUpperCase() + xPos.substring(1);
              tmpPlace = `${yPos}${xName}` as any;
            }
          }
        }
        const posTop = round(offsetTop - topDiff);
        const posLeft = round(offsetLeft - leftDiff);
        posStyle.value = {
          top: `${posTop}px`,
          left: `${posLeft}px`,
        };
        place.value = tmpPlace;
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
                      h('span', { class: 'nt-popover-arrow' }),
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
