import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import MintAvailability from './MintAvailability'
import MintCounter from './MintCounter'
import MintButton from './MintButton'

export default function MintController({
  isConnected,
  alreadyMinted,
  maxMintable,
  saleTypeEligible,
  chain,
  totalSupply,
  totalMinted,
  contractConfig,
  nftId,
  viewportWidth,
  viewportHeight,
  x,
}) {
  const [quantity, setQuantity] = useState()

  const setMintQuantity = (amount) => {
    console.log('set quant')
    setQuantity(amount)
  }

  // useEffect(() => {
  //   const amount = setMintQuantity()
  //   setQuantity(amount)
  // }, [])

  return (
    <>
      <MintRow>
        <MintAvailability totalSupply={totalSupply} totalMinted={totalMinted} />
      </MintRow>
      <MintRow>
        <MintCounter
          isConnected={isConnected}
          maxMintable={maxMintable}
          saleTypeEligible={saleTypeEligible}
          setMintQuantity={setMintQuantity}
        />
      </MintRow>
      <MintRow>
        <MintButton
          isConnected={isConnected}
          alreadyMinted={alreadyMinted}
          saleTypeEligible={saleTypeEligible}
          chain={chain}
          contractConfig={contractConfig}
          nftId={nftId}
          viewportWidth={viewportWidth}
          viewportHeight={viewportHeight}
          x={x}
          nftQantity={quantity}
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
