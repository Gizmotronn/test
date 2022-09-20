import styled from '@emotion/styled'

const ChamberPlayerMiddle = ({ children }) => {
  return (
    <Wrapper autoPlay loop>
      {children}
    </Wrapper>
  )
}

export default ChamberPlayerMiddle

const Wrapper = styled.video`
  max-width: 33%;
  ${'' /* max-height: 50%; */}
  clip-path: circle(50%);
  border-radius: 50%;
  ${'' /* padding: 7.5px; */}
`
