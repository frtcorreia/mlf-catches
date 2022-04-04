import React from 'react'
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
