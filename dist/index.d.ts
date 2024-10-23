import PasskeySDK from "./common/controller";
import { useConnect } from './hook/useConnect';
import { useDataSDK } from './hook/useDataSDK';
import { useSendTransactions } from './hook/useSendTransactions';
declare const DappPasskeySDK: ({ children, urlActiveAccount, isDuplicateDomain }: {
    children: any;
    urlActiveAccount?: string;
    isDuplicateDomain?: false;
}) => any;
export default DappPasskeySDK;
export { useConnect, useDataSDK, useSendTransactions, PasskeySDK };
