import React from 'react';
import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ alt, previewImg, selectedImage }) => {
  return (
    <Item id={alt} onClick={selectedImage}>
      <Image src={previewImg} alt={alt} />
    </Item>
  );
}

ImageGalleryItem.propTypes = {
  alt: PropTypes.number.isRequired,
  previewImg: PropTypes.string.isRequired,
  selectedImage: PropTypes.func,
};
