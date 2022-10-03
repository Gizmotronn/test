import styled from '@emotion/styled'
import ChamberPlayer from './ChamberPlayer'
import Text from '../Shared/Text'

const ChamberGlobe = () => {
  return (
    <ChamberPlayer>
      <source
        src='https://res.cloudinary.com/bricktorigins/video/upload/v1664764227/globes/inactive/inactive_globe_hmrbyv.mp4'
        type='video/mp4'
      />
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
