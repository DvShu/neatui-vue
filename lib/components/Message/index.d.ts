/** 消息配置 */
interface MessageOption {
    /** 显示时间，单位为毫秒，默认为：3000。 设为 0 则不会自动关闭 */
    duration?: number;
    /** 显示的消息 */
    message: string;
    /** 消息类型：error、warning、success、info */
    type?: string;
    /** 宽度 */
    width?: string;
    /** 自定义类名 */
    "custom-class"?: string;
}
interface MessageInstance {
    (option: string | MessageOption): string;
    info: (msg: string | MessageOption) => string;
    warn: (msg: string | MessageOption) => string;
    success: (msg: string | MessageOption) => string;
    error: (msg: string | MessageOption) => string;
    show: (msg: string | MessageOption) => string;
    close: (id: string) => void;
    [index: string]: any;
}
declare const Message: MessageInstance;
export default Message;
