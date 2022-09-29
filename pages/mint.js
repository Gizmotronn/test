import styled from '@emotion/styled'
import MintNFT from '../components/MintNFT'
import PreReveal from '../components/PreReveal'
import ViewportMessage from '../components/ViewportMessage'

export default function Mint({ windowSize }) {
  // 👇 min size @ 1024px
  const baseFountainSize = '486px' // 486px

  const { width, height } = windowSize

  return (
    <Container>
      {width > 767 && height > 551 ? (
        <>
          <MintContainer>
            <MintNFT baseFountainSize={baseFountainSize} />
          </MintContainer>
          <PreRevealContainer>
            <PreReveal baseFountainSize={baseFountainSize} />
          </PreRevealContainer>
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

// 👇 Set MINT Container to 50% of viewport and as a 'Column'
const MintContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 50%;
  justify-content: center;
  align-items: center;
  background: inherit;
  padding: 7.5px 0px 7.5px 0px;
`

// 👇 Set PRE-REVEAL to 50% of viewport and as a 'Column'
const PreRevealContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 50%;
  justify-content: center;
  align-items: flex-start;
  background: inherit;
  padding: 15px 15px 15px 7.5px;
`
