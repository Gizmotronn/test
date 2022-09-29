import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import Text from '../Shared/Text'

const MintAvailability = (props) => {
  const { baseFountainSize } = props

  const nftAvailability = '750/999'

  return (
    <>
      <Availability>
        <Text size='18px'>{nftAvailability}</Text>
      </Availability>
    </>
  )
}

export default MintAvailability

const Availability = styled.div`
  width: 33%;
  height: 100%;
  ${'' /* width: 33%; */}
  ${'' /* height: 33%; */}
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
  margin: 5px;
`
