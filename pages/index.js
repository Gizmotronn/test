import styled from '@emotion/styled'
import Chamber from '../components/Chamber'
import Fountain from '../components/Fountain'

export default function Home() {
  // const minWidthContainer = '360px'
  // const minHeightContainer = '360px'

  return (
    <LandingContainer>
      <Container>
        <Chamber />
      </Container>
      <Container>
        <Fountain />
      </Container>
    </LandingContainer>
  )
}

const LandingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid yellow;
  width: 100%;
  margin: auto;
  @media (max-width: 1023px) {
    display: none;
  }
`

const Container = styled.div`
  width: 50%;
  background: inherit;
  border: 1px solid blue;
  ${'' /* margin: 10px 5px 10px 10px; */}
  ${'' /* margin: auto; */}
`
