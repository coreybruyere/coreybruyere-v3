import React from 'react'
import styled from '@emotion/styled'
import { position } from 'styled-system'
import { Box as Base } from 'rebass'

const Position = styled(({ position, ...props }) => <Base {...props} />)`
  ${position}
`

export default Position
