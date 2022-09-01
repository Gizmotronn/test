import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Text = styled.p`
  color: ${(props) => props.color || '#fff'};
  font-size: ${(props) => props.size || '24px'};
`
