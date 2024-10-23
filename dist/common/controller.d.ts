export type typeConnectClient = {
    address?: string;
    groupSlug?: string;
    moreData: any;
    chaiId?: string | Number;
} | null;
declare class PasskeySDK {
    static createConnect(connectClient?: {
        address: string;
        groupSlug: string;
        moreData: {};
    }): void;
    static getConnect(): typeConnectClient;
    static logout(): void;
    static setUrlActiveAccount(url: string): void;
    static getUrlActiveAccount(): string;
    static setIsDuplicateDomain(value: boolean): void;
    static getIsDuplicateDomain(): boolean;
}
export default PasskeySDK;
