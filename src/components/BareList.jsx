import React from 'react'
import styled from 'styled-components'
import { Box, Flex } from 'rebass/styled-components'

const BareList = styled(({ isFlex, ...props }) =>
  isFlex ? <Flex as="ul" {...props} /> : <Box as="ul" {...props} />
)`
  padding: 0;
  margin: 0;
  list-style-type: none;
`

export default BareList
