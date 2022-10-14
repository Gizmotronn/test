import styled from '@emotion/styled'
import MintGlobe from './MintGlobe'
import MintAvailability from './MintAvailability'
import MintCounter from './MintCounter'
import MintButton from './MintButton'

export function Mint({ windowSize }) {
  return (
    <>
      <MintRow>
        <MintAvailability />
      </MintRow>
      <MintRow>
        <MintCounter />
      </MintRow>
      <MintRow>
        <MintButton />
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
