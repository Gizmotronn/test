import { useState, useEffect } from 'react'
import { useConnectModal, useAccountModal } from '@rainbow-me/rainbowkit'
import { useAccount, useDisconnect } from 'wagmi'
import ConnectWallet from '../ConnectWallet'
import styled from '@emotion/styled'
import Text from '../Shared/Text'

export default function WalletConnect(props) {
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
        {/* <List> */}
        <WalletContainer>
          {/* <ListItem> */}
          <ConnectWallet
            walletConnected={isConnected}
            connect={() => openConnectModal()}
            disconnect={() => disconnect()}
            account={() => openAccountModal()}
          />
          {/* </ListItem> */}
          <AddressContainer>
            <Text>
              {isConnected ? String(address).substring(0, 4) + '...' + String(address).substring(38) : 'Connect Wallet'}
            </Text>
          </AddressContainer>
        </WalletContainer>
        {/* </List> */}
      </>
    )
  )
}

// const List = styled.ul`
//   position: 'fixed';
//   top: '15px',
//   left: '15px',
//   margin: 0;
//   padding: 0;
//   border: '1px solid red'
// `

// const ListItem = styled.li`
//   list-style: none;
//   display: contents;
// `

const WalletContainer = styled.div`
  position: fixed;
  top: 15px;
  left: 15px;
`

const AddressContainer = styled.div`
  padding: 0 0 0 20px;
`
