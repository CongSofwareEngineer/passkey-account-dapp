import { useEffect, useState } from 'react'
import PasskeySDK, { typeConnectClient } from '../common/controller'
 
 
export const useDataSDK = () => {
  const [data, setData] = useState<typeConnectClient>(null)
  useEffect(() => {
    setData(PasskeySDK.getConnect())
  }, [])
  
  return { data, setData }
}

