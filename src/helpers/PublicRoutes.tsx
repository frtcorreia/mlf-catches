import React from 'react'
import { useAuth } from '@hooks'
import { Navigate, Outlet } from 'react-router-dom'

export const PublicRoutes = () => {
  const auth = useAuth()
  return auth.signed ? <Navigate to="../dashboard" /> : <Outlet />
}
