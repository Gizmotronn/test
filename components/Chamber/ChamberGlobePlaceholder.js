import styled from '@emotion/styled'
import ChamberPlayerPlaceholder from './ChamberPlayerPlaceholder'
import Text from '../Shared/Text'

const ChamberGlobePlaceholder = () => {
  return (
    <ChamberPlayerPlaceholder>
      <source src='/videos/Shared/Black_INACTIVEGLOBE_400px.mp4' type='video/mp4' />
      <MessageContainer>
        <Text size='12px'>Sorry, your browser does not support embedded videos.</Text>
      </MessageContainer>
    </ChamberPlayerPlaceholder>
  )
}

export default ChamberGlobePlaceholder

const MessageContainer = styled.div`
  height: 33vh;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: center;
`
