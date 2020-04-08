import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { rem } from 'polished'

import Card from '../components/Card'
import ShowMore from '../components/ShowMore'

const Post = styled(Card)`
  position: relative;
  min-width: ${rem(320)};
  list-style-type: none;
  z-index: 1;

  &:not(:first-of-type) {
    margin-left: ${rem(-120)};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    min-width: 30vw;
  }

  .gatsby-image-wrapper {
    border-top-right-radius: ${rem(2)};
    border-top-left-radius: ${rem(2)};
  }
`

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`

const Excerpt = styled.div``

const WorkCard = ({ heroImage, title, publishDate, body, ...props }) => {
  return (
    <Post as="li" my={0} mr={3} p={0} featured={props.featured}>
      <Img fluid={heroImage.fluid} backgroundColor={'#eeeeee'} />
      <Title>{title}</Title>

      <ShowMore>
        <Excerpt
          dangerouslySetInnerHTML={{
            __html: body.childMarkdownRemark.html,
          }}
        />
      </ShowMore>
    </Post>
  )
}

export default WorkCard
