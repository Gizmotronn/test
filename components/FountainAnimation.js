import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import colourGlobe from '../animations/colour-globe.json'

const FountainAnimation = (props) => {
  const fountainContainer = useRef(null)

  const { width, height } = props

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
  return (
    <div ref={fountainContainer} style={{ height: height, width: width, background: 'green', borderRadius: '50%' }} />
  )
}

export default FountainAnimation
