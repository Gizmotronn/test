import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import styled from '@emotion/styled'
import { FountainAnimationContainerMP4 } from '../shared/styles'

const FountainAnimation = () => {
  return (
    <>
      {/* <FountainAnimationContainerMP4 autoPlay loop>
        <source src='/videos/Colour_Globe.mp4' type='video/mp4' />
        Sorry, your browser does not support embedded videos.
      </FountainAnimationContainerMP4> */}
      {
        <video
          autoPlay
          loop
          style={{
            width: 486,
            height: 486,
            border: '1px solid red',
            borderRadius: '50%',
            background: 'yellow',
            cursor: 'pointer',
          }}
        >
          <source src='/videos/Colour_Globe.mp4' type='video/mp4' />
          Sorry, your browser does not support embedded videos.
        </video>
      }
    </>
  )
}

export default FountainAnimation

// const FountainAnimationContainer = styled.div`
//   ${fountainSize};
//   border-radius: 50%;
//   background: yellow;
//   margin: auto;
// `
