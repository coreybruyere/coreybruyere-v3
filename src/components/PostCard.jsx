import React from 'react'
import styled from 'styled-components'
import { Box } from 'rebass'
import { rem } from 'polished'
import { Link as BaseLink } from 'gatsby'
import dayjs from 'dayjs'

import Card from '../components/Card'

const Post = styled(Card)`
  width: 100%;
  list-style-type: none;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 0 ${rem(1)} rgba(63, 63, 68, 0.05),
      0 ${rem(1)} ${rem(7)} 0 rgba(63, 63, 68, 0.15);
  }
`

const Title = styled(({ ...props }) => <Box my={2} as="h2" {...props} />)`
  &:after {
    content: '(unread)';
    color: ${({ theme }) => theme.colors.tertiary};
    display: inline-block;
    font-size: small;
    margin-left: ${({ theme }) => theme.space.base};
    vertical-align: middle;
  }
`

const Link = styled(BaseLink)`
  text-decoration: none;

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
        color: white;
      }
    }
  }
`

const Time = styled(({ ...props }) => <Box as="time" {...props} />)`
  color: gray;
`

const ReadingTime = styled.h4`
  color: gray;
`

const Excerpt = styled.p`
  line-height: 1.6;
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
    <Post as="li" featured={props.featured}>
      <Link to={`/${slug}/`}>
        <Title my={2}>{title}</Title>
        <Time dateTime={dateTime}>{publishDate}</Time>
        <ReadingTime>{timeToRead} min read</ReadingTime>
        <Excerpt
          dangerouslySetInnerHTML={{
            __html: body.childMarkdownRemark.excerpt,
          }}
        />
      </Link>
    </Post>
  )
}

export default PostCard
