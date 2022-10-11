import styled from '@emotion/styled'
import { COLORS, BASEFONTSIZE } from '../../constants'

const StandardButton = ({
  width,
  height,
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
      height={height}
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

export default StandardButton

const Wrapper = styled.button`
  width: ${(props) => props.width || '100px'};
  height: ${(props) => props.height || '80px'};
  background: ${(props) => props.backgroundColor || COLORS.text};
  margin: ${(props) => props.margin || '10px'};
  padding: ${(props) => props.padding || '10px'};
  border: 1px solid black;
  border-radius: 12px;
  cursor: ${(props) => props.cursor || 'pointer'};
  font-size: ${(props) => props.size || BASEFONTSIZE};
  font-family: 'ABCWhyteInktrapVariable';
  font-weight: ${(props) => props.weight || '400'};
  color: ${(props) => props.labelColor || COLORS.background};
`
