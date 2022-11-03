import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';

const ImageGallery = forwardRef(({items}, ref, onClickPicture) => (

         <ul className={css.ImageGallery} ref = {ref} id="gallery">
            {
            items.map(item => (
                <ImageGalleryItem
                    onClickPicture={onClickPicture}
                    key={item.id}
                    data={item}
                />
                ))
            }
        </ul>
)); 

export default ImageGallery;

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
  other: PropTypes.shape({
    onClickPicture: PropTypes.func.isRequired,
  }),
};