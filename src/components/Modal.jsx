import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { rem } from 'polished'
import { DialogContent, DialogOverlay } from '@reach/dialog'
import { Box } from 'rebass'

const MASK_OVERLAY_SPACE = 32
const DEFAULT_MODAL_WIDTH = 480

const appear = keyframes`
    from {
        transform: translate(-50%, calc(-50% + ${rem(MASK_OVERLAY_SPACE)}));
        opacity: 0;
    } to {
        transform: translate(-50%, -50%);
        opacity: 1;
    }
`

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
`

const Mask = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.3s ease;
`

const ModalCard = styled(DialogContent)`
  position: fixed;
  top: 40%;
  left: 50%;
  width: calc(100% - ${rem(MASK_OVERLAY_SPACE)});
  max-width: ${props =>
    props.maxwidth ? rem(props.maxwidth) : rem(DEFAULT_MODAL_WIDTH)};
  max-height: calc(100vh - ${rem(MASK_OVERLAY_SPACE)});
  background-color: ${({ theme }) => theme.colors.card};
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  animation: ${appear} 0.3s ease;
  animation-fill-mode: forwards;
  opacity: 0;
  outline: none;
`

const Modal = props => {
  const { open, onClose, width, children, closeOnEsc, label, ...other } = props
  return (
    <Mask isOpen={open} onDismiss={onClose} {...other}>
      <ModalCard maxwidth={width} aria-label={label}>
        <Box p={3}>{children} </Box>
      </ModalCard>
    </Mask>
  )
}

Modal.defaultProps = {
  open: false,
  closeOnEsc: true,
}

export default Modal
