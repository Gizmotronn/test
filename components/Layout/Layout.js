import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import HeaderNav from './HeaderNav'
import FooterNav from './FooterNav'
import { COLORS } from '../../constants'

const Layout = ({ children }) => {
  const [mounted, setMounted] = useState(false)

  const router = useRouter()
  const { route } = router

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
        <HeaderNav route={route} />
        <Main>{children}</Main>
        <FooterNav route={route} />
      </LayoutContainer>
    )
  )
}

export default Layout

const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${COLORS.background};
`

const Main = styled.div`
  width: 100%;
  height: 100%;
  flex: 1 1 auto;
  background: inherit;
`
