import { useState, useEffect } from 'react'
import { useContractRead } from 'wagmi'
import MintGlobe from './MintGlobe'
import Text from '../Shared/Text'

const MintAvailability = ({ contractConfig, nftId }) => {
  const [totalSupply, setTotalSupply] = useState(0)
  const [totalMinted, setTotalMinted] = useState(0)

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

  useEffect(() => {
    // 👇 Get Count and Total Available
    if (totalSupplyData) {
      setTotalSupply(totalSupplyData.toNumber())
    }
    if (totalMintedData) {
      setTotalMinted(totalMintedData.toNumber())
    }
  }, [totalSupplyData, totalMintedData])

  return (
    <>
      <MintGlobe placeholder={true} />
      <MintGlobe>
        <Text>
          {totalMinted} / {totalSupply}
        </Text>
      </MintGlobe>
      <MintGlobe placeholder={true} />
    </>
  )
}

export default MintAvailability
