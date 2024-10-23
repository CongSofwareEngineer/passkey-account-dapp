export declare const useSendTransactions: () => {
    data: any;
    error: any;
    loading: any;
    sendTransactions: (rawData?: {
        amount: number;
        to: string;
        chainId: number;
        value: string;
        data: string;
    }) => Promise<void>;
};
