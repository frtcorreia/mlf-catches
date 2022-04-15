import React from 'react'

interface VideoPlayerProps {
  src: string
}

export const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
  const { src } = props
  console.log('VideoPlayer', props)
  return <video src={src} width="100%" playsInline loop muted controls />
}
