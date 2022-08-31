import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import lottie from 'lottie-web'
import audioGlobeGrey from '../animations/audio-globe-grey.json'

const PreRevealGlobe = (props) => {
  const preRevealGlobeContainer = useRef(null)

  const { baseFountainSize } = props

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: preRevealGlobeContainer.current,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      animationData: audioGlobeGrey,
    })
    // Clean up
    return () => instance.destroy()
  }, [])
  return <Globe ref={preRevealGlobeContainer} baseFountainSize={baseFountainSize} />
}

export default PreRevealGlobe

const Globe = styled.div`
  width: ${(props) => props.baseFountainSize};
  height: ${(props) => props.baseFountainSize};
  border-radius: 50%;
  background: inherit;
  margin: auto;
`
