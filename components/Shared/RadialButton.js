import styled from '@emotion/styled'
import { COLORS, BASEFONTSIZE } from '../../constants'

const RadialButton = ({ color, cursor, size, weight, onClick, children }) => {
  return (
    <Wrapper color={color} cursor={cursor} size={size} weight={weight} onClick={onClick}>
      {children}
    </Wrapper>
  )
}

export default RadialButton

const Wrapper = styled.button`
  background: ${(props) => props.color || COLORS.text};
  padding: 20px;
  border: 1px solid black;
  border-radius: 12px;
  cursor: ${(props) => props.cursor || 'pointer'};
  font-size: ${(props) => props.size || BASEFONTSIZE};
  font-family: 'ABCWhyteInktrapVariable';
  font-weight: ${(props) => props.weight || '400'};
`
