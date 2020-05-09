import React, { forwardRef } from 'react'
import { Button as Base } from 'rebass'
import styled from '@emotion/styled'
import { rem, lighten } from 'polished'

const Wrap = styled(Base)`
  box-shadow: rgba(0, 0, 0, 0.125) 0 0 ${rem(4)};
  /* Create variants with Theme UI. For now this is the only button style */
  /* Create as a global style eventually and import here */
  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondary};
  border: ${rem(2)} solid ${({ theme }) =>
  lighten(0.2, theme.colors.secondary)};
  border-radius: ${({ theme }) => theme.space[1]}
  cursor: pointer;
`

const Button = forwardRef(({ children, isSmall, ...props }, ref) => (
  <Wrap ref={ref} py={isSmall ? 1 : 2} px={3} {...props}>
    <>{children}</>
  </Wrap>
))

Button.displayName = 'Button'

export default Button
