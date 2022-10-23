import styled from '@emotion/styled'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Text from '../components/Shared/Text'
import ViewportMessage from '../components/ViewportMessage'

export default function Custom404({ windowSize }) {
  const { width, height } = windowSize

  const router = useRouter()
  const { route } = router

  return (
    <>
      <Head>
        <title>BricktOrigins - Forge</title>
        <meta name='BricktOrigins Forge' content='BricktOrigins' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        {width > 767 && height > 551 ? (
          <>
            <FountainContainer>
              <Text color='#FFF'>404 - Page Not Found</Text>
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

// 👇 Set FOUNTAIN to 100% of viewport and as a 'Column'
const FountainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 100%;
  justify-content: center;
  align-items: center;
  background: inherit;
  max-height: 100%;
  max-width: 100%;
  margin: 0px 15px;
`
