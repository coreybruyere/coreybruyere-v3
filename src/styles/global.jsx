import { createGlobalStyle } from 'styled-components'
import { darken } from 'polished'

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

		&:hover,
		&:focus {
			color: ${({ theme }) => darken(0.5, theme.colors.secondary)};
		}
	}
`
export default GlobalStyle
