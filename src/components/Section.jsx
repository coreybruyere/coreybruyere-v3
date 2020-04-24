import React from 'react'
import { Box } from 'rebass'

import Grid from '../components/Grid'

const Section = ({ children, ...rest }) => {
  return (
    <Box as="section" py={3} px={[4, 4, 3]} {...rest}>
      <Grid display="grid" gridTemplateColumns={'repeat(8, 1fr)'}>
        {children}
      </Grid>
    </Box>
  )
}

export default Section
