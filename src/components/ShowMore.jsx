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
  handleClick,
  clampSize = 2,
  isOpen = false,
  ...rest
}) => {
  const [isClampOpen, setIsClampOpen] = useState(false)
  const theme = useTheme()
  const showMoreRef = useRef(null)

  /**
   * Check for state update on isClampOpen so that whenever state is modified it jumps to the bottom of the UL.
   */
  useEffect(() => {
    /**
     * Important to keep a parent item (scroll container) to calculate the height of said parent container to know how far to scroll
     */
    // eslint-disable-next-line no-unused-expressions
    typeof window !== 'undefined'
      ? window.scrollTo(
          0,
          (window.pageYOffset || document.documentElement.scrollTop) +
            showMoreRef.current.closest('#js-work-scroll').offsetHeight
        )
      : null
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
              gradientFill={gradientFill || theme.colors.card}
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
