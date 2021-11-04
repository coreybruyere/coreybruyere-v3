import React from 'react'
import { useTheme } from 'emotion-theming'

import Grid from './Grid'

const Container = ({ ...props }) => {
  const theme = useTheme()
  return (
    <Grid
      display="grid"
      gridTemplateColumns={[
        `4fr minmax(auto, ${theme.sizes.maxWidth}) 1fr`,
        `4fr minmax(auto, ${theme.sizes.maxWidth}) 1fr`,
        `4fr minmax(auto, ${theme.sizes.maxWidth}) 1fr`,
        `4fr minmax(auto, ${theme.sizes.maxWidth}) 1fr`,
        `1fr minmax(auto, ${theme.sizes.maxWidth}) 4fr`,
      ]}
      {...props}
    >
      <Grid
        display="grid"
        gridColumn={'2/span 1'}
        // gridTemplateColumns={'subgrid'}
      >
        {props.children}
      </Grid>
    </Grid>
  )
}

export default Container
