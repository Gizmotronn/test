import { useState, useEffect } from 'react'
import ForgeButton from './ForgeButton'

export default function FooterNav() {
  const [mounted, setMounted] = useState(false)
  const [forge, setForge] = useState(false)

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
          padding: '15px',
        }}
      >
        <nav>
          <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', margin: 0, padding: 0 }}>
            <div style={{ display: 'flex' }}>
              <li style={{ listStyle: 'none', display: 'contents' }}>
                <ForgeButton forge={forge} />
              </li>
            </div>
          </ul>
        </nav>
      </div>
    )
  )
}
