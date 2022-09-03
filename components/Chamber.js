import React, { useRef, useEffect, useState, useCallback } from 'react'
import styled from '@emotion/styled'
import facepaint from 'facepaint'
import { mq, fountainSize } from '../shared/styles'
import GoToMintButton from './GoToMintButton'

const Chamber = (props) => {
  const [windowSize, setWindowSize] = useState(getWindowSize())

  const ref = useRef(null)

  const { nftData } = props
  // const { chamberSize, globeSize, nftData } = props

  const chamberSize = mq({
    width: [0, 328, 359, 410, 438, 461, 492, 513, 538, 574, 615, 820],
    height: [0, 328, 359, 410, 438, 461, 492, 513, 538, 574, 615, 820],
  })

  const globeSize = mq({
    width: [0, 182, 199, 228, 243, 256, 273, 284, 299, 319, 341, 455],
    height: [0, 182, 199, 228, 243, 256, 273, 284, 299, 319, 341, 455],
  })

  const globeMargin = mq({
    margin: [0, -91, -100, -114, -121, -128, -137, -142, -149, -159, -171, -228],
  })

  const ChamberCircleContainer = styled.div`
    position: relative;
    top: 15px;
    ${'' /* ${mq({ width: [0, 328, 359, 410, 438, 461, 492, 513, 538, 574, 615, 820] })}; */}
    ${'' /* ${mq({ height: [0, 328, 359, 410, 438, 461, 492, 513, 538, 574, 615, 820] })}; */}
    ${chamberSize};
    margin: auto;
  `

  const ChamberGlobe = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    ${globeSize};
    ${'' /* ${mq({ width: [0, 182, 199, 228, 243, 256, 273, 284, 299, 319, 341, 455] })}; */}
    ${'' /* ${mq({ height: [0, 182, 199, 228, 243, 256, 273, 284, 299, 319, 341, 455] })}; */}
    ${globeMargin};
    ${'' /* ${mq({ margin: [0, -91, -100, -114, -121, -128, -137, -142, -149, -159, -171, -228] })}; */}
    border-radius: 50%;
    background: black;
  `

  function getWindowSize() {
    const { innerWidth } = window
    return { innerWidth }
  }

  // 👇 used to re-render the Chamber as each breakpoint is hit
  // only needed for manual resizing of window. Need to monitor performance
  const setMatch = useCallback(() => {
    // const currentSize = windowSize
    const breakpoints = [1024, 1120, 1280, 1366, 1440, 1536, 1600, 1680, 1792, 1920, 2560]
    const match = breakpoints.includes(windowSize)
    if (match) {
      setMatch((current) => !current)
    } else return
  }, [windowSize])

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize())
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  useEffect(() => {
    const circleContainer = ref.current

    const circleElements = circleContainer.childNodes

    let angle = 360 - 162 // 162 to align 1st NFT at top of pentagon
    let dangle = 360 / circleElements.length // = 72 with 5 circles

    for (let i = 0; i < circleElements.length; i++) {
      let circle = circleElements[i]

      angle += dangle // = 342

      // position each node
      circle.style.transform = `rotate(${angle}deg) translate(${
        circleContainer.clientWidth / 2
      }px) rotate(-${angle}deg)`
    }
  }, [setMatch])

  return (
    <ChamberCircleContainer ref={ref}>
      {nftData.map((nft) => {
        const { id, name, mint } = nft
        return (
          <ChamberGlobe key={nft.id}>
            <GoToMintButton eligibleToMint={mint} />
          </ChamberGlobe>
        )
      })}
    </ChamberCircleContainer>
  )
}

export default Chamber

// const CircleContainer = styled.div`
//   position: relative;
//   top: 15px;
//   width: ${(props) => props.chamberSize};
//   height: ${(props) => props.chamberSize};
//   margin: auto;
//   border: 1px solid yellow;
// `

// const Globe = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   width: ${(props) => props.globeSize};
//   height: ${(props) => props.globeSize};
//   margin: calc(-${(props) => props.globeSize} / 2);
//   border-radius: 50%;
//   background: black;
// `

// <CircleContainer ref={ref} chamberSize={chamberSize}>
//       {nftData.map((nft) => {
//         const { id, name, mint } = nft
//         return (
//           <Globe key={nft.id} globeSize={globeSize}>
//             <GoToMintButton eligibleToMint={mint} />
//           </Globe>
//         )
//       })}
//     </CircleContainer>
