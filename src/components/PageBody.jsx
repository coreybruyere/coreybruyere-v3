import React from 'react'
import styled from '@emotion/styled'

import Grid from '../components/Grid'

const Body = styled(Grid)`
  margin-right: auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`

const PageBody = (props, ...rest) => {
  return (
    <Body
      gridColumn={'1 / span 8'}
      className="s-page-body"
      mb={4}
      pb={4}
      dangerouslySetInnerHTML={{
        __html: props.body.childMarkdownRemark.html,
      }}
    />
  )
}

export default PageBody
