import { useState } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import PreRevealGlobe from './PreRevealGlobe'

const MintButton = (props) => {
  const router = useRouter()

  const { eligibleToMint } = props

  return (
    <>
      <Button onClick={() => router.push('/mint')} type='button' mint={eligibleToMint}>
        <PreRevealGlobe />
      </Button>
    </>
  )
}

export default MintButton

const Button = styled.button`
  background: red;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: ${(props) => (props.mint ? 'pointer' : 'not-allowed')};
  width: 100%;
  height: 100%;
`
