import styled from '@emotion/styled'
import FountainPlayer from './FountainPlayer'

const FountainGlobe = () => {
  return (
    <PlayerContainer>
      <FountainPlayer>
        <source src='/videos/Colour_Globe.mp4' type='video/mp4' />
        Sorry, your browser does not support embedded videos.
      </FountainPlayer>
    </PlayerContainer>
  )
}

export default FountainGlobe

const PlayerContainer = styled.div`
  border-radius: 50%;
`
