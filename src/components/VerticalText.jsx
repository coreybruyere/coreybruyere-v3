import React from 'react'
import { Box } from 'rebass/styled-components'
import styled from 'styled-components'

const VerticalText = styled(({ ...props }) => <Box {...props} />)`
  font-family: 'Open Sans', sans-serif;
  text-decoration: none;
  transform: rotate(0deg);
  writing-mode: vertical-rl;

  &:hover,
  &:active {
    text-decoration: none;
  }

  > * {
    fill: currentColor;
  }
`

export default VerticalText
