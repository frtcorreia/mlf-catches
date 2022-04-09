import axios from 'axios'
import React, { createContext, useState, useEffect, useContext } from 'react'

import { api } from '../services/api'

interface User {
  email: string
  foto: string
  nome: string
  sobrenome: string
}

export interface Auth {
  user: User
  token: string
}

interface AuthContextData {
  signed: boolean
  user: User | null
  Login(user: object): Promise<void>
  Logout(): void
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@App:user')
    const storagedToken = sessionStorage.getItem('@App:token')

    const tokenValidation = async () => {
      try {
        if (storagedToken) {
          const token = {
            token: storagedToken,
          }

          const response = await api.post('/tokenvalidation', token)

          return response
        }
        return
      } catch (error) {
        return 'Invalid Token'
      }
    }

    tokenValidation()

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser))
      api.defaults.headers.common['Authorization'] = `Bearer ${storagedToken}`
    }
  }, [])

  async function Login(userData: object) {
    try {
      const response = await api.post('/auth', userData)

      console.log(response)
      setUser(response.data.user)

      api.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${response.data.token}`
      console.log('filipe', `Bearer ${response.data.token}`)
      sessionStorage.setItem('@App:user', JSON.stringify(response.data.user))
      sessionStorage.setItem('@App:token', response.data.token)
    } catch (error) {
      console.log('This user not exist or is invalid')
    }
  }

  function Logout() {
    console.log('Logout')
    sessionStorage.removeItem('@App:user')
    sessionStorage.removeItem('@App:token')
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
