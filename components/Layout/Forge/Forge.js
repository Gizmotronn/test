import { useState } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import ForgeGlobe from './ForgeGlobe'
import ForgeNFT from '../../ForgeNFT'

export default function ForgeNav(props) {
  const [forge, setForge] = useState(true)

  const { route, windowSize } = props

  const { width, height } = windowSize

  return (
    <>
      {width > 767 && height > 551 && (
        <>
          {/* Show Forge Button on every page EXCEPT Mint */}
          {route !== '/mint' && (
            <nav>
              <ForgeContainer>
                {route === '/forge' ? (
                  <ForgeNFT forge={forge} />
                ) : forge ? (
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
`

const ForgeLinkContainer = styled.div`
  clip-path: circle(50%);
  cursor: ${(props) => (props.forge ? 'pointer' : 'not-allowed')};
`
