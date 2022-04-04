import React from 'react'
import { useAuth } from '@hooks'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoutes = () => {
  const auth = useAuth()
  return auth.signed ? <Outlet /> : <Navigate to={'../login'} />
}
