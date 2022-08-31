import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import PreRevealGlobe from './PreRevealGlobe'

const GoToMintButton = (props) => {
  const router = useRouter()

  const { eligibleToMint } = props

  return (
    <>
      <Button onClick={() => router.push('/mint')} type='button' mint={eligibleToMint}>
        <PreRevealGlobe mint={eligibleToMint} />
      </Button>
    </>
  )
}

export default GoToMintButton

const Button = styled.button`
  ${'' /* background: red; */}
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: ${(props) => (props.mint ? 'pointer' : 'not-allowed')};
  width: 100%;
  height: 100%;
  background: inherit;
`
