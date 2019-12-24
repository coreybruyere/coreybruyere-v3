import React from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'
import { rem } from 'polished'

const Wrap = styled(Box)`
  padding: ${rem(8)};
  border: ${rem(1)} solid ${props => props.theme.colors.secondary};
  border-radius: ${rem(2)};
  box-shadow: rgba(0, 0, 0, 0.125) 0 0 ${rem(4)};
`

const Card = ({ children, ...props }) => {
  return <Wrap {...props}>{children}</Wrap>
}

export default Card
