import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { Text } from '../shared/styles'
import MintCounter from './MintCounter'

const MintController = (props) => {
  const { baseFountainSize } = props

  const nftAvailability = '750/999'

  return (
    <>
      <Availability>
        <Text size='32px'>{nftAvailability}</Text>
      </Availability>
      <Counter>
        <MintCounter />
      </Counter>
      <Button />
    </>
  )
}

export default MintController

const Availability = styled.div`
  width: 60%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: pink;
  margin: 5px;
`

const Counter = styled.div`
  width: 50%;
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: red;
  margin: 5px;
`
const Button = styled.button`
  width: 60%;
  height: 20%;
  background: blue;
  margin: 5px;
`
