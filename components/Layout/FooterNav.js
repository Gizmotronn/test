import { useState, useEffect } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import Text from '../Shared/Text'
import ForgeMessageModal from '../ForgeMessageModal'
import ForgeButton from '../ForgeButton'

export default function FooterNav(props) {
  const [mounted, setMounted] = useState(false)
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
    setMounted(true)
  }, [showForgeWarning])

  return (
    mounted && (
      <>
        {/* <FooterContainer> */}
        {route !== '/mint' && (
          <nav>
            {/* <List> */}
            {showForgeWarning && <ForgeMessageModal showModal={showForgeWarning} modalOpen={handleCloseModal} />}
            <Wrapper>
              <ForgeContainer>
                {route === '/forge' ? (
                  <>
                    <LabelContainer>
                      <Text>Forge</Text>
                    </LabelContainer>
                    <ListItem>
                      <Button onClick={handleClick} type='button' forge={forge}>
                        <ForgeButton forge={forge} />
                      </Button>
                    </ListItem>
                  </>
                ) : (
                  <Link href='/forge' passHref>
                    <a target='_blank' rel='noopener noreferrer'>
                      <ListItem>
                        <Button type='button' forge={forge}>
                          <ForgeButton forge={forge} />
                        </Button>
                      </ListItem>
                    </a>
                  </Link>
                )}
              </ForgeContainer>
            </Wrapper>
            {/* </List> */}
          </nav>
        )}
        {/* </FooterContainer> */}
      </>
    )
  )
}

// const FooterContainer = styled.div`
//   width: 100%;
//   contain: content;
//   mx: auto;
// `

// const List = styled.ul`
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   margin: 0;
//   padding: 0;
// `

const ListItem = styled.li`
  list-style: none;
  display: contents;
`

const Wrapper = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
`

const ForgeContainer = styled.div`
  ${
    '' /* display: flex;
  justify-content: flex-end;
  width: 35%;
  align-items: center; */
  }
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
