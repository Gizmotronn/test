import { useState, useEffect } from 'react'
import ForgeButton from './ForgeButton'

export default function FooterNav(props) {
  const [mounted, setMounted] = useState(false)
  const [forge, setForge] = useState(false)

  const { globeSize } = props

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
        }}
      >
        <nav>
          <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', margin: 0, padding: 0 }}>
            <div style={{ display: 'flex' }}>
              <li style={{ listStyle: 'none', display: 'contents' }}>
                <ForgeButton forge={forge} size={globeSize} />
              </li>
            </div>
          </ul>
        </nav>
      </div>
    )
  )
}
