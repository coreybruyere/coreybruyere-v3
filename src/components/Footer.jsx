import React from 'react'
import styled from '@emotion/styled'
import { rem } from 'polished'
import { Flex, Text } from 'rebass'

import Grid from '../components/Grid'
import config from '../utils/siteConfig'

const Wrapper = styled(Grid)`
  max-width: ${props => props.theme.sizes.maxWidth};
`

const Logo = styled.a`
  display: block;
  width: ${rem(40)};
  > svg {
    display: block;
    fill: currentColor;
  }
`

const Item = styled.li``

const Footer = ({ ...props }) => (
  <Wrapper
    py={3}
    px={[4, 4, 3]}
    display="grid"
    as="footer"
    role="contentinfo"
    {...props}
  >
    <Flex justifyContent="flex-end" alignItems="center">
      <Text as="small" pr={3}>
        © Copyright {new Date().getFullYear()} {config.siteTitle}
      </Text>
      <Logo aria-label="Site logo" href="/">
        <svg viewBox="0 0 25 25">
          <path d="M22.624 0H2.377C1.047 0 0 1.046 0 2.376v20.152c0 1.33 1.047 2.376 2.377 2.376H22.53c1.33 0 2.375-1.046 2.375-2.376V2.376C25 1.046 23.86 0 22.625 0zM2.186 13.498v-1.616l9.886-4.278-.665 2.376-6.37 2.662 5.134 1.9-.474 1.807-7.51-2.853zm20.628.76l-10.836 4.754H9.792L13.31 5.894h2.185l-2.852 10.74 7.224-3.04-5.133-1.902.475-1.806 7.508 2.947v1.426z"></path>
        </svg>
      </Logo>
    </Flex>
  </Wrapper>
)

export default Footer
