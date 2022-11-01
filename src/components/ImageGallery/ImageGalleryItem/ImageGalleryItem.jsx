

const ImageGalleryItem = ({id, srcGrid, alt }) => {
    return (
        <li className="gallery-item"
        key={id}
        >
            <img src={srcGrid} alt={alt} />
        </li>
    );
};

export default ImageGalleryItem;