import { useState, useEffect } from "react";
import PasskeySDK from "../common/controller";
import { sendMessageToParent, viewExternal } from "../utils/func";
import { TYPE_METHOD_DAPP } from "../common/constance";
import { useDataSDK } from "./useDataSDK";

export const useConnect = () => {
	const [error, setError] = useState(null);
	const { data, setData } = useDataSDK();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		window.addEventListener("message", receiveDAPPMessage, false);
		return () => {
			window.removeEventListener("message", receiveDAPPMessage, false);
		};
	}, []);

	const connect = () => {
		try {
			setLoading(true);
      setError(null)
			if (
				window.location.href.includes(window.parent?.origin) &&
				!PasskeySDK.getIsDuplicateDomain()
			) {
				viewExternal(PasskeySDK.getUrlActiveAccount());
			} else {
				sendMessageToParent({
					id: TYPE_METHOD_DAPP.connect,
					data: "connect",
				});
			}
		} catch (error) {
			sendMessageToParent({
				id: TYPE_METHOD_DAPP.connect,
				data: "connect",
			});
		}
	};

	const logout = () => {
		PasskeySDK.logout();
		setError(null);
		setData(null);
	};

	const receiveDAPPMessage = async (event:any) => {
		const dataParent = event.data;
		if (TYPE_METHOD_DAPP.connect === dataParent?.id) {
			console.log({ dataParent });
			setLoading(false);
			if (!dataParent?.error) {
				setError(null);
				const dataLocal = {
					...data,
					...dataParent.result,
				};
				PasskeySDK.createConnect(dataLocal);
				setData(dataLocal);
			} else {
				setError(dataParent?.error);
			}
		}
	};

	return {
		connect,
		logout,
		error,
		data,
		loading,
		isConnected: !!data,
	};
};
