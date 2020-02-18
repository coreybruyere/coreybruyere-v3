import React from 'react'
import { Box } from 'rebass/styled-components'
import styled from 'styled-components'

const VerticalText = styled(({ ...props }) => <Box {...props} />)`
  text-transform: uppercase;
  text-decoration: none;
  transform: rotate(0deg);
  writing-mode: vertical-rl;
  font-weight: 800;

  &:hover,
  &:active {
    text-decoration: none;
  }

  > * {
    fill: currentColor;
  }
`

export default VerticalText
