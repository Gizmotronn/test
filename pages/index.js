import styled from '@emotion/styled'
import Chamber from '../components/Chamber'
import Fountain from '../components/Fountain'
import AudioButton from '../components/AudioButton'

export default function Home() {
  // 👇 min size @ 1024px
  const fountainSize = '486px' // 486px
  const chamberSize = '328px' // 328px
  const globeSize = '182px' // 182px

  return (
    <LandingContainer>
      <ChamberContainer>
        <Chamber chamberSize={chamberSize} globeSize={globeSize} />
      </ChamberContainer>
      <FountainContainer>
        {/* <div style={{ position: 'absolute', right: '15px' }}>
          <li style={{ listStyle: 'none', display: 'contents' }}>
            <AudioButton />
          </li>
        </div> */}
        <Fountain fountainSize={fountainSize} />
      </FountainContainer>
    </LandingContainer>
  )
}

const LandingContainer = styled.div`
  border: 1px solid yellow;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 1023px) {
    display: none;
  }
`

const ChamberContainer = styled.div`
  border: 1px solid blue;
  width: 50%;
  background: inherit;
  ${'' /* margin: 10px 5px 10px 10px; */}
  ${'' /* margin: auto; */}
`

const FountainContainer = styled.div`
  border: 1px solid red;
  width: 50%;
  background: inherit;
  margin: 0 0 0 15px;
`
