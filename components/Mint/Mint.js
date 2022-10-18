import { useEffect, useState, useRef } from 'react'
import styled from '@emotion/styled'
import Head from 'next/head'
import { useAccount, useNetwork, useContractRead } from 'wagmi'
import contractInterface from '../../constants/contract-abi.json'
import { CONTRACT_ADDRESS } from '../../constants/constants'
import MintController from '../../components/Mint/MintController'
import PreReveal from '../../components/Mint/PreReveal'
import ViewportMessage from '../../components/ViewportMessage'
import MintEligibilityMessage from '../../components/Mint/MintEligibilityMessage'
import Text from '../../components/Shared/Text'
import { COLORS } from '../../constants/constants'

export default function Mint({ windowSize, nftId = 0 }) {
  // const [userAccount, setUserAccount] = useState(0)

  const [totalSupply, setTotalSupply] = useState(0)
  const [totalMinted, setTotalMinted] = useState(0)
  console.log('🚀 ~ file: mint.js ~ line 19 ~ Mint ~ totalMinted', totalMinted)
  const [alreadyMinted, setAlreadyMinted] = useState(false)
  const [saleType, setSaleType] = useState('pending')
  const [maxMintablePublic, setMaxMintablePublic] = useState(0)
  const [isWhiteListed1, setIsWhiteListed1] = useState(false)
  const [whiteListed1Amount, setWhiteListed1Amount] = useState(0)
  const [isWhiteListed2, setIsWhiteListed2] = useState(false)
  const [whiteListed2Amount, setWhiteListed2Amount] = useState(0)
  const [showEligibilityMessage, setShowEligibilityMessage] = useState(false)
  // 👇 Size the Mint Message
  const fountainRef = useRef()
  const [x, setX] = useState(0)

  // 👇 Get the position of the Fountain container to use for the Mint Message
  const getPosition = () => {
    const x = fountainRef.current ? fountainRef.current.offsetLeft : 200
    setX(x)
  }

  // 👇 Get Window Size for Viewport Message
  const { width, height } = windowSize

  // 👇 Set the Already Minted NFT Message
  const AlreadyMintedMessage = () => {
    return (
      <>
        <Text color={COLORS.background}>You have already minted an NFT.</Text>
      </>
    )
  }

  // 👇 Set Not On Whitelist Message
  const WhitelistMessage = () => {
    return (
      <>
        <Text color={COLORS.background}>You are not on the whitelist.</Text>
      </>
    )
  }

  // 👇 Close Mint Message
  const handleCloseModal = (props) => {
    setShowEligibilityMessage(props)
  }

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
    // watch: true,
  })

  // 👇 Get TOTAL MINTED

  const { data: totalMintedData } = useContractRead({
    ...contractConfig,
    functionName: 'mintedCounterTokenId',
    args: [nftId],
    // watch: true,
  })

  // 👇 Check USER does NOT ALREADY OWN the NFT
  const { data: hasNftData } = useContractRead({
    ...contractConfig,
    functionName: 'hasNft',
    args: [address, nftId],
    // watch: true,
  })

  // ================== PUBLIC SALE ==================
  // 👇 Check if PUBLIC SALE is open
  const publicSaleData = false

  // 👇 Get Public Sale MAX Mint #
  const { data: publicMaxMintableCountData } = useContractRead({
    ...contractConfig,
    functionName: 'publicMaxMintableCount',
    // watch: true,
  })

  // ================== PRE-SALE 1 ==================
  // 👇 Check if PRE-SALE 1 open
  const { data: openedPresale1Data } = useContractRead({
    ...contractConfig,
    functionName: 'openedPresale1',
    // watch: true,
  })

  // 👇 Check if user on WHITELIST 1
  const { data: whitelisted1Data } = useContractRead({
    ...contractConfig,
    functionName: 'whitelisted1',
    args: [address, nftId],
    // watch: true,
  })

  // 👇 Check HOW MANY User can mint on WHITELIST 1
  const { data: whitelisted1_amountData } = useContractRead({
    ...contractConfig,
    functionName: 'whitelisted1_amount',
    args: [address],
    // watch: true,
  })

  // ================== PRE-SALE 2 ==================

  // 👇 Check if PRE-SALE 2 open
  const { data: openedPresale2Data } = useContractRead({
    ...contractConfig,
    functionName: 'openedPresale2',
    // watch: true,
  })

  // 👇 Check if user on WHITELIST 2
  const { data: isWhitelisted2Data } = useContractRead({
    ...contractConfig,
    functionName: 'isWhitelisted2',
    args: [nftId, address],
    // watch: true,
  })

  // 👇 Check HOW MANY User can mint on WHITELIST 2
  const { data: whitelisted2_amountData } = useContractRead({
    ...contractConfig,
    functionName: 'whitelisted2_amount',
    args: [address],
    // watch: true,
  })

  const nftMintLimit = () => {
    if (saleType === 'pending') {
      return 0
    }
    if (saleType === 'public') {
      return maxMintablePublic
    }
    if (saleType === 'presale1') {
      return whiteListed1Amount
    }
    if (saleType === 'presale2') {
      return whiteListed2Amount
    }
  }

  const saleTypeIs = () => {
    if (saleType === 'pending') {
      return false
    }
    if (saleType === 'public') {
      return true
    }
    if (saleType === 'presale1') {
      return isWhiteListed1
    }
    if (saleType === 'presale2') {
      return isWhiteListed2
    }
  }

  useEffect(() => {
    if (!isConnected) {
      return
    }

    // if (isConnected) {
    //   setUserAccount(address)
    // }

    // if (userAccount !== address) {
    //   console.log('reset')
    //   setUserAccount(address)
    // }

    getPosition() // 👈 Set the Fountain container position on mount

    // 👇 Get Count and Total Available
    if (totalSupplyData) {
      setTotalSupply(totalSupplyData.toNumber())
    }
    if (totalMintedData) {
      setTotalMinted(totalMintedData.toNumber())
    }

    // 👇 Then check if user has already minted an NFT and throw Message and stop them proceeding if they have
    if (hasNftData) {
      setAlreadyMinted(hasNftData)
      return
    }

    // 👇 If no NFT has been minted, Proceed:

    if (publicSaleData) {
      setSaleType('public')
      setMaxMintablePublic(publicMaxMintableCountData)
      return
    }
    if (openedPresale1Data) {
      setSaleType('presale1')
      if (whitelisted1Data) {
        setIsWhiteListed1(whitelisted1Data)
        setWhiteListed1Amount(whitelisted1_amountData.toNumber())
        return
      }
      return
    }
    if (openedPresale2Data) {
      setSaleType('presale2')
      if (isWhitelisted2Data) {
        setIsWhiteListed2(isWhitelisted2Data)
        setWhiteListed2Amount(whitelisted2_amountData.toNumber())
        return
      }
      return
    }
  }, [
    isConnected,
    address,
    totalSupplyData,
    totalMintedData,
    hasNftData,
    publicSaleData,
    publicMaxMintableCountData,
    openedPresale1Data,
    whitelisted1Data,
    whitelisted1_amountData,
    openedPresale2Data,
    isWhitelisted2Data,
    whitelisted2_amountData,
  ])

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
                alreadyMinted={alreadyMinted}
                maxMintable={nftMintLimit()}
                saleTypeEligible={saleTypeIs()}
                chain={chain}
                totalSupply={totalSupply}
                totalMinted={totalMinted}
                contractConfig={contractConfig}
                nftId={nftId}
                viewportWidth={width}
                viewportHeight={height}
                x={x}
              />
            </MintContainer>

            <PreRevealContainer ref={fountainRef}>
              <PreReveal />
            </PreRevealContainer>
            {isConnected && alreadyMinted && (
              <MintEligibilityMessage
                showMessage={true}
                message={AlreadyMintedMessage}
                modalOpen={handleCloseModal}
                viewportWidth={width}
                viewportHeight={height}
                x={x}
              />
            )}
            {isConnected && !isWhiteListed1 && !isWhiteListed2 && (
              <MintEligibilityMessage
                showMessage={true}
                message={WhitelistMessage}
                modalOpen={handleCloseModal}
                viewportWidth={width}
                viewportHeight={height}
                x={x}
              />
            )}
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
