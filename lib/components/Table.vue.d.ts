import { PropType } from 'vue';
import type { VNode } from 'vue';
export interface ColumnOption {
    /** 排序时，如果传递了 key，则会将此 key 回传，便于排序, 如果不传此 key，则排序无效 */
    key?: string;
    /** 文本 */
    title: string;
    /** 是否启用排序 */
    sorter?: boolean;
    /** 默认的排序方式 */
    defaultSortOrder?: 'asc' | 'desc';
    /** 是否固定列 */
    fixed?: 'left' | 'right';
    /** 列宽 */
    width?: string | number;
    render?: (row: any, index: number) => VNode | VNode[];
}
export interface DataSortState {
    key: string;
    index: number;
    order: 'asc' | 'desc';
}
declare const _default: import("vue").DefineComponent<{
    columns: {
        type: PropType<ColumnOption[]>;
        required: true;
    };
    /** 创建带斑马纹的表格 */
    stripe: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    /** 是否固定表头 */
    fixedHead: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    data: {
        type: PropType<any[]>;
        required: true;
    };
    columnKey: {
        type: StringConstructor;
        required: false;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "sort-change"[], "sort-change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    columns: {
        type: PropType<ColumnOption[]>;
        required: true;
    };
    /** 创建带斑马纹的表格 */
    stripe: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    /** 是否固定表头 */
    fixedHead: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    data: {
        type: PropType<any[]>;
        required: true;
    };
    columnKey: {
        type: StringConstructor;
        required: false;
    };
}>> & {
    "onSort-change"?: ((...args: any[]) => any) | undefined;
}, {
    stripe: boolean;
    fixedHead: boolean;
}, {}>;
export default _default;
