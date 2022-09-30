import styled from '@emotion/styled'
import MintGlobe from './MintGlobe'
import MintAvailability from './MintAvailability'

export function Mint({ windowSize }) {
  return (
    <>
      <MintRow>
        <MintGlobe placeholder={true} />
        <MintGlobe />
        <MintGlobe placeholder={true} />
      </MintRow>
      <MintRow>
        <MintGlobe />
        <MintGlobe />
        <MintGlobe />
      </MintRow>
      <MintRow>
        <MintGlobe placeholder={true} />
        <MintGlobe />
        <MintGlobe placeholder={true} />
      </MintRow>
    </>
  )
}

// 👇 Set a 'Row'
const MintRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: flex-end;
`
