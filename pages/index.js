import styled from '@emotion/styled'
import Head from 'next/head'
import CurtainCanvas from '../components/Curtain/CurtainCanvas'
import ChamberGlobe from '../components/Chamber/ChamberGlobe'
import ChamberGlobePlaceholder from '../components/Chamber/ChamberGlobePlaceholder'
import FountainGlobe from '../components/Fountain/FountainGlobe'
import ViewportMessage from '../components/ViewportMessage'

export default function Home({ windowSize }) {
  const { width, height } = windowSize

  return (
    <>
      <Head>
        <title>BricktOrigins</title>
        <meta name='Welcome to BricktOrigins.' content='BricktOrigins' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        {width > 767 && height > 551 ? (
          <>
            <CurtainCanvas route='/' />
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
`

// 👇 Set CHAMBER to 50% of viewport and as a 'Column'
const ChamberContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
  background: inherit;
`

const ChamberRow = styled.div`
  width: 100%;
  max-height: calc(33.66% - 7.5px);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background: inherit;
`

// 👇 Set FOUNTAIN to 50% of viewport and as a 'Column'
const FountainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: flex-start;
  background: inherit;
  padding: 15px 15px 15px 7.5px;
`
