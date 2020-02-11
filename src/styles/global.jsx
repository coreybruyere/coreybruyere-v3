import { createGlobalStyle } from 'styled-components'
import { darken, normalize } from 'polished'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: "Syne";
    font-style: normal;
    font-weight: 400;
    font-display: block;
    src:
      local("Syne"),
      local("Syne"),
      url('/fonts/Syne-Regular.woff2') format('woff2'),
      url('/fonts/Syne-Regular.woff') format('woff');
  }

  @font-face {
    font-family: "Syne";
    font-style: normal;
    font-weight: 700;
    font-display: block;
    src:
      local("Syne Bold"),
      local("Syne-Bold"),
      url('/fonts/Syne-Bold.woff2') format('woff2'),
      url('/fonts/Syne-Bold.woff') format('woff');
  }

  @font-face {
    font-family: "Syne";
    font-style: italic;
    font-weight: 400;
    font-display: block;
    src:
      local("Syne Italic"),
      local("Syne-Italic"),
      url('/fonts/Syne-Italic.woff2') format('woff2'),
      url('/fonts/Syne-Italic.woff') format('woff');
  }

  @font-face {
    font-family: "Syne";
    font-style: oblique;
    font-weight: 400;
    font-display: block;
    src:
      local("Syne Mono"),
      local("Syne-Mono"),
      url('/fonts/Syne-Mono.woff2') format('woff2'),
      url('/fonts/Syne-Mono.woff') format('woff');
  }

  @font-face {
    font-family: "Syne";
    font-style: normal;
    font-weight: 800;
    font-display: block;
    src:
      local("Syne Extra"),
      local("Syne-Extra"),
      url('/fonts/Syne-Extra.woff2') format('woff2'),
      url('/fonts/Syne-Extra.woff') format('woff');
  }

	:root {
		font-family: 'Syne','Helvetica Neue','Helvetica','Arial',sans-serif;
		font-size: 16px; /* Default browser font size */
		line-height: 1.5;
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
