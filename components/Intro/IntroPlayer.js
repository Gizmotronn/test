import styled from '@emotion/styled'

const IntroPlayer = ({ children }) => {
  return (
    <Wrapper playsInline autoPlay muted loop>
      {children}
    </Wrapper>
  )
}

export default IntroPlayer

const Wrapper = styled.video`
  width: 182px;
  height: 182px;
  clip-path: circle(50%);
  background: inherit;
  cursor: pointer;
`
