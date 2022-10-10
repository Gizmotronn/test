import styled from '@emotion/styled'

const IntroPlayer = ({ children, source, hasLoaded }) => {
  return (
    <Wrapper playsInline autoPlay muted loop src={source} hasLoaded={hasLoaded}>
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
  cursor: ${(props) => (props.hasLoaded ? 'pointer' : 'not-allowed')};
`
