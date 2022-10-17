import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import MintGlobe from './MintGlobe'
import Text from '../Shared/Text'

const MintAvailability = ({ totalSupply, totalMinted }) => {
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
