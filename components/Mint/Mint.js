import styled from '@emotion/styled'
import Text from '../Shared/Text'

export function Mint({ windowSize }) {
  return (
    <>
      <MintRow>
        <Text>Availability</Text>
      </MintRow>
      <MintRow>
        <Text>Counter</Text>
      </MintRow>
      <MintRow>
        <Text>Mint</Text>
      </MintRow>
    </>
  )
}

const MintRow = styled.div`
  width: 100%;
  max-height: 33%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: flex-end;
`
