import React from 'react'
import styled, { ThemeConsumer } from 'styled-components'
import { rem } from 'polished'

import Grid from './Grid'

const Wrapper = styled(Grid)``

const Container = props => {
  return (
    <ThemeConsumer>
      {theme => (
        <Grid
          display="grid"
          gridTemplateColumns={[
            `4fr minmax(auto, ${theme.sizes.maxWidthCentered}) 1fr`,
            `4fr minmax(auto, ${theme.sizes.maxWidth}) 1fr`,
            `4fr minmax(auto, ${theme.sizes.maxWidth}) 1fr`,
            `4fr minmax(auto, ${theme.sizes.maxWidth}) 1fr`,
            `4fr minmax(auto, ${theme.sizes.maxWidth}) 1fr`,
            `1fr minmax(auto, ${theme.sizes.maxWidth}) 4fr`,
          ]}
          px={4}
          py={3}
          as="section"
        >
          <Grid
            display="grid"
            gridColumn={'2/span 1'}
            gridTemplateColumns={'subgrid'}
          >
            {props.children}
          </Grid>
        </Grid>
      )}
    </ThemeConsumer>
  )
}

export default Container
