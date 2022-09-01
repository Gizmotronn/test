import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { Text } from '../shared/styles'

const MintController = (props) => {
  const { baseFountainSize } = props

  const nftAvailability = '750/999'

  return (
    <>
      <Availability>
        <Text size='32px'>{nftAvailability}</Text>
      </Availability>
      <Counter />
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
  width: 80%;
  height: 20%;
  background: red;
  margin: 5px;
`
const Button = styled.div`
  width: 60%;
  height: 20%;
  background: blue;
  margin: 5px;
`
