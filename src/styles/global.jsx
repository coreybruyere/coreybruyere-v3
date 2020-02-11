import { createGlobalStyle } from 'styled-components'
import { darken, normalize } from 'polished'

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
	}

	a {
    color: ${({ theme }) => theme.colors.secondary};

		@supports (text-underline-offset: .25rem) {
			text-decoration: underline;
			text-decoration-style: solid;
			text-underline-offset: ${({ theme }) => theme.space.xs};
		}

		&:hover,
		&:focus {
			color: ${({ theme }) => darken(0.2, theme.colors.secondary)};
		}
	}
`
export default GlobalStyle
