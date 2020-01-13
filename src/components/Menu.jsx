import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Flex, Box } from 'rebass/styled-components'
import { rgba } from 'polished'

import { useTheme } from '../context/theme-context'
import BareList from './BareList'
import Button from './Button'
import Position from './Position'
import Container from './Container'

const Header = styled(Position)``
const Nav = styled(Box)`
  background-color: ${({ theme }) => rgba(theme.colors.background, 0.8)};
  font-family: 'Open Sans', sans-serif;
`

const Menu = () => {
  const { theme, mode, toggleTheme } = useTheme()
  const activeStyle = { color: theme.colors.primary }
  return (
    <Header
      as="header"
      position="sticky"
      top={0}
      left={[0, 0, 0, 0, 0, 'auto']}
      right={['auto', 'auto', 'auto', 'auto', 'auto', 0]}
      zIndex={100}
    >
      <Container p={3}>
        <Flex justifyContent="space-between" alignContent="center">
          <Nav as="nav" mt={-3} ml={-3} p={3} pb={0}>
            <BareList isFlex>
              <li>
                <Link to="/" activeStyle={activeStyle}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about/" activeStyle={activeStyle}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact/" activeStyle={activeStyle}>
                  Contact
                </Link>
              </li>
            </BareList>
          </Nav>

          <Box>
            <Button
              aria-pressed={mode === 'dark'}
              isSmall
              onClick={toggleTheme}
            >
              {mode === 'light' ? 'Dark' : 'Light'}
            </Button>
          </Box>
        </Flex>
      </Container>
    </Header>
  )
}

export default Menu
