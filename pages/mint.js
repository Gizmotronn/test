import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Head from 'next/head'
import { useContractRead, useContractReads } from 'wagmi'
import contractInterface from '../constants/contract-abi.json'
import { Mint as MintController } from '../components/Mint'
import PreReveal from '../components/PreReveal'
import ViewportMessage from '../components/ViewportMessage'

export default function Mint({ windowSize }) {
  const [totalSupply, setTotalSupply] = useState(0)
  const [totalMinted, setTotalMinted] = useState(0)

  const { width, height } = windowSize

  const CONTRACT_ADDRESS = '0x8FF57d5C9d15fD08d0fe40Da85166F1347d0a9Cf'

  const contractConfig = {
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: contractInterface.abi,
  }

  // 👇 Testing Contract Reads

  const TEST_ADDRESS = '0x15A4C3b42f3386Cd1A642908525469684Cac7C6d'

  const { data: totalSupplyData } = useContractRead({
    ...contractConfig,
    functionName: 'totalSupply',
    args: [0],
  })

  const { data: balanceOf } = useContractRead({
    ...contractConfig,
    functionName: 'balanceOf',
    args: [TEST_ADDRESS, 0],
  })

  const { data: getWhitelistAmount1, error } = useContractRead({
    ...contractConfig,
    functionName: 'getWhitelistAmount1',
    args: [0, TEST_ADDRESS],
  })
  // console.log('🚀 ~ file: mint.js ~ line 44 ~ Mint ~ error', error)

  const { data: openedPresale2 } = useContractRead({
    ...contractConfig,
    functionName: 'openedPresale2',
  })

  const { data: whitelisted1 } = useContractRead({
    ...contractConfig,
    functionName: 'whitelisted1',
    args: [TEST_ADDRESS, 0],
  })

  const { data: hasNft } = useContractRead({
    ...contractConfig,
    functionName: 'hasNft',
    args: [TEST_ADDRESS, 0],
  })

  const { data: maxMintableCount1 } = useContractRead({
    ...contractConfig,
    functionName: 'maxMintableCount1',
  })

  const { data: maxMintableCount2 } = useContractRead({
    ...contractConfig,
    functionName: 'maxMintableCount2',
  })

  const { data: publicSalePrice } = useContractRead({
    ...contractConfig,
    functionName: 'publicSalePrice',
  })

  useEffect(() => {
    console.log('totalSupplyData:', totalSupplyData.toString())
    console.log('getWhitelistAmount1:', getWhitelistAmount1) // add to whitelist first
    console.log('openedPresale2:', openedPresale2)
    console.log('whitelisted1:', whitelisted1)
    console.log('balanceOf:', balanceOf.toString())
    console.log('hasNft:', hasNft)
    console.log('maxMintableCount1:', maxMintableCount1.toString())
    console.log('maxMintableCount2:', maxMintableCount2.toString())
    console.log('publicSalePrice:', publicSalePrice.toString())
  }, [
    publicSalePrice,
    maxMintableCount1,
    maxMintableCount2,
    hasNft,
    totalSupplyData,
    openedPresale2,
    getWhitelistAmount1,
    whitelisted1,
    balanceOf,
  ])

  // const { data, isError, isLoading } = useContractRead({
  //   ...contractConfig,
  //   functionName: 'totalSupply',
  //   watch: true,
  // })

  // useEffect(() => {
  //   if (totalSupplyData) {
  //     setTotalMinted(totalSupplyData.toNumber())
  //   }
  // }, [totalSupplyData])

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
              <MintController totalSupply={totalSupply} />
            </MintContainer>
            <PreRevealContainer>
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
`
