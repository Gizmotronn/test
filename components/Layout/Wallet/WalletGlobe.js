import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import GlobePlayer from '../../Shared/GlobePlayer'
import { GLOBES } from '../../../constants'
import Text from '../../Shared/Text'

const WalletGlobe = ({ walletConnected }) => {
  const [globe, setGlobe] = useState({ active: GLOBES.walletActive, inActive: GLOBES.inActive })

  // useEffect(() => {
  //   function preloadGlobes() {
  //     setGlobe({
  //       active: GLOBES.walletActive,
  //       inActive: GLOBES.inActive,
  //     })
  //   }

  //   preloadGlobes()
  // }, [])

  return (
    <>
      <GlobePlayer source={walletConnected ? globe.active : globe.inActive}>
        <MessageContainer>
          <Text size='12px'>Sorry, your browser does not support embedded videos.</Text>
        </MessageContainer>
      </GlobePlayer>
    </>
  )
}

export default WalletGlobe

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
      {walletConnected && (
        <GlobePlayer>
          <source
            src='https://res.cloudinary.com/bricktorigins/video/upload/q_auto,f_auto/v1664763461/globes/wallet/wallet_connected_globe_yeq9vo.mp4'
            type='video/mp4'
          />
          <MessageContainer>
            <Text size='12px'>Sorry, your browser does not support embedded videos.</Text>
          </MessageContainer>
        </GlobePlayer>
      )}
      {!walletConnected && (
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
