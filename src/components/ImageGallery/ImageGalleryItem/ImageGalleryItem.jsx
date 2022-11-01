

const ImageGalleryItem = ({ key, srcGrid, alt }) => {
    return (
        <li className="gallery-item" key={key}>
            <img src={srcGrid} alt={alt} />
        </li>
    );
};

export default ImageGalleryItem;