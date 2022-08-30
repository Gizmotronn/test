import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import ForgeButton from './ForgeButton'

export default function FooterNav(props) {
  const [mounted, setMounted] = useState(false)
  const [forge, setForge] = useState(false)

  const { globeSize } = props

  const router = useRouter()
  const { route } = router

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted && (
      <FooterContainer>
        <nav>
          <List>
            <ForgeContainer>
              {route === '/forge' && (
                <LabelContainer>
                  <Label>Forge</Label>
                </LabelContainer>
              )}
              <ListItem>
                <ForgeButton forge={forge} size={globeSize} />
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
