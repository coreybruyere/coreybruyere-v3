import React, { useState } from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { rem } from 'polished'
import { Box } from 'rebass'

import Card from '../components/Card'
import ShowMore from '../components/ShowMore'

const Post = styled(Card)`
  position: relative;
  min-width: ${({ isExpanded, theme }) =>
    isExpanded ? theme.sizes.maxWidthCentered : rem(320)};
  list-style-type: none;
  z-index: 1;
  transform: ${({ isExpanded, theme }) =>
    isExpanded ? `translateY(-${theme.space[3]})` : null};

  & + *:not(:last-of-type) {
    margin-left: ${({ isExpanded }) => (isExpanded ? rem(1) : rem(-120))};
  }

  &:first-of-type {
    margin-left: 0;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    min-width: ${({ isExpanded, theme }) =>
      isExpanded ? theme.sizes.maxWidthCentered : `30vw`};
    /* max-width: ${rem(480)}; */
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

const WorkCard = ({ heroImage, title, publishDate, body, ...props }) => {
  // Bring this higher up to WorkCard list to manage state there so that I'm able to manage closing of all items.
  const [isExpanded, setIsExpanded] = useState(false)
  const handleExpand = () => {
    console.log('expando')
    setIsExpanded(!isExpanded)
  }
  // Place handler here to expand card. Pass handler down to ShowMore component
  return (
    <Post
      as="li"
      my={0}
      mr={3}
      p={0}
      pb={3}
      isExpanded={isExpanded}
      featured={props.featured}
    >
      <Img fluid={heroImage.fluid} backgroundColor={'#eeeeee'} />
      <Title>{title}</Title>

      <ShowMore px={3} handleClick={handleExpand}>
        <Box
          dangerouslySetInnerHTML={{
            __html: body.childMarkdownRemark.html,
          }}
        />
      </ShowMore>
    </Post>
  )
}

export default WorkCard
