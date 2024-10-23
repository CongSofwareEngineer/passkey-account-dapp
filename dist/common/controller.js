"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const func_1 = require("../utils/func");
let connect = null;
class PasskeySDK {
    static createConnect(connectClient = {
        address: "",
        groupSlug: "",
        moreData: {},
    }) {
        connect = connectClient;
        (0, func_1.saveDataLocal)("data-dapp", connectClient);
    }
    static getConnect() {
        return connect;
    }
    static logout() {
        connect = null;
        (0, func_1.removeDataLocal)("data-dapp");
    }
}
PasskeySDK.urlActiveAccount = "https://pass.w3w.app/activate-by-passkey/egglegamewallet";
PasskeySDK.isDuplicateDomain = false;
exports.default = PasskeySDK;
//# sourceMappingURL=controller.js.map