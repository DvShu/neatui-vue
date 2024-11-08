import type { DirectiveBinding, ObjectDirective } from 'vue';

/** 判断是否是 HTMLElement */
function isElement(el: unknown): el is Element {
  return el instanceof Element;
}

/** 判断节点是否被排除 */
function isExcluded(excludes: HTMLElement[], target: HTMLElement) {
  let excluded = false;
  if (excludes.length) {
    excluded = excludes.some((item) => {
      return item == null ? false : item.contains(target);
    });
    if (!excluded) {
      excluded = excludes.includes(target);
    }
  }
  return excluded;
}

/** 事件处理函数 */
type ClickHandler = (e: Event) => void;
/** 绑定的函数类型 */
type BingFunc = (e: Event) => void;

/** 事件处理项 */
interface HandlerItem {
  /** 事件处理函数 */
  documentHandler: ClickHandler;
  /** 绑定的函数 */
  bindingFn: BingFunc;
}

/** 列表保存所有添加了指令的节点处理 */
const nodeList = new Map<HTMLElement, HandlerItem[]>();

/**
 * 监听文档的点击事件
 */
if (!(import.meta as any).env.SSR) {
  document.addEventListener(
    'click',
    (e: Event) => {
      // 遍历依次处理事件
      for (const handlers of nodeList.values()) {
        for (const { documentHandler } of handlers) {
          documentHandler(e);
        }
      }
    },
    true,
  );
}

/** 创建自定义指令事件处理 */
function createDocumentHandler(
  el: HTMLElement,
  binding: DirectiveBinding,
): ClickHandler {
  let excludes: HTMLElement[] = [];
  if (Array.isArray(binding.arg)) {
    excludes = binding.arg;
  } else if (isElement(binding.arg)) {
    excludes.push(binding.arg as unknown as HTMLElement);
  }
  return (e: Event) => {
    const target = e.target as HTMLElement;
    const isBinging = !binding || !binding.instance;
    // 验证节点是否存在
    const isTargetExists = !target;
    // 节点是否被绑定节点所包含
    const isContainedByEl = el.contains(target);
    // 点击的是否就是绑定指令的节点
    const isSelf = el === target;
    // 判断节点是否被排除
    const isExcludedEl = isExcluded(excludes, target);
    if (
      isBinging ||
      isTargetExists ||
      isContainedByEl ||
      isSelf ||
      isExcludedEl
    ) {
      return;
    }
    binding.value(e);
  };
}

const clickOutside: ObjectDirective = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    const handlers = nodeList.get(el) as any;
    handlers.push({
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value,
    });
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    const handlers = nodeList.get(el) as any;
    const oldHandlerIndex = handlers.findIndex(
      (item: any) => item.bindingFn === binding.oldValue,
    );
    const newHandler = {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value,
    };
    if (oldHandlerIndex >= 0) {
      // replace the old handler to the new handler
      handlers.splice(oldHandlerIndex, 1, newHandler);
    } else {
      handlers.push(newHandler);
    }
  },
  unmounted(el: HTMLElement) {
    nodeList.delete(el);
  },
};

export default clickOutside;
