import React from 'react'
import { ThemeConsumer } from 'styled-components'

import Grid from './Grid'

const Container = props => {
  return (
    <ThemeConsumer>
      {theme => (
        <Grid
          display="grid"
          gridTemplateColumns={[
            `4fr minmax(auto, ${theme.sizes.maxWidth}) 1fr`,
            `4fr minmax(auto, ${theme.sizes.maxWidth}) 1fr`,
            `4fr minmax(auto, ${theme.sizes.maxWidth}) 1fr`,
            `4fr minmax(auto, ${theme.sizes.maxWidth}) 1fr`,
            `1fr minmax(auto, ${theme.sizes.maxWidth}) 4fr`,
          ]}
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
