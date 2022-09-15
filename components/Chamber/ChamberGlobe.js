import styled from '@emotion/styled'
import ChamberPlayer from './ChamberPlayer'

const ChamberGlobe = () => {
  return (
    <ChamberPlayer>
      <source src='/videos/Shared/Black_INACTIVEGLOBE_400px.mp4' type='video/mp4' />
      Sorry, your browser does not support embedded videos.
    </ChamberPlayer>
  )
}

export default ChamberGlobe
