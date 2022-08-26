import { useState } from 'react'
import Chamber from '../components/Chamber'
import Fountain from '../components/Fountain'

export default function Home() {
  const [showModal, setShowModal] = useState(true)
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
      <Chamber />
      <Fountain />
    </div>
  )
}
