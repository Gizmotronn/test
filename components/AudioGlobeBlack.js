import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import audioGlobeBlack from '../assets/audio-globe-black.json'

const AudioGlobeBlack = () => {
  const blackGlobeAnimeContainer = useRef(null)

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: blackGlobeAnimeContainer.current,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      animationData: audioGlobeBlack,
    })
    // Clean up
    return () => instance.destroy()
  }, [])
  return (
    <div ref={blackGlobeAnimeContainer} style={{ height: 60, width: 60, background: 'inherit', borderRadius: '50%' }} />
  )
}

export default AudioGlobeBlack
