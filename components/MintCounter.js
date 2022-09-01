import { useState } from 'react'
import styled from '@emotion/styled'
import { Text } from '../shared/styles'

const MintCounter = () => {
  const [count, setCount] = useState(1)

  function handleDecrease() {
    const currentCount = count
    if (currentCount === 1) {
      return
    } else setCount(currentCount - 1)
  }

  function handleIncrease() {
    const currentCount = count
    setCount(currentCount + 1)
  }

  return (
    <>
      <Button fontSize='56px' paddingBottom='11px' onClick={handleDecrease} disabled={count === 1}>
        -
      </Button>
      <Text size='56px'>{count}</Text>
      <Button fontSize='56px' onClick={handleIncrease}>
        +
      </Button>
    </>
  )
}

export default MintCounter

const Button = styled.button`
  width: 95px;
  height: 95px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
  border: 2px solid #fff;
  border-radius: 50%;
  font-size: ${(props) => props.fontSize || '34px'};
  color: #fff;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  padding-bottom: ${(props) => props.paddingBottom || '0px'};
`
