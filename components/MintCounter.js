import styled from '@emotion/styled'
import { Text } from '../shared/styles'

const MintCounter = () => {
  return (
    <>
      <Button fontSize='56px' paddingBottom='11px'>
        -
      </Button>
      <Text size='56px'>1</Text>
      <Button fontSize='56px'>+</Button>
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
  cursor: pointer;
  padding-bottom: ${(props) => props.paddingBottom || '0px'};
`
