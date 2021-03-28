import React, { forwardRef } from 'react'
import { Box as Base } from 'rebass'
import styled from '@emotion/styled'
import { rgba, darken } from 'polished'

const Wrap = styled(Base)`
  @supports (grid-template-columns: subgrid) {
    background: url('/images/about-me.jpg') no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    border-top-left-radius: ${({ theme }) => theme.space.xs};
    border-bottom-left-radius: ${({ theme }) => theme.space.xs};
    box-shadow: 0px 34px 21px -26px ${({ theme }) => darken(0.35, theme.colors.shadow)};

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
      border-radius: ${({ theme }) => theme.space.xs};
    }

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
    }

    &:before {
      background-color: ${({ theme }) => rgba(theme.colors.secondary, 0.4)};
      mix-blend-mode: darken;
    }

    &:after {
      background-color: ${({ theme }) => rgba(theme.colors.primary, 0.6)};
      mix-blend-mode: lighten;
    }
  }
`

const AboutImage = forwardRef(({ children, ...props }, ref) => (
  <Wrap ref={ref} {...props}>
    <>{children}</>
  </Wrap>
))

AboutImage.displayName = 'AboutImage'

export default AboutImage
