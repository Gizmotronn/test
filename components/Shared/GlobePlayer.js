import styled from '@emotion/styled'
import { useContext, useState, useEffect } from 'react'
import { FountainContext } from '../../contexts/FountainContext'

const GlobePlayer = ({ children, source }) => {
  const [hasMounted, setHasMounted] = useState(false)
  const [width, setWidth] = useState(112)

  const [dimensions] = useContext(FountainContext)
  const fountainbase = 370

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
        <Wrapper playsInline autoPlay muted loop fountainWidth={width} fountainRatio={fountainRatio} src={source}>
          {children}
        </Wrapper>
      </>
    )
  )
}

export default GlobePlayer

const Wrapper = styled.video`
  width: ${(props) => props.fountainWidth}px;
  height: ${(props) => props.fountainWidth}px;
`
