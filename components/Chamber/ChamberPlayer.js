import styled from '@emotion/styled'

const ChamberPlayer = ({ children }) => {
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
