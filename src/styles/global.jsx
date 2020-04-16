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

        ${'' /* &:before {
		content: '';
		display: block;
		width: 100%;
		height: ${rem(4)};
		margin-bottom: ${rem(-4)};
		background: linear-gradient(60deg, ${theme.colors.text} 25%, ${({
theme,
}) => theme.colors.primary} 3, ${theme.colors.primary} 50%, ${({
theme,
}) => theme.colors.secondary} 0, ${({ theme }) =>
theme.colors.secondary} 75%, ${theme.colors.tertiary} 0);
	} */}
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
      h3,
      h4,
      h5,
      h6 {
        color: ${theme.colors.primary};
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
