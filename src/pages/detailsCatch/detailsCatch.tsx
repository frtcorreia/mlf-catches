import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  AppContainer,
  AppFooter,
  AppHeader,
  Block,
  MediaCard,
  MediaCardProps,
  MediaType,
} from '@components'
import { Alert, Button } from '@mui/material'

const data: MediaCardProps[] = [
  {
    cancelReason: 'Ma foto',
    media: 'https://source.unsplash.com/random',
    mediaType: MediaType.Image,
  },
  {
    media: 'https://source.unsplash.com/random',
    mediaType: MediaType.Image,
  },
  {
    cancelReason: 'Video em falta',
    mediaType: MediaType.Video,
  },
  {
    media:
      'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    mediaType: MediaType.Video,
  },
]

export const DetailsCatch: React.FC = () => {
  let navigate = useNavigate()
  const status = 3

  const renderAlert = (param: number) => {
    switch (param) {
      case 1:
        return <Alert severity="warning">A aguardar validação.</Alert>
      case 2:
        return (
          <Alert severity="error">
            Captura Rejeitada, vê os motivos abaixo!
          </Alert>
        )
      case 3:
        return <Alert severity="success">Captura aceite!</Alert>
      default:
        return <Alert severity="warning">A aguardar validação.</Alert>
    }
  }

  return (
    <AppContainer>
      <AppHeader />
      <Block style={{ alignItems: 'center', paddingTop: '50px' }}>
        {renderAlert(status)}
      </Block>
      <Block style={{ alignItems: 'center', paddingTop: '20px' }}>
        {data.map((item, i) => (
          <MediaCard
            key={i}
            cancelReason={item.cancelReason}
            media={item.media}
            mediaType={item.mediaType}
          />
        ))}
      </Block>
      <Button
        variant="contained"
        style={{ position: 'fixed', width: '100%', top: '64px' }}
        onClick={() => navigate(-1)}
      >
        Voltar Atrás
      </Button>
      <AppFooter />
    </AppContainer>
  )
}
