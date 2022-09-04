import styled from '@emotion/styled'
import { Text } from '../shared/styles'

const MintButton = () => {
  return (
    <>
      <Button fontSize='48px'>Mint</Button>
    </>
  )
}

export default MintButton

const Button = styled.button`
  width: 80%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
  border: none;
  font-size: ${(props) => props.fontSize || '56px'};
  font-family: 'ABCWhyteInktrapVariable';
  font-weight: ${(props) => props.weight || '400'};
  color: #fff;
  cursor: pointer;
  margin-top: 25px;
  padding-bottom: ${(props) => props.paddingBottom || '0px'};
`
