import styled from '@emotion/styled'
import { IntroAnimation } from '../shared/styles'
import Text from '../components/Shared/Text'

const IntroGlobe = () => {
  return (
    <IntroAnimation playsInline autoPlay muted loop>
      <source src='/videos/Colour_Globe.mp4' type='video/mp4' />
      <MessageContainer>
        <Text size='12px'>Sorry, your browser does not support embedded videos.</Text>
      </MessageContainer>
    </IntroAnimation>
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
