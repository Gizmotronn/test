import styled from '@emotion/styled'
import Text from '../../components/Shared/Text'
import { COLORS } from '../../constants'

export default function ViewportMessage({ windowSize }) {
  const { width, height } = windowSize

  return (
    <BrowserMessage>
      <MessageContainer>{width <= 767 && <Text>You need a WIDER browser!</Text>}</MessageContainer>
      <MessageContainer>{height <= 551 && <Text>You need a TALLER browser!</Text>}</MessageContainer>
    </BrowserMessage>
  )
}

// 👇 Notify user when browser width and/or height is too small
const BrowserMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 522px;
  min-height: 206px;
  background-color: ${COLORS.background};
  margin: auto;
`

const MessageContainer = styled.div`
  display: flex;
  max-width: 722px;
  max-height: 506px;
`
