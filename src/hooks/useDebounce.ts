import { onUnmounted } from 'vue';

type noop = (...args: any[]) => any;
/**
 * 创建一个防抖动函数，该函数会在指定的时间间隔内忽略后续调用，并在最后一次调用后执行原始函数。
 * @param fn - 需要防抖动处理的函数。
 * @param interval - 防抖动的时间间隔，单位为毫秒，默认值为500毫秒。
 * @returns 返回一个新的防抖动函数。
 * @throws 如果传入的fn不是一个函数，则会抛出错误。
 * @example
 * const debouncedFunction = useDebounce(() => console.log('Debounced!'), 300);
 * window.addEventListener('scroll', debouncedFunction);
 */
export default function useDebounce<T extends noop>(fn: T, interval = 500) {
  let _t: number | null = null;

  function cancel() {
    if (_t != null) {
      clearTimeout(_t);
      _t = null;
    }
  }

  function debounce(...args: any[]) {
    cancel();
    _t = setTimeout(() => {
      fn(...args);
      _t = null;
    }, interval) as any;
  }

  onUnmounted(() => {
    cancel();
  });

  return { run: debounce, cancel };
}
