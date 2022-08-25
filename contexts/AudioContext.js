import { createContext, useEffect, useState } from 'react'

export const AudioContext = createContext()

const AudioProvider = (props) => {
  const [audioActive, setAudioActive] = useState(false)

  const value = [audioActive, setAudioActive]

  return <AudioContext.Provider value={value} {...props} />
}

export default AudioProvider
