import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import styled from '@emotion/styled'
import { FountainAnimationContainer } from '../shared/styles'
import audioGlobeGrey from '../animations/audio-globe-grey.json'

const FountainAnimation = (props) => {
  const fountainContainer = useRef(null)

  const { fountainSize } = props

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: fountainContainer.current,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      animationData: audioGlobeGrey,
    })
    // Clean up
    return () => instance.destroy()
  }, [])
  return <Container ref={fountainContainer} fountainSize={fountainSize} />
}

export default FountainAnimation

{
  /* <FountainAnimationContainer ref={fountainContainer} /> */
}

const Container = styled.div`
  width: ${(props) => props.fountainSize};
  height: ${(props) => props.fountainSize};
  border-radius: 50%;
  background: inherit;
  margin: auto;
`
