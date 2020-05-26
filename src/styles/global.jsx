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

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      ul,
      ol,
      dl,
      blockquote,
      p,
      address,
      hr,
      table,
      fieldset,
      figure,
      pre,
      details {
        margin-top: 0;
        margin-bottom: ${theme.space.lg};
      }

      body {
        box-sizing: border-box !important;
        background-color: ${theme.colors.background};
        -moz-osx-font-smoothing: initial;
        font-size: 115%;
      }

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

      code,
      code[class*='language-'] {
        font-size: ${theme.fontSizes[1]};
      }

      pre[class*='language-'] > code {
        border-left: ${theme.space.base} solid ${theme.colors.primary};
        box-shadow: -1px 0 0 0 ${theme.colors.primary}, 0 0 0 1px #dfdfdf;
      }

      hr {
        border: 0;
        border-top: ${rem(2)} solid ${theme.colors.muted};
      }

      figure {
        margin-left: 0;
        margin-right: 0;
      }

      blockquote {
        position: relative;
        font-style: italic;
        &:before {
          position: absolute;
          top: -${theme.space.med};
          left: -${theme.space.lg};
          content: open-quote;
          font-size: ${theme.fontSizes[7]};
        }
        &:after {
          position: absolute;
          visibility: hidden;
          content: close-quote;
          font-size: ${theme.fontSizes[7]};
        }
      }

      .gatsby-highlight {
        margin-bottom: ${theme.space[4]};
        @media only screen and (min-width: ${theme.breakpoints[1]}) {
          margin-right: -${theme.space[7]};
        }
      }

      .s-page-body {
        img {
          max-width: 100%;
          margin-bottom: ${theme.space.lg};
        }
      }
    `}
  />
)

export default GlobalStyle
