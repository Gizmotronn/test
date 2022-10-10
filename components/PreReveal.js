import styled from '@emotion/styled'
import FountainPlayer from './Fountain/FountainPlayer'
import { FOUNTAIN } from '../constants'
import Text from './Shared/Text'

const PreReveal = ({ route }) => {
  return (
    <FountainPlayer>
      <source src={FOUNTAIN.inActive} type='video/mp4' />
      <MessageContainer>
        <Text size='12px'>Sorry, your browser does not support embedded videos.</Text>
      </MessageContainer>
    </FountainPlayer>
  )
}

export default PreReveal

const MessageContainer = styled.div`
  height: 33vh;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: center;
`
