import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import Text from '../Shared/Text'

const MintAvailability = (props) => {
  const { baseFountainSize } = props

  const nftAvailability = '750/999'

  return (
    <>
      {/* <Availability> */}
      <Text size='calc(1rem + 0.6vw)'>{nftAvailability}</Text>
      {/* </Availability> */}
    </>
  )
}

export default MintAvailability

const Availability = styled.div`
  font-size: 16px;
`
