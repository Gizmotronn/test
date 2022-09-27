import styled from '@emotion/styled'
import { useContext } from 'react'
import { ChamberGlobeContext } from '../../contexts/ChamberGlobeContext'

const GlobePlayer = ({ children }) => {
  const [dimensions] = useContext(ChamberGlobeContext)

  const globebase = 112
  const globeWidth = dimensions ? dimensions.width : globebase
  const globeHeight = dimensions ? dimensions.height : globebase
  const globeRatio = 0.5

  return (
    <Wrapper autoPlay loop globeWidth={globeWidth} globeHeight={globeHeight} globeRatio={globeRatio}>
      {children}
    </Wrapper>
  )
}

export default GlobePlayer

const Wrapper = styled.video`
  width: ${(props) => props.globeWidth * props.globeRatio}px;
  height: ${(props) => props.globeHeight * props.globeRatio}px;
  cursor: pointer;
`
