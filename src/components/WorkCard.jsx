import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import Img from 'gatsby-image'
import { rem } from 'polished'
import { Box, Text } from 'rebass'

import Card from '../components/Card'
import ShowMore from '../components/ShowMore'

const Post = styled(Card)`
  position: relative;
  min-width: ${({ isExpanded, theme }) => (isExpanded ? '100vw' : '80vw')};
  list-style-type: none;
  z-index: 1;
  transform: ${({ isExpanded, theme }) =>
    isExpanded ? `translateY(-${theme.space[3]})` : null};

    ${({ isExpanded }) =>
      isExpanded &&
      `
        &:after {
          box-shadow: 0px 6px 15px 0px rgba(63, 63, 68, 0.25);
        }
    `}

  /* & + *:not(:last-of-type) {
    margin-left: ${({ isExpanded }) => (isExpanded ? rem(1) : rem(0))};
  } */


  /* @media only screen and (min-width: ${({ theme }) =>
    theme.breakpoints[1]}) {
    min-width: ${({ isExpanded, theme }) =>
      isExpanded ? theme.sizes.maxWidthCentered : `30vw`};
    /* max-width: ${rem(480)}; */
  } */

  .gatsby-image-wrapper {
    border-top-right-radius: ${rem(2)};
    border-top-left-radius: ${rem(2)};
  }
`

const Title = styled(Text)`
  text-transform: capitalize;
`

const WorkCard = ({ heroImage, title, publishDate, body, ...props }) => {
  const theme = useTheme()
  // Bring this higher up to WorkCard list to manage state there so that I'm able to manage closing of all items.
  const [isExpanded, setIsExpanded] = useState(false)
  const handleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  // Place handler here to expand card. Pass handler down to ShowMore component
  return (
    <Post
      as="li"
      my={0}
      mr={4}
      p={0}
      pb={3}
      isExpanded={isExpanded}
      featured={props.featured}
    >
      <Img fluid={heroImage.fluid} backgroundColor={theme.colors.muted} />

      <Title as="h2" fontSize={4} mb={0} mt={1} px={3}>
        {title}
      </Title>

      <ShowMore px={3} parentId="js-work-scroll" handleClick={handleExpand}>
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
