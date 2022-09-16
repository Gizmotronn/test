import styled from '@emotion/styled'
import ChamberGlobe from './ChamberGlobe'
import GoToMintButton from '../GoToMintButton'

const Chamber = () => {
  return (
    <Container>
      <ChamberRow color='inherit'>
        <ChamberGlobe />
      </ChamberRow>
      <ChamberRow color='inherit'>
        <GlobeContainer>
          <ChamberGlobe />
          <ChamberGlobe />
          <ChamberGlobe />
        </GlobeContainer>
      </ChamberRow>
      <ChamberRow color='inherit'>
        <ChamberGlobe />
      </ChamberRow>
    </Container>
  )
}

export default Chamber

const Container = styled.div`
  ${'' /* height: 100vh; */}
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const ChamberRow = styled.div`
  ${'' /* height: 33vh; */}
  ${'' /* width: 100%; */}
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${(props) => props.color || 'inherit'};
`

const GlobeContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
