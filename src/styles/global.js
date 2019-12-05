import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  * {
		&,
		&:before,
		&:after {
			box-sizing: inherit;
		}
	}

	html {
		height: 100%;
		box-sizing: border-box;
	}

	body {
		box-sizing: border-box !important;
		-moz-osx-font-smoothing: initial;
	}
`
export default GlobalStyle
