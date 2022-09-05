import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import styled from '@emotion/styled'
import { fountainSize } from '../shared/styles'
import audioGlobeGrey from '../animations/audio-globe-grey.json'

const FountainAnimation = (props) => {
  const fountainContainer = useRef(null)

  // const { fountainSize } = props

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
  return (
    <>
      {/* <Container ref={fountainContainer} fountainSize={fountainSize} /> */}
      <FountainAnimationContainer ref={fountainContainer} />
    </>
  )
}

export default FountainAnimation

const FountainAnimationContainer = styled.div`
  ${fountainSize};
  border-radius: 50%;
  background: inherit;
  ${'' /* margin: auto; */}
  ${'' /* border: 1px solid green; */}
`

// const Container = styled.div`
//   width: ${(props) => props.fountainSize};
//   height: ${(props) => props.fountainSize};
//   border-radius: 50%;
//   background: inherit;
//   margin: auto;
// `
