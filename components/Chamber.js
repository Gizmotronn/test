import React, { useRef, useEffect } from 'react'
import styled from '@emotion/styled'

const Chamber = (props) => {
  const ref = useRef(null)

  const { chamberSize, globeSize } = props

  useEffect(() => {
    const circleContainer = ref.current

    console.log('🚀 ~ file: Chamber.js ~ line 9 ~ useEffect ~ circleContainer', circleContainer)

    console.log('Circle.container: ', circleContainer.clientWidth)

    const circleElements = circleContainer.childNodes

    console.log('🚀 ~ file: Chamber.js ~ line 10 ~ useEffect ~ circleElements', circleElements)

    let angle = 360 - 90 // = 270
    let dangle = 360 / circleElements.length // = 72 with 5 circles

    for (let i = 0; i < circleElements.length; i++) {
      let circle = circleElements[i]

      console.log('🚀 ~ file: Chamber.js ~ line 21 ~ useEffect ~ circle', circle)

      angle += dangle // = 342

      circle.style.transform = `rotate(${angle}deg) translate(${
        circleContainer.clientWidth / 2
      }px) rotate(-${angle}deg)`
    }
  }, [])

  return (
    // <Container minWidthContainer={minWidthContainer} minHeightContainer={minHeightContainer}>
    // <div>
    <CircleContainer ref={ref} chamberSize={chamberSize}>
      <Globe globeSize={globeSize} />
      <Globe globeSize={globeSize} />
      <Globe globeSize={globeSize} />
      <Globe globeSize={globeSize} />
      <Globe globeSize={globeSize} />
    </CircleContainer>
    // </div>
    // </Container>
  )
}

export default Chamber

const CircleContainer = styled.div`
  position: relative;
  top: 15px;
  left: 5px;
  width: ${(props) => props.chamberSize};
  height: ${(props) => props.chamberSize};
  margin: auto;
  background: pink;
`

const Globe = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${(props) => props.globeSize};
  height: ${(props) => props.globeSize};
  margin: calc(-${(props) => props.globeSize} / 2);
  border-radius: 50%;
  background: yellow;
`

// const Container = styled.div`
//   min-width: ${(props) => props.minWidthContainer};
//   min-height: ${(props) => props.minHeightContainer};
//   background: inherit;
//   border: 1px solid blue;
//   margin: 10px 5px 10px 10px;
//   @media (max-width: 1023px) {
//     margin: 10px 10px 5px 10px;
//   }
// `
