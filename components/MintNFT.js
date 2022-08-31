import React from 'react'
import styled from '@emotion/styled'
import MintController from './MintController'

const MintNFT = (props) => {
  const { baseFountainSize } = props
  return (
    <CircleContainer baseFountainSize={baseFountainSize}>
      <MintController />
    </CircleContainer>
  )
}

export default MintNFT

const CircleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.baseFountainSize};
  height: ${(props) => props.baseFountainSize};
  border-radius: 50%;
  border: 1px solid yellow;
  background: inherit;
  margin: auto;
`
