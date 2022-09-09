import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import rocket from '../assets/rocket.json'

const AudioGlobeGrey = () => {
  const rocketAnimeContainer = useRef(null)

  console.log('lottie:', lottie)

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: rocketAnimeContainer.current,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      animationData: rocket,
    })
    // Clean up
    return () => instance.destroy()
  }, [])
  return <div ref={rocketAnimeContainer} style={{ height: 250, width: 300 }}></div>
}

export default AudioGlobeGrey
