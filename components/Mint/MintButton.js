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
  chain,
  contractConfig,
  alreadyMinted,
  nftId,
  viewportWidth,
  viewportHeight,
  x,
  y,
}) => {
  const [eligibleToMint, setEligibleToMint] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [showForgeWarning, setShowForgeWarning] = useState(false)
  const [nftHasBeenMinted, setNftHasBeenMinted] = useState(false)

  // 👇 Close Mint Message
  const handleCloseModal = (props) => {
    setShowForgeWarning(props)
  }

  // 👇 MINT - write to contract

  const { config } = usePrepareContractWrite({
    ...contractConfig,
    functionName: 'mint',
    args: [nftId],
  })

  const { data: mintData, write: mint, isLoading: isMintLoading, isSuccess: isMintStarted } = useContractWrite(config)

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
              chain === 'Goerli'
                ? `https://${chain.name.toLowerCase()}.etherscan.io/tx/${mintData?.hash}`
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
    setNftHasBeenMinted(true)
  }, [isConnected, alreadyMinted, isMinted])
  return (
    <>
      <MintGlobe placeholder={true} />
      <MintGlobe>
        {isConnected && !alreadyMinted && (
          <Button onClick={() => mint?.()} disabled={isMintLoading || isMintStarted}>
            {isMintLoading && 'Waiting for approval'}
            {isMintStarted && 'Minting...'}
            {!isMintLoading && !isMintStarted && 'Mint'}
          </Button>
        )}
        {isConnected && alreadyMinted && <DisabledButton>Mint</DisabledButton>}
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
          y={y}
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
