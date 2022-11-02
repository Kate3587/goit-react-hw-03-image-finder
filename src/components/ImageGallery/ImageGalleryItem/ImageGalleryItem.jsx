import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({ srcGrid, alt }) => {
    return (
        <>
            <li className={css.ImageGalleryItem}>
            <img className={css.ImageGalleryItemImage} src={srcGrid} alt={alt} />
            </li>
        </>
       
    );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    srcGrid: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};