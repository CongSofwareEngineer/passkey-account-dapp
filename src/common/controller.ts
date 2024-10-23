import { removeDataLocal, saveDataLocal } from "../utils/func";

export type typeConnectClient = {
	address?: string;
	groupSlug?: string;
	moreData?: any;
	chaiId?: string | Number;
} | null;

let connect: typeConnectClient = null;

class PasskeySDK {
	static urlActiveAccount =
		"https://pass.w3w.app/activate-by-passkey/egglegamewallet";
	static isDuplicateDomain = false;

	static createConnect(
		connectClient = {
			address: "",
			groupSlug: "",
			moreData: {},
		}
	) {
		connect = connectClient;

		saveDataLocal("data-dapp", connectClient);
	}

	static getConnect(): typeConnectClient {
		return connect;
	}

	static logout() {
		connect = null;
		removeDataLocal("data-dapp");
	}
}
export default PasskeySDK;
