import styled from '@emotion/styled'
import ChamberPlayerPlaceholder from './ChamberPlayerPlaceholder'
import { CHAMBERGLOBE } from '../../constants'
import Text from '../Shared/Text'

const ChamberGlobePlaceholder = () => {
  return (
    <a
      href='https://opensea.io/collection/bricktopians-by-law-degree'
      target='_blank'
      rel='noopener noreferrer'
      style={{ cursor: true ? 'pointer' : 'not-allowed', display: 'contents' }}
    >
      <ChamberPlayerPlaceholder>
        <source src={CHAMBERGLOBE.inActive} type='video/mp4' />
        <MessageContainer>
          <Text size='12px'>Sorry, your browser does not support embedded videos.</Text>
        </MessageContainer>
      </ChamberPlayerPlaceholder>
    </a>
  )
}

export default ChamberGlobePlaceholder

const MessageContainer = styled.div`
  height: 33vh;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: center;
`
