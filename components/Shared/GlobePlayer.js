import styled from '@emotion/styled'
import { useContext } from 'react'
import { ChamberGlobeContext } from '../../contexts/ChamberGlobeContext'

const GlobePlayer = ({ children }) => {
  const [dimensions] = useContext(ChamberGlobeContext)

  const globeWidth = dimensions ? dimensions.width : 112

  return (
    <Wrapper autoPlay loop globeWidth={globeWidth}>
      {children}
    </Wrapper>
  )
}

export default GlobePlayer

const Wrapper = styled.video`
  width: ${(props) => props.globeWidth * 0.5}px;
  clip-path: circle(50%);
  cursor: pointer;
`
