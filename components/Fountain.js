import React from 'react'
import styled from '@emotion/styled'
import FountainAnimation from './FountainAnimation'

const Fountain = (props) => {
  const { fountainSize } = props
  return (
    // <Container minWidthContainer={minWidthContainer} minHeightContainer={minHeightContainer}>
    <FountainAnimation fountainSize={fountainSize} />
    // </Container>
  )
}

export default Fountain

// const Container = styled.div`
//   min-width: ${(props) => props.minWidthContainer};
//   min-height: ${(props) => props.minHeightContainer};
//   background: inherit;
//   border: 1px solid red;
//   margin: 10px 10px 10px 5px;
//   @media (max-width: 1023px) {
//     margin: 5px 10px 10px 10px;
//   }
// `
