import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { navGlobeSize } from '../shared/styles'
import colourGlobe from '../animations/colour-globe.json'
import audioGlobeGrey from '../animations/audio-globe-grey.json'

const ForgeGlobe = (props) => {
  const walletGlobeAnimeContainer = useRef(null)

  const router = useRouter()
  const { route } = router

  // const { forge } = props

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: walletGlobeAnimeContainer.current,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      animationData: route === '/forge' ? colourGlobe : audioGlobeGrey,
      // animationData: forge && route === '/forge' ? colourGlobe : audioGlobeGrey,
    })
    // Clean up
    return () => instance.destroy()
  }, [route])
  return <Globe ref={walletGlobeAnimeContainer} />
}

export default ForgeGlobe

const Globe = styled.div`
  ${navGlobeSize}
  background: inherit;
  border-radius: 50%;
`
