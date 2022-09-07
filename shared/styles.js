import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'
import facepaint from 'facepaint'

export const breakpoints = [
  1024, 1080, 1120, 1200, 1280, 1366, 1440, 1536, 1600, 1680, 1740, 1792, 1860, 1920, 2010, 2100, 2180, 2260, 2340,
  2420, 2490, 2560,
]

export const mq = facepaint([
  '@media(min-width: 1024px)',
  '@media(min-width: 1080px)',
  '@media(min-width: 1120px)',
  '@media(min-width: 1200px)',
  '@media(min-width: 1280px)',
  '@media(min-width: 1366px)',
  '@media(min-width: 1440px)',
  '@media(min-width: 1536px)',
  '@media(min-width: 1600px)',
  '@media(min-width: 1680px)',
  '@media(min-width: 1740px)',
  '@media(min-width: 1792px)',
  '@media(min-width: 1860px)',
  '@media(min-width: 1920px)',
  '@media(min-width: 2010px)',
  '@media(min-width: 2100px)',
  '@media(min-width: 2180px)',
  '@media(min-width: 2260px)',
  '@media(min-width: 2340px)',
  '@media(min-width: 2420px)',
  '@media(min-width: 2490px)',
  '@media(min-width: 2560px)',
])

// 👇 Base Asset Sizes

export const fountainBaseSize = 486
export const chamberBaseSize = 328
export const chamberGlobeBaseSize = 182

// 👇 Breakpoints MANUAL

export const chamberS = [
  0, 328, 346, 359, 384, 410, 438, 461, 492, 513, 538, 557, 574, 596, 615, 644, 673, 698, 724, 750, 775, 798, 820,
]

export const globeS = [
  0, 182, 192, 199, 213, 228, 243, 256, 273, 284, 299, 309, 319, 331, 341, 357, 373, 387, 402, 416, 430, 443, 455,
]

export const globeM = [
  0, -91, -96, -100, -107, -114, -121, -128, -137, -142, -149, -155, -159, -165, -171, -179, -187, -194, -201, -208,
  -215, -221, -228,
]

export const fountainS = [
  0, 486, 513, 532, 570, 608, 648, 683, 729, 759, 797, 826, 851, 883, 911, 954, 997, 1035, 1073, 1111, 1149, 1182, 1215,
]

export const navS = [
  0, 88, 93, 96, 103, 110, 117, 124, 132, 138, 144, 150, 154, 160, 165, 173, 180, 187, 194, 201, 208, 214, 220,
]

// 👇 CSS @ Breakpoints
export const fountainSize = mq({
  width: [
    0, 486, 513, 532, 570, 608, 648, 683, 729, 759, 797, 826, 851, 883, 911, 954, 997, 1035, 1073, 1111, 1149, 1182,
    1215,
  ],
  height: [
    0, 486, 513, 532, 570, 608, 648, 683, 729, 759, 797, 826, 851, 883, 911, 954, 997, 1035, 1073, 1111, 1149, 1182,
    1215,
  ],
})

export const chamberSize = mq({
  width: [
    0, 328, 346, 359, 384, 410, 438, 461, 492, 513, 538, 557, 574, 596, 615, 644, 673, 698, 724, 750, 775, 798, 820,
  ],
  height: [
    0, 328, 346, 359, 384, 410, 438, 461, 492, 513, 538, 557, 574, 596, 615, 644, 673, 698, 724, 750, 775, 798, 820,
  ],
})

export const globeSize = mq({
  width: [
    0, 182, 192, 199, 213, 228, 243, 256, 273, 284, 299, 309, 319, 331, 341, 357, 373, 387, 402, 416, 430, 443, 455,
  ],
  height: [
    0, 182, 192, 199, 213, 228, 243, 256, 273, 284, 299, 309, 319, 331, 341, 357, 373, 387, 402, 416, 430, 443, 455,
  ],
})

export const globeMargin = mq({
  margin: [
    0, -91, -96, -100, -107, -114, -121, -128, -137, -142, -149, -155, -159, -165, -171, -179, -187, -194, -201, -208,
    -215, -221, -228,
  ],
})

export const navGlobeSize = mq({
  width: [
    88, 88, 93, 96, 103, 110, 117, 124, 132, 138, 144, 150, 154, 160, 165, 173, 180, 187, 194, 201, 208, 214, 220,
  ],
  height: [
    88, 88, 93, 96, 103, 110, 117, 124, 132, 138, 144, 150, 154, 160, 165, 173, 180, 187, 194, 201, 208, 214, 220,
  ],
})

// Shareable Elements

export const FountainAnimationContainer = styled.div`
  ${fountainSize};
  border-radius: 50%;
  background: inherit;
  margin: auto;
`
export const chamberCircleTop = mq({
  top: [0, 15, 15, 15, 15, 15, 17, 18, 20, 20, 20, 22, 22, 22, 23, 25, 28, 28, 29, 31, 33, 33],
})

export const FountainAnimationContainerMP4 = styled.video`
  ${fountainSize};
  width: 100%;
  height: 100%;
  clip-path: circle(50%);
  background: inherit;
  cursor: pointer;
`

export const ChamberCircleContainer = styled.div`
  ${chamberSize};
  position: relative;
  ${chamberCircleTop};
  left: -0.5%;
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
  font-size: ${(props) => props.size || '22px'};
  font-family: 'ABCWhyteInktrapVariable';
  font-weight: ${(props) => props.weight || '400'};
`

export const StandardButton = styled.button`
  background: ${(props) => props.color || '#fff'};
  padding: 20px;
  border: 1px solid black;
  border-radius: 12px;
  cursor: ${(props) => props.cursor || 'pointer'};
  font-size: ${(props) => props.size || '22px'};
  font-family: 'ABCWhyteInktrapVariable';
  font-weight: ${(props) => props.weight || '400'};
`
