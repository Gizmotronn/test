import { createContext, useState } from 'react'

// 👇 create CONTEXT that we can use with 'useContext' hook
export const FountainContext = createContext()

// 👇 Create and return the FountainContext PROVIDER to place in our App's render tree

const FountainProvider = (props) => {
  const [dimensions, setDimensions] = useState()

  const value = [dimensions, setDimensions]

  return <FountainContext.Provider value={value} {...props} />
}

export default FountainProvider
