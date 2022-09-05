import React from 'react'
import FountainAnimation from './FountainAnimation'

const Fountain = (props) => {
  const { fountainSize } = props
  return <FountainAnimation fountainSize={fountainSize} />
}

export default Fountain
