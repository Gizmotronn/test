import { useState, useEffect } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import Text from '../Shared/Text'
import ForgeMessageModal from '../ForgeMessageModal'
import ForgeButton from '../ForgeButton'

export default function FooterNav(props) {
  const [hasMounted, setHasMounted] = useState(false)
  const [forge, setForge] = useState(true)
  const [showForgeWarning, setShowForgeWarning] = useState(false)

  const { route } = props

  const handleClick = () => {
    if (route === '/forge') {
      setShowForgeWarning(true)
    } else return
  }

  const handleCloseModal = (props) => {
    setShowForgeWarning(props)
  }

  useEffect(() => {
    setHasMounted(true)
  }, [showForgeWarning])

  return (
    hasMounted && (
      <>
        {route !== '/mint' && (
          <nav>
            {showForgeWarning && <ForgeMessageModal showModal={showForgeWarning} modalOpen={handleCloseModal} />}
            <ForgeContainer>
              {route === '/forge' ? (
                <>
                  <InnerContainer>
                    <LabelContainer>
                      <Text>Forge</Text>
                    </LabelContainer>

                    <Button onClick={handleClick} type='button' forge={forge}>
                      <ForgeButton forge={forge} />
                    </Button>
                  </InnerContainer>
                </>
              ) : (
                <Link href='/forge' passHref>
                  <a target='_blank' rel='noopener noreferrer'>
                    <Button type='button' forge={forge}>
                      <ForgeButton forge={forge} />
                    </Button>
                  </a>
                </Link>
              )}
            </ForgeContainer>
          </nav>
        )}
      </>
    )
  )
}

const ForgeContainer = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 500;
`

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid red;
`

const LabelContainer = styled.div`
  padding: 0 20px 0 0;
`

const Button = styled.button`
  background: inherit;
  padding: 0;
  border: none;
  cursor: ${(props) => (props.forge ? 'pointer' : 'not-allowed')};
`
