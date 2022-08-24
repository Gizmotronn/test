import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import audioGlobeGrey from '../animations/audio-globe-grey.json'

const AudioGlobeGrey = () => {
  const greyGlobeAnimeContainer = useRef(null)

  // console.log('lottie:', lottie)

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: greyGlobeAnimeContainer.current,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      animationData: audioGlobeGrey,
    })
    // Clean up
    return () => instance.destroy()
  }, [])
  return <div ref={greyGlobeAnimeContainer} style={{ height: 60, width: 60 }} />
}

export default AudioGlobeGrey
