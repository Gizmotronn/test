import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import MintGlobe from './MintGlobe'
import Text from '../Shared/Text'
import { BASEFONTSIZE } from '../../constants/constants'

const MintCounter = ({ isConnected, maxMintable = 0, saleTypeEligible }) => {
  const [count, setCount] = useState(1)

  function handleDecrease() {
    const currentCount = count
    if (currentCount === 1) {
      return
    } else setCount(currentCount - 1)
  }

  function handleIncrease() {
    const currentCount = count
    const limit = parseInt(maxMintable)
    if (currentCount === limit) {
      return
    } else setCount(currentCount + 1)
  }

  useEffect(() => {
    if (!isConnected) {
      setCount(0)
    }
  }, [isConnected])

  return (
    <>
      <MintGlobe>
        <Button paddingBottom='4px' onClick={handleDecrease} disabled={!isConnected || !saleTypeEligible}>
          -
        </Button>
      </MintGlobe>
      <MintGlobe>
        <Text>{count}</Text>
      </MintGlobe>
      <MintGlobe>
        <Button
          onClick={handleIncrease}
          disabled={!isConnected || count === parseInt(maxMintable) || !saleTypeEligible}
        >
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
  font-size: ${(props) => props.fontSize || BASEFONTSIZE};
  font-family: 'ABCWhyteInktrapVariable';
  font-weight: ${(props) => props.weight || '400'};
  color: #fff;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  padding-bottom: ${(props) => props.paddingBottom || '0px'};
`

{
  /* <Button fontSize='calc(1rem + 1.6vw)' onClick={handleIncrease}>
          +
        </Button> */
}
