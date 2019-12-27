export const breakpoints = ['42em', '56em', '68em', '80em', '125em'] // 672, 896, 1088, 1184, 2000

export const sizes = {
  sizes: {
    maxWidth: '92rem',
    maxWidthCentered: '650px',
  },
}

export const responsive = {
  small: '35em',
  medium: '50em',
  large: '70em',
}

export const lightTheme = {
  breakpoints,
  colors: {
    text: '#515554', // Dark Gray
    background: '#f9f9f9', // Offwhite
    primary: '#009688', // Teal
    secondary: '#ca5000', // Orange
    muted: '#f1f1f1', // Light Gray
  },
  sizes,
  responsive,
}

export const darkTheme = {
  breakpoints,
  colors: {
    text: '#f9f9f9', // Dark Gray
    background: '#515554', // Offwhite
    primary: '#009688', // Teal
    secondary: '#ca5000', // Orange
    muted: '#f1f1f1', // Light Gray
  },
  sizes,
  responsive,
}
