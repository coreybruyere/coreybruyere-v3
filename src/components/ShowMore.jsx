import React, { useState, useRef } from 'react'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import { Button, Box } from 'rebass'
import { rem } from 'polished'

import ScrollGradient from './ScrollGradient'

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
  clampSize = 2,
  isOpen = false,
  ...rest
}) => {
  const [isClampOpen, setIsClampOpen] = useState(false)
  const theme = useTheme()
  const showMoreRef = useRef(null)

  const handleToggle = () => {
    setIsClampOpen(!isClampOpen)
    // TODO: Bring in use effect
    //stackoverflow.com/questions/55565444/how-to-register-event-with-useeffect-hooks

    https: console.log(
      `scroll from top ${window.pageYOffset ||
        document.documentElement.scrollTop}`
    )

    console.log(showMoreRef.current.closest('.clamp-box'))

    console.log(
      `ref height: ${showMoreRef.current.closest('.clamp-box').offsetHeight}`
    )

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
  }

  return (
    <Box className="clamp-box" {...rest}>
      <Clamp
        ref={showMoreRef}
        mb={0}
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
        <Button onClick={handleToggle}>Collapse</Button>
      ) : (
        <Button onClick={handleToggle}>Show More</Button>
      )}
    </Box>
  )
}

export default ShowMore
