import type { DirectiveBinding, Ref } from 'vue';
import { elem } from 'ph-utils/dom';
import { isRef } from 'vue';

function addLoading(
  el: HTMLElement,
  modifiers: Record<string, boolean | string>,
  arg?: string,
) {
  let $mask: HTMLElement;
  if (modifiers.fullscreen) {
    // 全屏组件唯一
    $mask = elem('#nt-loading-mask')[0];
    if ($mask != null) return;
  }
  el.classList.add('nt-loading');
  $mask = document.createElement('div');
  $mask.className = 'nt-loading-mask';

  let bg = el.getAttribute('nt-loading-background');
  if (bg == null) {
    bg = modifiers.bg as string;
  }
  if (bg != null && bg != '') {
    $mask.style.backgroundColor = bg;
  }

  const $spinner = document.createElement('div');
  $spinner.className = 'nt-loading-spinner';

  if (arg === 'bar') {
    $mask.classList.add('nt-loading-bar');
  } else {
    const $circular = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg',
    );
    $circular.setAttribute('viewBox', '0 0 50 50');
    $circular.classList.add('circle');
    const $path = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'circle',
    );
    $path.classList.add('path');
    $path.setAttribute('cx', '25');
    $path.setAttribute('cy', '25');
    $path.setAttribute('r', '23');
    $path.setAttribute('fill', 'none');
    $circular.appendChild($path);
    $spinner.appendChild($circular);

    let text = el.getAttribute('nt-loading-text');
    if (text == null) {
      text = modifiers.text as string;
    }
    if (text == null) {
      text = '加载中……';
    }
    if (text !== '' && text !== 'false' && text !== '0') {
      const $text = document.createElement('p');
      $text.className = 'nt-loading-text';
      $text.textContent = text;
      $spinner.appendChild($text);
    }
  }

  $mask.appendChild($spinner);

  // 全屏加载
  if (modifiers.fullscreen) {
    const fullClasses = ['nt-loading-fullscreen'];
    if (modifiers.unlock !== true) {
      fullClasses.push('nt-loading-lock');
    }
    el.classList.add(...fullClasses);
    // 全屏保证唯一, 设置id用于区分
    $mask.id = 'nt-loading-mask';
  }
  el.appendChild($mask);

  setTimeout(() => {
    if (arg === 'bar') {
      $mask.classList.add('nt-loading-bar--start');
    } else {
      $mask.style.opacity = '1';
    }
  }, 0);
}

function removeLoading(
  el: HTMLElement,
  modifiers: Record<string, boolean | string>,
  arg?: string,
) {
  const selectorPrefix = modifiers.fullscreen ? '#' : '.';
  let $mask = elem(`${selectorPrefix}nt-loading-mask`, el)[0];
  if ($mask) {
    function transitionEnd() {
      el.classList.remove(
        'nt-loading',
        'nt-loading-lock',
        'nt-loading-fullscreen',
        'nt-loading-bar--finish',
        'nt-loading-bar--start',
      );
      if ($mask != null) {
        el.removeChild($mask);
        $mask = undefined as any;
      }
    }
    $mask.addEventListener(
      'transitionend',
      () => {
        transitionEnd();
      },
      { once: true },
    );
    if (arg === 'bar') {
      el.classList.add('nt-loading-bar--finish');
    } else {
      $mask.style.opacity = '0';
    }
    // 检测避免因为错误导致无法移除
    setTimeout(() => {
      transitionEnd();
    }, 350);
  }
}

interface LoadingInstanceOption {
  fullscreen?: boolean;
  unlock?: boolean;
  bar?: boolean;
  to?: string | HTMLElement | Ref<HTMLElement> | null;
  text?: string;
  background?: string;
}

class LoadingInstance {
  /** 加载条节点 */
  public el!: HTMLElement;
  public option!: Required<Omit<LoadingInstanceOption, 'to'>>;
  /**
   * 构建加载条
   * @param to 加载条挂载位置, 不传则挂载到 body
   */
  public constructor(option?: LoadingInstanceOption) {
    this.option = {
      fullscreen: true,
      unlock: false,
      bar: false,
      text: '加载中……',
      background: '',
      ...option,
    };
    const to = (option || {}).to;
    let toElem: HTMLElement | null = null;
    if (to != null) {
      if (typeof to === 'string') {
        toElem = document.querySelector(to);
      } else {
        if (isRef(to)) {
          toElem = to.value;
        } else {
          toElem = to;
        }
      }
    }
    if (toElem == null) {
      toElem = document.body;
    }
    if (toElem.tagName !== 'BODY') {
      this.option.fullscreen = false;
    }
    this.el = toElem;
    addLoading(this.el, this.option, this.option.bar ? 'bar' : '');
  }

  public close() {
    removeLoading(this.el, this.option, this.option.bar ? 'bar' : '');
  }
}
const LoadingDirective = (el: HTMLElement, binding: DirectiveBinding) => {
  const { value, modifiers, arg } = binding;
  const $el = modifiers.fullscreen ? document.body : el;
  if (value) {
    addLoading($el, modifiers, arg);
  } else {
    removeLoading($el, modifiers, arg);
  }
};

LoadingDirective.open = (option?: LoadingInstanceOption) => {
  return new LoadingInstance(option);
};

export default LoadingDirective;
