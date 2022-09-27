import styled from '@emotion/styled'
import GlobePlayer from './Shared/GlobePlayer'
import Text from './Shared/Text'

const AudioGlobe = ({ isPlaying }) => {
  return (
    <>
      {isPlaying && (
        <GlobePlayer>
          <source src='/videos/Audio/Grey_AUDIOON_400px.mp4' type='video/mp4' />
          <MessageContainer>
            <Text size='12px'>Sorry, your browser does not support embedded videos.</Text>
          </MessageContainer>
        </GlobePlayer>
      )}
      {!isPlaying && (
        <GlobePlayer>
          <source src='/videos/Shared/Black_INACTIVEGLOBE_400px.mp4' type='video/mp4' />
          <MessageContainer>
            <Text size='12px'>Sorry, your browser does not support embedded videos.</Text>
          </MessageContainer>
        </GlobePlayer>
      )}
    </>
  )
}

export default AudioGlobe

const MessageContainer = styled.div`
  height: 100px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: center;
`
