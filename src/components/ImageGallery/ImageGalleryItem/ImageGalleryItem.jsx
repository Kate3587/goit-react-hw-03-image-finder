

const ImageGalleryItem = ({ srcGrid, alt }) => {
    return (
        <li className="gallery-item">
            <img src={srcGrid} alt={alt} />
        </li>
    );
};

export default ImageGalleryItem;