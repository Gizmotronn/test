import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import HeaderNav from './HeaderNav'
import FooterNav from './FooterNav'
import { COLORS } from '../../constants'

const Layout = ({ children, windowSize }) => {
  const [hasMounted, setHasMounted] = useState(false)

  const router = useRouter()
  const { route } = router

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return (
    hasMounted && (
      <LayoutContainer>
        <Head>
          <title>BricktOrigins</title>
          <meta name='description' content='BricktOrigins' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <HeaderNav route={route} windowSize={windowSize} />
        <Main>{children}</Main>
        <FooterNav route={route} windowSize={windowSize} />
      </LayoutContainer>
    )
  )
}

export default Layout

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${COLORS.background};
`

const Main = styled.div`
  ${'' /* width: 100vw; */}
  ${'' /* height: 80%; */}
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
  overflow: hidden;
  ${'' /* padding: 10px; */}
`
