import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import audioGlobeBlack from '../animations/audio-globe-black.json'
import colourGlobe from '../animations/colour-globe.json'

const IntroGlobe = (props) => {
  const introGlobeAnimeContainer = useRef(null)

  const { walletConnected, connect, disconnect, account } = props

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
  }, [walletConnected])
  return (
    <div>
      <div
        ref={introGlobeAnimeContainer}
        style={{ height: 100, width: 100, background: 'green', borderRadius: '50%' }}
      />
    </div>
  )
}

export default IntroGlobe
