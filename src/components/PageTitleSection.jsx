import React, { forwardRef, useContext } from 'react'
import styled, { ThemeConsumer } from 'styled-components'
import { Box, Text as BaseText } from 'rebass/styled-components'

import Section from './Section'
import Grid from './Grid'

const PreTitle = forwardRef(({ children, ...props }, ref) => (
  <BaseText ref={ref} {...props}>
    {children}
  </BaseText>
))

const Title = forwardRef(({ children, ...props }, ref) => (
  <Box ref={ref} {...props}>
    {children}
  </Box>
))

const Text = styled(Grid)`
  @supports not (grid-template-columns: subgrid) {
    /* Display something here */
  }
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    max-width: 62%;
  }
`

const PageTitleSection = forwardRef(
  ({ children, preTitle, title, id, isArticle, aside, ...props }, ref) => {
    const theme = useContext(ThemeConsumer)
    return (
      <Section id={id} ref={ref} {...props}>
        <Text
          display="grid"
          gridColumn={'1/span 8'}
          gridTemplateColumns="subgrid"
          as={isArticle ? 'article' : 'div'}
          role={isArticle ? 'article' : null}
        >
          <Grid
            gridColumn={['1/span 8', '1/span 8', '1/span 5']}
            pt={[1, 1, preTitle && 2]}
          >
            <header>
              {preTitle && (
                <PreTitle
                  color={theme.colors.primary}
                  fontSize={4}
                  mt={[2, 2, 4]}
                  mb={-3}
                  aria-hidden
                >
                  {preTitle}
                </PreTitle>
              )}
              <Title
                mt={[!preTitle && 2, !preTitle && 2, !preTitle && 5]}
                fontSize={6}
                as="h1"
              >
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
        </Text>
      </Section>
    )
  }
)

PageTitleSection.displayName = 'PageTitleSection'

export default PageTitleSection
