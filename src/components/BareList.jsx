import React from 'react'
import styled from 'styled-components'
import { Box } from 'rebass/styled-components'

const BareList = styled(({ ...props }) => <Box {...props} />)`
  padding: 0;
  margin: 0;
  list-style-type: none;
`

BareList.defaultProps = {
  as: 'ul',
}

export default BareList
