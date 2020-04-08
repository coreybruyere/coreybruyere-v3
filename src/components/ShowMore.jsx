import React, { useState, useRef } from 'react'
import styled from '@emotion/styled'
import { Button, Box } from 'rebass'

const Clamp = styled(Box)`
  display: ${({ isClamped }) => (isClamped ? 'block' : '-webkit-box')};
  -webkit-line-clamp: ${({ isClamped }) => (isClamped ? 'inherit' : 3)};
  -webkit-box-orient: ${({ isClamped }) => (isClamped ? 'unset' : 'vertical')};
  overflow: hidden;
  line-height: 1.26; /* Hack to hide overflow */
`

const ShowMore = ({ children, isOpen = false }) => {
  const [isCollapsed, setIsCollapsed] = useState(isOpen)
  const showMoreRef = useRef(null)
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed)
    console.log(showMoreRef.current.scrollHeight)

    window.scrollTo(0, showMoreRef.current.scrollHeight)
  }

  return (
    <Box>
      <Clamp ref={showMoreRef} mb={isCollapsed ? 2 : 0} isClamped={isCollapsed}>
        {children}
      </Clamp>

      {isCollapsed ? (
        <Button onClick={handleToggle}>Collapse</Button>
      ) : (
        <Button onClick={handleToggle}>Show More</Button>
      )}
    </Box>
  )
}

export default ShowMore
