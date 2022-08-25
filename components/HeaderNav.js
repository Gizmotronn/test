import { useState, useEffect } from 'react'
import { useConnectModal, useAccountModal } from '@rainbow-me/rainbowkit'
import { useAccount, useDisconnect } from 'wagmi'
import ConnectWallet from './ConnectWallet'
import AudioButton from './AudioButton'

export default function HeaderNav() {
  const { openConnectModal } = useConnectModal()
  const { openAccountModal } = useAccountModal()
  const { isConnected, address } = useAccount()
  const { disconnect } = useDisconnect()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted && (
      <header
        style={{
          width: '100%',
          contain: 'content',
          mx: 'auto',
          padding: '20px',
          border: '1px solid blue',
        }}
      >
        <nav>
          <ul
            style={{
              border: '1px solid blue',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 0,
            }}
          >
            <div style={{ width: '200px', display: 'flex', alignItems: 'center', border: '1px solid red' }}>
              <li style={{ listStyle: 'none', display: 'contents' }}>
                <ConnectWallet
                  walletConnected={isConnected}
                  connect={() => openConnectModal()}
                  disconnect={() => disconnect()}
                  account={() => openAccountModal()}
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

            <div style={{ display: 'flex', border: '1px solid blue' }}>
              <li style={{ listStyle: 'none', display: 'contents' }}>
                <AudioButton />
              </li>
            </div>
          </ul>
        </nav>
      </header>
    )
  )
}
