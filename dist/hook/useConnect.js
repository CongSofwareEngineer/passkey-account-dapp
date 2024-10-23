"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useConnect = void 0;
const react_1 = require("react");
const controller_1 = require("../common/controller");
const func_1 = require("../utils/func");
const constance_1 = require("../common/constance");
const useDataSDK_1 = require("./useDataSDK");
const useConnect = () => {
    const [error, setError] = (0, react_1.useState)(null);
    const { data, setData } = (0, useDataSDK_1.useDataSDK)();
    const [loading, setLoading] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        window.addEventListener("message", receiveDAPPMessage, false);
        return () => {
            window.removeEventListener("message", receiveDAPPMessage, false);
        };
    }, []);
    const connect = () => {
        var _a;
        try {
            setLoading(true);
            setError(null);
            if (window.location.href.includes((_a = window.parent) === null || _a === void 0 ? void 0 : _a.origin) &&
                !controller_1.default.isDuplicateDomain) {
                (0, func_1.viewExternal)(controller_1.default.urlActiveAccount);
            }
            else {
                (0, func_1.sendMessageToParent)({
                    id: constance_1.TYPE_METHOD_DAPP.connect,
                    data: "connect",
                });
            }
        }
        catch (error) {
            (0, func_1.sendMessageToParent)({
                id: constance_1.TYPE_METHOD_DAPP.connect,
                data: "connect",
            });
        }
    };
    const logout = () => {
        controller_1.default.logout();
        setError(null);
        setData(null);
    };
    const receiveDAPPMessage = (event) => __awaiter(void 0, void 0, void 0, function* () {
        const dataParent = event.data;
        if (constance_1.TYPE_METHOD_DAPP.connect === (dataParent === null || dataParent === void 0 ? void 0 : dataParent.id)) {
            setLoading(false);
            if (!(dataParent === null || dataParent === void 0 ? void 0 : dataParent.error)) {
                setError(null);
                const dataLocal = Object.assign(Object.assign({}, data), dataParent.result);
                if (Object.keys(dataLocal).length > 0) {
                    controller_1.default.createConnect(dataLocal);
                    setData(dataLocal);
                }
                else {
                    (0, func_1.viewExternal)(controller_1.default.urlActiveAccount);
                }
            }
            else {
                setError(dataParent === null || dataParent === void 0 ? void 0 : dataParent.error);
            }
        }
    });
    return {
        connect,
        logout,
        error,
        data,
        loading,
        isConnected: !!data,
    };
};
exports.useConnect = useConnect;
//# sourceMappingURL=useConnect.js.map