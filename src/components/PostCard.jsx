import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import { Link as BaseLink } from 'gatsby'

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

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;

  &:after {
    content: '(unread!)';
    color: hotpink;
    display: inline-block;
    font-size: 0.6em;
    margin-left: 0.5em;
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

const Date = styled.h3`
  margin: 0 1rem 0.5rem 1rem;
  color: gray;
`

const ReadingTime = styled.h4`
  margin: 0 1rem 1.5rem 1rem;
  color: gray;
`

const Excerpt = styled.p`
  margin: 0 1rem 1rem 1rem;
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
  return (
    <Post as="li" featured={props.featured}>
      <Link to={`/${slug}/`}>
        <Title>{title}</Title>
        <Date>{publishDate}</Date>
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
