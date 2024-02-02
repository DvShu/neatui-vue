declare function close(): void;
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** 关闭时的回调函数 */
    onClose: () => void;
    /** 消息显示持续时间, 单位为毫秒。设为 0 则不会自动关闭，默认为3000 */
    duration?: number | undefined;
    /** 消息类型, info, success, warn, error */
    type?: string | undefined;
    customClass?: string | undefined;
    zindex?: number | undefined;
    offset?: number | undefined;
    message: string;
    id: string;
    width?: string | undefined;
}>, {
    duration: number;
    type: string;
    customClass: string;
    zindex: number;
    offset: number;
    width: string;
}>, {
    close: typeof close;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    destroy: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** 关闭时的回调函数 */
    onClose: () => void;
    /** 消息显示持续时间, 单位为毫秒。设为 0 则不会自动关闭，默认为3000 */
    duration?: number | undefined;
    /** 消息类型, info, success, warn, error */
    type?: string | undefined;
    customClass?: string | undefined;
    zindex?: number | undefined;
    offset?: number | undefined;
    message: string;
    id: string;
    width?: string | undefined;
}>, {
    duration: number;
    type: string;
    customClass: string;
    zindex: number;
    offset: number;
    width: string;
}>>> & {
    onDestroy?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    duration: number;
    customClass: string;
    zindex: number;
    offset: number;
    width: string;
}, {}>;
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
