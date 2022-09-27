import { useState, useEffect } from 'react'
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
                ) : (
                  <ForgeLinkContainer>
                    <Link href='/forge' passHref>
                      <a target='_blank' rel='noopener noreferrer'>
                        <ForgeGlobe forge={forge} />
                      </a>
                    </Link>
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
`
