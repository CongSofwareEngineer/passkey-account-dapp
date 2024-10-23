export declare const sendMessageToParent: (message?: {
    jsonrpc?: string;
    id?: string;
    data?: any;
}) => void;
export declare const saveDataLocal: (key: string, data: any) => void;
export declare const getDataLocal: (key: string, defaultValue?: boolean, parseValue?: boolean) => any;
export declare const removeDataLocal: (key: string) => void;
export declare const viewExternal: (url: string) => void;
