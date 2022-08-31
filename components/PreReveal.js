import React from 'react'
import styled from '@emotion/styled'
import FountainAnimation from './FountainAnimation'
import PreRevealAnimation from './PreRevealAnimation'

const PreReveal = (props) => {
  const { baseFountainSize } = props
  return <PreRevealAnimation baseFountainSize={baseFountainSize} />
}

export default PreReveal
