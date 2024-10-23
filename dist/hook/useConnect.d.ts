export declare const useConnect: () => {
    connect: () => void;
    logout: () => void;
    error: any;
    data: {
        address?: string;
        groupSlug?: string;
        moreData?: any;
        chaiId?: string | Number;
    };
    loading: any;
    isConnected: boolean;
};
