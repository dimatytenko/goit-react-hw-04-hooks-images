import React from 'react';
import PropTypes from 'prop-types';

import { GalleryItem, GalleryImage } from '../ImageGallery/ImageGalery.styled';

function ImageGalleryItem({ webformatURL, alt, onClick }) {
  return (
    <>
      <GalleryItem>
        <GalleryImage src={webformatURL} alt={alt} onClick={onClick} />
      </GalleryItem>
    </>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func,
};

export default ImageGalleryItem;
