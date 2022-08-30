import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import styled from '@emotion/styled'
import audioGlobeBlack from '../animations/audio-globe-black.json'
import colourGlobe from '../animations/colour-globe.json'

const ConnectWallet = (props) => {
  const walletGlobeAnimeContainer = useRef(null)

  const { walletConnected, connect, disconnect, account, size } = props

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
    <>
      <Button
        onClick={walletConnected ? account : connect}
        // onClick={walletConnected ? disconnect : connect}
        type='button'
      >
        <WalletGlobe ref={walletGlobeAnimeContainer} size={size} />
      </Button>
    </>
  )
}

export default ConnectWallet

const Button = styled.div`
  background: inherit;
  padding: 0;
  border: none;
  cursor: pointer;
`

const WalletGlobe = styled.div`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  border-radius: 50%;
  background: inherit;
`
