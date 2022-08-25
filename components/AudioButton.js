import { useState } from 'react'
import useSound from 'use-sound'
import AudioGlobe from './AudioGlobe'

const soundURL = `/audio-demo.mp3`

const AudioButton = (props) => {
  const [play, { pause }] = useSound(soundURL)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleClick = () => {
    setIsPlaying((current) => !current)

    if (isPlaying) {
      pause()
    } else play()
  }

  return (
    <>
      <button
        onClick={handleClick}
        type='button'
        style={{ background: 'inherit', padding: 0, border: 'none', cursor: 'pointer' }}
      >
        <AudioGlobe isPlaying={isPlaying} />
      </button>
    </>
  )
}

export default AudioButton
