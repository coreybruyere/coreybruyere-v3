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


const PageTitleSection = forwardRef(
  (
    { children, preTitle, title, id, isArticle, isEmphasized, aside, ...props },
    ref
  ) => {
    const sectionId = id.replace(/ /g, '-')
    const { fontSizes } = useTheme()
    return (
      <Section id={sectionId} ref={ref} {...props}>
        <Grid
          display="grid"
          gridColumn={'1/span 8'}
          as={isArticle ? 'article' : 'div'}
          role={isArticle ? 'article' : null}
        >
          <Grid display="grid" gridTemplateColumns={'repeat(8, 1fr)'}> 
            <Grid display="grid" id="hello" gridColumn={['1/span 8', '1/span 5']}>
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
                gridColumn={['1/span 8', '6/span 3']}
                pt={[0,4]}
                pl={[0,4]}
                pb={[0,4]}
                mr={[0,-4]}
              >
                {aside}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Section>
    )
  }
)

PageTitleSection.displayName = 'PageTitleSection'

export default PageTitleSection
