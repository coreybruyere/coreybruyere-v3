import styled from 'styled-components'
import { position } from 'styled-system'
import { Box } from 'rebass/styled-components'

const Position = styled(Box)(position, {})

Position.propTypes = {
  ...position.propTypes,
}

export default Position
