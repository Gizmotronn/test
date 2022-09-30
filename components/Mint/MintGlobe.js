import { useContext } from 'react'
import styled from '@emotion/styled'
import { FountainContext } from '../../contexts/FountainContext'
import Text from '../Shared/Text'
import { COLORS } from '../../constants'

const MintGlobe = ({ placeholder = false, children }) => {
  const [dimensions] = useContext(FountainContext)

  const circleBase = 112
  const circleRatio = 0.339 // 0.3421
  const circleWidth = dimensions ? dimensions.width * circleRatio - 15 : circleBase

  return (
    <>
      <Container>
        {placeholder ? (
          <CircleHidden width={circleWidth} circleRatio={circleRatio}>
            <MessageContainer>
              <Text size='20px'>Nothing to see here.</Text>
            </MessageContainer>
          </CircleHidden>
        ) : (
          <Circle width={circleWidth} circleRatio={circleRatio}>
            <MessageContainer>{children}</MessageContainer>
          </Circle>
        )}
      </Container>
    </>
  )
}

export default MintGlobe

const Container = styled.div`
  display: flex;
  padding: 7.5px;
  background: inherit;
`

const Circle = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  display: flex;
  border-radius: 50%;
  border: 15px solid ${COLORS.text};
  background: black;
  z-index: 999;
`

const CircleHidden = styled.div`
  visibility: hidden;
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  display: flex;
  border-radius: 50%;
  border: 15px solid ${COLORS.text};
  background: inherit;
`

const MessageContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`
