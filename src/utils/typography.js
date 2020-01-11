import Typography from 'typography'
import sutroTheme from 'typography-theme-sutro'

sutroTheme.overrideThemeStyles = () => ({}.includeNormalize)

const typography = new Typography(sutroTheme)
// Insert styles directly into the <head>
typography.injectStyles()

export const { scale, rhythm, options } = typography
export default typography

// Get rid of typography js and look for something more suitable for themeing. Or just include fonts myself
