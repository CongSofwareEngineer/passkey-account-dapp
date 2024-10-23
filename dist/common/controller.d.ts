export type typeConnectClient = {
    address?: string;
    groupSlug?: string;
    moreData?: any;
    chaiId?: string | Number;
} | null;
declare class PasskeySDK {
    static urlActiveAccount: string;
    static isDuplicateDomain: boolean;
    static createConnect(connectClient?: {
        address: string;
        groupSlug: string;
        moreData: {};
    }): void;
    static getConnect(): typeConnectClient;
    static logout(): void;
}
export default PasskeySDK;
