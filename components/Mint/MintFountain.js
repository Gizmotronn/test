import { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import MintMessage from './MintMessage'
import PreReveal from './PreReveal'

const MintFountain = ({ viewportWidth, viewportHeight }) => {
  const fountainRef = useRef()
  const [x, setX] = useState()
  console.log('🚀 ~ file: MintFountain.js ~ line 9 ~ MintFountain ~ x', x)
  const [y, setY] = useState()
  console.log('🚀 ~ file: MintFountain.js ~ line 11 ~ MintFountain ~ y', y)

  // 👇 Get the position of the Fountain container to use for the Mint Message
  const getPosition = () => {
    const x = fountainRef.current.offsetLeft
    setX(x)

    const y = fountainRef.current.offsetTop
    setY(y)
  }

  // 👇 Set the Fountain container position on mount
  useEffect(() => {
    getPosition()
  }, [])

  // 👇 Recalculate X and Y when browser window is re-sized
  useEffect(() => {
    if (viewportWidth > 767 && viewportHeight > 551) {
      window.addEventListener('resize', getPosition)
    }
  }, [viewportWidth, viewportHeight])

  return (
    <PreRevealContainer ref={fountainRef}>
      <PreReveal />
      <MintMessage showMessage={true} x={x} y={y} />
    </PreRevealContainer>
  )
}

export default MintFountain

// 👇 Set PRE-REVEAL to 50% of viewport and as a 'Column'
// ❕ Using 'width' instead of 'flex' to fix issue with MinGlobe flickering when scaling based on Fountain size
const PreRevealContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: flex-start;
  background: inherit;
  padding: 15px 15px 15px 7.5px;
`
