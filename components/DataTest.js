import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import data from '../assets/data.json'

const AudioGlobeGrey = () => {
  const dataAnimeContainer = useRef(null)

  console.log('lottie:', lottie)

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: dataAnimeContainer.current,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      animationData: data,
    })
    // Clean up
    return () => instance.destroy()
  }, [])
  return <div ref={dataAnimeContainer} style={{ height: 360, width: 360 }}></div>
}

export default AudioGlobeGrey
