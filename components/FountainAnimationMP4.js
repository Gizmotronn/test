import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import styled from '@emotion/styled'
import { FountainAnimationContainerMP4 } from '../shared/styles'

const FountainAnimation = () => {
  return (
    <FountainAnimationContainerMP4 autoPlay loop>
      <source src='/videos/Colour_Globe.mp4' type='video/mp4' />
      Sorry, your browser does not support embedded videos.
    </FountainAnimationContainerMP4>
  )
}

export default FountainAnimation

// const FountainAnimationContainer = styled.div`
//   ${fountainSize};
//   border-radius: 50%;
//   background: yellow;
//   margin: auto;
// `

{
  /* <a href=''>
        <video
          autoPlay
          loop
          style={{
            width: '200px',
          height: '200px',
          borderRadius: '50%',
          overflow: 'hidden',
          cursor: 'pointer',
            background: 'yellow', // to show on load
          }}
        >
          <source src='/videos/Colour_Globe.mp4' type='video/mp4' />
          Sorry, your browser does not support embedded videos.
        </video>
      </a> */
}

{
  /* <div
style={{
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  background: 'yellow',
  overflow: 'hidden',
  cursor: 'pointer',
}}
>
poop
</div> */
}

{
  /* <video
      autoPlay
      loop
      style={{
        width: '100%',
        height: '100%',
        clipPath: 'circle(50%)',
        background: 'yellow',
        cursor: 'pointer',
      }}
    >
      <source src='/videos/Colour_Globe.mp4' type='video/mp4' />
      Sorry, your browser does not support embedded videos.
    </video> */
}
