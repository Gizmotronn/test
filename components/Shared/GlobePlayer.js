import styled from '@emotion/styled'
import { useContext, useState, useEffect } from 'react'
import { ChamberGlobeContext } from '../../contexts/ChamberGlobeContext'
import { FountainContext } from '../../contexts/FountainContext'

const GlobePlayer = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false)
  const [width, setWidth] = useState(112)

  // const [dimensions] = useContext(ChamberGlobeContext)
  // const globebase = 112
  // const globeWidth = dimensions ? dimensions.width : globebase
  // const globeHeight = dimensions ? dimensions.height : globebase
  // const globeRatio = 0.5

  const [dimensions] = useContext(FountainContext)
  const fountainbase = 370
  // const fountainWidth = dimensions ? dimensions.width : fountainbase
  const fountainRatio = 0.159

  useEffect(() => {
    let fountainWidth = dimensions ? dimensions.width : fountainbase
    setWidth(fountainWidth * fountainRatio)
    setHasMounted(true)
  }, [dimensions])

  if (!hasMounted) {
    return null
  }

  return (
    hasMounted && (
      <>
        {/* <Wrapper autoPlay loop globeWidth={globeWidth} globeHeight={globeHeight} globeRatio={globeRatio}>
        {children}
      </Wrapper> */}
        <WrapperF playsInline autoPlay muted loop fountainWidth={width} fountainRatio={fountainRatio}>
          {children}
        </WrapperF>
      </>
    )
  )
}

export default GlobePlayer

const Wrapper = styled.video`
  width: ${(props) => props.globeWidth * props.globeRatio}px;
  ${'' /* height: ${(props) => props.globeHeight * props.globeRatio}px; */}
  cursor: pointer;
`

const WrapperF = styled.video`
  width: ${(props) => props.fountainWidth}px;
  height: ${(props) => props.fountainWidth}px;
  ${'' /* width: ${(props) => props.fountainWidth * props.fountainRatio}px; */}
  ${'' /* height: ${(props) => props.fountainWidth * props.fountainRatio}px; */}
`
