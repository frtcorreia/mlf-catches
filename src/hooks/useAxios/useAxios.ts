import React from 'react'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_URL

interface useAuthProps {
  method?: string
  url?: string
  body?: string
}
interface useAuthOutputProps {
  response: AxiosResponse<any, any> | undefined
  error: boolean
  loading?: boolean
  sendData: (axiosParams: AxiosRequestConfig) => Promise<void>
}

export const useAxios = (): useAuthOutputProps => {
  const [response, setResponse] = React.useState<AxiosResponse>()
  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay))
  }

  const sendData = async (axiosParams: AxiosRequestConfig) => {
    setLoading(true)
    try {
      const result = await axios.request(axiosParams)
      await timeout(100)
      setResponse(result)
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return { response, error, loading, sendData }
}
