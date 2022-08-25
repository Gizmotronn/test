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
          padding: '20px',
          border: '1px solid blue',
        }}
      >
        <nav>
          <ul style={{ border: '1px solid blue', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <div style={{ display: 'flex', border: '1px solid blue' }}>
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
