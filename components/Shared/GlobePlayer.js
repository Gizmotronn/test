import React from 'react'
import styled from '@emotion/styled'

const GlobePlayer = ({ children }) => {
  return (
    <Wrapper autoPlay loop>
      {children}
    </Wrapper>
  )
}

export default GlobePlayer

const Wrapper = styled.video`
  width: 120px;
  ${'' /* min-width: 100px; */}
  height: 120px;
  ${'' /* min-height: 100px; */}
  clip-path: circle(50%);
  cursor: pointer;
`
