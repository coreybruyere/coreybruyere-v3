import React from 'react'
import { Match } from '@reach/router'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Flex, Box, Text } from 'rebass'
import { rem } from 'polished'
// import { useTheme } from 'emotion-theming'

import { useThemeMode } from '../hooks/useThemeMode'
import { bareButtonSxStyle } from '../styles/styledHelpers'
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
  font-weight: 800;
  line-height: 1.5;

  a {
    text-transform: uppercase;
    text-decoration: none;
  }

  svg {
    fill: currentColor;
  }
`

const Column = styled(Flex)`
  height: 100%;
`

const ThemeToggle = styled(Flex)`
  height: ${rem(40)};
  width: ${rem(40)};
  min-width: ${rem(40)};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.backgroundOpposite};
  color: ${({ theme }) => theme.colors.textOpposite};

  > svg {
    fill: currentColor;
  }
`

ThemeToggle.defaultProps = { sx: bareButtonSxStyle }

const VisuallyHidden = styled(Box)`
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap; /* added line */
`

const Menu = () => {
  const { theme, darkMode } = useThemeMode()
  const activeStyle = { marginLeft: rem(-20), marginRight: theme.space.xs }

  const primaryNavigation = [
    { link: '/', text: 'Home' },
    { link: '/about/', text: 'About' },
    { link: '/contact/', text: 'Contact' },
  ]

  function ListItemLink({ to, children }) {
    return (
      <Match path={to}>
        {({ match }) => (
          <Text as="li" pr={[3, 3, 0]}>
            <Link to={to}>
              <Flex alignItems="center" justifyContent={['flex-start']}>
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
      zIndex={1000}
      role="banner"
    >
      <Column
        flexDirection={['row', 'row', 'column']}
        justifyContent="space-between"
        alignContent="flex-start"
        alignItems={['flex-start', 'flex-start', 'flex-end']}
        py={3}
        px={[4, 4, 3]}
      >
        <Nav
          as="nav"
          py={[0, 0, 5]}
          width={['auto', 'auto', 1]}
          role="navigation"
        >
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
          as={Button}
          aria-pressed={darkMode.value}
          onClick={darkMode.toggle}
          justifyContent="center"
          alignItems="center"
          alignSelf="flex-start"
          isSmall
        >
          <VisuallyHidden>
            {darkMode.value ? 'switch to light mode' : 'switch to dark mode'}
          </VisuallyHidden>
          {darkMode.value ? <Sun /> : <Moon />}
        </ThemeToggle>
      </Column>
    </Header>
  )
}

export default Menu
