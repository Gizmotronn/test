import styled from '@emotion/styled'

const FountainPlayer = ({ children }) => {
  return (
    <Wrapper autoPlay loop>
      {children}
    </Wrapper>
  )
}

export default FountainPlayer

const Wrapper = styled.video`
  height: 100vh;
  clip-path: circle(50%);
  cursor: pointer;
`
