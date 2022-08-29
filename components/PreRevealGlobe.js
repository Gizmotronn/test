import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import lottie from 'lottie-web'
import colourGlobe from '../animations/colour-globe.json'

const PreRevealGlobe = (props) => {
  const preRevealGlobeContainer = useRef(null)

  const { eligibleToMint } = props

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: preRevealGlobeContainer.current,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      animationData: colourGlobe,
    })
    // Clean up
    return () => instance.destroy()
  }, [])
  return <div ref={preRevealGlobeContainer} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
}

export default PreRevealGlobe

const Globe = styled.div`
  width: ${(props) => props.globeSize};
  height: ${(props) => props.globeSize};
  disabled: ;
`
