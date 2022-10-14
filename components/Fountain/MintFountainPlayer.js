import { useContext } from 'react'
import styled from '@emotion/styled'
import useDimensions from 'react-cool-dimensions'
import { FountainContext } from '../../contexts/FountainContext'

const MintFountainPlayer = ({ children }) => {
  const [, setDimensions] = useContext(FountainContext)

  // 👇 get and set the Fountain dimensions
  const { observe, unobserve, width, height, entry } = useDimensions({
    onResize: ({ observe, unobserve, width, height, entry }) => {
      // Triggered whenever the size of the target is changed...

      setDimensions({ width: width, height: height })

      unobserve() // To stop observing the current target element
      observe() // To re-start observing the current target element
    },
  })

  return (
    <Wrapper playsInline autoPlay muted loop ref={observe}>
      {children}
    </Wrapper>
  )
}

export default MintFountainPlayer

const Wrapper = styled.video`
  max-height: calc(100vh - 30px);
  max-width: calc(100vh - 30px);
  width: 100%;
  clip-path: circle(50%);
  border-radius: 50%;
  background: inherit;
  z-index: 400;
`
