import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import audioGlobeBlack from '../animations/audio-globe-black.json'
import colourGlobe from '../animations/colour-globe.json'

const ConnectWallet = (props) => {
  const walletGlobeAnimeContainer = useRef(null)

  const { walletConnected, connect, disconnect, account } = props

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: walletGlobeAnimeContainer.current,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      animationData: walletConnected ? colourGlobe : audioGlobeBlack,
    })
    // Clean up
    return () => instance.destroy()
  }, [walletConnected])
  return (
    <div>
      <button
        onClick={walletConnected ? account : connect}
        // onClick={walletConnected ? disconnect : connect}
        type='button'
        style={{ background: 'inherit', padding: 0, border: 'none', cursor: 'pointer' }}
      >
        <div
          ref={walletGlobeAnimeContainer}
          style={{ height: 60, width: 60, background: 'green', borderRadius: '50%' }}
        />
      </button>
    </div>
  )
}

export default ConnectWallet
