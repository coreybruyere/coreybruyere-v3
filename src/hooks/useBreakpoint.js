// import { useState, useEffect } from 'react'
// import throttle from 'lodash.throttle'
// import { em, getValueAndUnit, stripUnit } from 'polished'

// import { theme } from '../styles/theme'

// const unitLessPoints = theme.breakpoints.map(breakpoint => {
//   return stripUnit(breakpoint)
// })

// const convertedUnitless = unitLessPoints.map(breakpoint => {
//   return breakpoint * 16
// })

// const getDeviceConfig = width => {
//   if (width < convertedUnitless[0]) {
//     console.log(convertedUnitless[0])
//     return 'xs'
//   } else if (width > convertedUnitless[0] && width < convertedUnitless[1]) {
//     console.log(`0 < 1 : SM ${convertedUnitless[1]}`)
//     return 'sm'
//   } else if (width > convertedUnitless[1] && width < convertedUnitless[2]) {
//     console.log(`1 < 2 : MD ${convertedUnitless[2]}`)
//     return 'md'
//   } else if (width > convertedUnitless[2] && width < convertedUnitless[3]) {
//     console.log(`2 < 3 : LG ${convertedUnitless[3]}`)
//     return 'lg'
//   } else if (width > convertedUnitless[3] && width < convertedUnitless[4]) {
//     return 'xl'
//   } else if (width > convertedUnitless[4]) {
//     return 'jumbo'
//   }
// }

// const useBreakpoint = () => {
//   const [breakpoint, setBreakpoint] = useState(() =>
//     getDeviceConfig(window.innerWidth)
//   )

//   useEffect(() => {
//     const calcInnerWidth = throttle(function() {
//       setBreakpoint(getDeviceConfig(window.innerWidth))
//     }, 200)
//     window.addEventListener('resize', calcInnerWidth)
//     return () => window.removeEventListener('resize', calcInnerWidth)
//   }, [])

//   return breakpoint
// }
// export default useBreakpoint
