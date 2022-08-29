import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import audioGlobeBlack from '../animations/audio-globe-black.json'
import audioGlobeGrey from '../animations/audio-globe-grey.json'

const AudioGlobe = (props) => {
  const walletGlobeAnimeContainer = useRef(null)

  const { isPlaying, size } = props

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: walletGlobeAnimeContainer.current,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      animationData: isPlaying ? audioGlobeBlack : audioGlobeGrey,
    })
    // Clean up
    return () => instance.destroy()
  }, [isPlaying])
  return <div ref={walletGlobeAnimeContainer} style={{ width: size, height: size, borderRadius: '50%' }} />
}

export default AudioGlobe
