import styled from '@emotion/styled'
import Chamber from '../components/Chamber'
import Fountain from '../components/Fountain'
import { mq } from '../shared/styles'

export default function Home() {
  // 👇 min size @ 1024px
  const fountainSize = '486px' // 486px
  const chamberSize = '328px' // 328px
  const globeSize = '182px' // 182px

  const nftData = [
    {
      nft: 1,
      name: 'BricktoPunks',
      mint: true,
    },
    {
      nft: 2,
      name: 'Beers',
      mint: true,
    },
    {
      nft: 3,
      name: 'Super Computer',
      mint: false,
    },
    {
      nft: 4,
      name: 'The Forge',
      mint: false,
    },
    {
      nft: 5,
      name: 'Brain',
      mint: false,
    },
  ]

  return (
    <LandingContainer>
      <ChamberContainer>
        <Chamber chamberSize={chamberSize} globeSize={globeSize} nftData={nftData} />
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
  ${mq({ display: ['none', 'flex', 'none', 'flex'] })};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`

const ChamberContainer = styled.div`
  width: 50%;
  background: inherit;
`

const FountainContainer = styled.div`
  width: 50%;
  background: inherit;
`
