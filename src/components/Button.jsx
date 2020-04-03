import React, { forwardRef } from 'react'
import { Button as Base } from 'rebass'
import styled from '@emotion/styled'
import { rem } from 'polished'

const Wrap = styled(Base)`
  padding: ${({ small, theme }) => (small ? theme.space.xs : theme.space.base)};
  box-shadow: rgba(0, 0, 0, 0.125) 0 0 ${rem(4)};
`

const Button = forwardRef(({ children, isSmall, ...props }, ref) => (
  <Wrap ref={ref} small={isSmall} {...props}>
    <>{children}</>
  </Wrap>
))

Button.displayName = 'Button'

export default Button
