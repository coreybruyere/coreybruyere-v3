import { rem, lighten } from 'polished'

export const breakpoints = ['42em', '56em', '68em', '80em', '125em'] // 672, 896, 1088, 1184, 2000

export const sizes = {
  maxWidth: '92rem',
  maxWidthCentered: '56rem',
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

export const fontSizes = [
  rem(12),
  rem(14),
  rem(16),
  rem(20),
  rem(24),
  rem(32),
  rem(42),
  rem(48),
]

export const lightColors = {
  text: '#515554', // Dark Gray
  background: '#f9f9f9', // Offwhite
  card: '#ffffff', // White
  primary: '#009688', // Teal
  secondary: '#ca5000', // Orange
  tertiary: '#F93140', // Red
  muted: '#f1f1f1', // Light Gray
}

export const darkColors = {
  text: '#f9f9f9', // Dark Gray
  background: '#1f1f1f', // Offwhite
  card: '#151515', // Light Black
  primary: lighten('.5', lightColors.primary), // Teal
  secondary: lighten('.25', lightColors.secondary), // Orange
  tertiary: '#F93140', // Red
  muted: '#f1f1f1', // Light Gray
}

// Light and dark theme colors are merged in theme-context.jsx
export const theme = {
  breakpoints,
  fontSizes,
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
