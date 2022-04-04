import React from 'react'
import { useAuth } from '@hooks'
import { AppContainer, AppFooter } from '@components'
import { AppHeader } from 'components/appHeader'

export const Dashboard: React.FC = () => {
  return (
    <AppContainer>
      <AppHeader />
      <h1>Dashboard</h1>
      <AppFooter />
    </AppContainer>
  )
}
