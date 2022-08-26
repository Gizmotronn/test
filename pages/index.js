import { useState } from 'react'
import Chamber from '../components/Chamber'
import Fountain from '../components/Fountain'

export default function Home() {
  const width = '460px'
  const height = '460px'

  return (
    <div
      style={{
        // minWidth: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid yellow',
      }}
    >
      <Chamber width={width} height={height} />
      <Fountain width={width} height={height} />
    </div>
  )
}
