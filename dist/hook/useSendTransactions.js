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
exports.useSendTransactions = void 0;
const react_1 = require("react");
const useDataSDK_1 = require("./useDataSDK");
const constance_1 = require("../common/constance");
const useSendTransactions = () => {
    const { data: dataConnect } = (0, useDataSDK_1.useDataSDK)();
    const [error, setError] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [hash, setHash] = (0, react_1.useState)("");
    const sendTransactions = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (rawData = {
        amount: 0,
        to: "0x",
        chainId: 137,
        value: "0x",
        data: "0x",
    }) {
        setLoading(true);
        setError(null);
        setHash(null);
        const { amount = 0, to = "0x", chainId = (dataConnect === null || dataConnect === void 0 ? void 0 : dataConnect.chaiId) || 137, value = "0x", data = "0x", } = rawData;
        window.parent.postMessage({
            jsonrpc: "2.0",
            id: constance_1.TYPE_METHOD_DAPP.ETH_SEND_TRANSACTION,
            data: {
                rawTransactions: {
                    amount,
                    to,
                    chainId,
                    value,
                    data,
                },
            },
        }, "*");
    });
    const receiveDAPPMessage = (event) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const dataParent = event.data;
        if (constance_1.TYPE_METHOD_DAPP.ETH_SEND_TRANSACTION === (dataParent === null || dataParent === void 0 ? void 0 : dataParent.id)) {
            setLoading(false);
            if (dataParent === null || dataParent === void 0 ? void 0 : dataParent.error) {
                setError(dataParent === null || dataParent === void 0 ? void 0 : dataParent.error);
            }
            else {
                setHash((_a = dataParent.result) === null || _a === void 0 ? void 0 : _a.hash);
            }
        }
    });
    (0, react_1.useEffect)(() => {
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
exports.useSendTransactions = useSendTransactions;
//# sourceMappingURL=useSendTransactions.js.map