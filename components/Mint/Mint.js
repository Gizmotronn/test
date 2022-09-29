import styled from '@emotion/styled'
import MintAvailability from './MintAvailability'
import Text from '../Shared/Text'
import { COLORS } from '../../constants'
import ChamberGlobe from '../Chamber/ChamberGlobe'

export function Mint({ windowSize }) {
  return (
    <>
      <MintRow color='pink'>
        <MintElement>{/* <MintAvailability /> */}</MintElement>
      </MintRow>
      <MintRow color='lightblue'>
        <MintElement>
          <ChamberGlobe />
        </MintElement>
        <MintElement>
          <ChamberGlobe />
        </MintElement>
        <MintElement>
          <ChamberGlobe />
        </MintElement>
      </MintRow>
      <MintRow color='palegreen'>
        <MintElement>
          <ChamberGlobe />
        </MintElement>
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
  background: ${(props) => props.color};
`

const MintElement = styled.div`
  width: 33%;
  ${'' /* height: 33vh; */}
  display: flex;
  ${'' /* border-radius: 50%; */}
  padding: 7.5px;
  border: 1px solid ${COLORS.text};
  ${'' /* background: blue; */}
`
