import { Box } from 'rebass'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { rem, darken } from 'polished'

const isHoverableStyle = props =>
  css`
    &:after {
      transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    }

    &:hover {
      &:after,
      img {
        transform: scale(1.025);
        box-shadow: 0px 6px 15px 0px ${darken(0.3, props.theme.colors.shadow)};
      }
    }
  `

const Card = styled(Box)`
  position: relative;

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
    box-shadow: 0px 3px 12px 0px
      ${({ theme }) => darken(0.25, theme.colors.shadow)};
    ${'' /* box-shadow: 0 0 0 ${rem(1)} rgba(63, 63, 68, 0.05),
      0 ${rem(1)} ${rem(3)} 0 rgba(63, 63, 68, 0.15); */}
  }

  ${({ isHoverable }) => (isHoverable ? isHoverableStyle : null)}
`

Card.defaultProps = {
  mb: 4,
  p: 4,
}

export default Card
