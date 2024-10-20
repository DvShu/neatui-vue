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

/**
 * 获取悬浮窗 y 偏移
 * @param targetRect
 * @param popoverRect
 * @param mainAlign
 * @param crossAlign
 * @returns
 */
export function getPopoverOffsetY(
  targetRect: DOMRect,
  popoverRect: DOMRect,
  mainAlign: string,
  crossAlign: string,
) {
  let topDiff = 0;
  // 计算 垂直 偏移
  if (mainAlign === 'top') {
    topDiff = popoverRect.height + 8;
  } else if (mainAlign === 'bottom') {
    topDiff = -(targetRect.height + 8);
  } else if (mainAlign === 'left' || mainAlign === 'right') {
    if (crossAlign === '') {
      topDiff = popoverRect.height / 2 - targetRect.height / 2;
    } else if (crossAlign === 'End') {
      topDiff = popoverRect.height - targetRect.height;
    }
  }
  return topDiff;
}

export function getPopoverOffsetX(
  targetRect: DOMRect,
  popoverRect: DOMRect,
  mainAlign: string,
  crossAlign: string,
) {
  let leftDiff = 0;
  // 计算 水平 偏移
  if (mainAlign === 'left') {
    leftDiff = popoverRect.width + 8;
  } else if (mainAlign === 'right') {
    leftDiff = -(targetRect.width + 8);
  } else if (mainAlign === 'top' || mainAlign === 'bottom') {
    if (crossAlign === '') {
      leftDiff = popoverRect.width / 2 - targetRect.width / 2;
    } else if (crossAlign === 'End') {
      leftDiff = popoverRect.width - targetRect.width;
    }
  }
  return leftDiff;
}

export function impactDetect(
  targetRect: DOMRect,
  popoverRect: DOMRect,
  mainAlign: string,
  crossAlign: string,
  scrollLeft: number,
  scrollTop: number,
  leftDiff: number,
  topDiff: number,
) {
  const maxHeight = window.innerHeight + scrollTop - 10;
  const maxWidth = window.innerWidth + scrollLeft - 10;
  // 判断 垂直 方向是否在显示区域内
  let y = targetRect.top + scrollTop - topDiff;
  let yEnd = y + popoverRect.height;
  // 1. 首先判断下边界是否超出屏幕
  if (yEnd > maxHeight) {
    // 下边距超出屏幕
    if (mainAlign === 'left' || mainAlign === 'right') {
      crossAlign = 'End';
    } else {
      mainAlign = 'top';
    }
    topDiff = getPopoverOffsetY(targetRect, popoverRect, mainAlign, crossAlign);
    y = targetRect.top + scrollTop - topDiff;
  }

  // 2. 判断上边界是否超出屏幕
  if (y < scrollTop) {
    // 上边距超出屏幕
    if (mainAlign === 'left' || mainAlign === 'right') {
      crossAlign = 'Start';
    } else {
      mainAlign = 'bottom';
    }
    topDiff = getPopoverOffsetY(targetRect, popoverRect, mainAlign, crossAlign);
    y = targetRect.top + scrollTop - topDiff;
  }

  // 判断 水平 方向是否在显示区域内
  // 1. 首先判断右边界是否超出屏幕
  let x = targetRect.left + scrollLeft - leftDiff;
  let xEnd = x + popoverRect.width;
  if (xEnd > maxWidth) {
    // 右边距超出屏幕
    if (mainAlign === 'top' || mainAlign === 'bottom') {
      crossAlign = 'End';
    } else {
      mainAlign = 'left';
    }
    leftDiff = getPopoverOffsetX(
      targetRect,
      popoverRect,
      mainAlign,
      crossAlign,
    );
    x = targetRect.left + scrollLeft - leftDiff;
  }

  // 2. 判断左边界是否超出屏幕
  if (x < scrollLeft) {
    // 左边距超出屏幕
    if (mainAlign === 'top' || mainAlign === 'bottom') {
      crossAlign = 'Start';
    } else {
      mainAlign = 'right';
    }
    leftDiff = getPopoverOffsetX(
      targetRect,
      popoverRect,
      mainAlign,
      crossAlign,
    );
    x = targetRect.left + scrollLeft - leftDiff;
  }
  topDiff = getPopoverOffsetY(targetRect, popoverRect, mainAlign, crossAlign);
  leftDiff = getPopoverOffsetX(targetRect, popoverRect, mainAlign, crossAlign);
  x = targetRect.left + scrollLeft - leftDiff;
  y = targetRect.top + scrollTop - topDiff;
  return {
    x,
    y,
    mainAlign,
    crossAlign,
  };
}
