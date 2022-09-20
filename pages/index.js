import styled from '@emotion/styled'
import Chamber from '../components/Chamber'
import ChamberGlobe from '../components/Chamber/ChamberGlobe'
import ChamberGlobeMiddle from '../components/Chamber/ChamberGlobeMiddle'
import ChamberGlobePlaceholder from '../components/Chamber/ChamberGlobePlaceholder'
import FountainGlobe from '../components/Fountain/FountainGlobe'
import Text from '../components/Shared/Text'
import { COLORS } from '../constants'
import { mq } from '../shared/styles'

export default function Home({ windowSize }) {
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

  const { width, height } = windowSize

  return (
    <Container>
      {width > 767 && height > 551 ? (
        <>
          <ChamberContainer>
            <ChamberRow>
              <ChamberGlobePlaceholder />
              <ChamberGlobe />
              <ChamberGlobePlaceholder />
            </ChamberRow>

            <ChamberRow>
              <ChamberGlobe />
              <ChamberGlobe />
              <ChamberGlobe />
            </ChamberRow>

            <ChamberRow>
              <ChamberGlobePlaceholder />
              <ChamberGlobe />
              <ChamberGlobePlaceholder />
            </ChamberRow>
          </ChamberContainer>

          <FountainContainer>
            <FountainGlobe />
          </FountainContainer>
        </>
      ) : (
        <>
          <BrowserMessage>
            <MessageContainer>{width <= 767 && <Text>You need a WIDER browser!</Text>}</MessageContainer>
            <MessageContainer>{height <= 551 && <Text>You need a TALLER browser!</Text>}</MessageContainer>
          </BrowserMessage>
        </>
      )}
    </Container>
  )
}

// 👇 Set a 'Row'
const Container = styled.div`
  height: 100%;
  display: flex;
  background: inherit;
  border: 1px solid yellow;
`

// 👇 Set CHAMBER to 50% of viewport and as a 'Column'
const ChamberContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 50%;
  justify-content: center;
  align-items: center;
  background: inherit;
`

const ChamberRow = styled.div`
  width: 100%;
  max-height: 33%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: flex-end;
`

// 👇 Set FOUNTAIN to 50% of viewport and as a 'Column'
const FountainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 50%;
  justify-content: center;
  align-items: flex-start;
  background: inherit;
`

const BrowserMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 522px;
  min-height: 206px;
  background-color: ${COLORS.primary};
  border: 1px solid yellow;
`

const MessageContainer = styled.div`
  display: flex;
  max-width: 722px;
  max-height: 506px;
`
