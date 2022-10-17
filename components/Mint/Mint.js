import styled from '@emotion/styled'
import MintMessage from './MintMessage'
import MintAvailability from './MintAvailability'
import MintCounter from './MintCounter'
import MintButton from './MintButton'

export function Mint({
  isConnected,
  chain,
  totalSupply,
  totalMinted,
  contractConfig,
  alreadyMinted,
  nftId,
  viewportWidth,
  viewportHeight,
  x,
  y,
}) {
  return (
    <>
      <MintRow>
        <MintAvailability totalSupply={totalSupply} totalMinted={totalMinted} />
      </MintRow>
      <MintRow>
        <MintCounter />
      </MintRow>
      <MintRow>
        <MintButton
          isConnected={isConnected}
          chain={chain}
          contractConfig={contractConfig}
          alreadyMinted={alreadyMinted}
          nftId={nftId}
          viewportWidth={viewportWidth}
          viewportHeight={viewportHeight}
          x={x}
          y={y}
        />
      </MintRow>
    </>
  )
}

// 👇 Set a 'Row'
const MintRow = styled.div`
  width: 100%;
  max-height: calc(33.66% - 7.5px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: flex-end;
`
