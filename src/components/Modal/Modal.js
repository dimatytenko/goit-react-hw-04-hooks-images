import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { ModalOverlay, ModalBox, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ infoModal, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = event => {
    console.log(event);
    if (event.code === 'Escape') {
      onClose();
    }
  };
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const { srcModal, altModal } = infoModal;

  return createPortal(
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalBox>
        <ModalImg src={srcModal} alt={altModal} />
      </ModalBox>
    </ModalOverlay>,
    modalRoot,
  );
}

Modal.propTypes = {
  onClose: PropTypes.func,
  infoModal: PropTypes.object,
};
