import styled from '@emotion/styled'
import GlobePlayer from '../../Shared/GlobePlayer'
import Text from '../../Shared/Text'

const ForgeGlobe = ({ forge }) => {
  return (
    <>
      {forge && (
        <GlobePlayer>
          <source
            src='https://res.cloudinary.com/bricktorigins/video/upload/v1664763574/globes/forge/forge_active_globe_xl5w2p.mp4'
            type='video/mp4'
          />
          <MessageContainer>
            <Text size='12px'>Sorry, your browser does not support embedded videos.</Text>
          </MessageContainer>
        </GlobePlayer>
      )}
      {!forge && (
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

export default ForgeGlobe

const MessageContainer = styled.div`
  height: 100px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: center;
`
