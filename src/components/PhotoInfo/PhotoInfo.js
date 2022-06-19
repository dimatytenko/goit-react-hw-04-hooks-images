import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Status } from '../../constants';
import { PhotoInfoBox } from './Photoinfo.styled';
import { LoaderBox } from '../Loader/Loader.styled';
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
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (value === '') {
      return;
    }
    setStatus(Status.PENDING);
    updateState();
    requestPhotos(value, page);
    // scrollToBottom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    if (page === 1) {
      return;
    }
    setStatus(Status.PENDING);

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
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  };

  const updateState = () => {
    setPhotos([]);
    setPage(1);
  };

  const handleButtonClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  if (status === Status.IDLE) {
    return (
      <PhotoInfoBox>
        <Background />
      </PhotoInfoBox>
    );
  }

  if (status === Status.PENDING) {
    return (
      <LoaderBox>
        <Loader />;
      </LoaderBox>
    );
  }
  if (status === Status.REJECTED) {
    return <PhotoInfoBox>{<NotFound error={error.message} />}</PhotoInfoBox>;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <ImageGallery photos={photos} />
        <PhotoInfoBox>
          {photos.length > 0 && <Button onClick={handleButtonClick} />}
        </PhotoInfoBox>
      </>
    );
  }
}

PhotoInfo.propTypes = {
  value: PropTypes.string,
};
