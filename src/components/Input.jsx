import { Box } from 'rebass'
import styled from '@emotion/styled'
import { rem, lighten } from 'polished'

const Input = styled(Box)`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.125) 0 0 ${rem(4)};

  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondary};
  border: ${rem(2)} solid ${({ theme }) =>
  lighten(0.2, theme.colors.secondary)};
  border-radius: ${({ theme }) => theme.space[1]};
  cursor: pointer;

  &:disabled {
    border-color: transparent;
    background-color: ${({ theme }) => theme.colors.muted};
  }





  /* &[readonly] {
    background-color: ${({ theme }) => theme.colors.base[1]};
    border-color: ${({ theme }) => theme.colors.primaryBorder};
  } */
`

Input.defaultProps = {
  p: 3,
  as: 'input',
}

export default Input
