type typeRawData = {
    amount: number;
    to: string;
    chainId: number;
    value: string;
    data: string;
};
export declare const useSendTransactions: () => {
    data: string;
    error: any;
    loading: boolean;
    sendTransactions: (param: typeRawData) => Promise<void>;
};
export {};
