import styled from '@emotion/styled'

const ChamberPlayerPlaceholder = ({ children }) => {
  return (
    <Wrapper autoPlay loop>
      {children}
    </Wrapper>
  )
}

export default ChamberPlayerPlaceholder

const Wrapper = styled.video`
  max-width: 33%;
  visibility: hidden;
  ${'' /* max-height: 50%; */}
  ${'' /* clip-path: circle(50%); */}
  ${'' /* border: 1px solid green; */}
  ${'' /* border-radius: 50%; */}
  ${'' /* padding: 7.5px; */}
`
