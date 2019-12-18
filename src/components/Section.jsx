import React from 'react'
import { Box } from 'rebass'

const Section = ({ children }) => {
  return (
    <Box py={3} as="section">
      {children}
    </Box>
  )
}

export default Section
