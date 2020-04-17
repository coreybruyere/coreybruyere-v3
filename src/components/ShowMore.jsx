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

  // CHANGE USE EFFECT TO LOOK FOR STATE UPDATE ON isClampOpen so that whenever state is modified it jumps to the bottom of the UL instead of looking for the individual list items height (that is unknown until rerender).
  useEffect(() => {
    // The amount scrolled from the top
    console.log(
      `SCROLL FROM TOP OF BODY: ${window.pageYOffset ||
        document.documentElement.scrollTop}`
    )

    // Log parent surrounding box
    // console.log(showMoreRef.current.closest('.clamp-box'))

    // Parent surrounding box height
    console.log(
      `CLAMP BOX HEIGHT: ${
        showMoreRef.current.closest('.clamp-box').offsetHeight
      }`
    )

    console.log('↓↓↓ SCROLLTOP + CLAMP BOX HEIGHT ↓↓↓')

    console.log(
      (window.pageYOffset || document.documentElement.scrollTop) +
        showMoreRef.current.closest('.clamp-box').offsetHeight
    )

    /**
     * Important to keep a parent div or Box surround Clamp and Button to grab parent height
     */
    typeof window !== 'undefined'
      ? window.scrollTo(
          0,
          (window.pageYOffset || document.documentElement.scrollTop) +
            showMoreRef.current.closest('.clamp-box').offsetHeight
        )
      : null
  }, [isClampOpen])

  const handleToggle = () => {
    setIsClampOpen(!isClampOpen)
    handleClick()
    // TODO: Bring in use effect
    //stackoverflow.com/questions/55565444/how-to-register-event-with-useeffect-hooks
  }

  return (
    <Box className="clamp-box" {...rest}>
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
              gradientFill={gradientFill ? gradientFill : theme.colors.card}
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
