import styled from '@emotion/styled'
import FountainPlayer from './FountainPlayer'
import ForgeFountainPlayer from './ForgeFountainPlayer'
import { FOUNTAIN } from '../../constants/constants'
import Text from '../Shared/Text'

const FountainGlobe = ({ route }) => {
  return route === '/forge' ? (
    <ForgeFountainPlayer>
      <source src={FOUNTAIN.inActive} type='video/mp4' />
      <MessageContainer>
        <Text size='12px'>Sorry, your browser does not support embedded videos.</Text>
      </MessageContainer>
    </ForgeFountainPlayer>
  ) : (
    <FountainPlayer>
      <source src={FOUNTAIN.fountainA} type='video/mp4' />
      <MessageContainer>
        <Text size='12px'>Sorry, your browser does not support embedded videos.</Text>
      </MessageContainer>
    </FountainPlayer>
  )
}

export default FountainGlobe

const MessageContainer = styled.div`
  height: 33vh;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: center;
`
