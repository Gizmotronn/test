import { useContext, useEffect, useState } from 'react'
import useSound from 'use-sound'
import styled from '@emotion/styled'
import { AudioContext } from '../../../contexts/AudioContext'
import AudioGlobe from './AudioGlobe'

// const soundURL = `/bricktOrigins-audio.mp3`
const soundURL = `https://res.cloudinary.com/bricktorigins/video/upload/v1664764973/audio/bricktorigins_audio_atzzve.mp3`

const AudioButton = () => {
  const [play, { pause }] = useSound(soundURL)

  const [audioActive, setAudioActive] = useContext(AudioContext)

  const handleClick = () => {
    setAudioActive((current) => !current)
  }

  useEffect(() => {
    if (audioActive) {
      // setIsPlaying(audioActive)

      play()
    } else pause()
  }, [audioActive, play, pause])

  return (
    <>
      <Button onClick={handleClick} type='button'>
        <AudioGlobe isPlaying={audioActive} />
      </Button>
    </>
  )
}

export default AudioButton

const Button = styled.button`
  background: inherit;
  padding: 0;
  border: none;
  cursor: pointer;
  clip-path: circle(50%);
`
