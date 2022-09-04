import { css } from '@emotion/react'
import styled from '@emotion/styled'
import facepaint from 'facepaint'

export const breakpoints = [1024, 1120, 1280, 1366, 1440, 1536, 1600, 1680, 1792, 1920, 2560]

export const chamberS = [0, 328, 359, 410, 438, 461, 492, 513, 538, 574, 615, 820]

export const globeS = [0, 182, 199, 228, 243, 256, 273, 284, 299, 319, 341, 455]

export const globeM = [0, -91, -100, -114, -121, -128, -137, -142, -149, -159, -171, -228]

export const mq = facepaint([
  '@media(min-width: 1024px)',
  '@media(min-width: 1120px)',
  '@media(min-width: 1280px)',
  '@media(min-width: 1366px)',
  '@media(min-width: 1440px)',
  '@media(min-width: 1536px)',
  '@media(min-width: 1600px)',
  '@media(min-width: 1680px)',
  '@media(min-width: 1792px)',
  '@media(min-width: 1920px)',
  '@media(min-width: 2560px)',
])

export const fountainSize = mq({
  width: [0, 486, 532, 608, 648, 683, 729, 759, 797, 851, 911, 1215],
  height: [0, 486, 532, 608, 648, 683, 729, 759, 797, 851, 911, 1215],
})

export const chamberSize = mq({
  width: [0, 328, 359, 410, 438, 461, 492, 513, 538, 574, 615, 820],
  height: [0, 328, 359, 410, 438, 461, 492, 513, 538, 574, 615, 820],
})

export const globeSize = mq({
  width: [0, 182, 199, 228, 243, 256, 273, 284, 299, 319, 341, 455],
  height: [0, 182, 199, 228, 243, 256, 273, 284, 299, 319, 341, 455],
})

export const globeMargin = mq({
  margin: [0, -91, -100, -114, -121, -128, -137, -142, -149, -159, -171, -228],
})

export const navGlobeSize = mq({
  width: [0, 88, 96, 110, 117, 124, 132, 138, 144, 154, 165, 220],
  height: [0, 88, 96, 110, 117, 124, 132, 138, 144, 154, 165, 220],
})

export const FountainAnimationContainer = styled.div`
  ${fountainSize};
  border-radius: 50%;
  background: inherit;
  margin: auto;
`

export const ChamberCircleContainer = styled.div`
  ${chamberSize};
  position: relative;
  top: 15px;
  margin: auto;
`

export const ChamberGlobe = styled.div`
  ${globeSize};
  ${globeMargin};
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  background: black;
  ${'' /* margin: calc(-${globeMargin} / 2); */}
`

export const Text = styled.p`
  color: ${(props) => props.color || '#fff'};
  font-size: ${(props) => props.size || '24px'};
`

export const StandardButton = styled.button`
  background: ${(props) => props.color || '#fff'};
  padding: 20px;
  border: 1px solid black;
  border-radius: 12px;
  cursor: ${(props) => props.cursor || 'pointer'};
  font-size: ${(props) => props.size || '22px'};
`
