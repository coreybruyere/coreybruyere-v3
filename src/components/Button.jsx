import React, { forwardRef } from 'react'
import { Button as BareButton } from 'rebass/styled-components'
import styled from 'styled-components'
import { rem } from 'polished'

const Wrap = styled(BareButton)`
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
