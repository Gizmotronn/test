import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import audioGlobeBlack from '../animations/audio-globe-black.json'
import colourGlobe from '../animations/colour-globe.json'

const FountainAnimation = () => {
  const fountainContainer = useRef(null)

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: fountainContainer.current,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      animationData: colourGlobe,
    })
    // Clean up
    return () => instance.destroy()
  }, [])
  return <div ref={fountainContainer} style={{ height: 160, width: 160, background: 'green', borderRadius: '50%' }} />
}

export default FountainAnimation
