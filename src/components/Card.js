import React from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'

const Wrap = styled(Box)`
  padding: 8px;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.125) 0px 0px 4px;
`

const Card = ({ children }) => {
  return <Wrap>{children}</Wrap>
}

export default Card
