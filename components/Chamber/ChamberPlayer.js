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
  ${'' /* height: 100%; */}
  ${'' /* height: 33vh; */}
  width: 33%;
  clip-path: circle(50%);
  border-radius: 50%;
  padding: 7.5px;
`
