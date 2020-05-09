import React from 'react'
import { Flex, Box } from 'rebass'
import { Link } from 'gatsby'

import BareList from './BareList'

const PostPagination = ({ previous, next }) => {
  return (
    <>
      <hr />
      <Box as="nav" mb={4} role="navigation" aria-label="Pagination Navigation">
        <BareList mb={4} pt={2} isFlex>
          {previous && (
            <Box as="li">
              <Box as={Link} to={`/${previous.slug}/`}>
                <Box as="span" aria-hidden>
                  &#8592; &nbsp;
                </Box>
                Prev Post
              </Box>
            </Box>
          )}
          {next && (
            <Box as="li" ml={'auto'}>
              <Box as={Link} to={`/${next.slug}/`}>
                Next Post
                <Box as="span" aria-hidden>
                  &nbsp; &#8594;
                </Box>
              </Box>
            </Box>
          )}
        </BareList>
      </Box>
    </>
  )
}

export default PostPagination
