import { ref } from 'vue';
import { cloneDeep } from '../utils';

/**
 * 数据重置, 通常用于表单
 *
 * @param params 表单数据
 * @returns
 */
export default function useFormReset<T extends Record<string, any>>(params: T) {
  const formFields = ref<T>(cloneDeep(params));

  function resetFields() {
    formFields.value = cloneDeep(params);
  }

  return { formFields, resetFields };
}
