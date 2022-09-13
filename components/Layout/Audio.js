import { useState, useEffect } from 'react'
import { useConnectModal, useAccountModal } from '@rainbow-me/rainbowkit'
import { useAccount, useDisconnect } from 'wagmi'
import ConnectWallet from '../ConnectWallet'
import WalletConnect from './WalletConnect'
import styled from '@emotion/styled'
// import { Text } from '../../shared/styles'
import Text from '../Shared/Text'
import AudioButton from '../AudioButton'

export default function Audio(props) {
  const { openConnectModal } = useConnectModal()
  const { openAccountModal } = useAccountModal()
  const { isConnected, address } = useAccount()
  const { disconnect } = useDisconnect()
  const [mounted, setMounted] = useState(false)

  const { route } = props
  console.log('🚀 ~ file: Audio.js ~ line 19 ~ Audio ~ route', route)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted && (
      <>
        {route === '/' && (
          <AudioContainer>
            {/* <ListItem> */}
            <AudioButton />
            {/* </ListItem> */}
          </AudioContainer>
        )}
      </>
    )
  )
}

// const List = styled.ul`
//  position: 'fixed';
//   top: '15px',
//   left: '15px',
//   margin: 0;
//   padding: 0;
// `

// const ListItem = styled.li`
//   list-style: none;
//   display: contents;
// `

const AudioContainer = styled.div`
  position: fixed;
  top: 15px;
  right: 15px;
`
