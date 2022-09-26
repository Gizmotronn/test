import styled from '@emotion/styled'
import { useContext } from 'react'
import { ChamberGlobeContext } from '../../contexts/ChamberGlobeContext'

const GlobePlayer = ({ children, width, height }) => {
  const [dimensions] = useContext(ChamberGlobeContext)

  return (
    <Wrapper autoPlay loop navGlobeSize={dimensions.width}>
      {children}
    </Wrapper>
  )
}

export default GlobePlayer

const Wrapper = styled.video`
  ${'' /* width: 56px; */}
  width: ${(props) => props.navGlobeSize * 0.46}px;
  clip-path: circle(50%);
  cursor: pointer;
`
