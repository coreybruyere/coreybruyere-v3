import React from 'react'
import { Box, Flex, Text } from 'rebass'
import { Link } from 'gatsby'

import BareList from './BareList'

const TagList = ({ tags }) => {
  return (
    <Flex alignItems="center" mb={4}>
      <Text mr={3} id={`tag-list-heading`} as={`b`}>
        Tags:
      </Text>
      <BareList aria-labelledby={`tag-list-heading`} isFlex>
        {tags.map(tag => (
          <Box as="li" mr={2} key={tag.id}>
            <Box as={Link} to={`/tag/${tag.slug}/`}>
              {tag.title}
            </Box>
          </Box>
        ))}
      </BareList>
    </Flex>
  )
}

export default TagList
