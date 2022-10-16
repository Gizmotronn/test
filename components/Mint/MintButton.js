import styled from '@emotion/styled'
import MintGlobe from './MintGlobe'
import { BASEFONTSIZE } from '../../constants/constants'

const MintButton = () => {
  return (
    <>
      <MintGlobe placeholder={true} />
      <MintGlobe>
        <Button>Mint</Button>
        {/* <Button fontSize='calc(1rem + 0.6vw)'>Mint</Button> */}
      </MintGlobe>
      <MintGlobe placeholder={true} />
    </>
  )
}

export default MintButton

const Button = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
  border: none;
  font-size: ${(props) => props.fontSize || BASEFONTSIZE};
  font-family: 'ABCWhyteInktrapVariable';
  font-weight: ${(props) => props.weight || '400'};
  color: #fff;
  cursor: pointer;
  ${'' /* margin-top: 25px; */}
  padding-bottom: ${(props) => props.paddingBottom || '0px'};
`
