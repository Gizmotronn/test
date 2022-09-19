import { useConnectModal, useAccountModal } from '@rainbow-me/rainbowkit'
import { useAccount, useDisconnect } from 'wagmi'
import ConnectWallet from '../ConnectWallet'
import styled from '@emotion/styled'
import Text from '../Shared/Text'

export default function WalletConnect({ windowSize }) {
  const { openConnectModal } = useConnectModal()
  const { openAccountModal } = useAccountModal()
  const { isConnected, address } = useAccount()
  const { disconnect } = useDisconnect()

  return (
    <>
      <NavContainer>
        <WalletContainer>
          <InnerContainer>
            <ConnectWallet
              walletConnected={isConnected}
              connect={() => openConnectModal()}
              disconnect={() => disconnect()}
              account={() => openAccountModal()}
            />
            <AddressContainer>
              <Text>
                {isConnected
                  ? String(address).substring(0, 4) + '...' + String(address).substring(38)
                  : 'Connect Wallet'}
              </Text>
            </AddressContainer>
          </InnerContainer>
        </WalletContainer>
      </NavContainer>
    </>
  )
}

const NavContainer = styled.nav`
  ${
    '' /* @media (max-width: 767px) {
    display: none;
  }
  @media (max-height: 551px) {
    display: none;
  } */
  }
`

const WalletContainer = styled.div`
  position: fixed;
  top: 15px;
  left: 15px;
`

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
`

const AddressContainer = styled.div`
  padding: 0 0 0 20px;
`
