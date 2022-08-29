import React, { useRef, useEffect } from 'react'
import styled from '@emotion/styled'

const Chamber = (props) => {
  const ref = useRef(null)

  const { minWidthContainer, minHeightContainer } = props

  // useEffect(() => {
  //   const circleContainer = ref.current

  //   console.log('🚀 ~ file: Chamber.js ~ line 9 ~ useEffect ~ circleContainer', circleContainer)

  //   console.log('Circle.container: ', circleContainer.clientWidth)

  //   const circleElements = circleContainer.childNodes

  //   console.log('🚀 ~ file: Chamber.js ~ line 10 ~ useEffect ~ circleElements', circleElements)

  //   let angle = 360 - 90 // = 270
  //   let dangle = 360 / circleElements.length // = 72 with 5 circles

  //   for (let i = 0; i < circleElements.length; i++) {
  //     let circle = circleElements[i]

  //     console.log('🚀 ~ file: Chamber.js ~ line 21 ~ useEffect ~ circle', circle)

  //     angle += dangle // = 342

  //     circle.style.transform = `rotate(${angle}deg) translate(${
  //       circleContainer.clientWidth / 2
  //     }px) rotate(-${angle}deg)`
  //   }
  // }, [])

  return (
    <Container minWidthContainer={minWidthContainer} minHeightContainer={minHeightContainer}>
      {/* <CircleContainer ref={ref}>
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </CircleContainer> */}
    </Container>
  )
}

export default Chamber

const Container = styled.div`
  min-width: ${(props) => props.minWidthContainer};
  min-height: ${(props) => props.minHeightContainer};
  background: inherit;
  border: 1px solid blue;
  margin: 10px 5px 10px 10px;
  @media (max-width: 1023px) {
    margin: 10px 10px 5px 10px;
  }
`

const CircleContainer = styled.div`
  position: relative;
  width: 550px;
  height: 550px;
  margin: calc(100px / 2 + 0px);
  background: pink;
`

const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 270px;
  height: 270px;
  margin: calc(-270px / 2);
  border-radius: 50%;
  background: yellow;
`
