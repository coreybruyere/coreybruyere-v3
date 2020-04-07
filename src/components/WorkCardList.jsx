import React from 'react'
import styled from '@emotion/styled'
import { Flex } from 'rebass'
import { rem } from 'polished'

const List = styled(Flex)`
  overflow-x: auto;
`

const WorkCardList = ({ children, ...other }) => {
  return (
    <List as="ul" id="HELLO" {...other}>
      {children}
    </List>
  )
}

WorkCardList.defaultProps = {
  py: rem(2),
  ml: [0, rem(-192)],
  pl: [0, rem(192)],
}

export default WorkCardList
