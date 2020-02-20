import React from 'react'
import { Match } from '@reach/router'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Flex, Box, Text } from 'rebass/styled-components'
import { rem, rgba } from 'polished'

import { useTheme } from '../context/theme-context'
import { darkColors, lightColors } from '../styles/theme'
import { bareButtonStyle } from '../styles/styledHelpers'
import BareList from './BareList'
import Button from './Button'
import Position from './Position'

import Moon from '../../assets/moon.svg'
import Sun from '../../assets/sun.svg'
import ArrowRight from '../../assets/arrowRight.svg'

const Header = styled(Position)`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    height: 100vh;
  }
`

const Nav = styled(Box)`
  width: 100%;
  background-color: ${({ theme }) => rgba(theme.colors.background, 0.8)};
  font-weight: 800;

  a {
    text-decoration-color: ${({ theme }) => theme.colors.secondary};
  }

  svg {
    fill: currentColor;
  }
`

const Column = styled(Flex)`
  height: 100%;
`

const ThemeToggle = styled(Button).attrs(() => ({
  isSmall: true,
}))`
  ${bareButtonStyle}
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${rem(40)};
  width: ${rem(40)};
  border-radius: 50%;
  ${({ isDefaultTheme }) =>
    `background-color: ${
      isDefaultTheme ? darkColors.background : lightColors.background
    }; color: ${isDefaultTheme ? darkColors.text : lightColors.text};`}

  > svg {
    fill: currentColor;
  }
`

const Menu = () => {
  const { theme, mode, toggleTheme } = useTheme()
  const activeStyle = { marginRight: theme.space.base }

  const primaryNavigation = [
    { link: '/', text: 'Home' },
    { link: '/about/', text: 'About' },
    { link: '/contact/', text: 'Contact' },
  ]

  function ListItemLink({ to, children }) {
    return (
      <Match path={to}>
        {({ match }) => (
          <Text as="li" pr={[3, 3, 0]} textAlign="right">
            <Link to={to}>
              <Flex alignItems="center" justifyContent="flex-start">
                {match && <ArrowRight style={activeStyle} />}
                {children}
              </Flex>
            </Link>
          </Text>
        )}
      </Match>
    )
  }

  return (
    <Header
      as="header"
      position={['static', 'static', 'sticky']}
      top={0}
      left={[0, 0, 0, 0, 0, 'auto']}
      right={['auto', 'auto', 'auto', 'auto', 'auto', 0]}
      zIndex={100}
      role="banner"
    >
      <Column
        flexDirection={['row', 'row', 'column']}
        justifyContent="space-between"
        alignContent="flex-start"
        alignItems={'flex-start'}
        p={3}
      >
        <Nav as="nav" mt={[0, 0, 3]} py={[0, 0, 4]} role="navigation">
          <BareList>
            {primaryNavigation.map(({ link, text }) => {
              return (
                <ListItemLink key={text} to={link}>
                  {text}
                </ListItemLink>
              )
            })}
          </BareList>
        </Nav>

        <ThemeToggle
          aria-pressed={mode === 'dark'}
          isDefaultTheme={mode === 'light'}
          onClick={toggleTheme}
        >
          {mode === 'light' ? <Moon /> : <Sun />}
        </ThemeToggle>
      </Column>
    </Header>
  )
}

export default Menu
