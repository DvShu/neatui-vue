import type { InjectionKey, ModelRef } from 'vue';

export const tabbarContext = Symbol('tabbarContext') as InjectionKey<{
  active: ModelRef<unknown, string>;
  change: (name: string | number) => void;
}>;
