import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import audioGlobeGrey from '../animations/audio-globe-grey.json'

const FountainAnimation = (props) => {
  const fountainContainer = useRef(null)

  const { width, height } = props

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: fountainContainer.current,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      animationData: audioGlobeGrey,
    })
    // Clean up
    return () => instance.destroy()
  }, [])
  return (
    <div ref={fountainContainer} style={{ height: height, width: width, background: 'inherit', borderRadius: '50%' }} />
  )
}

export default FountainAnimation
