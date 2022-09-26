import { createContext, useState } from 'react'

// 👇 create CONTEXT that we can use with 'useContext' hook
export const ChamberGlobeContext = createContext()

// 👇 Create and return the ChamberGlobeContext PROVIDER to place in our App's render tree

const ChamberGlobeProvider = (props) => {
  const [dimensions, setDimensions] = useState()
  console.log('🚀 ~ file: ChamberGlobeContext.js ~ line 10 ~ ChamberGlobeProvider ~ dimensions', dimensions)

  // Perform the size calcs here and pass as the 'value'
  const value = [dimensions, setDimensions]

  return <ChamberGlobeContext.Provider value={value} {...props} />
}

export default ChamberGlobeProvider
