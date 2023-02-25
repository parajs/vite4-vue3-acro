/// <reference types="vite/client" />


declare interface Window {
    __router: Router;
    __t: Router;
    __app: App;
    __i18n: I18n;
}

declare const __router: Router;
declare const __t: Router;
declare const __app: App;
declare const __i18n: I18n;

declare interface PageData {
    pageIndex?: number;
    pageSize?: number;
    total?: number;
    list?: Array<KVObject>;
}

declare type KVObject = Record<string, any>
