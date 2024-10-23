import { useState, useEffect } from "react";
import { useDataSDK } from "./useDataSDK";
import { TYPE_METHOD_DAPP } from "../common/constance";

type typeRawData = {
	amount: number;
	to: string;
	chainId: number;
	value: string;
	data: string;
};
export const useSendTransactions = (): {
	data: string;
	error: any;
	loading: boolean;
	sendTransactions: (param: typeRawData) => Promise<void>;
} => {
	const { data: dataConnect } = useDataSDK();
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [hash, setHash] = useState("");

	const sendTransactions = async (
		rawData = {
			amount: 0,
			to: "0x",
			chainId: 137,
			value: "0x",
			data: "0x",
		}
	) => {
		setLoading(true);
		setError(null);
		setHash(null);
		const {
			amount = 0,
			to = "0x",
			chainId = dataConnect?.chaiId || 137,
			value = "0x",
			data = "0x",
		} = rawData;

		window.parent.postMessage(
			{
				jsonrpc: "2.0",
				id: TYPE_METHOD_DAPP.ETH_SEND_TRANSACTION,
				data: {
					rawTransactions: {
						amount,
						to,
						chainId,
						value,
						data,
					},
				},
			},
			"*"
		);
	};

	const receiveDAPPMessage = async (event: any) => {
		const dataParent = event.data;

		if (TYPE_METHOD_DAPP.ETH_SEND_TRANSACTION === dataParent?.id) {
			setLoading(false);

			if (dataParent?.error) {
				setError(dataParent?.error);
			} else {
				setHash(dataParent.result?.hash);
			}
		}
	};

	useEffect(() => {
		window.addEventListener("message", receiveDAPPMessage, false);
		return () => {
			window.removeEventListener("message", receiveDAPPMessage, false);
		};
	}, []);

	return {
		data: hash,
		error,
		loading,
		sendTransactions,
	};
};
