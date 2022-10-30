import { Component } from "react";
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

export default class App extends Component {
  render() {
    return (
    <div>
      <Searchbar />
      <ImageGallery>
        <ImageGalleryItem />
      </ImageGallery>
      <Loader />
      <Button />
      <Modal />
    </div>
  );
  } 
};
