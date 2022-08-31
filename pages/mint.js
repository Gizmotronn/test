import styled from '@emotion/styled'
import MintNFT from '../components/MintNFT'
import PreReveal from '../components/PreReveal'

export default function Mint() {
  // 👇 min size @ 1024px
  const baseFountainSize = '486px' // 486px

  return (
    <LandingContainer>
      <MintContainer>
        <MintNFT baseFountainSize={baseFountainSize} />
      </MintContainer>
      <PreRevealContainer>
        <PreReveal baseFountainSize={baseFountainSize} />
      </PreRevealContainer>
    </LandingContainer>
  )
}

const LandingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 1023px) {
    display: none;
  }
`

const MintContainer = styled.div`
  width: 50%;
  background: inherit;
  border: 1 px solid red;
`

const PreRevealContainer = styled.div`
  width: 50%;
  background: inherit;
`
