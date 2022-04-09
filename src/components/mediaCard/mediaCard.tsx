import * as React from 'react'
import { Block } from '@components'

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

  return (
    <Block
      style={{
        maxWidth: '250px',
        width: '100%',
        margin: '10px',
        padding: '5px',
        backgroundColor: cancelReason ? '#f06360' : '#5cb660',
      }}
    >
      <Block style={{ width: '100%' }}>
        {mediaType === MediaType.Video ? (
          <video src={media} />
        ) : (
          <img src={media} alt="" />
        )}
      </Block>
      {cancelReason && <Block>Motivo: {cancelReason}</Block>}
    </Block>
  )
}
