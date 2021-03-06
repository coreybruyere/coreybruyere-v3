import React from 'react'
import Helmet from 'react-helmet'
import { rem } from 'polished'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'

import favicon from '../images/favicon.ico'
import GlobalStyle from '../styles/global'
import config from '../utils/siteConfig'
import { useIsClient } from '../hooks/useIsClient'
import { useThemeMode } from '../hooks/useThemeMode'

import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Grid from '../components/Grid'

const Document = styled(Grid)`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: auto;
`

const Template = ({ children }) => {
  const { key } = useIsClient()
  const { theme } = useThemeMode()

  return (
    <>
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="favicon/safari-pinned-tab.svg"
          color="#006157"
        />
        <meta name="msapplication-TileColor" content="#006157" />
        <meta name="theme-color" content="#006157"></meta>
      </Helmet>

      <ThemeProvider theme={theme} key={key}>
        <>
          <Document
            display={['block', 'block', 'grid']}
            gridTemplateColumns={`${rem(200)} 1fr`}
            role="document"
          >
            <Menu />
            <main id="main" role="main">
              {children}
            </main>
            <Footer gridColumn={'2/3'} />
          </Document>
          <GlobalStyle />
        </>
      </ThemeProvider>
    </>
  )
}

export default Template
