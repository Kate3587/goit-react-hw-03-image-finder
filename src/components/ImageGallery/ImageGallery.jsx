import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';
import React, { Component } from 'react';
import Modal from '../Modal/Modal';


class ImageGallery extends Component {
    state = {
        showModal: false,
    };

    toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }))
    };
    
    handleModalShow = (event) => {
   
        if (event.target) {
            this.toggleModal()
        }
    }


    render() {
        const {showModal} = this.state
        const { items } = this.props;
        return (
            <>
                <ul className={css.ImageGallery} onClick={this.handleModalShow}>
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

                {showModal &&
                    (items.map(({ id, largeImageURL, user }) => (

                        <Modal
                            key={id}
                            srcLarge={largeImageURL}
                            alt={user}
                            onClose={this.toggleModal}
                        />)))}
            </>
        );
    }
}; 


// const ImageGallery = ({ items }) => {
//     return (
//         <>
//              <ul className={css.ImageGallery}>
//             {
//                 items.map(({ id, webformatURL, user }) => (
//                         <ImageGalleryItem
//                             key={id}
//                             srcGrid={webformatURL}
//                             alt={user}
//                         />
//                     ))
//             }
//             </ul>
//         </>
//     );
// }; 

export default ImageGallery;