import { useState } from 'react'
import styled from '@emotion/styled'
import MintGlobe from './MintGlobe'
import { Text } from '../../shared/styles'

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
      <MintGlobe>
        <Button fontSize='calc(1rem + 1.6vw)' paddingBottom='4px' onClick={handleDecrease} disabled={count === 1}>
          -
        </Button>
      </MintGlobe>
      <MintGlobe>
        <Text size='calc(1rem + 1.6vw)'>{count}</Text>
      </MintGlobe>
      <MintGlobe>
        <Button fontSize='calc(1rem + 1.6vw)' onClick={handleIncrease}>
          +
        </Button>
      </MintGlobe>
    </>
  )
}

export default MintCounter

const Button = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
  border: none;
  border-radius: 50%;
  font-size: ${(props) => props.fontSize || '34px'};
  font-family: 'ABCWhyteInktrapVariable';
  font-weight: ${(props) => props.weight || '400'};
  color: #fff;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  padding-bottom: ${(props) => props.paddingBottom || '0px'};
`