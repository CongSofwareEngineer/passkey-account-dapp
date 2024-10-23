"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const func_1 = require("../utils/func");
const controller_1 = require("../common/controller");
const Provider = ({ children, urlActiveAccount = "https://pass.w3w.app/activate-by-passkey/egglegamewallet", isDuplicateDomain = false, }) => {
    (0, react_1.useLayoutEffect)(() => {
        const dataLocal = (0, func_1.getDataLocal)("data-dapp");
        if (dataLocal) {
            controller_1.default.createConnect(dataLocal);
        }
        controller_1.default.urlActiveAccount = urlActiveAccount;
        controller_1.default.isDuplicateDomain = isDuplicateDomain;
    }, []);
    return children;
};
exports.default = Provider;
//# sourceMappingURL=index.js.map