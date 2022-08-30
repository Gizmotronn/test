import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import ForgeButton from './ForgeButton'

export default function FooterNav(props) {
  const [mounted, setMounted] = useState(false)
  const [forge, setForge] = useState(false)

  const { globeSize } = props

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted && (
      <FooterContainer>
        <nav>
          <List>
            <ForgeContainer>
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

const ForgeContainer = styled.div`
  display: flex;
`

const ListItem = styled.li`
  list-style: none;
  display: contents;
`
