/** @jsx jsx */
import React, { useState, useContext, useCallback, createContext } from 'react'
import { ThemeProvider as BaseThemeProvider, jsx } from 'theme-ui'

import { theme } from '../styles/theme'

const ThemeProvider = ({ children }) => {
  return <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>
}

export { ThemeProvider }
