import { useState, useLayoutEffect } from "react";
import PasskeySDK, { typeConnectClient } from "../common/controller";

export const useDataSDK = (): {
  data: typeConnectClient;
  setData: (param: typeConnectClient) => void;
} => {
  const [data, setData] = useState<typeConnectClient>(null);
  useLayoutEffect(() => {
    setData(PasskeySDK.getConnect());
  }, []);

  return { data, setData };
};
