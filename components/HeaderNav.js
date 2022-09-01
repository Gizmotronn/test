import { useState, useEffect } from 'react'
import { useConnectModal, useAccountModal } from '@rainbow-me/rainbowkit'
import { useAccount, useDisconnect } from 'wagmi'
import ConnectWallet from './ConnectWallet'
import styled from '@emotion/styled'
import AudioButton from './AudioButton'

export default function HeaderNav(props) {
  const { openConnectModal } = useConnectModal()
  const { openAccountModal } = useAccountModal()
  const { isConnected, address } = useAccount()
  const { disconnect } = useDisconnect()
  const [mounted, setMounted] = useState(false)

  const { globeSize, route } = props

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted && (
      <>
        <Header>
          <nav>
            <List>
              <WalletContainer>
                <ListItem>
                  <ConnectWallet
                    walletConnected={isConnected}
                    connect={() => openConnectModal()}
                    disconnect={() => disconnect()}
                    account={() => openAccountModal()}
                    size={globeSize}
                  />
                </ListItem>
                <AddressContainer>
                  <Address>
                    {isConnected
                      ? String(address).substring(0, 4) + '...' + String(address).substring(38)
                      : 'Connect Wallet'}
                  </Address>
                </AddressContainer>
              </WalletContainer>
              {route === '/' && (
                <AudioContainer>
                  <ListItem>
                    <AudioButton size={globeSize} />
                  </ListItem>
                </AudioContainer>
              )}
            </List>
          </nav>
        </Header>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  list-style: none;
  display: contents;
`

const WalletContainer = styled.div`
  width: 260px;
  display: flex;
  align-items: center;
`

const AddressContainer = styled.div`
  padding: 0 0 0 10px;
`

const Address = styled.p`
  color: #ffffff;
`

const AudioContainer = styled.div`
  display: flex;
`
