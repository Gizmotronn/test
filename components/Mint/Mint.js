import { useEffect, useState, useRef } from 'react'
import styled from '@emotion/styled'
import Head from 'next/head'
import { useContractRead } from 'wagmi'
import contractInterface from '../../constants/contract-abi.json'
import { CONTRACT_ADDRESS } from '../../constants/constants'
import MintAvailability from './MintAvailability'
import MintCounter from './MintCounter'
import MintButton from './MintButton'
import MintEligibilityMessage from '../../components/Mint/MintEligibilityMessage'
import Text from '../../components/Shared/Text'
import { COLORS } from '../../constants/constants'

const Mint = ({ isConnected, address, chain, viewportWidth, viewportHeight, nftId, messagePosition }) => {
  const [alreadyMinted, setAlreadyMinted] = useState(false)
  const [saleType, setSaleType] = useState('pending')
  const [maxMintablePublic, setMaxMintablePublic] = useState(0)
  const [isWhiteListed1, setIsWhiteListed1] = useState(false)
  const [whiteListed1Amount, setWhiteListed1Amount] = useState(0)
  const [isWhiteListed2, setIsWhiteListed2] = useState(false)
  const [whiteListed2Amount, setWhiteListed2Amount] = useState(0)
  const [showEligibilityMessage, setShowEligibilityMessage] = useState(false)
  const [quantity, setQuantity] = useState()

  // 👇 Set Mint Quantity Selected by the User and pass to Mint Button
  const setMintQuantity = (amount) => {
    // console.log('set quant')
    setQuantity(amount)
  }
  // 👇 Set the Already Minted NFT Message
  const AlreadyMintedMessage = () => {
    return (
      <>
        <Text color={COLORS.background}>Minting unavailable as you already own this NFT.</Text>
      </>
    )
  }

  // 👇 Set Not On Whitelist Message
  const WhitelistMessage = () => {
    return (
      <>
        <Text color={COLORS.background}>Minting unavailable as wallet address is not on WL.</Text>
      </>
    )
  }

  // 👇 Close Mint Message
  const handleCloseModal = (props) => {
    setShowEligibilityMessage(props)
  }

  // 👇 CONTRACT CONFIG
  const contractConfig = {
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: contractInterface.abi,
  }

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

  return (
    <>
      <Head>
        <title>BricktOrigins - Mint</title>
        <meta name='Mint BricktOrigins NFTs' content='BricktOrigins' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <>
        <MintRow>
          <MintAvailability contractConfig={contractConfig} nftId={nftId} />
        </MintRow>
        <MintRow>
          <MintCounter
            isConnected={isConnected} // 👈 disable buttons if not connected
            saleTypeEligible={saleTypeIs()} // 👈 only active when pre-sales or public sale is active
            maxMintable={nftMintLimit()} // 👈 max a user can mint
            setMintQuantity={setMintQuantity} // 👈 send user selected amount to Mint Button
          />
        </MintRow>
        <MintRow>
          <MintButton
            isConnected={isConnected} // 👈 disable if not connected
            saleTypeEligible={saleTypeIs()} // 👈 only active when pre-sales or public sale is active
            alreadyMinted={alreadyMinted} // 👈 disable if user already minted an NFT
            chain={chain} // 👈 for links to Etherscan and OpenSea on success
            contractConfig={contractConfig}
            nftId={nftId}
            nftQantity={quantity} // 👈 passed from the Mint Counter component
            x={messagePosition} // 👈 for Mint Message position
            viewportWidth={viewportWidth} // 👈 for Mint Message responsive styling
            viewportHeight={viewportHeight} // 👈 for Mint Message responsive styling
          />
        </MintRow>

        {isConnected && alreadyMinted && (
          <MintEligibilityMessage
            showMessage={true}
            message={AlreadyMintedMessage}
            modalOpen={handleCloseModal}
            viewportWidth={viewportWidth}
            viewportHeight={viewportHeight}
            x={messagePosition}
          />
        )}
        {isConnected && !isWhiteListed1 && !isWhiteListed2 && (
          <MintEligibilityMessage
            showMessage={true}
            message={WhitelistMessage}
            modalOpen={handleCloseModal}
            viewportWidth={viewportWidth}
            viewportHeight={viewportHeight}
            x={messagePosition}
          />
        )}
      </>
    </>
  )
}

export default Mint

// 👇 Set a 'Row'
const MintRow = styled.div`
  width: 100%;
  max-height: calc(33.66% - 7.5px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: flex-end;
`
