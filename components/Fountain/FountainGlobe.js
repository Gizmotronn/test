import styled from '@emotion/styled'
import FountainPlayer from './FountainPlayer'
import Text from '../Shared/Text'

const FountainGlobe = ({ route }) => {
  return route === '/forge' ? (
    <FountainPlayer>
      <source src='/videos/Shared/Black_INACTIVEGLOBE_400px.mp4' type='video/mp4' />
      <MessageContainer>
        <Text size='12px'>Sorry, your browser does not support embedded videos.</Text>
      </MessageContainer>
    </FountainPlayer>
  ) : (
    <FountainPlayer>
      <source
        src='https://res.cloudinary.com/bricktorigins/video/upload/v1664761494/fountain/A_li3acb.mp4'
        type='video/mp4'
      />
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
