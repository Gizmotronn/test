import React, { useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import { ChamberCircleContainer, ChamberGlobe } from '../shared/styles'
import GoToMintButton from './GoToMintButton'

const Chamber = (props) => {
  const ref = useRef(null)

  const { chamberSize, globeSize, nftData } = props

  useEffect(() => {
    const circleContainer = ref.current

    const circleElements = circleContainer.childNodes

    let angle = 360 - 162 // 162 to align 1st NFT at top of pentagon
    let dangle = 360 / circleElements.length // = 72 with 5 circles

    for (let i = 0; i < circleElements.length; i++) {
      let circle = circleElements[i]

      angle += dangle // = 342

      circle.style.transform = `rotate(${angle}deg) translate(${
        circleContainer.clientWidth / 2
      }px) rotate(-${angle}deg)`
    }
  }, [])

  return (
    <CircleContainer ref={ref} chamberSize={chamberSize}>
      {nftData.map((nft) => {
        const { id, name, mint } = nft
        return (
          <Globe key={nft.id} globeSize={globeSize}>
            <GoToMintButton eligibleToMint={mint} />
          </Globe>
        )
      })}
    </CircleContainer>

    // <ChamberCircleContainer ref={ref}>
    //   {nftData.map((nft) => {
    //     const { id, name, mint } = nft
    //     return (
    //       <ChamberGlobe key={nft.id}>
    //         <GoToMintButton eligibleToMint={mint} />
    //       </ChamberGlobe>
    //     )
    //   })}
    // </ChamberCircleContainer>
  )
}

export default Chamber

const CircleContainer = styled.div`
  position: relative;
  top: 15px;
  width: ${(props) => props.chamberSize};
  height: ${(props) => props.chamberSize};
  margin: auto;
`

const Globe = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${(props) => props.globeSize};
  height: ${(props) => props.globeSize};
  margin: calc(-${(props) => props.globeSize} / 2);
  border-radius: 50%;
  background: black;
`

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
