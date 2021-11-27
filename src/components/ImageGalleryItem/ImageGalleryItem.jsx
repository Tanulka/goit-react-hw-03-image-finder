import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ onClick, image }) {
  return (
    <li className={s.imageGalleryItem}>
      <img
        className={s.imageGalleryItemimg}
        src={image.webformatURL}
        alt={image.tags}
        onClick={() => {
          onClick(image.largeImageURL);
        }}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
