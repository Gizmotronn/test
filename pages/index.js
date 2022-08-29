import styled from '@emotion/styled'
import Chamber from '../components/Chamber'
import Fountain from '../components/Fountain'

export default function Home() {
  const minWidthContainer = '360px'
  const minHeightContainer = '360px'

  return (
    <Container>
      <Chamber minWidthContainer={minWidthContainer} minHeightContainer={minHeightContainer} />
      <Fountain minWidthContainer={minWidthContainer} minHeightContainer={minHeightContainer} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid yellow;
  @media (max-width: 1023px) {
    flex-direction: column;
    border: 1px solid blue;
  }
`
