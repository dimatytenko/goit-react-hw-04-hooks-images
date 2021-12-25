import React, { useState, useEffect } from 'react';
import styles from './PhotoInfo.module.css';
import PropTypes from 'prop-types';

import photosAPI from 'API/photos-api';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Background from 'components/Background';
import NotFound from 'components/NotFound';

import scroll from 'react-scroll';
const scrollToBottom = scroll.animateScroll.scrollToBottom;

export default function PhotoInfo({ value }) {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (value === '') {
      return;
    }
    setStatus('pending');
    updateState();
    requestPhotos(value, page);
    scrollToBottom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    if (page === 1) {
      return;
    }
    setStatus('pending');

    requestPhotos(value, page);
    scrollToBottom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const requestPhotos = (searchQuery, page) => {
    photosAPI
      .fetchPhotos(searchQuery, page)
      .then(fetchPhotos => {
        if (fetchPhotos.hits.length === 0) {
          return Promise.reject(new Error(`${searchQuery} nothing to display`));
        }
        setPhotos(prevPhotos => [...prevPhotos, ...fetchPhotos.hits]);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  };

  const updateState = () => {
    setPhotos([]);
    setPage(1);
  };

  const handleButtonClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  if (status === 'idle') {
    return (
      <div className={styles.Container}>
        <Background />
      </div>
    );
  }

  if (status === 'pending') {
    return (
      <div className={styles.Container}>
        <Loader />;
      </div>
    );
  }
  if (status === 'rejected') {
    return (
      <div className={styles.Container}>
        <NotFound error={error.message} />
      </div>
    );
  }

  if (status === 'resolved') {
    return (
      <>
        <ImageGallery photos={photos} />
        <div className={styles.Container}>
          {photos.length > 0 && <Button onClick={handleButtonClick} />}
        </div>
      </>
    );
  }
}

PhotoInfo.propTypes = {
  value: PropTypes.string,
};
