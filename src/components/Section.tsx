import React from 'react'
import { Box } from 'rebass'

const Section = ({ children, ...rest }) => {
  return (
    <Box py={3} {...rest}>
      {children}
    </Box>
  )
}

export default Section
