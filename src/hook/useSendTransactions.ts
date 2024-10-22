 
import { useState, useEffect } from 'react';
import {useDataSDK} from './useDataSDK';
import { TYPE_METHOD_DAPP } from '../common/constance';

 
export const useSendTransactions = () => {
  const { data:dataConnect } = useDataSDK()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [hash, setHash] = useState('')

  const sendTransactions = async (rawData = {
    amount: 0,
    to: '0x',
    chainId: 137,
    value: '0x',
    data: '0x'
  }) => {
    setLoading(true)
    setLoading(null)
    setHash(null)
    const {
      amount = 0,
      to = '0x',
      chainId = dataConnect?.chainId || 137,
      value = '0x',
      data = '0x'
    } = rawData

    console.log({ rawData })

    window.parent.postMessage(
      {
        jsonrpc: '2.0',
        id: TYPE_METHOD_DAPP.ETH_SEND_TRANSACTION,
        data: {
          rawTransactions: {
            amount,
            to,
            chainId,
            value,
            data
          }
        }
      },
      '*'
    )
  }

  const receiveDAPPMessage = async (event) => {
    const dataParent = event.data
    if (dataParent?.id) {
      console.log({ dataParent })
      setLoading(false)
    }
    if (TYPE_METHOD_DAPP.ETH_SEND_TRANSACTION === dataParent.id) {
      if (!dataParent?.error) {
        setHash(dataParent.result?.hash)
      } else {
        setError(dataParent?.error)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('message', receiveDAPPMessage, false)
    return () => {
      window.removeEventListener('message', receiveDAPPMessage, false)
    }
  }, [])

  return {
    data: hash,
    error,
    loading,
    sendTransactions
  }
}
