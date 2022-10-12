import styled from '@emotion/styled'
import { COLORS, BASEFONTSIZE } from '../../constants'

const RadialButton = ({
  width,
  backgroundColor,
  labelColor,
  cursor,
  size,
  weight,
  margin,
  padding,
  onClick,
  children,
}) => {
  return (
    <Wrapper
      width={width}
      backgroundColor={backgroundColor}
      labelColor={labelColor}
      cursor={cursor}
      size={size}
      weight={weight}
      margin={margin}
      padding={padding}
      onClick={onClick}
    >
      {children}
    </Wrapper>
  )
}

export default RadialButton

const Wrapper = styled.button`
  width: ${(props) => props.width || '100px'};
  height: ${(props) => props.width || '100px'};
  background: ${(props) => props.backgroundColor || COLORS.background};
  margin: ${(props) => props.margin || '20px 30px'};
  padding: ${(props) => props.padding || '20px'};
  border-radius: 50%;
  border: none;
  box-shadow: 0px 0px 25px 20px #000;
  cursor: ${(props) => props.cursor || 'pointer'};
  font-size: ${(props) => props.size || BASEFONTSIZE};
  font-family: 'ABCWhyteInktrapVariable';
  font-weight: ${(props) => props.weight || '400'};
  color: ${(props) => props.labelColor || COLORS.text};
`
