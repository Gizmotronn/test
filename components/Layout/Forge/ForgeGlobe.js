import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import GlobePlayer from '../../Shared/GlobePlayer'
import { GLOBES } from '../../../constants'
import Text from '../../Shared/Text'

const ForgeGlobe = ({ forge }) => {
  const [globe, setGlobe] = useState({
    active: GLOBES.forgeActive,
    inActive: GLOBES.inActive,
  })

  // useEffect(() => {
  //   function preloadGlobes() {
  //     setGlobe({
  //       active: GLOBES.forgeActive,
  //       inActive: GLOBES.inActive,
  //     })
  //   }

  //   preloadGlobes()
  // }, [])

  return (
    <>
      <GlobePlayer source={forge ? globe.active : globe.inActive}>
        <MessageContainer>
          <Text size='12px'>Sorry, your browser does not support embedded videos.</Text>
        </MessageContainer>
      </GlobePlayer>
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

{
  /* <>
      {forge && (
        <GlobePlayer>
          <source
            src='https://res.cloudinary.com/bricktorigins/video/upload/q_auto,f_auto/v1664763574/globes/forge/forge_active_globe_xl5w2p.mp4'
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
            src='https://res.cloudinary.com/bricktorigins/video/upload/q_auto,f_auto/v1664764227/globes/inactive/inactive_globe_hmrbyv.mp4'
            type='video/mp4'
          />
          <MessageContainer>
            <Text size='12px'>Sorry, your browser does not support embedded videos.</Text>
          </MessageContainer>
        </GlobePlayer>
      )}
    </> */
}
