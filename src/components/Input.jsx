import { Box } from 'rebass'
import styled from '@emotion/styled'
import { rem } from 'polished'

const Input = styled(Box)`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.space[4]};
  box-shadow: rgba(0, 0, 0, 0.125) 0 0 ${rem(4)};
  background-color: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.secondary};
  border: ${rem(2)} solid ${({ theme }) => theme.colors.muted};
  border-radius: ${({ theme }) => theme.space[1]};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:enabled {
    &:not([type='submit']) {
      &:focus {
        border-color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  &:readonly {
    &:not([type='submit']) {
      background-color: ${({ theme }) => theme.colors.muted};
    }
  }
`

Input.defaultProps = {
  p: 3,
  as: 'input',
}

export default Input
