import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import colourGlobe from '../assets/colour-globe.json'

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
    <div ref={introGlobeAnimeContainer} style={{ height: 182, width: 182, background: 'black', borderRadius: '50%' }} />
  )
}

export default IntroGlobe
