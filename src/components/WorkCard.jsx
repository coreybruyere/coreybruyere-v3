import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Post = styled.li`
  position: relative;
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
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
    <Post featured={props.featured}>
      <Img fluid={heroImage.fluid} backgroundColor={'#eeeeee'} />
      <Title>{title}</Title>
      <Excerpt
        dangerouslySetInnerHTML={{
          __html: body.childMarkdownRemark.excerpt,
        }}
      />
    </Post>
  )
}

export default WorkCard
