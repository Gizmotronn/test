import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import styled from '@emotion/styled'
import audioGlobeGrey from '../animations/audio-globe-grey.json'

const FountainAnimation = (props) => {
  const fountainContainer = useRef(null)

  const { width, height } = props

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
  return <Container ref={fountainContainer} />
}

export default FountainAnimation

const Container = styled.div`
  background: inherit;
  border-radius: 50%;
  margin: 0 0 0 15px;
`

// const Container = styled.div`
//   flex-grow: 1;
//   flex-shrink: 1;
//   height: ${(props) => props.height};
//   width: ${(props) => props.width};
//   background: inherit;
//   border-radius: 50%;
//   border: 1px solid green;
// `

{
  /* <Container ref={fountainContainer} height={height} width={width} /> */
}
