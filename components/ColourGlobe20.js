import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import colourGlobe20 from '../assets/colour-globe-20.json'

const GlobeColour20 = () => {
  const colourGlobeAnimeContainer = useRef(null)

  // console.log('Colour Globe-20 lottie:', lottie)

  useEffect(() => {
    // const instance = lottie.loadAnimation({
    lottie.loadAnimation({
      container: colourGlobeAnimeContainer.current,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      animationData: colourGlobe20,
    })
    // Clean up
    // return () => instance.destroy()
  }, [])
  return <div ref={colourGlobeAnimeContainer} style={{ height: 60, width: 60, borderRadius: '50%' }}></div>
}

export default GlobeColour20
