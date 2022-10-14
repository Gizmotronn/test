import styled from '@emotion/styled'
import MintFountainPlayer from './Fountain/MintFountainPlayer'
import { FOUNTAIN } from '../constants'
import Text from './Shared/Text'

const PreReveal = ({ route }) => {
  return (
    <MintFountainPlayer>
      <source src={FOUNTAIN.inActive} type='video/mp4' />
      <MessageContainer>
        <Text size='12px'>Sorry, your browser does not support embedded videos.</Text>
      </MessageContainer>
    </MintFountainPlayer>
  )
}

export default PreReveal

const MessageContainer = styled.div`
  height: 33vh;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: center;
`
