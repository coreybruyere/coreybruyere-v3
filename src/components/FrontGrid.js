import React from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'
import { rem } from 'polished'

// FrontGrid will be rendered on index which will query general about, recent posts, and latest work. It's a giant page grid composed of smaller compoents. Possible separeate into a layouts directory.
const Wrap = styled(Box)`
  display: grid;
`

const FrontGrid = ({ children }) => {
  return <Wrap>{children}</Wrap>
}

export default FrontGrid
