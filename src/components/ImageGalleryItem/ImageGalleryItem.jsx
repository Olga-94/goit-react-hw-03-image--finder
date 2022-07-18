import React from 'react';
import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ alt, previewImg, largeImageURL, selectedImage }) => {
  return (
    <Item id={alt}>
      <Image src={previewImg} 
             alt={alt}
             onClick={() => selectedImage(largeImageURL)} />
    </Item>
  );
}

ImageGalleryItem.propTypes = {
  alt: PropTypes.number.isRequired,
  previewImg: PropTypes.string.isRequired,
  selectedImage: PropTypes.func,
};
