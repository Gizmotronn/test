import styled from '@emotion/styled'
import ChamberGlobe from './ChamberGlobe'
import GoToMintButton from '../GoToMintButton'

const Chamber = () => {
  return (
    <>
      <ChamberRow color='pink'>
        <GlobeContainer>
          <ChamberGlobe />
        </GlobeContainer>
        <GlobeContainer>
          <ChamberGlobe />
        </GlobeContainer>
        <GlobeContainer>
          <ChamberGlobe />
        </GlobeContainer>
      </ChamberRow>
      <ChamberRow color='white'>
        <MiddleContainer>
          <GlobeContainer>
            <ChamberGlobe />
          </GlobeContainer>
          <GlobeContainer>
            <ChamberGlobe />
          </GlobeContainer>
          <GlobeContainer>
            <ChamberGlobe />
          </GlobeContainer>
        </MiddleContainer>
      </ChamberRow>
      <ChamberRow color='beige'>
        <GlobeContainer>
          <ChamberGlobe />
        </GlobeContainer>
        <GlobeContainer>
          <ChamberGlobe />
        </GlobeContainer>
        <GlobeContainer>
          <ChamberGlobe />
        </GlobeContainer>
      </ChamberRow>
    </>
  )
}

export default Chamber

const ChamberRow = styled.div`
  ${'' /* height: 33vh; */}
  ${'' /* width: 50vw; */}
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${(props) => props.color || 'inherit'};
`

const MiddleContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const GlobeContainer = styled.div`
  max-height: 33vh;
  ${'' /* width: 33%; */}
  display: flex;
  border: 1px solid green;
  border-radius: 50%;
  clip-path: circle(50%);
`
