import styled from '@emotion/styled'
import ChamberPlayer from './ChamberPlayer'
import { CHAMBERGLOBE } from '../../constants'
import Text from '../Shared/Text'

const ChamberGlobe = () => {
  return (
    <ChamberPlayer>
      <source src={CHAMBERGLOBE.inActive} type='video/mp4' />
      <MessageContainer>
        <Text size='12px'>Sorry, your browser does not support embedded videos.</Text>
      </MessageContainer>
    </ChamberPlayer>
  )
}

export default ChamberGlobe

const MessageContainer = styled.div`
  height: 33vh;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: center;
`
