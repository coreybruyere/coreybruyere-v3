import { React } from 'react'
import { Global, css } from '@emotion/core'
import { darken, lighten, normalize, rem } from 'polished'

const GlobalStyle = () => (
  <Global
    styles={theme => css`
      ${normalize()}
      /** Root fonts added to inline fonts.css file to prevent excessive FOUT  know to be an issue wit styled-components */
      :root {
        color: ${theme.colors.text};
        line-height: 1.5;
      }

      * {
        &,
        &:before,
        &:after {
          box-sizing: inherit;
        }
      }

      body {
        box-sizing: border-box !important;
        background-color: ${theme.colors.background};
        -moz-osx-font-smoothing: initial;
        font-size: 115%;

      a {
        color: ${theme.colors.secondary};

        @supports (text-underline-offset: 0.25rem) {
          text-decoration: underline;
          text-decoration-style: solid;
          text-underline-offset: ${theme.space.xs};
          text-decoration-color: ${lighten(0.2, theme.colors.secondary)};
          text-decoration-thickness: ${rem(2)};
        }

        &:hover,
        &:focus {
          color: ${darken(0.09, theme.colors.secondary)};
          text-decoration-color: ${darken(
            0.09,
            lighten(0.2, theme.colors.secondary)
          )};
        }
      }

      p {
        margin-top: 0;
        margin-bottom: ${({ theme }) => theme.space.lg}
      }

      h1,
      h2,
      h3 {
        font-weight: 700;
      }

      h1 {
        font-size: ${theme.fontSizes[6]};
      }

      h2 {
        font-size: ${theme.fontSizes[5]};
      }

      h3 {
        font-size: ${theme.fontSizes[4]};
      }

      h4 {
        font-size: ${theme.fontSizes[3]};
      }

      h5 {
        font-size: ${theme.fontSizes[2]};
      }
    `}
  />
)

export default GlobalStyle
