import { rem } from 'polished'

export const breakpoints = ['42em', '56em', '68em', '80em', '125em'] // 672, 896, 1088, 1184, 2000

export const sizes = {
  maxWidth: '92rem',
  maxWidthCentered: '650px',
}

export const responsive = {
  small: '35em',
  medium: '50em',
  large: '70em',
}

export const space = [
  0,
  rem(4),
  rem(8),
  rem(16),
  rem(32),
  rem(64),
  rem(128),
  rem(256),
]

export const lightColors = {
  text: '#515554', // Dark Gray
  background: '#f9f9f9', // Offwhite
  cardBackground: '#ffffff', // White
  primary: '#009688', // Teal
  secondary: '#ca5000', // Orange
  muted: '#f1f1f1', // Light Gray
}

export const darkColors = {
  text: '#f9f9f9', // Dark Gray
  background: '#515554', // Offwhite
  cardBackground: '#000000', // Black
  primary: '#009688', // Teal
  secondary: '#ca5000', // Orange
  muted: '#f1f1f1', // Light Gray
}

// Light and dark theme colors are merged in theme-context.jsx
export const theme = {
  breakpoints,
  sizes,
  space: {
    ...space,
    nil: space[0],
    xs: space[1],
    base: space[2],
    med: space[3],
    lg: space[4],
    xl: space[5],
  },
  responsive,
}
