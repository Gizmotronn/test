import styled from '@emotion/styled'
import GlobePlayer from '../../Shared/GlobePlayer'
import Text from '../../Shared/Text'

const AudioGlobe = ({ isPlaying }) => {
  return (
    <>
      {isPlaying && (
        <GlobePlayer>
          <source
            src='https://res.cloudinary.com/bricktorigins/video/upload/v1664763348/globes/audio/audio_on_globe_jbupi5.mp4'
            type='video/mp4'
          />
          <MessageContainer>
            <Text size='12px'>Sorry, your browser does not support embedded videos.</Text>
          </MessageContainer>
        </GlobePlayer>
      )}
      {!isPlaying && (
        <GlobePlayer>
          <source
            src='https://res.cloudinary.com/bricktorigins/video/upload/v1664764227/globes/inactive/inactive_globe_hmrbyv.mp4'
            type='video/mp4'
          />
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
