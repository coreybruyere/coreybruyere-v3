import useDarkMode from 'use-dark-mode'
import { theme, lightColors, darkColors } from '../styles/theme'

const lightTheme = { ...theme, colors: { ...lightColors } }
const darkTheme = { ...theme, colors: { ...darkColors } }

export function useThemeMode() {
  const darkMode = useDarkMode()

  return {
    theme: darkMode.value ? darkTheme : lightTheme,
    darkMode,
  }
}
