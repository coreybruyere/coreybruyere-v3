import React from 'react'
import styled from '@emotion/styled'
import { Flex, Box } from 'rebass'
import { rem } from 'polished'

import ShowMore from '../components/ShowMore'

const Scroll = styled(Box)`
  overflow-x: auto;
`

const List = styled(Flex)``

const WorkCardList = ({ children, ...other }) => {
  return (
    <Scroll {...other}>
      <List as="ul">{children}</List>
    </Scroll>
  )
}

WorkCardList.defaultProps = {
  py: rem(2),
  ml: [0, rem(-192)],
  pl: [0, rem(192)],
}

export default WorkCardList
