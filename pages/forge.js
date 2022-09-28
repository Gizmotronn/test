import styled from '@emotion/styled'
import FountainGlobe from '../components/Fountain/FountainGlobe'
import ViewportMessage from '../components/ViewportMessage'

export default function Forge({ windowSize }) {
  const { width, height } = windowSize

  return (
    <Container>
      {width > 767 && height > 551 ? (
        <>
          <FountainContainer>
            <FountainGlobe />
          </FountainContainer>
        </>
      ) : (
        <ViewportMessage windowSize={windowSize} />
      )}
    </Container>
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
  margin: 15px 15px 15px 7.5px;
`
