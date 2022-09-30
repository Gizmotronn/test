import styled from '@emotion/styled'
import { COLORS } from '../../constants'

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
  font-size: ${(props) => props.size || 'calc(1rem + 0.6vw)'};
  font-weight: ${(props) => props.weight || '400'};
`
