import React from 'react'
import { Box } from 'rebass/styled-components'

import Grid from '../components/Grid'

const Section = ({ children, ...rest }) => {
  return (
    <Box as="section" p={3} {...rest}>
      <Grid display="grid" gridTemplateColumns={'repeat(8, 1fr)'}>
        {children}
      </Grid>
    </Box>
  )
}

export default Section
