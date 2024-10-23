import { useLayoutEffect } from "react";
import { getDataLocal } from "../utils/func";
import PasskeySDK from "../common/controller";
const Provider = ({
	children,
	urlActiveAccount = "https://pass.w3w.app/activate-by-passkey/egglegamewallet",
	isDuplicateDomain = false,
}: {
	children: any;
	urlActiveAccount?: string;
	isDuplicateDomain?: false;
}) => {
	useLayoutEffect(() => {
		const dataLocal = getDataLocal("data-dapp");
		if (dataLocal) {
			PasskeySDK.createConnect(dataLocal);
		}
		PasskeySDK.urlActiveAccount = urlActiveAccount;
		PasskeySDK.isDuplicateDomain = isDuplicateDomain;
	}, []);

	return children;
};
export default Provider;
