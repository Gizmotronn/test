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
  height: 100vh;
  clip-path: circle(50%);
`
