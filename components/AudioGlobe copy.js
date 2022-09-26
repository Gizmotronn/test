import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import styled from '@emotion/styled'
import { navGlobeSize } from '../shared/styles'
import audioGlobeBlack from '../assets/audio-globe-black.json'
import audioGlobeGrey from '../assets/audio-globe-grey.json'

const AudioGlobe = (props) => {
  const walletGlobeAnimeContainer = useRef(null)

  const { isPlaying } = props

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: walletGlobeAnimeContainer.current,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      animationData: isPlaying ? audioGlobeBlack : audioGlobeGrey,
    })
    // Clean up
    return () => instance.destroy()
  }, [isPlaying])
  return <Globe ref={walletGlobeAnimeContainer} />
}

export default AudioGlobe

const Globe = styled.div`
  ${'' /* ${navGlobeSize} */}
  width: 82px;
  border-radius: 50%;
  background: inherit;
`
