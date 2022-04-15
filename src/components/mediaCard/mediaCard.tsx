import * as React from 'react'
import { Block, MediaContainer } from '@components'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material'

export enum MediaType {
  Video = 'video',
  Image = 'image',
}

export interface MediaCardProps {
  mediaType?: MediaType
  media?: string
  cancelReason?: string
}

export const MediaCard: React.FC<MediaCardProps> = (props) => {
  const { mediaType, media, cancelReason } = props
  console.log(props)
  return (
    <Card sx={{ maxWidth: 250, marginBottom: '20px' }}>
      <CardActionArea>
        <MediaContainer mediaType={mediaType} media={media} />

        {cancelReason && (
          <CardContent style={{ backgroundColor: 'red' }}>
            <Typography gutterBottom variant="body2" component="div">
              Motivo: {cancelReason}
            </Typography>
          </CardContent>
        )}
      </CardActionArea>
    </Card>
  )
}
