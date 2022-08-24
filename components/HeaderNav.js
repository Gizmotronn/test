import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useDisconnect } from 'wagmi'

export default function HeaderNav() {
  const { data: account } = useAccount()
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
          // display: 'flex',
          // justifyContent: 'center',
          // flexDirection: 'row',
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
            <div style={{ display: 'flex', border: '1px solid blue' }}>
              <li style={{ listStyle: 'none' }}>
                <ConnectButton />
              </li>
            </div>
            <div style={{ display: 'flex', border: '1px solid blue' }}>
              <li style={{ listStyle: 'none' }}>
                <p>Audio Button</p>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    )
  )
}
