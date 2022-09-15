import React, { useRef, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import ChamberGlobe from './ChamberGlobe'
import GoToMintButton from '../GoToMintButton'

const Chamber = () => {
  return (
    <>
      <NFTContainer>
        {/* <TestCon> */}
        <ChamberGlobe />
        {/* </TestCon> */}
      </NFTContainer>
      <NFTContainer>
        <TestCon>
          <ChamberGlobe />
          <ChamberGlobe />
          <ChamberGlobe />
        </TestCon>
      </NFTContainer>
      <NFTContainer>
        {/* <TestCon> */}
        <ChamberGlobe />
        {/* </TestCon> */}
      </NFTContainer>
    </>
  )
}

export default Chamber

const NFTContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: yellow;
`

const TestCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: pink;
`
