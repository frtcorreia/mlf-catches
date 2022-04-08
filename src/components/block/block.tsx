import * as React from 'react'

export interface BlockProps {
  style?: React.CSSProperties
  fixed?: boolean
  onClick?: () => void
}

export const Block: React.FC<BlockProps> = ({
  children,
  fixed = false,
  onClick,
  style,
}) => {
  const fixedProps: React.CSSProperties = fixed
    ? { position: 'fixed', width: '100%' }
    : {}

  return (
    <div
      style={{
        display: 'flex',
        boxSizing: 'border-box',
        flexDirection: 'column',
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
