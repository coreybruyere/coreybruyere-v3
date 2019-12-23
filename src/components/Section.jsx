import React from 'react'
import { Box } from 'rebass'

const Section = ({ children, ...rest }) => {
  return (
    <Box {...rest} as="section">
      {children}
    </Box>
  )
}

export default Section
