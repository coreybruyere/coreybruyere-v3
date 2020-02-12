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
  ({ children, title, id, isArticle, ...props }, ref) => (
    <Section id={id} ref={ref} {...props}>
      <Grid
        display="grid"
        gridColumn={'1/span 8'}
        gridTemplateColumns="subgrid"
        as={isArticle ? 'article' : 'div'}
      >
        <Grid gridColumn={['1/span 8', '1/span 8', '1/span 5']} pt={[1, 1, 2]}>
          <header>
            <Title mt={[2, 2, 4]} fontSize={6} as="h1">
              {title}
            </Title>
          </header>

          {children && children}
        </Grid>
      </Grid>
    </Section>
  )
)

PageTitleSection.displayName = 'PageTitleSection'

export default PageTitleSection
