import * as React from 'react'

export interface BlockProps {
  style?: React.CSSProperties
  mt?: number
  mb?: number
  stack?: boolean
  padding?: number | string
  fixed?: boolean
  onClick?: () => void
}

export const Block: React.FC<BlockProps> = ({
  children,
  fixed = false,
  onClick,
  style,
  mt,
  mb,
  padding,
  stack,
}) => {
  const fixedProps: React.CSSProperties = fixed
    ? { position: 'fixed', width: '100%' }
    : {}

  return (
    <div
      style={{
        display: 'flex',
        boxSizing: 'border-box',
        flexDirection: stack ? 'column' : 'row',
        marginTop: mt,
        marginBottom: mb,
        padding: padding,
        ...style,
        ...fixedProps,
      }}
      onClick={onClick}
      aria-hidden="true"
    >
      {children}
    </div>
  )
}
