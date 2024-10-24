export  const sendMessageToParent = (
  message: {
    jsonrpc?: string;
    id?: string;
    data?: any;
  } = {
    jsonrpc: "2.0",
    id: "idle",
    data: "",
  }
) => {
  const { jsonrpc = "2.0", id = "idle", data = null } = message;

  try {
    window.parent.postMessage(
      {
        jsonrpc,
        id,
        data,
      },
      "*"
    );
  } catch (error) {}
};

export const saveDataLocal = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getDataLocal = (key: string, defaultValue = false, parseValue = true) => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem(key) === null) {
      return defaultValue;
    } else {
      const data: any = localStorage.getItem(key);
      return parseValue ? JSON.parse(data) : data;
    }
  } else {
    return defaultValue;
  }
};

export const removeDataLocal = (key: string) => {
  localStorage.removeItem(key);
};

export const viewExternal = (url:string) => {
  window.open(url, "_blank");
};

 