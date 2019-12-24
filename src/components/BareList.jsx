import React from 'react'
import { Box } from 'rebass/styled-components'

const BareList = props => <Box {...props} m={0} p={0} />

BareList.defaultProps = {
  as: 'ul',
}

export default BareList
