import { createGlobalStyle } from 'styled-components'
import { darken, rem } from 'polished'

const GlobalStyle = createGlobalStyle`
  * {
		&,
		&:before,
		&:after {
			box-sizing: inherit;
		}
	}

	:root {
		height: 100%;
	}

	body {
		box-sizing: border-box !important;
		background-color: ${({ theme }) => theme.colors.background};
		-moz-osx-font-smoothing: initial;
	}

	a {
    color: ${({ theme }) => theme.colors.secondary};

		@supports (text-underline-offset: .25rem) {
			text-decoration: underline;
			text-decoration-style: dotted;
			text-underline-offset: ${({ theme }) => theme.space.xs};
		}

		&:hover,
		&:focus {
			color: ${({ theme }) => darken(0.2, theme.colors.secondary)};
		}
	}
`
export default GlobalStyle
