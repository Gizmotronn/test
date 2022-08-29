import { useState, useEffect } from 'react'
import { useConnectModal, useAccountModal } from '@rainbow-me/rainbowkit'
import { useAccount, useDisconnect } from 'wagmi'
import ConnectWallet from './ConnectWallet'
import AudioButton from './AudioButton'

export default function HeaderNav(props) {
  const { openConnectModal } = useConnectModal()
  const { openAccountModal } = useAccountModal()
  const { isConnected, address } = useAccount()
  const { disconnect } = useDisconnect()
  const [mounted, setMounted] = useState(false)

  const { globeSize } = props

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted && (
      <>
        <header
          style={{
            width: '100%',
            contain: 'content',
            mx: 'auto',
          }}
        >
          <nav>
            <ul
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: 0,
                padding: 0,
              }}
            >
              <div style={{ width: '260px', display: 'flex', alignItems: 'center' }}>
                <li style={{ listStyle: 'none', display: 'contents' }}>
                  <ConnectWallet
                    walletConnected={isConnected}
                    connect={() => openConnectModal()}
                    disconnect={() => disconnect()}
                    account={() => openAccountModal()}
                    size={globeSize}
                  />
                </li>
                <div style={{ padding: '0 0 0 10px' }}>
                  <p style={{ color: '#ffffff' }}>
                    {isConnected
                      ? String(address).substring(0, 4) + '...' + String(address).substring(38)
                      : 'Connect Wallet'}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex' }}>
                <li style={{ listStyle: 'none', display: 'contents' }}>
                  <AudioButton size={globeSize} />
                </li>
              </div>
            </ul>
          </nav>
        </header>
      </>
    )
  )
}
