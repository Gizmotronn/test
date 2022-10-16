import styled from '@emotion/styled'
import MintGlobe from './MintGlobe'
import MintAvailability from './MintAvailability'
import MintCounter from './MintCounter'
import MintButton from './MintButton'

export function Mint({ isConnected, totalSupply, contractConfig, alreadyMinted }) {
  console.log('🚀 ~ file: Mint.js ~ line 8 ~ Mint ~ alreadyMinted', alreadyMinted)
  return (
    <>
      <MintRow>
        <MintAvailability totalSupply={totalSupply} />
      </MintRow>
      <MintRow>
        <MintCounter />
      </MintRow>
      <MintRow>
        <MintButton isConnected={isConnected} contractConfig={contractConfig} alreadyMinted={alreadyMinted} />
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
