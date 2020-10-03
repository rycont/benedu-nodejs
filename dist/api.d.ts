import FormData from 'form-data';
export declare let fetch: any;
export declare const setFetch: (f: any) => any;
declare const _default: {
    get(uri: string, formdata?: FormData | undefined): Promise<any>;
    text(uri: string, config?: {
        [key: string]: string;
    } | undefined): Promise<any>;
    html(uri: string, config?: {
        [key: string]: string;
    } | undefined): Promise<import("fast-html-parser").HTMLElement>;
    json(uri: string, config?: {
        [key: string]: string;
    } | undefined): Promise<any>;
};
export default _default;
