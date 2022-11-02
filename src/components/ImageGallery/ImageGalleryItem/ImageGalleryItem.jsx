import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({ data, onClickPicture }) => {
    const { webformatURL, user, largeImageURL} = data;
    return (
        <>
            <li className={css.ImageGalleryItem} onClick={() => onClickPicture(largeImageURL)}>
            <img className={css.ImageGalleryItemImage} src={webformatURL} alt={user} />
            </li>
        </>    
    );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    data: PropTypes.shape({
        srcGrid: PropTypes.string,
        alt: PropTypes.string,
    }),
    onClickPicture: PropTypes.func,
};