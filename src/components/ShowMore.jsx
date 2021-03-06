import React, { useState, useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import { Box } from 'rebass'

import ScrollGradient from './ScrollGradient'
import Button from './Button'

const Gradient = styled(ScrollGradient)`
  position: absolute;
  bottom: 0;
`

const Clamp = styled(Box)`
  position: relative;
  display: ${({ isClamped }) => (isClamped ? 'block' : '-webkit-box')};
  -webkit-line-clamp: ${({ isClamped, clampSize }) =>
    isClamped ? 'inherit' : clampSize};
  -webkit-box-orient: ${({ isClamped }) => (isClamped ? 'unset' : 'vertical')};
  overflow: hidden;
`

const ShowMore = ({
  children,
  gradientFill,
  parentId,
  handleClick,
  clampSize = 2,
  isOpen = false,
  ...rest
}) => {
  const [isClampOpen, setIsClampOpen] = useState(false)
  const { colors } = useTheme()
  const showMoreRef = useRef(null)
  const isInitialMountRef = useRef(false)

  /**
   * Check for state update on isClampOpen so that whenever state is modified it jumps to the bottom of the UL.
   */
  useEffect(() => {
    /**
     * Find a parent container with parentId to dictate how far window should scroll to come back down to bottom bounding box of parent container.
     * NOTE** Create a shouldScrollDown prop to disable/enable this functionality
     */
    if (typeof window !== 'undefined') {
      if (isInitialMountRef.current) {
        window.scrollTo({
          top:
            (window.pageYOffset || document.documentElement.scrollTop) +
            showMoreRef.current.closest(`#${parentId}`).offsetHeight,
          left: 0,
          behavior: 'smooth',
        })
      } else {
        isInitialMountRef.current = true
      }
    }
  }, [isClampOpen])

  const handleToggle = () => {
    setIsClampOpen(!isClampOpen)
    handleClick()
  }

  return (
    <Box {...rest}>
      <Clamp
        ref={showMoreRef}
        mb={2}
        clampSize={clampSize}
        isClamped={isClampOpen}
      >
        <>
          {children}
          {!isClampOpen && (
            <Gradient
              width={'100%'}
              height={32}
              rotate={90}
              gradientFill={gradientFill || colors.card}
            />
          )}
        </>
      </Clamp>

      {isClampOpen ? (
        <Button onClick={handleToggle} isSmall>
          Collapse
        </Button>
      ) : (
        <Button onClick={handleToggle} isSmall>
          Show More
        </Button>
      )}
    </Box>
  )
}

export default ShowMore
