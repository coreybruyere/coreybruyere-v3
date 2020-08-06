import styled from '@emotion/styled'

const Test = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundOpposite};
`

Test.defaultProps = {
  mb: 4,
  p: 3,
}

export default Test
