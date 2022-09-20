import styled from '@emotion/styled'
import ChamberPlayerPlaceholder from './ChamberPlayerPlaceholder'

const ChamberGlobePlaceholder = () => {
  return (
    <ChamberPlayerPlaceholder>
      <source src='/videos/Shared/Black_INACTIVEGLOBE_400px.mp4' type='video/mp4' />
      Sorry, your browser does not support embedded videos.
    </ChamberPlayerPlaceholder>
  )
}

export default ChamberGlobePlaceholder
