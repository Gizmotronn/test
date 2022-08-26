import { useContext, useEffect, useState } from 'react'
import useSound from 'use-sound'
import { AudioContext } from '../contexts/AudioContext'
import AudioGlobe from './AudioGlobe'

const soundURL = `/bricktOrigins-audio.mp3`

const AudioButton = () => {
  const [play, { pause }] = useSound(soundURL)
  const [isPlaying, setIsPlaying] = useState(false)

  const [audioActive] = useContext(AudioContext)

  const handleClick = () => {
    setIsPlaying((current) => !current)

    if (isPlaying) {
      pause()
    } else play()
  }

  useEffect(() => {
    if (audioActive) {
      setIsPlaying(audioActive)
      play()
    } else pause()
  }, [audioActive, play, pause])

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
