import { useContext } from 'react'
import styled from '@emotion/styled'
import { FountainContext } from '../../contexts/FountainContext'
import Text from '../Shared/Text'

const MintGlobePlaceholder = () => {
  const [dimensions] = useContext(FountainContext)

  const circleBase = 112
  const circleRatio = 0.33 // 👈 Don't forget to change the MintGlobe component
  const circleWidth = dimensions ? dimensions.width : circleBase
  // const circleHeight = dimensions ? dimensions.height : circleBase

  return (
    <>
      <Circle width={circleWidth} circleRatio={circleRatio}>
        <MessageContainer>
          <Text size='12px'>Sorry, your browser does not support embedded videos.</Text>
        </MessageContainer>
      </Circle>
    </>
  )
}

export default MintGlobePlaceholder

const Circle = styled.div`
  ${'' /* visibility: hidden; */}
  width: ${(props) => props.width * props.circleRatio + 7.5}px;
  height: ${(props) => props.width * props.circleRatio + 7.5}px;
  display: flex;
  border-radius: 50%;
  ${'' /* padding: 7.5px; */}
  border: 1px solid yellow;
`

const MessageContainer = styled.div`
  height: 100%;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`
