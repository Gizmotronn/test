import styled from '@emotion/styled'
import { COLORS, BASEFONTSIZE } from '../../constants/constants'

const Text = ({ color, size, weight, children }) => {
  return (
    <Wrapper color={color} size={size} weight={weight}>
      {children}
    </Wrapper>
  )
}

export default Text

const Wrapper = styled.p`
  color: ${(props) => props.color || COLORS.text};
  font-size: ${(props) => props.size || BASEFONTSIZE};
  font-weight: ${(props) => props.weight || '400'};
  line-height: 2rem;
`
