import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import audioGlobeBlack from '../animations/audio-globe-black.json'
import colourGlobe from '../animations/colour-globe.json'

const IntroGlobe = () => {
  const introGlobeAnimeContainer = useRef(null)

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: introGlobeAnimeContainer.current,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      animationData: colourGlobe,
    })
    // Clean up
    return () => instance.destroy()
  }, [])
  return (
    <div ref={introGlobeAnimeContainer} style={{ height: 160, width: 160, background: 'black', borderRadius: '50%' }} />
  )
}

export default IntroGlobe
