import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images, selectedImage }) => {
  return (
    <GalleryList>
      {images.map(({ id, webformatURL }) => (
        <ImageGalleryItem
          key={id}
          previewImg={webformatURL}
          alt={id}
          selectedImage={selectedImage}
        />
      ))}
    </GalleryList>
  );
}
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  selectedImage: PropTypes.func,
};
