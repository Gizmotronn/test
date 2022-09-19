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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.background};
  overflow: hidden;
`

const Main = styled.div`
  ${'' /* width: 100%; */}
  display: flex;
  justify-content: center;
  align-items: center;
  background: green;
  padding: 15px 7.5px;
`
