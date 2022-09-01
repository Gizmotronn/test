import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { Text } from '../shared/styles'

const MintCounter = () => {
  return (
    <>
      <Button fontSize='40px' paddingBottom='4px'>
        -
      </Button>
      <Text size='32px'>1</Text>
      <Button fontSize='34px'>+</Button>
    </>
  )
}

export default MintCounter

const Button = styled.button`
  width: 66px;
  height: 66px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
  border: 1px solid black;
  border-radius: 50%;
  font-size: ${(props) => props.fontSize || '34px'};
  color: #fff;
  cursor: pointer;
  padding-bottom: ${(props) => props.paddingBottom || '0px'};
`
