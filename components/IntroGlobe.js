import React from 'react'
import { IntroAnimation } from '../shared/styles'

const IntroGlobe = () => {
  return (
    <IntroAnimation autoPlay loop>
      <source src='/videos/Colour_Globe.mp4' type='video/mp4' />
      Sorry, your browser does not support embedded videos.
    </IntroAnimation>
  )
}

export default IntroGlobe
