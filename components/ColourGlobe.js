import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import colourGlobe from '../animations/colour-globe.json'

const AudioGlobeGrey = () => {
  const colourGlobeAnimeContainer = useRef(null)

  console.log('lottie:', lottie)

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: colourGlobeAnimeContainer.current,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      animationData: colourGlobe,
    })
    // Clean up
    return () => instance.destroy()
  }, [])
  return <div ref={colourGlobeAnimeContainer} style={{ height: 60, width: 60, borderRadius: '50%' }}></div>
}

export default AudioGlobeGrey
