import { useState } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import ForgeGlobe from './ForgeGlobe'
import ForgeNFT from '../../ForgeNFT'

// This component is the Forge Nav Button

export default function ForgeNav(props) {
  const [forge, setForge] = useState(false)

  const { route, windowSize } = props
  console.log('🚀 ~ file: Forge.js ~ line 13 ~ ForgeNav ~ route', route)

  const { width, height } = windowSize

  return (
    <>
      {width > 767 && height > 551 && (
        <>
          {/* Show Forge Button on every page EXCEPT Mint pages */}
          {(route === '/' || route === '/forge') && (
            <nav>
              <ForgeContainer>
                {route === '/forge' ? (
                  <ForgeNFT forge={forge} /> // 👈 Forge logic and messaging
                ) : forge ? (
                  // 👇 If ready to Forge show link to Forge page, else show inActive globe and button
                  <ForgeLinkContainer forge={forge}>
                    <Link href='/forge' passHref>
                      <a target='_blank' rel='noopener noreferrer' style={{ cursor: 'pointer' }}>
                        <ForgeGlobe forge={forge} />
                      </a>
                    </Link>
                  </ForgeLinkContainer>
                ) : (
                  <ForgeLinkContainer forge={forge}>
                    <ForgeGlobe forge={forge} />
                  </ForgeLinkContainer>
                )}
              </ForgeContainer>
            </nav>
          )}
        </>
      )}
    </>
  )
}

const ForgeContainer = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 300;
`

const ForgeLinkContainer = styled.div`
  clip-path: circle(50%);
  cursor: ${(props) => (props.forge ? 'pointer' : 'not-allowed')};
`
