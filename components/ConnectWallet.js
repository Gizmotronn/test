import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import styled from '@emotion/styled'
import audioGlobeBlack from '../animations/audio-globe-black.json'
import colourGlobe from '../animations/colour-globe.json'

const ConnectWallet = (props) => {
  const walletGlobeRef = useRef(null)

  const { walletConnected, connect, disconnect, account, size } = props

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
        size={size}
        // onClick={walletConnected ? disconnect : connect}
      >
        <WalletGlobe ref={walletGlobeRef} size={size} />
      </Button>
    </>
  )
}

export default ConnectWallet

const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 50%;
  background: pink;
  padding: 0;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
`

const WalletGlobe = styled.div`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  border-radius: 50%;
  background: inherit;
`
