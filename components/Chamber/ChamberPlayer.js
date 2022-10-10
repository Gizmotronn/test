import { useContext } from 'react'
import styled from '@emotion/styled'
import { ChamberGlobeContext } from '../../contexts/ChamberGlobeContext'
import useDimensions from 'react-cool-dimensions'

const ChamberPlayer = ({ children }) => {
  // const [, setDimensions] = useContext(ChamberGlobeContext)

  // // 👇 get and set the Chamber Globe dimensions
  // const { observe, unobserve, width, height, entry } = useDimensions({
  //   onResize: ({ observe, unobserve, width, height, entry }) => {
  //     // Triggered whenever the size of the target is changed...

  //     setDimensions({ width: width, height: height })

  //     unobserve() // To stop observing the current target element
  //     observe() // To re-start observing the current target element
  //   },
  // })

  return (
    <Wrapper playsInline autoPlay muted loop>
      {children}
    </Wrapper>
  )
}

export default ChamberPlayer

const Wrapper = styled.video`
  max-width: 33%;
  ${'' /* max-height: 33%; */}
  clip-path: circle(50%);
  border-radius: 50%;
  padding: 7.5px;
  z-index: 400;
`
