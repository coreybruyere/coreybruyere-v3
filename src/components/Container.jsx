import React from 'react'
import styled from 'styled-components'

import Grid from './Grid'

const Wrapper = styled(Grid)``

const Container = props => {
  return (
    <Grid
      display="grid"
      gridTemplateColumns={'2fr minmax(auto, 44.8rem) 1fr 1fr'}
      px={4}
      py={3}
      as="section"
    >
      <Grid gridColumn={'2/span 2'}>{props.children}</Grid>
    </Grid>
  )
}

export default Container
