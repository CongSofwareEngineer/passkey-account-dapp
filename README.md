# Account Passkey connect dapp

> The sdk package provides a simple support connect Smart account for dapp.

[![NPM](https://img.shields.io/npm/v/position-uni-v3.svg)](https://www.npmjs.com/package/position-uni-v3) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install (for single position)

```bash
npm install --save passkey-account-dapp
```

```bash
yarn add passkey-account-dapp
```

## Usage

```jsx
//use for version laster
import React, { useState, useEffect } from "react";
import ProviderDapp from "passkey-account-dapp";

//TYPE_METHOD_DAPP // event support
const LayoutProvider = () => {
  return (
      <ProviderDapp
        isDuplicateDomain={false} //for development
        urlActiveAccount={...} //url Parent App
      >
      // code...
      ///.....
    </ProviderDapp>
  )
}
```

```jsx
import { useConnect, TYPE_ERROR_DAPP, useSendTransactions, TYPE_METHOD_DAPP } from "passkey-account-dapp";

const ExampleDapp = () => {
  //code ...
  const [chainId, setChainId] = useState(137);

  const { connect, data, error, logout, isConnected ,loading: loadingConnect} = useConnect();
  const {
    sendTransactions,
    error: errorSendToken,
    data: hashTx,
    loading: loadingSendTx
  } = useSendTransactions(chainId);

  //code....

  const handleSend = (second) => {
    //code....

    const rawTransactions = {
        amount:'1', //Amount ETH
        to: '0x...', // The contract address, not the recipient's address
        value: '0x0', // No ETH value is sent
        data: '0x', // data hex
        chainId: chainId //number
      }
     sendTransactions(rawTransactions)

     //code....

   }

  return (
     // code...
    ///.....
  )

};

export default ExampleDapp;
```

## License

MIT © [HoDienCong12c5](https://github.com/CongSofwareEngineer)
