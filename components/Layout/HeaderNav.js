import { useState, useEffect } from 'react'
import { useConnectModal, useAccountModal } from '@rainbow-me/rainbowkit'
import { useAccount, useDisconnect } from 'wagmi'
import styled from '@emotion/styled'
import ConnectWallet from '../ConnectWallet'
import WalletConnect from './WalletConnect'
import AudioButton from '../AudioButton'
import Audio from './Audio'
// import { Text } from '../../shared/styles'
import Text from '../Shared/Text'

export default function HeaderNav(props) {
  const { openConnectModal } = useConnectModal()
  const { openAccountModal } = useAccountModal()
  const { isConnected, address } = useAccount()
  const { disconnect } = useDisconnect()
  const [mounted, setMounted] = useState(false)

  const { route } = props

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted && (
      <>
        {/* <header> */}
        {/* <nav> */}
        <WalletConnect />
        {/* <List>
              <WalletContainer>
                <ListItem>
                  <ConnectWallet
                    walletConnected={isConnected}
                    connect={() => openConnectModal()}
                    disconnect={() => disconnect()}
                    account={() => openAccountModal()}
                  />
                </ListItem>
                <AddressContainer>
                  <Text>
                    {isConnected
                      ? String(address).substring(0, 4) + '...' + String(address).substring(38)
                      : 'Connect Wallet'}
                  </Text>
                </AddressContainer>
              </WalletContainer>
              {route === '/' && (
                <AudioContainer>
                  <ListItem>
                    <AudioButton />
                  </ListItem>
                </AudioContainer>
              )}
            </List> */}
        <Audio route={route} />
        {/* </nav> */}
        {/* </header> */}
      </>
    )
  )
}

const Header = styled.header`
  width: 100%;
  contain: content;
  mx: auto;
`

const List = styled.ul`
 position: 'fixed';
  top: '15px',
  left: '15px',
  margin: 0;
  padding: 0;
`
