import styled from '@emotion/styled'
import CurtainCanvas from '../components/Curtain/CurtainCanvas'
import Chamber from '../components/Chamber'
import ChamberGlobe from '../components/Chamber/ChamberGlobe'
import ChamberGlobePlaceholder from '../components/Chamber/ChamberGlobePlaceholder'
import FountainGlobe from '../components/Fountain/FountainGlobe'
import ViewportMessage from '../components/ViewportMessage'

export default function Home({ windowSize }) {
  // const nftData = [
  //   {
  //     nft: 1,
  //     name: 'BricktoPunks',
  //     mint: true,
  //   },
  //   {
  //     nft: 2,
  //     name: 'Beers',
  //     mint: true,
  //   },
  //   {
  //     nft: 3,
  //     name: 'Super Computer',
  //     mint: false,
  //   },
  //   {
  //     nft: 4,
  //     name: 'The Forge',
  //     mint: false,
  //   },
  //   {
  //     nft: 5,
  //     name: 'Brain',
  //     mint: false,
  //   },
  // ]

  const { width, height } = windowSize

  return (
    <>
      <CurtainCanvas route='/' />
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
          <ViewportMessage windowSize={windowSize} />
        )}
      </Container>
    </>
  )
}

// 👇 Set a 'Row'
const Container = styled.div`
  height: 100%;
  display: flex;
  background: inherit;
  ${'' /* padding: 7.5px 0px; */}
`

// 👇 Set CHAMBER to 50% of viewport and as a 'Column'
const ChamberContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
  background: inherit;
  ${'' /* padding: 7.5px 0px 7.5px 0px; */}
`

const ChamberRow = styled.div`
  width: 100%;
  max-height: calc(33.66% - 7.5px);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

// 👇 Set FOUNTAIN to 50% of viewport and as a 'Column'
const FountainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: flex-start;
  background: inherit;
  ${'' /* padding: 15px 15px 15px 7.5px; */}
  padding: 0 15px 0 7.5px;
`
