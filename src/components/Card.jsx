import React from 'react'
import { Box } from 'rebass/styled-components'
import styled from 'styled-components'
import { rem } from 'polished'

const Card = styled(({ ...props }) => <Box {...props} />)`
  padding: ${rem(8)};
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${rem(2)};
  box-shadow: 0 0 0 ${rem(1)} rgba(63, 63, 68, 0.05),
    0 ${rem(1)} ${rem(3)} 0 rgba(63, 63, 68, 0.15);
`

export default Card
