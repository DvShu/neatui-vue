import { ref } from 'vue';
import { cloneDeep } from '../utils';
import type { Ref } from 'vue';

/**
 * 数据重置, 通常用于表单
 *
 * @param params 表单数据
 * @returns
 */
export default function useFormReset<T>(params: T) {
  const formFields: Ref<T> = ref(cloneDeep(params));

  function resetFields() {
    formFields.value = cloneDeep(params);
  }

  /**
   * 设置单个 key 的值
   * @param key 指定的key
   * @param value 指定的值
   *
   * @example
   * set('age', 1);
   */
  function set(key: string, value: any): void;
  /**
   * 设置多个值
   * @param values 键值对数据
   *
   * @example
   * set({ age: 1, name: 'test'})
   */
  function set(values: Record<string, any>): void;
  function set(...args: any[]) {
    if (args.length === 1) {
      formFields.value = { ...formFields.value, ...args[0] };
    } else {
      formFields.value[args[0] as keyof T] = args[1];
    }
  }

  return { formFields, resetFields, set };
}
