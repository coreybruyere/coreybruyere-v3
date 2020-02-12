import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { Box } from 'rebass/styled-components'

import Section from './Section'
import Grid from './Grid'

const Title = forwardRef(({ children, ...props }, ref) => (
  <Box ref={ref} {...props}>
    {children}
  </Box>
))

const PageTitleSection = forwardRef(
  ({ children, title, id, ...props }, ref) => (
    <Section id={id} ref={ref} {...props}>
      <Grid display="grid" gridTemplateColumns={'repeat(8, 1fr)'}>
        <Grid
          display="grid"
          gridColumn={'1/span 8'}
          gridTemplateColumns="subgrid"
        >
          <Grid
            gridColumn={['1/span 8', '1/span 8', '1/span 5']}
            pt={[1, 1, 2]}
          >
            <Title mt={[2, 2, 4]} fontSize={6} as="h1">
              {title}
            </Title>

            {children && children}
          </Grid>
        </Grid>
      </Grid>
    </Section>
  )
)

PageTitleSection.displayName = 'PageTitleSection'

export default PageTitleSection
