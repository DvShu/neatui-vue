import type { DirectiveBinding } from 'vue';
import { elem } from 'ph-utils/dom';

function addLoading(el: HTMLElement, modifiers: Record<string, boolean>) {
  el.classList.add('nt-loading');
  const $mask = document.createElement('div');
  $mask.className = 'nt-loading-mask';

  const bg = el.getAttribute('nt-loading-background');
  if (bg != null) {
    $mask.style.backgroundColor = bg;
  }

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

  let text = el.getAttribute('nt-loading-text');
  if (text == null) {
    text = '加载中……';
  }
  console.log(text);
  if (text !== '' && text !== 'false' && text !== '0') {
    const $text = document.createElement('p');
    $text.className = 'nt-loading-text';
    $text.textContent = text;
    $spinner.appendChild($text);
  }
  $mask.appendChild($spinner);

  el.appendChild($mask);

  setTimeout(() => {
    $mask.style.opacity = '1';
  }, 0);
}

function removeLoading(el: HTMLElement, modifiers: Record<string, boolean>) {
  const $mask = elem('.nt-loading-mask', el)[0];
  if ($mask) {
    $mask.addEventListener(
      'transitionend',
      () => {
        el.classList.remove('nt-loading');
        el.removeChild($mask);
      },
      { once: true },
    );
    $mask.style.opacity = '0';
  }
}

const LoadingDirective = (el: HTMLElement, binding: DirectiveBinding) => {
  const { value, modifiers } = binding;
  if (value) {
    addLoading(el, modifiers);
  } else {
    removeLoading(el, modifiers);
  }
};

export default LoadingDirective;
