import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { Text } from '../shared/styles'
import MintCounter from './MintCounter'
import MintButton from './MintButton'

const MintAvailability = (props) => {
  const { baseFountainSize } = props

  const nftAvailability = '750/999'

  return (
    <>
      <Availability>
        <Text size='56px'>{nftAvailability}</Text>
      </Availability>
      <Counter>
        <MintCounter />
      </Counter>
      <ButtonContainer>
        <MintButton />
      </ButtonContainer>
    </>
  )
}

export default MintAvailability

const Availability = styled.div`
  width: 40%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
  margin: 5px;
`

const Counter = styled.div`
  width: 60%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: inherit;
  margin: 5px 5px 5px 5px;
  padding: 0 0;
`
const ButtonContainer = styled.div`
  width: 30%;
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: inherit;
  margin: 5px 5px;
`
