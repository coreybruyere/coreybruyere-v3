import React from 'react'
import { Box } from 'rebass/styled-components'

const Section = ({ children, ...rest }) => {
  return (
    <Box as="section" p={3} {...rest}>
      {children}
    </Box>
  )
}

export default Section
