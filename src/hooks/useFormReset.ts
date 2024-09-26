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

  return { formFields, resetFields };
}
