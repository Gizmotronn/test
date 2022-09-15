import React from 'react'
import { GlobeAnimation } from '../../shared/styles'

const ChamberGlobe = () => {
  return (
    <GlobeAnimation autoPlay loop>
      <source src='/videos/Colour_Globe.mp4' type='video/mp4' />
      Sorry, your browser does not support embedded videos.
    </GlobeAnimation>
  )
}

export default ChamberGlobe
