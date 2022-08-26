import React from 'react'
import FountainAnimation from './FountainAnimation'

const Fountain = () => {
  return (
    <div
      style={{
        width: '200px',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid green',
        margin: '10px',
      }}
    >
      <FountainAnimation />
    </div>
  )
}

export default Fountain
