import React from 'react'
import styled from '@emotion/styled'
import FountainAnimation from './FountainAnimation'

const Fountain = (props) => {
  const { fountainSize } = props
  return <FountainAnimation fountainSize={fountainSize} />
}

export default Fountain
