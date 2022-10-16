import styled from '@emotion/styled'
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'
import MintGlobe from './MintGlobe'
import { BASEFONTSIZE } from '../../constants/constants'

const MintButton = ({ isConnected, contractConfig }) => {
  // 👇 MINT - write to contract

  const { config } = usePrepareContractWrite({
    ...contractConfig,
    functionName: 'mint',
  })

  const { data: mintData, write: mint, isLoading: isMintLoading, isSuccess: isMintStarted } = useContractWrite(config)

  const { isSuccess: txnSuccess } = useWaitForTransaction({
    hash: mintData?.hash,
  })

  const isMinted = txnSuccess

  return (
    <>
      <MintGlobe placeholder={true} />
      <MintGlobe>
        <Button isConnected={isConnected} onClick={() => mint?.()} disabled={isMintLoading || isMintStarted}>
          {isMintLoading && 'Waiting for approval'}
          {isMintStarted && 'Minting...'}
          {!isMintLoading && !isMintStarted && 'Mint'}
        </Button>
      </MintGlobe>
      <MintGlobe placeholder={true} />
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
  cursor: ${(props) => (props.isConnected ? 'pointer' : 'not-allowed')};
  ${'' /* margin-top: 25px; */}
  padding-bottom: ${(props) => props.paddingBottom || '0px'};
`
