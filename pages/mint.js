import styled from '@emotion/styled'
import MintNFT from '../components/MintNFT'
import PreReveal from '../components/PreReveal'

export default function Mint() {
  // 👇 min size @ 1024px
  const baseFountainSize = '486px' // 486px
  const chamberSize = '328px' // 328px
  const globeSize = '182px' // 182px

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
