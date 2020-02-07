import React from 'react'
import styled from 'styled-components'
import { Box } from 'rebass/styled-components'
import { rem } from 'polished'
import { Link as BaseLink } from 'gatsby'
import dayjs from 'dayjs'

import Card from '../components/Card'

const Post = styled(Card)`
  position: relative;
  width: 100%;
  list-style-type: none;
`

const Title = styled(({ ...props }) => <Box as="h2" {...props} />)`
  &:after {
    content: '(unread)';
    color: ${({ theme }) => theme.colors.primary};
    display: inline-block;
    font-style: italic;
    font-size: small;
    margin-left: ${({ theme }) => theme.space.base};
    vertical-align: middle;
  }
`

const Link = styled(BaseLink)`
  text-decoration: none;
  /* position: relative;
  z-index: 1; */

  &:before {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
  }

  &:hover,
  &:active {
    text-decoration: none;
    ${Title} {
      text-decoration: underline;
    }
  }

  &:visited {
    ${Title} {
      &:after {
        content: '';
        color: ${({ theme }) => theme.colors.card};
      }
    }
  }
`

const Time = styled(({ ...props }) => <Box as="time" {...props} />)`
  font-style: oblique;
  font-size: smaller;
`

// const ReadingTime = styled.h4`
//   color: gray;
// `

const Excerpt = styled.p`
  margin: ${({ theme }) => theme.space.base} 0;
`

const PostCard = ({
  slug,
  heroImage,
  title,
  publishDate,
  body,
  body: {
    childMarkdownRemark: { timeToRead },
  },
  ...props
}) => {
  const dateTime = dayjs(publishDate).format('YYYY-MM-DD')

  return (
    <Post as="li" isHoverable>
      <article>
        <header>
          <Time dateTime={dateTime}>{publishDate}</Time>
          <Link to={`/${slug}/`}>
            <Title>{title}</Title>
          </Link>

          {/* <ReadingTime>{timeToRead} min read</ReadingTime> */}
        </header>
        <Excerpt
          dangerouslySetInnerHTML={{
            __html: body.childMarkdownRemark.excerpt,
          }}
        />
      </article>
    </Post>
  )
}

export default PostCard
