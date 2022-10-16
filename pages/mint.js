import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Head from 'next/head'
import { useAccount, useContractRead } from 'wagmi'
import contractInterface from '../constants/contract-abi.json'
import { CONTRACT_ADDRESS } from '../constants/constants'
import { Mint as MintController } from '../components/Mint'
import PreReveal from '../components/PreReveal'
import MintMessage from '../components/Mint/MintMessage'
import ViewportMessage from '../components/ViewportMessage'

export default function Mint({ windowSize, nftId = 0 }) {
  const [totalSupply, setTotalSupply] = useState(6)
  const [totalMinted, setTotalMinted] = useState(0)
  const [alreadyMinted, setAlreadyMinted] = useState(true)

  const { width, height } = windowSize

  // 👇 Check USER AUTHENTICATED
  const { isConnected, address } = useAccount()

  // 👇 CONTRACT CONFIG
  const contractConfig = {
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: contractInterface.abi,
  }

  const testAddress = '0x15A4C3b42f3386Cd1A642908525469684Cac7C6d'

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
    if (totalSupplyData) {
      setTotalSupply(totalSupplyData.toNumber())
    }
    if (totalMintedData) {
      setTotalMinted(totalMintedData.toNumber())
    }

    setAlreadyMinted(hasNftData)
  }, [totalSupplyData, totalMintedData, hasNftData])

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
                totalSupply={totalSupply}
                totalMinted={totalMinted}
                contractConfig={contractConfig}
                alreadyMinted={alreadyMinted}
              />
            </MintContainer>
            <PreRevealContainer>
              <MintMessageContainer>
                <MintMessage showMessage={true} />
              </MintMessageContainer>
              <PreReveal />
            </PreRevealContainer>
          </>
        ) : (
          <ViewportMessage windowSize={windowSize} />
        )}
      </Container>
    </>
  )
}

const Container = styled.div`
  height: 100%;
  display: flex;
  background: inherit;
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
  justify-content: center;
  align-items: flex-start;
  background: inherit;
  padding: 15px 15px 15px 7.5px;
  position: relative;
`

const MintMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${'' /* width: 100%; */}
  ${'' /* height: 100%; */}
  justify-content: center;
  align-items: flex-start;
  background: yellow;
  padding: 15px 15px 15px 7.5px;
  position: absolute;
  z-index: 999;
`
