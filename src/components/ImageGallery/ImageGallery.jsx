import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ openModal, images, getImageModal }) => {
  return (
    <ul className={s.gallery} onClick={openModal}>
      {images.map(image => {
        return <ImageGalleryItem image={image} onClick={getImageModal} key={image.id} />;
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
  openModal: PropTypes.func.isRequired,
  getImageModal: PropTypes.func,
};

export default ImageGallery;
