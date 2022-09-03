import styled from '@emotion/styled'
import ChamberController from '../components/ChamberController'
import Fountain from '../components/Fountain'
import { mq } from '../shared/styles'

export default function Home() {
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
      <ChamberController nftData={nftData} />
      <FountainContainer>
        {/* <div style={{ position: 'absolute', right: '15px' }}>
          <li style={{ listStyle: 'none', display: 'contents' }}>
            <AudioButton />
          </li>
        </div> */}
        <Fountain />
      </FountainContainer>
    </LandingContainer>
  )
}

const LandingContainer = styled.div`
  ${mq({ display: ['none', 'flex'] })};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  border: 1px solid pink;
`

const FountainContainer = styled.div`
  width: 50%;
  background: inherit;
`
