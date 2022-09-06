import React, { useRef, useEffect, useState, useCallback } from 'react'
import styled from '@emotion/styled'
// import facepaint from 'facepaint'
import { mq, breakpoints } from '../shared/styles'
import GoToMintButton from './GoToMintButton'

const Chamber = (props) => {
  const [windowSize, setWindowSize] = useState(getWindowSize())
  const [updateChamber, setUpdateChamber] = useState(undefined)

  // const mQuery = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`))

  const ref = useRef(null)

  const { nftData, toggle } = props
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

  useEffect(() => {
    console.log('RENDER')
    function handleChamberUpdate() {
      setUpdateChamber(toggle)
    }

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

    handleChamberUpdate()
  }, [toggle])

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

// const ChamberCircleContainer = styled.div`
//   position: relative;
//   top: 15px;
//   ${chamberSize};
//   margin: auto;
// `

// const ChamberGlobe = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   ${globeSize};
//   ${globeMargin};
//   border-radius: 50%;
//   background: black;
// `

// const CircleContainer = styled.div`
//   position: relative;
//   top: 15px;
//   width: ${chamberS[0]}px;
//   height: ${chamberS[0]}px;
//   margin: auto;
//   border: 1px solid yellow;
//   background: pink;
//   @media (min-width: ${breakpoints[1]}px) {
//     background: yellow;
//     width: ${chamberS[1]}px;
//     height: ${chamberS[1]}px;
//   }
//   @media (min-width: ${breakpoints[2]}px) {
//     background: green;
//     width: ${chamberS[2]}px;
//     height: ${chamberS[2]}px;
//   }
// `

// const Globe = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   width: ${globeS[0]}px;
//   height: ${globeS[0]}px;
//   margin: ${globeM[0]}px;
//   ${'' /* margin: calc(-${(props) => props.globeSize} / 2); */}
//   border-radius: 50%;
//   background: black;
//   @media (min-width: ${breakpoints[1]}px) {
//     background: yellow;
//     width: ${globeS[1]}px;
//     height: ${globeS[1]}px;
//     margin: ${globeM[1]}px;
//   }
//   @media (min-width: ${breakpoints[2]}px) {
//     background: green;
//     width: ${globeS[2]}px;
//     height: ${globeS[2]}px;
//     margin: ${globeM[2]}px;
//   }
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

// if (currentSize >= breakpoints[0]) {
//   console.log('xxxxxxxxxxxx 1024 xxxxxxxxxxx')
//   setToggle((current) => !current)
// } else if (currentSize >= breakpoints[1]) {
//   console.log('xxxxxxxxxxxx 1120 xxxxxxxxxxx')
//   setToggle((current) => !current)
// } else if (currentSize >= breakpoints[2]) {
//   console.log('xxxxxxxxxxxx 1280 xxxxxxxxxxx')
//   setToggle((current) => !current)
// } else if (currentSize >= breakpoints[3]) {
//   console.log('xxxxxxxxxxxx 1366 xxxxxxxxxxx')
//   setToggle((current) => !current)
// } else if (currentSize >= breakpoints[4]) {
//   console.log('xxxxxxxxxxxx 1440 xxxxxxxxxxx')
//   setToggle((current) => !current)
// } else if (currentSize >= breakpoints[5]) {
//   console.log('xxxxxxxxxxxx 1536 xxxxxxxxxxx')
//   setToggle((current) => !current)
// } else if (currentSize >= breakpoints[6]) {
//   console.log('xxxxxxxxxxxx 1600 xxxxxxxxxxx')
//   setToggle((current) => !current)
// } else if (currentSize >= breakpoints[7]) {
//   console.log('xxxxxxxxxxxx 1680 xxxxxxxxxxx')
//   setToggle((current) => !current)
// } else if (currentSize >= breakpoints[8]) {
//   console.log('xxxxxxxxxxxx 1792 xxxxxxxxxxx')
//   setToggle((current) => !current)
// } else if (currentSize >= breakpoints[9]) {
//   console.log('xxxxxxxxxxxx 1920 xxxxxxxxxxx')
//   setToggle((current) => !current)
// } else if (currentSize >= breakpoints[10]) {
//   console.log('xxxxxxxxxxxx 2560 xxxxxxxxxxx')
//   setToggle((current) => !current)
// } else return
