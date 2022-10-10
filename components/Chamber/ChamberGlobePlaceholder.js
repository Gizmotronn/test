import styled from '@emotion/styled'
import ChamberPlayerPlaceholder from './ChamberPlayerPlaceholder'
import { CHAMBERGLOBE } from '../../constants'
import Text from '../Shared/Text'

const ChamberGlobePlaceholder = () => {
  return (
    <ChamberPlayerPlaceholder>
      <source src={CHAMBERGLOBE.inActive} type='video/mp4' />
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
