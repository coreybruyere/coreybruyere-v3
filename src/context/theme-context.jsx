import React, { useState, useContext, useCallback, createContext } from 'react'
import {
  ThemeProvider as BaseThemeProvider,
  ThemeContext as BaseThemeContext,
} from 'styled-components'

import { theme, lightColors, darkColors } from '../styles/theme'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themeString, setThemeString] = useState('light')
  const lightTheme = { ...theme, colors: { ...lightColors } }
  const darkTheme = { ...theme, colors: { ...darkColors } }
  const themeObject = themeString === 'dark' ? darkTheme : lightTheme
  return (
    <ThemeContext.Provider value={{ themeString, setThemeString }}>
      <BaseThemeProvider theme={themeObject}>{children}</BaseThemeProvider>
    </ThemeContext.Provider>
  )
}

function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within a ThemeProvider')
  const { themeString, setThemeString } = context
  const toggleTheme = useCallback(() => {
    if (themeString === 'light') setThemeString('dark')
    else if (themeString === 'dark') setThemeString('light')
  }, [themeString])
  return {
    mode: themeString,
    toggleTheme,
    theme: useContext(BaseThemeContext),
  }
}

export { ThemeProvider, useTheme }
