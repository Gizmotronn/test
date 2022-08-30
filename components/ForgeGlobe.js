import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import styled from '@emotion/styled'
import audioGlobeBlack from '../animations/audio-globe-black.json'
import audioGlobeGrey from '../animations/audio-globe-grey.json'

const ForgeGlobe = (props) => {
  const walletGlobeAnimeContainer = useRef(null)

  const { forge, size } = props

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: walletGlobeAnimeContainer.current,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      animationData: forge ? audioGlobeBlack : audioGlobeGrey,
    })
    // Clean up
    return () => instance.destroy()
  }, [forge])
  return <Globe ref={walletGlobeAnimeContainer} size={size} />
}

export default ForgeGlobe

const Globe = styled.div`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  background: inherit;
  border-radius: 50%;
`
