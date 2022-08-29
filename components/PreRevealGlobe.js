import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import lottie from 'lottie-web'
import colourGlobe from '../animations/colour-globe.json'
import audioGlobeGrey from '../animations/audio-globe-grey.json'

const PreRevealGlobe = (props) => {
  const preRevealGlobeContainer = useRef(null)

  const { mint } = props

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: preRevealGlobeContainer.current,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      animationData: mint ? colourGlobe : audioGlobeGrey,
    })
    // Clean up
    return () => instance.destroy()
  }, [mint])
  return <Globe ref={preRevealGlobeContainer} />
}

export default PreRevealGlobe

const Globe = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: inherit;
`
