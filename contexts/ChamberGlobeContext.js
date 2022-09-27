import { createContext, useState } from 'react'

// 👇 create CONTEXT that we can use with 'useContext' hook
export const ChamberGlobeContext = createContext()

// 👇 Create and return the ChamberGlobeContext PROVIDER to place in our App's render tree

const ChamberGlobeProvider = (props) => {
  const [dimensions, setDimensions] = useState()

  const value = [dimensions, setDimensions]

  return <ChamberGlobeContext.Provider value={value} {...props} />
}

export default ChamberGlobeProvider
