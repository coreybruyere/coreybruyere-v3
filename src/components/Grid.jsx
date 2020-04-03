import React from 'react'
import styled from '@emotion/styled'
import { grid, layout, space, color } from 'styled-system'
import { Box as Base } from 'rebass'

const Grid = styled(({ grid, layout, space, color, ...props }) => (
  <Base {...props} />
))`
${grid}
${layout}
${space}
${color}
`

export default Grid
