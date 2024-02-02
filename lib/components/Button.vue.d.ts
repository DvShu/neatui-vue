declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * 设置按钮类型；primary, text, normal
     */
    type?: "text" | "primary" | "normal" | undefined;
    /** 是否禁用状态 */
    disabled?: boolean | undefined;
    /** 原生的 type 属性 */
    htmlType?: "button" | "reset" | "submit" | undefined;
    /** 按钮是否适合其父宽度(宽度100%) */
    block?: boolean | undefined;
    /** 是否是圆形按钮 */
    circle?: boolean | undefined;
    /** 是否是弧形按钮 */
    round?: boolean | undefined;
    /** 加载的时候显示的文本 */
    loadingText?: string | undefined;
    /** 是否处于加载状态 */
    loading?: boolean | undefined;
}>, {
    type: string;
    disabled: boolean;
    htmlType: string;
    block: boolean;
    circle: boolean;
    round: boolean;
    loadingText: string;
    loading: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * 设置按钮类型；primary, text, normal
     */
    type?: "text" | "primary" | "normal" | undefined;
    /** 是否禁用状态 */
    disabled?: boolean | undefined;
    /** 原生的 type 属性 */
    htmlType?: "button" | "reset" | "submit" | undefined;
    /** 按钮是否适合其父宽度(宽度100%) */
    block?: boolean | undefined;
    /** 是否是圆形按钮 */
    circle?: boolean | undefined;
    /** 是否是弧形按钮 */
    round?: boolean | undefined;
    /** 加载的时候显示的文本 */
    loadingText?: string | undefined;
    /** 是否处于加载状态 */
    loading?: boolean | undefined;
}>, {
    type: string;
    disabled: boolean;
    htmlType: string;
    block: boolean;
    circle: boolean;
    round: boolean;
    loadingText: string;
    loading: boolean;
}>>>, {
    type: "text" | "primary" | "normal";
    circle: boolean;
    htmlType: "button" | "reset" | "submit";
    disabled: boolean;
    block: boolean;
    round: boolean;
    loadingText: string;
    loading: boolean;
}, {}>, {
    default?(_: {}): any;
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
