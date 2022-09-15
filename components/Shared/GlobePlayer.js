import styled from '@emotion/styled'

const GlobePlayer = ({ children }) => {
  return (
    <Wrapper autoPlay loop>
      {children}
    </Wrapper>
  )
}

export default GlobePlayer

const Wrapper = styled.video`
  ${'' /* width: 120px; */}
  ${'' /* height: 120px; */}
  min-width: 120px;
  max-width: 10vw;
  min-height: 120px;
  max-height: 10vh;
  ${'' /* width: 10vmin; */}
  ${'' /* height: 10vmin; */}
  ${'' /* width: calc(100% / 55); */}
  ${'' /* height: calc(100% / 55); */}
  ${'' /* min-width: 100px; */}
  ${'' /* min-height: 100px; */}
  ${'' /* width: 10vw; */}
  ${'' /* max-height: 10vh; */}
  clip-path: circle(50%);
  cursor: pointer;
`
