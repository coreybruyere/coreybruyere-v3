/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import { css, keyframes, jsx } from '@emotion/core'
import { rem } from 'polished'
import {
  DialogDisclosure,
  useDialogState,
  DialogBackdrop,
  Dialog as ReakitDialog,
} from 'reakit/Dialog'

export function useModalState(options) {
  return useDialogState({ animated: true, ...options })
}

export const cardStyle = css`
  box-sizing: border-box;
`

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

const Mask = styled(DialogBackdrop)`
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
  z-index: 99;
`

const ModalCard = styled(ReakitDialog)`
  ${cardStyle};
  position: fixed;
  top: 50%;
  left: 50%;
  width: calc(100% - ${rem(MASK_OVERLAY_SPACE)});
  max-width: ${props =>
    props.maxwidth ? rem(props.maxwidth) : rem(DEFAULT_MODAL_WIDTH)};
  max-height: calc(100vh - ${rem(MASK_OVERLAY_SPACE)});
  overflow: unset;
  animation: ${appear} 0.3s ease;
  animation-fill-mode: forwards;
  opacity: 0;
  outline: none;
`

const Modal = props => {
  const {
    ariaLabel,
    children,
    hide,
    hideOnClickOutside = true,
    onClose,
    ...other
  } = props

  function closeModal() {
    if (onClose) onClose()
    hide()
  }
  return (
    <Mask {...other} hideOnClickOutside={hideOnClickOutside}>
      <ModalCard
        aria-label={ariaLabel}
        hide={closeModal}
        hideOnClickOutside={hideOnClickOutside}
        {...other}
      >
        {children}
      </ModalCard>
    </Mask>
  )
}

Modal.defaultProps = {
  open: false,
  closeOnEsc: true,
}

Modal.Trigger = DialogDisclosure
export default Modal
