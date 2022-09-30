import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import MintGlobe from './MintGlobe'
import Text from '../Shared/Text'

const MintAvailability = (props) => {
  const { baseFountainSize } = props

  const nftAvailability = '750/999'

  return (
    <>
      <MintGlobe placeholder={true} />
      <MintGlobe>
        <Text size='calc(1rem + 0.6vw)'>{nftAvailability}</Text>
      </MintGlobe>
      <MintGlobe placeholder={true} />
    </>
  )
}

export default MintAvailability