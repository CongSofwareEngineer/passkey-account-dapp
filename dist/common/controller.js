"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const func_1 = require("../utils/func");
let connect = null;
let isDuplicateDomain = false;
let urlActiveAccount = "https://pass.w3w.app/activate-by-passkey/egglegamewallet";
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
    static setUrlActiveAccount(url) {
        urlActiveAccount = url;
    }
    static getUrlActiveAccount() {
        return urlActiveAccount;
    }
    static setIsDuplicateDomain(value) {
        isDuplicateDomain = value;
    }
    static getIsDuplicateDomain() {
        return isDuplicateDomain;
    }
}
exports.default = PasskeySDK;
//# sourceMappingURL=controller.js.map