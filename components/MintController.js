import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'

const MintController = (props) => {
  const { baseFountainSize } = props

  return (
    <>
      <Availability />
      <Counter />
      <Button />
    </>
  )
}

export default MintController

const Availability = styled.div`
  width: 60%;
  height: 20%;
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
