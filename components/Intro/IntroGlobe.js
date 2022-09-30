import styled from '@emotion/styled'
import IntroPlayer from './IntroPlayer'
import Text from '../Shared/Text'

const IntroGlobe = () => {
  return (
    <IntroPlayer playsInline autoPlay muted loop>
      <source src='/videos/Colour_Globe.mp4' type='video/mp4' />
      <MessageContainer>
        <Text size='12px'>Sorry, your browser does not support embedded videos.</Text>
      </MessageContainer>
    </IntroPlayer>
  )
}

export default IntroGlobe

const MessageContainer = styled.div`
  height: 100px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: center;
`
