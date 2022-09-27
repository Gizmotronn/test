import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Text from '../Shared/Text'
import ForgeMessageModal from '../Layout/Forge/ForgeMessageModal'
import ForgeButton from './ForgeButton'

export default function ForgeNav(props) {
  const [showForgeWarning, setShowForgeWarning] = useState(false)

  const { forge } = props

  const handleClick = () => {
    setShowForgeWarning(true)
  }

  const handleCloseModal = (props) => {
    setShowForgeWarning(props)
  }

  return (
    <>
      {/* Forge Warning Message */}
      {showForgeWarning && <ForgeMessageModal showModal={showForgeWarning} modalOpen={handleCloseModal} />}
      {/* Forge NFT Button */}
      <Container>
        <LabelContainer>
          <Text>Forge</Text>
        </LabelContainer>

        <Button onClick={handleClick} type='button' forge={forge}>
          <ForgeButton forge={forge} />
        </Button>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
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
