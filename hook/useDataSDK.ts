import { useEffect, useState } from 'react'
import PasskeySDK, { typeConnectClient } from '../common/controller'
 
const useDataSDK = () => {
  const [data, setData] = useState<typeConnectClient>(null)
  useEffect(() => {
    setData(PasskeySDK.getConnect())
  }, [])
  
  return { data, setData }
}

export default useDataSDK
