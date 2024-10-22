export const CHAIN_SUPPORT = {
  137: {
    name: 'polygon',
    rpcUrl: 'https://polygon-bor-rpc.publicnode.com'
  },
  42161: {
    name: 'arbitrum',
    rpcUrl: 'https://arbitrum-one-rpc.publicnode.com'
  },
  10: {
    name: 'optimism',
    rpcUrl: 'https://optimism-rpc.publicnode.com'
  }
}


export const TYPE_METHOD_DAPP = {
  connect: 'connect',
  idle: 'idle',
  logout: 'logout',
  ETH_SEND_TRANSACTION: 'eth_sendTransaction',
  ETH_SIGN_TRANSACTION: 'eth_signTransaction',
  ETH_SIGN: 'eth_sign',
  PERSONAL_SIGN: 'personal_sign',
  ETH_SIGN_TYPED_DATA: 'eth_signTypedData',
  ETH_SIGN_TYPED_DATA_V4: 'eth_signTypedData_v4'
}

export const TYPE_ERROR_DAPP = {
  userDenied: 'denied',
  notEnoughFee: 'notEnoughFee',
  someTimeError: 'someTimeError',
  inValidAddress: 'inValidAddress'
}
