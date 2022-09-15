import styled from '@emotion/styled'
import Chamber from '../components/Chamber'
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
    <>
      <LandingContainer>
        <ChamberContainer>
          <TestDiv color='pink'></TestDiv>
          <TestDiv color='yellow'></TestDiv>
          <TestDiv color='white'></TestDiv>
        </ChamberContainer>
        <FountainContainer>
          {/* <Fountain /> */}
          <TestDiv color='orange'></TestDiv>
        </FountainContainer>
      </LandingContainer>
    </>
  )
}

const LandingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: auto;
`

const ChamberContainer = styled.div`
  width: 50%;
  height: 100%;
  background: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid yellow;
  overflow: hidden;
`

const FountainContainer = styled.div`
  width: 50%;
  height: 100%;
  background: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 1px solid green;
`

const TestDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${(props) => props.color};
`

const Circle = styled.div`
  width: 30%;
  height: 100%;
  background: ${(props) => props.color};
  border-radius: 50%;
`
