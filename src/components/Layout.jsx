import React from 'react'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'

import favicon from '../images/favicon.ico'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import config from '../utils/siteConfig'

import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Position from '../components/Position'

const Template = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
      </Helmet>

      <ThemeProvider theme={theme}>
        <>
          <Position position="relative">
            <Menu />
            <main id="main" role="main">
              {children}
            </main>
          </Position>
          <Footer />
        </>
      </ThemeProvider>
      <GlobalStyle />
    </>
  )
}

export default Template
