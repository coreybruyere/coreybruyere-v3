import React from 'react'
import Helmet from 'react-helmet'

import favicon from '../images/favicon.ico'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from '../context/theme-context'
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

      <ThemeProvider>
        <>
          <Position position="relative">
            <Menu />
            <main id="main" role="main">
              {children}
            </main>
          </Position>
          <Footer />
          <GlobalStyle />
        </>
      </ThemeProvider>
    </>
  )
}

export default Template
