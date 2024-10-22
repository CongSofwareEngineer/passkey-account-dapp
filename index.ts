import PasskeySDK from "./common/controller";
import { getDataLocal } from "./utils/func";

import { useLayoutEffect } from "react";

const DappPasskeySDK = ({
	children,
	urlActiveAccount = "https://pass.w3w.app/activate-by-passkey/egglegamewallet",
}: {
	children: any;
	urlActiveAccount: string;
}) => {
	useLayoutEffect(() => {
		const dataLocal = getDataLocal("data-dapp");
		if (dataLocal) {
			PasskeySDK.createConnect(dataLocal);
		}
		PasskeySDK.setUrlActiveAccount(urlActiveAccount);
	}, []);

	return children;
};

export default DappPasskeySDK;
