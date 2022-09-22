import styled from '@emotion/styled'

const GlobePlayer = ({ children, width, height }) => {
  console.log('🚀 ~ file: GlobePlayer.js ~ line 4 ~ GlobePlayer ~ height', height)
  console.log('🚀 ~ file: GlobePlayer.js ~ line 4 ~ GlobePlayer ~ width', width)

  return (
    <Wrapper autoPlay loop width={width}>
      {children}
    </Wrapper>
  )
}

export default GlobePlayer

const Wrapper = styled.video`
  width: ${(props) => props.width * 0.1}px;
  ${'' /* height: 57px; */}
  ${'' /* max-height: 157px; */}
  ${'' /* width: 57px; */}
  ${'' /* width: clamp(100px, 120px, 120px); */}
  ${'' /* height: max(7.5vh, 57px); */}
  ${'' /* width: max(7.5vh, 57px); */}
  ${'' /* width: max(7.5vw, 57px); */}
  ${'' /* max-height: calc(100vw - 92.5vh); */}
  ${'' /* height: 7.5vw; */}
  clip-path: circle(50%);
  cursor: pointer;
`
