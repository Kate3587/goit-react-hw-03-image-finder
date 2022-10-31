import React, { Component } from "react";

class ImageGallery extends Component {

    render() {
        return (
            <>
                <ul className="gallery">
                    {/* {children} */}
                    <p>{this.props.searchName}</p>
                </ul>
            </>
        );
    }; 
    
};

export default ImageGallery;