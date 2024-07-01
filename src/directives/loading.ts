import type { DirectiveBinding, ObjectDirective } from 'vue';

const LoadingDirective: ObjectDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding;
    if (value) {
      el.classList.add('nt-loading');
      const $mask = document.createElement('div');
      $mask.classList.add('nt-loading-mask');

      el.appendChild($mask);
    }
  },
};

export default LoadingDirective;
