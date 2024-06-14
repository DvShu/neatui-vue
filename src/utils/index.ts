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

function cloneDeepObject(obj: any) {
  const newObj: any = {};
  for (const key in obj) {
    let value = obj[key];
    if (value != null && typeof value === 'object') {
      if (value instanceof Array) {
        value = cloneDeepArray(value);
      } else {
        value = cloneDeepObject(value);
      }
    }
    newObj[key] = value;
  }
  return newObj;
}

function cloneDeepArray(arr: any[]) {
  const newArr: any[] = [];
  for (const item of arr) {
    if (item != null && typeof item === 'object') {
      if (item instanceof Array) {
        newArr.push(cloneDeepArray(item));
      } else {
        newArr.push(cloneDeepObject(item));
      }
    } else {
      newArr.push(item);
    }
  }
  return newArr;
}

/**
 * 对象的深度拷贝(深度解构赋值)
 * @param {Object} obj 待拷贝的对象, 可以是对象也可以是列表
 * @returns
 */
export function cloneDeep(obj: any) {
  if (typeof obj === 'object') {
    if (globalThis.structuredClone != null) {
      return globalThis.structuredClone(obj);
    }
    if (obj instanceof Array) {
      return cloneDeepArray(obj);
    } else {
      return cloneDeepObject(obj);
    }
  }
  return obj;
}
