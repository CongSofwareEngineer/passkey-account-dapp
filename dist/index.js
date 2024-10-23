"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasskeySDK = exports.useSendTransactions = exports.useDataSDK = exports.useConnect = void 0;
const react_1 = require("react");
const func_1 = require("./utils/func");
const controller_1 = require("./common/controller");
exports.PasskeySDK = controller_1.default;
const useConnect_1 = require("./hook/useConnect");
Object.defineProperty(exports, "useConnect", { enumerable: true, get: function () { return useConnect_1.useConnect; } });
const useDataSDK_1 = require("./hook/useDataSDK");
Object.defineProperty(exports, "useDataSDK", { enumerable: true, get: function () { return useDataSDK_1.useDataSDK; } });
const useSendTransactions_1 = require("./hook/useSendTransactions");
Object.defineProperty(exports, "useSendTransactions", { enumerable: true, get: function () { return useSendTransactions_1.useSendTransactions; } });
const DappPasskeySDK = ({ children, urlActiveAccount = "https://pass.w3w.app/activate-by-passkey/egglegamewallet", isDuplicateDomain = false }) => {
    (0, react_1.useLayoutEffect)(() => {
        const dataLocal = (0, func_1.getDataLocal)("data-dapp");
        if (dataLocal) {
            controller_1.default.createConnect(dataLocal);
        }
        controller_1.default.setUrlActiveAccount(urlActiveAccount);
        controller_1.default.setIsDuplicateDomain(isDuplicateDomain);
    }, []);
    return children;
};
exports.default = DappPasskeySDK;
//# sourceMappingURL=index.js.map