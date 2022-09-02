import { css } from '@emotion/react'
import styled from '@emotion/styled'
import facepaint from 'facepaint'

export const breakpoints = [1024, 1120, 1280, 1366, 1440, 1536, 1600, 1680, 1792, 1920, 2560]

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

export const fountainSize = [486, 100, 100, 100, 100, 100, 100, 100, 100, 100]
export const chamberSize = [486, 100, 100, 100, 100, 100, 100, 100, 100, 100]
export const globeSize = [486, 100, 100, 100, 100, 100, 100, 100, 100, 100]
export const navGlobeSize = [486, 100, 100, 100, 100, 100, 100, 100, 100, 100]

export const Text = styled.p`
  color: ${(props) => props.color || '#fff'};
  font-size: ${(props) => props.size || '24px'};
`
