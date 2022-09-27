import { createContext, useEffect, useState } from 'react'

// 👇 Create CONTEXT that we can use with 'useContext' hook
export const AudioContext = createContext()

// 👇 Create and return the AudioContext PROVIDER to place in our App's render tree
const AudioProvider = (props) => {
  const [audioActive, setAudioActive] = useState(false)

  const value = [audioActive, setAudioActive]

  // 👇 pass the 'audioActive' state value and the 'setAudioActive' setter via a '<AudioContect.Provider>' component that can be used throughout the App
  return <AudioContext.Provider value={value} {...props} />
}

export default AudioProvider
