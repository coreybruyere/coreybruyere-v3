import React from 'react'
import { Box } from 'rebass/styled-components'
import styled, { css } from 'styled-components'
import { rem } from 'polished'

const isHoverableStyle = css`
  &:after {
    transition: transform 0.2s, box-shadow 0.2s;
  }

  &:hover,
  &:focus {
    &:after {
      transform: scale(1.025);
      box-shadow: 0 0 0 ${rem(1)} rgba(63, 63, 68, 0.05),
        0 ${rem(1)} ${rem(7)} 0 rgba(63, 63, 68, 0.15);
    }
  }
`

const Card = styled(({ isHoverable, ...props }) => <Box {...props} />)`
  position: relative;
  padding: ${({ theme }) => theme.space.med};
  margin-bottom: ${({ theme }) => theme.space.med};

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.card};
    border-radius: ${rem(2)};
    box-shadow: 0 0 0 ${rem(1)} rgba(63, 63, 68, 0.05),
      0 ${rem(1)} ${rem(3)} 0 rgba(63, 63, 68, 0.15);
  }

  ${({ isHoverable }) => (isHoverable ? isHoverableStyle : null)}
`

export default Card
