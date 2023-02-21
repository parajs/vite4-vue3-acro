export type KVObject = Record<string, any>

// 分页类型

export interface PageData {
    pageIndex: number;
    pageSize: number;
    total: number;
    list: Array<KVObject>;
}
