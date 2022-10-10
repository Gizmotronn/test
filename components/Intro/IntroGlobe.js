import styled from '@emotion/styled'
import { useState } from 'react'
import IntroPlayer from './IntroPlayer'
import { GLOBES } from '../../constants'
import Text from '../Shared/Text'

const IntroGlobe = ({ hasLoaded }) => {
  const [globe, setGlobe] = useState({ active: GLOBES.forgeActive, inActive: GLOBES.inActive })
  return (
    <IntroPlayer
      playsInline
      autoPlay
      muted
      loop
      source={hasLoaded ? globe.active : globe.inActive}
      hasLoaded={hasLoaded}
    >
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
