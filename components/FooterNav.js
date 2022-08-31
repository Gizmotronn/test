import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import ForgeMessageModal from './ForgeMessageModal'
import ForgeButton from './ForgeButton'

export default function FooterNav(props) {
  const [mounted, setMounted] = useState(false)
  const [forge, setForge] = useState(true)
  const [transactionPending, setTransactionPending] = useState(false)

  console.log('🚀 ~ file: FooterNav.js ~ line 11 ~ FooterNav ~ transactionPending', transactionPending)

  const { globeSize } = props

  const router = useRouter()
  const { route } = router

  const handleClick = () => {
    if (route === '/forge') {
      setTransactionPending(true)
      console.log('Transaction is pending')
    } else router.push('/forge')
  }

  useEffect(() => {
    setMounted(true)
    console.log('useEffect')
  }, [transactionPending])

  return (
    mounted && (
      <FooterContainer>
        <nav>
          <List>
            {transactionPending && <ForgeMessageModal showModal={transactionPending} />}
            <ForgeContainer>
              {route === '/forge' && (
                <LabelContainer>
                  <Label>Forge</Label>
                </LabelContainer>
              )}
              <ListItem>
                <Button onClick={handleClick} type='button' forge={forge}>
                  <ForgeButton forge={forge} size={globeSize} />
                </Button>
              </ListItem>
            </ForgeContainer>
          </List>
        </nav>
      </FooterContainer>
    )
  )
}

const FooterContainer = styled.div`
  width: 100%;
  contain: content;
  mx: auto;
`

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  list-style: none;
  display: contents;
`

const ForgeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 180px;
  align-items: center;
`

const LabelContainer = styled.div`
  padding: 0 10px 0 0;
`

const Label = styled.p`
  color: #ffffff;
`

const Button = styled.button`
  background: inherit;
  padding: 0;
  border: none;
  cursor: ${(props) => (props.forge ? 'pointer' : 'not-allowed')};
`
