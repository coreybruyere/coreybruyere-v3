import React from 'react'
import styled from 'styled-components'
import { position } from 'styled-system'
import { Box as Base } from 'rebass/styled-components'

const Position = styled(({ position, ...props }) => <Base {...props} />)`
  ${position}
`

export default Position
