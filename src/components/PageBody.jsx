import React from 'react'
import { useTheme } from 'emotion-theming'

import Grid from '../components/Grid'

export const PageBodyWrap = ({ ...rest }) => {
  const theme = useTheme()

  return (
    <Grid
      gridColumn={'1 / span 8'}
      className="s-page-body"
      mb={4}
      pb={4}
      mr={'auto'}
      maxWidth={theme.sizes.maxWidthCentered}
      {...rest}
    />
  )
}

const PageBody = (props, ...rest) => {
  return (
    <PageBodyWrap
      dangerouslySetInnerHTML={{
        __html: props.body.childMarkdownRemark.html,
      }}
      {...rest}
    />
  )
}

export default PageBody
