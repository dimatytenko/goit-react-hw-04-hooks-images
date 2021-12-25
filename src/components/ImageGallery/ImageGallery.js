import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './ImageGallery.module.css';
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
    <div>
      <ul className={styles.ImageGallery}>
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
      </ul>
      {showModal && (
        <Modal infoModal={{ srcModal, altModal }} onClose={toggleModal} />
      )}
    </div>
  );
}

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
};
