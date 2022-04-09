import * as React from 'react'
import { Block } from '@components'
import { Badge, Icon } from '@mui/material'
import Ok from '@mui/icons-material/Check'
import Ko from '@mui/icons-material/Clear'
import Wait from '@mui/icons-material/WatchLater'
import Error from '@mui/icons-material/Error'

export interface CatchCardProps {
  image?: string
  status?: number
  onClick?: () => void
}

export enum StatusColor {
  waiting = 'warning',
  rejected = 'error',
  approved = 'success',
}
export enum StatusLabel {
  waiting = 'A Aguardar',
  approved = 'Aprovada',
  rejected = 'Rejeitada',
}

export interface StatusProps {
  status: StatusColor
  label: StatusLabel
  value: number
}

export const CatchCard: React.FC<CatchCardProps> = (props) => {
  const { image, status, onClick } = props

  const [state, setState] = React.useState<StatusProps>({
    status: StatusColor.waiting,
    label: StatusLabel.waiting,
    value: 0,
  })

  React.useEffect(() => {
    status === 0
      ? setState({
          status: StatusColor.waiting,
          label: StatusLabel.waiting,
          value: 0,
        })
      : status === 1
      ? setState({
          status: StatusColor.approved,
          label: StatusLabel.approved,
          value: 1,
        })
      : setState({
          status: StatusColor.rejected,
          label: StatusLabel.rejected,
          value: 2,
        })
  }, [])

  const handleReturnIcon = (value: number) => {
    switch (value) {
      case 0:
        return <Wait />
      case 1:
        return <Ok />
      case 2:
        return <Ko />
      default:
        return <Error />
    }
  }

  return (
    <Block
      style={{ maxWidth: '250px', width: '100%', margin: '15px' }}
      onClick={onClick}
    >
      <Badge color={state.status} badgeContent={handleReturnIcon(state.value)}>
        <Block
          style={{
            width: '100%',
            backgroundColor: 'white',
            borderRadius: '5px',
            overflow: 'hidden',
          }}
        >
          <Block>
            <img src={image} alt="" />
          </Block>
          <Block style={{ textAlign: 'center' }}>
            Ver Captura <strong>({state.label})</strong>
          </Block>
        </Block>
      </Badge>
    </Block>
  )
}
