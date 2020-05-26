import React from 'react'
import { Box } from 'rebass'
import styled from '@emotion/styled'

const Publish = styled(Box)`
  display: block;
  font-style: italic;
`

const PostDetails = ({ date, timeToRead }) => {
  return (
    <>
      <Publish as="small" mb={4}>
        <time>{date}</time>
      </Publish>
      {/* <span>•</span>t */}
      {/* <ReadingTime>{`⏱️${props.timeToRead} min read `}</ReadingTime> */}
    </>
  )
}

export default PostDetails
