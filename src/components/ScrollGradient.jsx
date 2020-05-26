import React from 'react'
import styled from '@emotion/styled'
import { rem } from 'polished'
import { useUID } from 'react-uid'

const GRADIENT_HEIGHT = 32

const Rect = styled.rect`
  fill: url(#${({ id }) => id});
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`

const Svg = styled.svg`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`

const ScrollGradient = ({ gradientFill, width, height, rotate, ...rest }) => {
  const uid = useUID()
  return (
    <Svg
      version="1.1"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <defs>
        <linearGradient id={uid} gradientTransform={`rotate(${rotate})`}>
          <stop offset="0%" stopColor={gradientFill} stopOpacity="0" />
          <stop offset="50%" stopColor={gradientFill} stopOpacity="0.5" />
          <stop offset="100%" stopColor={gradientFill} stopOpacity="1.0" />
        </linearGradient>
      </defs>
      <Rect id={uid} width={width} height={height} />
    </Svg>
  )
}

export default ScrollGradient
