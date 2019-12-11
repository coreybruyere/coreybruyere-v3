import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Box } from 'rebass'

import Position from './Position'

const Header = styled(Position)``
const Nav = styled.nav`
  /* width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em; */

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.base};
    &:hover {
      color: white;
    }
  }
`

const activeLinkStyle = {
  color: 'white',
}

const Menu = () => {
  return (
    <Position
      position="sticky"
      width={'10vw'}
      color="red"
      top={0}
      left={[0, 0, 0, 0, 0, 'auto']}
      right={['auto', 'auto', 'auto', 'auto', 'auto', 0]}
      as="header"
    >
      <Box width="40px">hi</Box>
      <Nav>
        <ul>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>
              Contact
            </Link>
          </li>
        </ul>
      </Nav>
    </Position>
  )
}

export default Menu
