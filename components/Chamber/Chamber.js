import React, { useRef, useEffect, useState } from 'react'
import { ChamberCircleContainer, ChamberGlobe } from '../../shared/styles'
import GoToMintButton from '../GoToMintButton'

const Chamber = (props) => {
  const ref = useRef(null)
  const [updateChamber, setUpdateChamber] = useState(undefined)

  const { nftData, toggle } = props

  useEffect(() => {
    function handleChamberUpdate() {
      setUpdateChamber(toggle)
    }

    handleChamberUpdate()

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
  }, [toggle])

  return (
    <ChamberCircleContainer ref={ref}>
      {nftData.map((nft) => {
        const { id, name, mint } = nft
        return (
          <ChamberGlobe key={id}>
            <GoToMintButton eligibleToMint={mint} />
          </ChamberGlobe>
        )
      })}
    </ChamberCircleContainer>
  )
}

export default Chamber
