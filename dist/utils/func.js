"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewExternal = exports.removeDataLocal = exports.getDataLocal = exports.saveDataLocal = exports.sendMessageToParent = void 0;
const sendMessageToParent = (message = {
    jsonrpc: "2.0",
    id: "idle",
    data: "",
}) => {
    const { jsonrpc = "2.0", id = "idle", data = null } = message;
    try {
        window.parent.postMessage({
            jsonrpc,
            id,
            data,
        }, "*");
    }
    catch (error) { }
};
exports.sendMessageToParent = sendMessageToParent;
const saveDataLocal = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};
exports.saveDataLocal = saveDataLocal;
const getDataLocal = (key, defaultValue = false, parseValue = true) => {
    if (typeof window !== "undefined") {
        if (localStorage.getItem(key) === null) {
            return defaultValue;
        }
        else {
            const data = localStorage.getItem(key);
            return parseValue ? JSON.parse(data) : data;
        }
    }
    else {
        return defaultValue;
    }
};
exports.getDataLocal = getDataLocal;
const removeDataLocal = (key) => {
    localStorage.removeItem(key);
};
exports.removeDataLocal = removeDataLocal;
const viewExternal = (url) => {
    window.open(url, "_blank");
};
exports.viewExternal = viewExternal;
//# sourceMappingURL=func.js.map