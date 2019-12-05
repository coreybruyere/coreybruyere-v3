import React from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'
import { rem } from 'polished'

import Grid from './Grid'

const Wrap = styled(Box)`
  padding: ${rem(8)};
  border: ${rem(1)} solid ${props => props.theme.colors.secondary};
  border-radius: ${rem(2)};
  box-shadow: rgba(0, 0, 0, 0.125) 0 0 ${rem(4)};
`

const FeatureGrid = ({ children }) => {
  return (
    <>
      <Grid
        display="grid"
        gridTemplateAreas="'a a a b b b b b'"
        gridTemplateColumns="repeat(8, 1fr)"
        // gridTemplateColumns="repeat(auto-fit, minmax(160px, 1fr))"
      >
        <Grid gridArea="a">A</Grid>
        <Grid gridArea="b">B</Grid>
      </Grid>
      <Box
        sx={{
          display: 'grid',
          gridGap: 3,
          gridTemplateAreas: `minmax(${rem(390)}, ${rem(720)}) 1fr`,
        }}
      >
        <Box>
          <h1>Hi, I'm Corey Bruyere</h1>
        </Box>
        <Box>
          <Box>
            <h2>A blog Post</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae nisi ducimus nostrum, nobis voluptates commodi officiis
              praesentium laboriosam, assumenda veniam, vero dolores facere ex!
              Eos est ad nesciunt eius fugit.
            </p>
          </Box>
          <Box>
            <h2>A blog Post</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae nisi ducimus nostrum, nobis voluptates commodi officiis
              praesentium laboriosam, assumenda veniam, vero dolores facere ex!
              Eos est ad nesciunt eius fugit.
            </p>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default FeatureGrid
