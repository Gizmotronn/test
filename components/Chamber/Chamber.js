import React, { useRef, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import ChamberGlobe from './ChamberGlobe'
import GoToMintButton from '../GoToMintButton'

const Chamber = () => {
  return (
    <>
      <GlobeContainer>
        <ChamberGlobe />
      </GlobeContainer>
      <GlobeContainer>
        <ChamberGlobe />
        <ChamberGlobe />
        <ChamberGlobe />
      </GlobeContainer>
      <GlobeContainer>
        <ChamberGlobe />
      </GlobeContainer>
    </>
  )
}

export default Chamber

const GlobeContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  background: pink;
  ${'' /* width: 100%; */}
  ${'' /* height: 33%; */}
  content: contain;
`
