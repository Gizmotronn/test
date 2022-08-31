import React from 'react'
import styled from '@emotion/styled'
import MintController from './MintController'

const MintNFT = (props) => {
  const { baseFountainSize } = props
  return <MintController baseFountainSize={baseFountainSize} />
}

export default MintNFT
