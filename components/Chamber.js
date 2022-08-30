import React, { useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import MintButton from './MintButton'
import PreRevealGlobe from './PreRevealGlobe'

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
            <MintButton eligibleToMint={mint} />
          </Globe>
        )
      })}
      {/* <Globe globeSize={globeSize} />
      <Globe globeSize={globeSize} />
      <Globe globeSize={globeSize} />
      <Globe globeSize={globeSize} /> */}
    </CircleContainer>
  )
}

export default Chamber

const CircleContainer = styled.div`
  position: relative;
  top: 15px;
  width: ${(props) => props.chamberSize};
  height: ${(props) => props.chamberSize};
  margin: auto;
  ${'' /* background: pink; */}
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
