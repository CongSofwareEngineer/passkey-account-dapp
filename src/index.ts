 

import { useLayoutEffect } from "react";
import { getDataLocal } from "./utils/func";
import PasskeySDK from "./common/controller";
import { useConnect } from './hook/useConnect';
import {useDataSDK} from './hook/useDataSDK';
import { useSendTransactions } from './hook/useSendTransactions';

const DappPasskeySDK = ({
	children,
	urlActiveAccount = "https://pass.w3w.app/activate-by-passkey/egglegamewallet",
	isDuplicateDomain=false
}: {
	children: any
	urlActiveAccount?: string
	isDuplicateDomain?:false
}) => {
	useLayoutEffect(() => {
		const dataLocal = getDataLocal("data-dapp");
		if (dataLocal) {
			PasskeySDK.createConnect(dataLocal);
		}
		PasskeySDK.setUrlActiveAccount(urlActiveAccount);
		PasskeySDK.setIsDuplicateDomain(isDuplicateDomain);
	}, []);

	return children;
};

export default DappPasskeySDK;

export {
	useConnect,
	useDataSDK,
	useSendTransactions,
	PasskeySDK
}
