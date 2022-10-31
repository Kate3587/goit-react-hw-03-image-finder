import { Component } from "react";
import * as API from '../../services/api';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import Loader from '../Loader/Loader';
// import Button from '../Button/Button';
// import Modal from '../Modal/Modal';

class App extends Component {
    state = {
      searchName: '',
      photos: [],
    };
  
  async getPhoto(values) {
    const photo = await API.getPhoto(values);
    console.log (photo)
  }

  // handleFormSubmit = searchName => {
  //   console.log(searchName);
  //   this.setState({ searchName });
  // };

  render() {
    return (
    <div>
      <Searchbar onSubmit={this.getPhoto } />
        <ImageGallery
          searchName={this.state.searchName}>
        {/* <ImageGalleryItem /> */}
      </ImageGallery>
      {/* <Loader /> */}
      {/* <Button /> */}
      {/* <Modal /> */}
    </div>
  );
  } 
};

export default App;
