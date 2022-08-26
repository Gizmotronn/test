import React from 'react'

const Chamber = (props) => {
  const { width, height } = props
  return (
    <div
      style={{
        width: width,
        height: height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid blue',
        margin: '10px',
      }}
    >
      <p style={{ color: '#fff' }}>Chamber</p>
    </div>
  )
}

export default Chamber
