import { inject, computed, toValue } from 'vue';
import {
  formDisabledContext,
  formItemDisabledContext,
} from '../utils/constant.js';
import type { MaybeRefOrGetter } from 'vue';

export default function useDisabled(
  disabled?: MaybeRefOrGetter<boolean | undefined>,
) {
  const formDisabled = inject(formDisabledContext);
  const formItemDisabeld = inject(formItemDisabledContext);

  const isDisabled = computed(() => {
    if (toValue(disabled) != null) return toValue<boolean>(disabled as boolean);
    if (toValue(formItemDisabeld) != null)
      return toValue<boolean>(formItemDisabeld as boolean);
    if (toValue(formDisabled) != null)
      return toValue<boolean>(formDisabled as boolean);
  });

  return isDisabled;
}
