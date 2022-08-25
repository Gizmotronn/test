import { useState, useEffect } from 'react'
import HeaderNav from './HeaderNav'
import FooterNav from './FooterNav'

const Layout = ({ children }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    mounted && (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: 'black',
        }}
      >
        <HeaderNav />
        <main
          style={{
            width: '100%',
            flex: '1 1 auto',
            bg: 'inherit',
          }}
        >
          {children}
        </main>
        <FooterNav />
      </div>
    )
  )
}

export default Layout
