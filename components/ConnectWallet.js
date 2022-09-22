import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import styled from '@emotion/styled'
import { navGlobeSize } from '../shared/styles'
import audioGlobeBlack from '../assets/audio-globe-black.json'
import colourGlobe from '../assets/colour-globe.json'

const ConnectWallet = (props) => {
  const walletGlobeRef = useRef(null)

  const { walletConnected, connect, disconnect, account } = props

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: walletGlobeRef.current,
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
        type='button'
        // onClick={walletConnected ? disconnect : connect}
      >
        <WalletGlobe ref={walletGlobeRef} />
      </Button>
    </>
  )
}

export default ConnectWallet

const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 50%;
  background: inherit;
  padding: 0;
  ${navGlobeSize};
  z-index: 500;
`

const WalletGlobe = styled.div`
  ${navGlobeSize}
  ${'' /* width: 82px; */}
  border-radius: 50%;
  background: inherit;
`
