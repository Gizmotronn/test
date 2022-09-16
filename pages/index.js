import styled from '@emotion/styled'
import Chamber from '../components/Chamber'
import FountainGlobe from '../components/Fountain/FountainGlobe'
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
    <>
      <ChamberContainer>
        <Chamber />
      </ChamberContainer>
      <FountainContainer>
        <FountainGlobe />
      </FountainContainer>
    </>
  )
}

const ChamberContainer = styled.div`
  display: flex;
  flex: 1 1 50%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  ${'' /* height: 80vh; */}
  background: inherit;
  ${'' /* padding: 7.5px 0 7.5px 7.5px; */}
`

const FountainContainer = styled.div`
  display: flex;
  flex: 1 1 50%;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: inherit;
`
