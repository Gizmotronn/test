import React from 'react'
import FountainAnimation from './FountainAnimation'

const Fountain = (props) => {
  const { width, height } = props
  return (
    <div
      style={{
        width: width,
        height: height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid green',
        margin: '10px',
      }}
    >
      <FountainAnimation width={width} height={height} />
    </div>
  )
}

export default Fountain
