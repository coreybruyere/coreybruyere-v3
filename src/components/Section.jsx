import React from 'react'
import { Box } from 'rebass/styled-components'

const Section = ({ children, ...rest }) => {
  return (
    <Box {...rest} as="section" p={3}>
      {children}
    </Box>
  )
}

export default Section
