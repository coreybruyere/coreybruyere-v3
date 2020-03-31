import React from 'react'
import styled from 'styled-components'

import Grid from '../components/Grid'

const Body = styled(Grid)`
  margin-right: auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`

const PageBody = props => {
  return (
    <Body
      gridColumn={'1 / span 8'}
      dangerouslySetInnerHTML={{
        __html: props.body.childMarkdownRemark.html,
      }}
    />
  )
}

export default PageBody
