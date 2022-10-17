import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'
import MintGlobe from './MintGlobe'
import { BASEFONTSIZE } from '../../constants/constants'
import MintMessage from './MintMessage'
import Text from '../Shared/Text'
import { COLORS } from '../../constants/constants'

const MintButton = ({
  isConnected,
  saleTypeEligible,
  alreadyMinted,
  chain,
  contractConfig,
  nftId,
  viewportWidth,
  viewportHeight,
  x,
  nftQantity,
}) => {
  console.log('🚀 ~ file: MintButton.js ~ line 22 ~ chain', chain)
  const [eligibleToMint, setEligibleToMint] = useState(false)
  const [showMintMessage, setShowMintMessage] = useState(false)
  const [nftHasBeenMinted, setNftHasBeenMinted] = useState(false)

  // 👇 Close Mint Message
  const handleCloseModal = (props) => {
    setShowMintMessage(props)
  }

  // 👇 MINT - write to contract

  const { config, error } = usePrepareContractWrite({
    ...contractConfig,
    functionName: 'mint',
    args: [nftId, nftQantity],
  })
  console.log('🚀 ~ file: MintButton.js ~ line 38 ~ config', config)
  console.log('🚀 ~ file: MintButton.js ~ line 38 ~ error', error)

  const { data: mintData, write: mint, isLoading: isMintLoading, isSuccess: isMintStarted } = useContractWrite(config)
  console.log('🚀 ~ file: MintButton.js ~ line 42 ~ isMintStarted', isMintStarted)
  console.log('🚀 ~ file: MintButton.js ~ line 42 ~ mintData', mintData)

  const { isSuccess: txnSuccess } = useWaitForTransaction({
    hash: mintData?.hash,
  })

  const isMinted = txnSuccess

  const MintSuccessMessage = () => {
    return (
      <>
        <Text color={COLORS.background}>Congratulations! You have minted an NFT.</Text>
        <Text color={COLORS.background}>
          View on{' '}
          <a
            href={
              chain.network === 'goerli'
                ? `https://${chain.network}.etherscan.io/tx/${mintData?.hash}`
                : `https://etherscan.io/tx/${mintData?.hash}`
            }
            target='_blank'
            rel='noopener noreferrer'
            style={{ cursor: 'pointer' }}
          >
            Etherscan
          </a>
        </Text>
        <Text color={COLORS.background}>
          View on{' '}
          <a
            href={
              chain === 'Goerli'
                ? `https://testnets.opensea.io/assets/goerli/${config.addressOrName}/${nftId}`
                : `https://opensea.io/assets/ethereum/${config.addressOrName}/${nftId}`
            }
            target='_blank'
            rel='noopener noreferrer'
            style={{ cursor: 'pointer' }}
          >
            OpenSea
          </a>
        </Text>
      </>
    )
  }

  useEffect(() => {
    setEligibleToMint(alreadyMinted)
  }, [isConnected, alreadyMinted])

  useEffect(() => {
    setNftHasBeenMinted(isMinted)
  }, [isMinted])
  return (
    <>
      <MintGlobe placeholder={true} />
      <MintGlobe>
        {/* {isConnected && !alreadyMinted && saleTypeEligible && ( */}
        <Button
          onClick={() => {
            console.log('mint')
            return mint?.()
          }}
          disabled={isMintLoading || isMintStarted}
        >
          {isMintLoading && 'Waiting for approval'}
          {isMintStarted && 'Minting...'}
          {!isMintLoading && !isMintStarted && 'Mint'}
        </Button>
        {/* )} */}
        {/* {isConnected && alreadyMinted && <DisabledButton>Mint</DisabledButton>} */}
      </MintGlobe>
      <MintGlobe placeholder={true} />
      {nftHasBeenMinted && (
        <MintMessage
          showMessage={true}
          message={MintSuccessMessage}
          modalOpen={handleCloseModal}
          viewportWidth={viewportWidth}
          viewportHeight={viewportHeight}
          x={x}
        />
      )}
    </>
  )
}

export default MintButton

const Button = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
  border: none;
  font-size: ${(props) => props.fontSize || BASEFONTSIZE};
  font-family: 'ABCWhyteInktrapVariable';
  font-weight: ${(props) => props.weight || '400'};
  color: #fff;
  cursor: pointer};
  ${'' /* margin-top: 25px; */}
  padding-bottom: ${(props) => props.paddingBottom || '0px'};
`

const DisabledButton = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
  border: none;
  font-size: ${(props) => props.fontSize || BASEFONTSIZE};
  font-family: 'ABCWhyteInktrapVariable';
  font-weight: ${(props) => props.weight || '400'};
  color: gray};
  cursor: not-allowed;
  ${'' /* margin-top: 25px; */}
  padding-bottom: ${(props) => props.paddingBottom || '0px'};
`
