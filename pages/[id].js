import { useEffect, useState, useRef } from 'react'
import styled from '@emotion/styled'
import Head from 'next/head'
import { useAccount, useNetwork } from 'wagmi'
import Mint from '../components/Mint'
import PreReveal from '../components/Mint/PreReveal'
import ViewportMessage from '../components/ViewportMessage'
import { id } from 'ethers/lib/utils'

// ======= 👀 ❗ This is the dynamic route ❗ 👀 =========

const MintNft = ({ route, windowSize }) => {
  // 👇 Position of the Fountain container

  const ref = useRef()

  const [x, setX] = useState(0)

  // 👇 Get the position of the Fountain container to use for the Mint Message
  const getPosition = () => {
    const x = ref.current ? ref.current.offsetLeft : null
    setX(x)
  }

  // 👇 Set the NFT ID
  const nftId = parseInt(route.substring(1, 2) - 1)

  // 👇 Get Window Size for Viewport Message
  const { width, height } = windowSize

  // 👇 Check USER AUTHENTICATED
  const { isConnected, address } = useAccount()

  // 👇 Get Network details for links to Etherscan and OpenSea
  const { chain } = useNetwork()

  useEffect(() => {
    // const getRef = ref.current
    // console.log('🚀 ~ file: 1.js ~ line 38 ~ useEffect ~ getRef', getRef)

    getPosition() // 👈 Set the Fountain container position on mount
  }, [])

  // 👇 Recalculate X and Y when browser window is re-sized
  useEffect(() => {
    if (width > 767 && height > 551) {
      window.addEventListener('resize', getPosition)
    }
  }, [width, height])

  return (
    <>
      <Head>
        <title>BricktOrigins - Mint NFT #1</title>
        <meta name='Mint BricktOrigins NFT #1' content='BricktOrigins' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container>
        {width > 767 && height > 551 ? (
          <>
            <MintContainer>
              <Mint
                isConnected={isConnected}
                address={address}
                chain={chain}
                viewportWidth={width}
                viewportHeight={height}
                nftId={nftId}
                messagePosition={x}
              />
            </MintContainer>

            <PreRevealContainer ref={ref}>
              <PreReveal />
            </PreRevealContainer>
          </>
        ) : (
          <ViewportMessage windowSize={windowSize} viewportWidth={width} viewportHeight={height} />
        )}
      </Container>
    </>
  )
}

export async function getStaticProps({ params }) {
  const nftId = parseInt(route.substring(1, 2) - 1)
  return {
    props: {
      nftId,
    },
  }
}

// 👇 Prepare the paths to build
export const getStaticPaths = async () => {
  const nftIds = [0, 1, 2, 3, 4]
  const paths = nftIds.map((id) => ({
    params: { id: id.toString() },
  }))

  return {
    paths,
    fallback: false, // 👈 throw 404 when ID is anything but the above
  }
}

export default MintNft

const Container = styled.div`
  height: 100%;
  display: flex;
  background: inherit;
  position: relative;
`

// 👇 Set MINT Container to 50% of viewport and as a 'Column'
// ❕ Using 'width' instead of 'flex' to fix issue with MintGlobe flickering when scaling based on Fountain size
const MintContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
  background: inherit;
`

// 👇 Set PRE-REVEAL to 50% of viewport and as a 'Column'
// ❕ Using 'width' instead of 'flex' to fix issue with MinGlobe flickering when scaling based on Fountain size
const PreRevealContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  ${'' /* height: 100%; */}
  justify-content: center;
  align-items: flex-start;
  background: inherit;
  padding: 15px 15px 15px 7.5px;
  ${'' /* position: relative; */}
`
