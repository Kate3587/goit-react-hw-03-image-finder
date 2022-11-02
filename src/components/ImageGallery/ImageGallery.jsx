import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';

const ImageGallery = ({items, onClickPicture}) => {

    return (
         <ul className={css.ImageGallery}>
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

    );
}; 

export default ImageGallery;
