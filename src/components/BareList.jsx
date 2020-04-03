import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from 'rebass'

const BareList = styled(({ isFlex, ...props }) =>
  isFlex ? <Flex as="ul" {...props} /> : <Box as="ul" {...props} />
)`
  padding: 0;
  margin: 0;
  list-style-type: none;
`

export default BareList
