import React, { useState, useContext, useCallback, createContext } from 'react'
import { ThemeContext as BaseThemeContext } from '@emotion/core'
import { ThemeProvider as BaseThemeProvider } from 'emotion-theming'

import { theme, lightColors, darkColors } from '../styles/theme'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const storedThemeValue =
    typeof window !== 'undefined' ? localStorage.getItem('theme') : null

  console.log(`stored theme value from provider: ${storedThemeValue}`)

  const [themeString, setThemeString] = useState(storedThemeValue || 'light')
  const lightTheme = { ...theme, colors: { ...lightColors } }
  const darkTheme = { ...theme, colors: { ...darkColors } }
  const themeObject = themeString === 'light' ? lightTheme : darkTheme

  return (
    <ThemeContext.Provider value={{ themeString, setThemeString }}>
      <BaseThemeProvider theme={themeObject}>{children}</BaseThemeProvider>
    </ThemeContext.Provider>
  )
}

function useTheme() {
  const context = useContext(ThemeContext)
  console.log(`CONTEXT from useTheme: ${context}`)
  if (!context) throw new Error('useTheme must be used within a ThemeProvider')
  const { themeString, setThemeString } = context
  const toggleTheme = useCallback(() => {
    if (themeString === 'light') {
      console.log(`if themeString = light set storage dark`)

      window.localStorage.setItem('theme', 'dark')
      setThemeString('dark')
    } else if (themeString === 'dark') {
      console.log(`if themeString = dark set storage light`)
      window.localStorage.setItem('theme', 'light')
      setThemeString('light')
    }
  }, [themeString])
  return {
    mode: themeString,
    toggleTheme,
    theme: useContext(BaseThemeContext),
  }
}

export { ThemeProvider, useTheme }
