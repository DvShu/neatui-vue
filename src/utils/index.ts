/**
 * 获取 body 元素通过 style 属性设置的 overflow 值
 * @returns
 */
export function getBodyOverflow() {
  const styleMatch = document.body
    .getAttribute('style')
    ?.match(/overflow:\s?([a-z]+);?/);
  return styleMatch ? styleMatch[1] : '';
}
