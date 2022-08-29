import { useState } from 'react'
import { useRouter } from 'next/router'
import ForgeGlobe from './ForgeGlobe'

const ForgeButton = (props) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const router = useRouter()

  const { forge, size } = props

  return (
    <>
      <button
        onClick={() => router.push('/forge')}
        type='button'
        style={{ background: 'inherit', padding: 0, border: 'none', cursor: forge ? 'pointer' : 'not-allowed' }}
      >
        <ForgeGlobe forge={forge} size={size} />
      </button>
    </>
  )
}

export default ForgeButton
