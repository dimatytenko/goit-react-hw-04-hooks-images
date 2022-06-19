import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Galary } from './ImageGalery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Modal from 'components/Modal';

export default function ImageGallery({ photos }) {
  const [showModal, setShowModal] = useState(false);
  const [srcModal, setSrcModal] = useState('');
  const [altModal, setAltModal] = useState('');

  const toggleModal = () => setShowModal(!showModal);

  const openModalByClick = (src, alt) => {
    setSrcModal(src);
    setAltModal(alt);

    toggleModal();
  };
  return (
    <>
      <Galary>
        {photos.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            alt={tags}
            onClick={() => {
              openModalByClick(largeImageURL, tags);
            }}
          />
        ))}
      </Galary>
      {showModal && (
        <Modal infoModal={{ srcModal, altModal }} onClose={toggleModal} />
      )}
    </>
  );
}

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
};
