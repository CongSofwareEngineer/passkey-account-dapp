"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDataSDK = void 0;
const react_1 = require("react");
const controller_1 = require("../common/controller");
const useDataSDK = () => {
    const [data, setData] = (0, react_1.useState)(null);
    (0, react_1.useLayoutEffect)(() => {
        setData(controller_1.default.getConnect());
    }, []);
    return { data, setData };
};
exports.useDataSDK = useDataSDK;
//# sourceMappingURL=useDataSDK.js.map