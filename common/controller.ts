import { removeDataLocal, saveDataLocal } from "../utils/func";

 

export type typeConnectClient = {
	address?: string;
	groupSlug?: string;
	moreData: any;
	chaiId?: string | Number;
} | null;

let connect: typeConnectClient = null;
let urlActiveAccount =
	"https://pass.w3w.app/activate-by-passkey/egglegamewallet";
class PasskeySDK {
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

	static setUrlActiveAccount(url: string) {
		urlActiveAccount = url;
	}

	static getUrlActiveAccount() {
		return urlActiveAccount;
	}
}
export default PasskeySDK;
