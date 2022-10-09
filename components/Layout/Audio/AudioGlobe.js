import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import GlobePlayer from '../../Shared/GlobePlayer'
import { GLOBES } from '../../../constants'
import Text from '../../Shared/Text'

const AudioGlobe = ({ isPlaying }) => {
  const [globe, setGlobe] = useState({ active: GLOBES.audioActive, inActive: GLOBES.inActive })

  // useEffect(() => {
  //   function preloadGlobes() {
  //     setGlobe({
  //       active: GLOBES.audioActive,
  //       inActive: GLOBES.inActive,
  //     })
  //   }

  //   preloadGlobes()
  // }, [])

  return (
    <>
      <GlobePlayer source={isPlaying ? globe.active : globe.inActive}>
        {/* <source src={isPlaying ? globe.active : globe.inActive} type='video/mp4' /> */}
        <MessageContainer>
          <Text size='12px'>Sorry, your browser does not support embedded videos.</Text>
        </MessageContainer>
      </GlobePlayer>
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

{
  /* <>
      {isPlaying && (
        <GlobePlayer>
          <source src={GLOBES.audioActive} type='video/mp4' />
          <MessageContainer>
            <Text size='12px'>Sorry, your browser does not support embedded videos.</Text>
          </MessageContainer>
        </GlobePlayer>
      )}
      {!isPlaying && (
        <GlobePlayer>
          <source src={GLOBES.inActive} type='video/mp4' />
          <MessageContainer>
            <Text size='12px'>Sorry, your browser does not support embedded videos.</Text>
          </MessageContainer>
        </GlobePlayer>
      )}
    </> */
}
