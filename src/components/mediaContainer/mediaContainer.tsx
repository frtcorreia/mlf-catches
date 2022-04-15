import { VideoPlayer } from '@components'
import React from 'react'

export interface MediaContainerProps {
  mediaType?: string
  media?: string
}

export const MediaContainer: React.FC<MediaContainerProps> = ({
  mediaType,
  media,
}: MediaContainerProps) => {
  if (mediaType === 'video') {
    return <VideoPlayer src={media || ''} />
  } else if (mediaType === 'image') {
    return <img src={media || ''} alt="Thumb" style={{ maxHeight: '300px' }} />
  } else {
    return null
  }
}
