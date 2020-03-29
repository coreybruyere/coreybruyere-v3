import { createGlobalStyle } from 'styled-components'
import { darken, lighten, normalize, rem } from 'polished'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  /** Root fonts added to inline fonts.css file to prevent excessive FOUT  know to be an issue wit styled-components */
	:root {
    color: ${({ theme }) => theme.colors.text};
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
		background-color: ${({ theme }) => theme.colors.background};
		-moz-osx-font-smoothing: initial;
    font-size: 115%;

		&:before {
			content: '';
			display: block;
			width: 100%;
			height: ${rem(4)};
			margin-bottom: ${rem(-4)};
			background: linear-gradient(60deg, ${({ theme }) => theme.colors.text} 25%, ${({
  theme,
}) => theme.colors.primary} 3, ${({ theme }) => theme.colors.primary} 50%, ${({
  theme,
}) => theme.colors.secondary} 0, ${({ theme }) =>
  theme.colors.secondary} 75%, ${({ theme }) => theme.colors.tertiary} 0);
		}
	}

	a {
    color: ${({ theme }) => theme.colors.secondary};

		@supports (text-underline-offset: .25rem) {
			text-decoration: underline;
			text-decoration-style: solid;
			text-underline-offset: ${({ theme }) => theme.space.xs};
			text-decoration-color: ${({ theme }) => theme.colors.secondary};
		}

		&:hover,
		&:focus {
			color: ${({ theme }) => darken(0.05, theme.colors.secondary)};
		}
	}

	h1, h2, h3 {
		font-weight: 700;
	}
`
export default GlobalStyle
