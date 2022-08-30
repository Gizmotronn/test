import { useState, useEffect } from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import HeaderNav from './HeaderNav'
import FooterNav from './FooterNav'

const Layout = ({ children }) => {
  const [mounted, setMounted] = useState(false)

  // 👇 min size @ 1024px
  const navGlobeSize = '88px' // 88px

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    mounted && (
      <LayoutContainer>
        <Head>
          <title>BricktOrigins</title>
          <meta name='description' content='BricktOrigins' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <HeaderNav globeSize={navGlobeSize} />
        <LayoutMain>{children}</LayoutMain>
        <FooterNav globeSize={navGlobeSize} />
      </LayoutContainer>
    )
  )
}

export default Layout

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: black;
  padding: 15px;
`

const LayoutMain = styled.main`
  background: inherit;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
