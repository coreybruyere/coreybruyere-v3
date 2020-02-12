import React from 'react'
import Helmet from 'react-helmet'
import { rem } from 'polished'

import favicon from '../images/favicon.ico'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from '../context/theme-context'
import config from '../utils/siteConfig'

import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Grid from '../components/Grid'

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
          <Grid
            display={['block', 'block', 'grid']}
            gridTemplateColumns={`${rem(192)} 1fr`}
          >
            <Menu />
            <main id="main" role="main">
              {children}
            </main>
            <Footer gridColumn={'2/3'} />
          </Grid>
          <GlobalStyle />
        </>
      </ThemeProvider>
    </>
  )
}

export default Template
