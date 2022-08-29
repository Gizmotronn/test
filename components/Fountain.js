import React from 'react'
import styled from '@emotion/styled'
import FountainAnimation from './FountainAnimation'

const Fountain = (props) => {
  const { minWidthContainer, minHeightContainer } = props
  return (
    <Container minWidthContainer={minWidthContainer} minHeightContainer={minHeightContainer}>
      {/* <FountainAnimation width={width} height={height} /> */}
    </Container>
  )
}

export default Fountain

const Container = styled.div`
  min-width: ${(props) => props.minWidthContainer};
  min-height: ${(props) => props.minHeightContainer};
  background: inherit;
  border: 1px solid red;
  margin: 10px 10px 10px 5px;
`
