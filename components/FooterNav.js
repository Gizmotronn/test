import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useDisconnect } from 'wagmi'
import ColourGlobe from '../components/ColourGlobe'

export default function FooterNav() {
  const { data: account } = useAccount()
  const { disconnect } = useDisconnect()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted && (
      <div
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
          <ul style={{ border: '1px solid blue', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <div style={{ display: 'flex', border: '1px solid blue' }}>
              <li style={{ listStyle: 'none' }}>
                <ColourGlobe />
              </li>
            </div>
          </ul>
        </nav>
      </div>
    )
  )
}
