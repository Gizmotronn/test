import React from 'react'
import { FountainAnimation } from '../../shared/styles'

const FountainGlobe = () => {
  return (
    <FountainAnimation autoPlay loop>
      <source src='/videos/Colour_Globe.mp4' type='video/mp4' />
      Sorry, your browser does not support embedded videos.
    </FountainAnimation>
  )
}

export default FountainGlobe
