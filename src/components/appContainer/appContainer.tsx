import { Block } from '@components'
import React from 'react'

interface AppContainerProps {
  style?: React.CSSProperties
}

export const AppContainer: React.FC<AppContainerProps> = ({
  style,
  children,
}) => {
  return (
    <Block
      stack
      style={{
        backgroundColor: '#131a22',
        paddingTop: '65px',
        ...style,
      }}
    >
      {children}
    </Block>
  )
}
