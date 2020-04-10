import React from 'react'
import styled from '@emotion/styled'
import { Flex, Box } from 'rebass'
import { rem } from 'polished'
import { useTheme } from 'emotion-theming'

import ScrollGradient from '../components/ScrollGradient'

const Wrap = styled(Box)`
  position: relative;
`

const Scroll = styled(Box)`
  overflow-x: auto;
`

const GradientStart = styled(ScrollGradient)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`

const GradientEnd = styled(ScrollGradient)`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`

const List = styled(Flex)``

const BlankItem = styled(Box)`
  list-style-type: none;
`

const WorkCardList = ({ children, ...other }) => {
  const theme = useTheme()
  return (
    <Wrap {...other}>
      <Scroll>
        <GradientStart
          width={'32px'}
          height={'100%'}
          rotate={180}
          gradientFill={'red'}
        />
        <List as="ul">
          {children}
          <BlankItem as="li" ml={4} aria-hidden="true">
            &nbsp;
          </BlankItem>
        </List>

        <GradientEnd
          width={'32px'}
          height={'100%'}
          rotate={0}
          gradientFill={theme.colors.background}
        />
      </Scroll>
    </Wrap>
  )
}

WorkCardList.defaultProps = {
  py: rem(2),
  ml: [0, rem(-192)],
  pl: [0, rem(192)],
}

export default WorkCardList
