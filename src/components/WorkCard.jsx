import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { rem } from 'polished'

import Card from '../components/Card'

const Post = styled(Card)`
  position: relative;
  min-width: ${rem(280)};
  list-style-type: none;
`

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`

const Excerpt = styled.p`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
`

const WorkCard = ({ heroImage, title, publishDate, body, ...props }) => {
  return (
    <Post as="li" featured={props.featured}>
      <Img fluid={heroImage.fluid} backgroundColor={'#eeeeee'} />
      <Title>{title}</Title>
      {console.log(body.childMarkdownRemark.html)}
      <Excerpt
        dangerouslySetInnerHTML={{
          __html: body.childMarkdownRemark.html,
        }}
      />
    </Post>
  )
}

export default WorkCard
