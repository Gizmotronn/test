import styled from '@emotion/styled'

const ChamberPlayer = ({ children }) => {
  return (
    <Wrapper autoPlay loop>
      {children}
    </Wrapper>
  )
}

export default ChamberPlayer

const Wrapper = styled.video`
  height: 33vh;
  width: 33%;
  clip-path: circle(50%);
`
