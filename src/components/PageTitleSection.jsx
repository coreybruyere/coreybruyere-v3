import React, { forwardRef } from 'react'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import { Box, Text as BaseText } from 'rebass'
import { rem } from 'polished'

import Section from './Section'
import Grid from './Grid'

const PreTitle = forwardRef(({ children, ...props }, ref) => (
  <BaseText ref={ref} {...props}>
    {children}
  </BaseText>
))

PreTitle.displayName = 'PreTitle'

const Title = forwardRef(({ children, ...props }, ref) => (
  <Box ref={ref} mb={4} {...props}>
    {children}
  </Box>
))

Title.displayName = 'Title'

const Text = styled(Grid)`
  @supports not (grid-template-columns: subgrid) {
    /* Display something here */
  }
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    max-width: 62%;
  }
`

const PageTitleSection = forwardRef(
  (
    { children, preTitle, title, id, isArticle, isEmphasized, aside, ...props },
    ref
  ) => {
    const { fontSizes } = useTheme()
    return (
      <Section id={id} ref={ref} {...props}>
        <Text
          display="grid"
          gridColumn={'1/span 8'}
          gridTemplateColumns="subgrid"
          as={isArticle ? 'article' : 'div'}
          role={isArticle ? 'article' : null}
        >
          <Grid gridColumn={['1/span 8', '1/span 8', '1/span 5']}>
            <Box
              as="header"
              pt={[0, 0, preTitle ? 5 : 4]}
              mr={[0, 0, !aside && -7]}
              sx={{ lineHeight: '1.35' }}
            >
              {preTitle && (
                <PreTitle fontSize={5} mb={-3} aria-hidden>
                  {preTitle}
                </PreTitle>
              )}
              <Title
                fontSize={`max(${fontSizes[5]}, min(${fontSizes[3]} + 3vw, ${fontSizes[7]}));`}
                as="h1"
              >
                {title}
              </Title>
            </Box>

            {children && <Box fontSize={isEmphasized && 4}>{children}</Box>}
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
        </Text>
      </Section>
    )
  }
)

PageTitleSection.displayName = 'PageTitleSection'

export default PageTitleSection
