import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import MintGlobe from './MintGlobe'
import Text from '../Shared/Text'

const MintAvailability = ({ totalSupply }) => {
  const nftMinted = '444'

  return (
    <>
      <MintGlobe placeholder={true} />
      <MintGlobe>
        <Text>
          {nftMinted} / {totalSupply}
        </Text>
      </MintGlobe>
      <MintGlobe placeholder={true} />
    </>
  )
}

export default MintAvailability
