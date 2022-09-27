import styled from '@emotion/styled'
import { useContext } from 'react'
import { ChamberGlobeContext } from '../../contexts/ChamberGlobeContext'
import { FountainContext } from '../../contexts/FountainContext'

const GlobePlayer = ({ children }) => {
  // const [dimensions] = useContext(ChamberGlobeContext)
  // const globebase = 112
  // const globeWidth = dimensions ? dimensions.width : globebase
  // const globeHeight = dimensions ? dimensions.height : globebase
  // const globeRatio = 0.5

  const [dimensions] = useContext(FountainContext)
  const fountainbase = 370
  const fountainWidth = dimensions ? dimensions.width : fountainbase
  const fountainRatio = 0.15

  console.log('🚀 ~ file: GlobePlayer.js ~ line 7 ~ GlobePlayer ~ dimensions', dimensions)

  return (
    <>
      {/* <Wrapper autoPlay loop globeWidth={globeWidth} globeHeight={globeHeight} globeRatio={globeRatio}>
        {children}
      </Wrapper> */}
      <WrapperF autoPlay loop fountainWidth={fountainWidth} fountainRatio={fountainRatio}>
        {children}
      </WrapperF>
    </>
  )
}

export default GlobePlayer

const Wrapper = styled.video`
  width: ${(props) => props.globeWidth * props.globeRatio}px;
  ${'' /* height: ${(props) => props.globeHeight * props.globeRatio}px; */}
  cursor: pointer;
`

const WrapperF = styled.video`
  width: ${(props) => props.fountainWidth * props.fountainRatio}px;
  height: ${(props) => props.fountainWidth * props.fountainRatio}px;
  cursor: pointer;
`
