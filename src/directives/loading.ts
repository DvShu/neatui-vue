import type { DirectiveBinding, ObjectDirective } from 'vue';

const LoadingDirective: ObjectDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding;
    if (value) {
      el.classList.add('nt-loading');
      const $mask = document.createElement('div');
      $mask.className = 'nt-loading-mask';

      const $spinner = document.createElement('div');
      $spinner.className = 'nt-loading-spinner';

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
      $mask.appendChild($spinner);

      el.appendChild($mask);
    }
  },
};

export default LoadingDirective;
