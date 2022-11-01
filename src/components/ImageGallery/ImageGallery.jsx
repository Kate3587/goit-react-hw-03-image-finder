import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem'

const ImageGallery = ({ items }) => {
    console.log(items)
    return (
        <ul className="gallery">
            {
                items.map(({ id, webformatURL, user }) => (
                        <ImageGalleryItem
                            key={id}
                            srcGrid={webformatURL}
                            alt={user}
                        />
                    ))
            }
        </ul>
    );
    
}; 
    

export default ImageGallery;