import { useEffect, useState, useRef } from 'react'
import styled from '@emotion/styled'
import Head from 'next/head'
import { useAccount, useNetwork, useContractRead } from 'wagmi'
import contractInterface from '../constants/contract-abi.json'
import { CONTRACT_ADDRESS } from '../constants/constants'
import { Mint as MintController } from '../components/Mint'
import PreReveal from '../components/Mint/PreReveal'
import ViewportMessage from '../components/ViewportMessage'

export default function Mint({ windowSize, nftId = 0 }) {
  const [totalSupply, setTotalSupply] = useState(6)
  const [totalMinted, setTotalMinted] = useState(0)
  const [alreadyMinted, setAlreadyMinted] = useState(true)
  // 👇 Size the Mint Message
  const fountainRef = useRef()
  const [x, setX] = useState(0)

  // 👇 Get the position of the Fountain container to use for the Mint Message
  const getPosition = () => {
    const x = fountainRef.current ? fountainRef.current.offsetLeft : 200
    setX(x)
  }

  const { width, height } = windowSize

  // 👇 Check USER AUTHENTICATED
  const { isConnected, address } = useAccount()

  // 👇 Get Network details for links to Etherscan and OpenSea
  const { chain } = useNetwork()

  // 👇 CONTRACT CONFIG
  const contractConfig = {
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: contractInterface.abi,
  }

  // 👇 Get TOTAL SUPPLY

  const { data: totalSupplyData } = useContractRead({
    ...contractConfig,
    functionName: 'totalSupply',
    args: [nftId],
    watch: true,
  })

  // 👇 Get TOTAL MINTED

  const { data: totalMintedData } = useContractRead({
    ...contractConfig,
    functionName: 'mintedCounterTokenId',
    args: [nftId],
    watch: true,
  })

  // 👇 Check USER does NOT ALREADY OWN the NFT
  const { data: hasNftData } = useContractRead({
    ...contractConfig,
    functionName: 'hasNft',
    args: [address, nftId],
    watch: true,
  })

  useEffect(() => {
    getPosition() // 👈 Set the Fountain container position on mount
    if (totalSupplyData) {
      setTotalSupply(totalSupplyData.toNumber())
    }
    if (totalMintedData) {
      setTotalMinted(totalMintedData.toNumber())
    }

    setAlreadyMinted(hasNftData)
  }, [totalSupplyData, totalMintedData, hasNftData])

  // 👇 Recalculate X and Y when browser window is re-sized
  useEffect(() => {
    if (width > 767 && height > 551) {
      window.addEventListener('resize', getPosition)
    }
  }, [width, height])

  return (
    <>
      <Head>
        <title>BricktOrigins - Mint</title>
        <meta name='Mint BricktOrigins NFTs' content='BricktOrigins' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        {width > 767 && height > 551 ? (
          <>
            <MintContainer>
              <MintController
                isConnected={isConnected}
                chain={chain}
                totalSupply={totalSupply}
                totalMinted={totalMinted}
                contractConfig={contractConfig}
                alreadyMinted={alreadyMinted}
                nftId={nftId}
                viewportWidth={width}
                viewportHeight={height}
                x={x}
              />
            </MintContainer>

            <PreRevealContainer ref={fountainRef}>
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
