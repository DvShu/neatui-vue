declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    title?: string | undefined;
    /** 提示框的边框位置, 默认为 'top' */
    placement?: "top" | "topStart" | "topEnd" | "bottomStart" | "bottom" | "bottomEnd" | undefined;
}>, {
    placement: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    title?: string | undefined;
    /** 提示框的边框位置, 默认为 'top' */
    placement?: "top" | "topStart" | "topEnd" | "bottomStart" | "bottom" | "bottomEnd" | undefined;
}>, {
    placement: string;
}>>>, {
    placement: "top" | "topStart" | "topEnd" | "bottomStart" | "bottom" | "bottomEnd";
}, {}>, {
    default?(_: {}): any;
    title?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
