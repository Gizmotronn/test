import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import FountainContextProvider from '../../contexts/FountainContext'
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
      <FountainContextProvider>
        <LayoutContainer>
          <HeaderNav route={route} windowSize={windowSize} />
          {/* FooterNav is fixed positioned and thus we need to place it before <Main> in the render tree so the 'Forge' label sits behind the Fountain (z-index doesn't work as it is fixed positioned) */}
          <FooterNav route={route} windowSize={windowSize} />
          <Main>{children}</Main>
        </LayoutContainer>
      </FountainContextProvider>
    )
  )
}

export default Layout

const LayoutContainer = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.background};
  overflow: hidden;
`

const Main = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
`
