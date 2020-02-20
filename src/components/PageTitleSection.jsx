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
  ({ children, title, id, isArticle, aside, ...props }, ref) => (
    <Section id={id} ref={ref} {...props}>
      <Grid
        display="grid"
        gridColumn={'1/span 8'}
        gridTemplateColumns="subgrid"
        as={isArticle ? 'article' : 'div'}
        css={{
          maxWidth: '62%',
        }}
      >
        <Grid gridColumn={['1/span 8', '1/span 8', '1/span 5']} pt={[1, 1, 2]}>
          <header>
            <Title mt={[2, 2, 4]} fontSize={6} as="h1">
              {title}
            </Title>
          </header>

          {children && children}
        </Grid>

        {aside && (
          <Grid
            gridColumn={['1/span 8', '1/span 8', '6/span 3']}
            pt={[0, 0, 6]}
            pl={[0, 0, 4]}
            pb={[0, 0, 4]}
            mr={[0, 0, -3, -3, 0]}
          >
            {aside}
          </Grid>
        )}
      </Grid>
    </Section>
  )
)

PageTitleSection.displayName = 'PageTitleSection'

export default PageTitleSection
