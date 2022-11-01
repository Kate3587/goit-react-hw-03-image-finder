// import { Status } from "config.js/config";
import { Component } from "react";
import * as API from '../../services/api';
import { getPhoto } from "../../services/api";
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import Loader from '../Loader/Loader';
// import Button from '../Button/Button';
// import Modal from '../Modal/Modal';



class App extends Component {
    state = {
      photos: [],
      // status: Status.INIT,
    };
  

  
  async componentDidMount (search) {
  
      // this.setState({ isLoading: true });
    try {
      const photo = (await getPhoto(search)).hits
      console.log(photo)
      this.setState({photos: photo})

      //  this.setState(prevState => (
      //   {
      //     photos: [...prevState.photos, photo],
      //     //status: Status.SUCCESS
      //   }))
    } catch {
      // this.setState({isError: true, status: Status.ERROR })
      console.log('error')
    } 
    
    
      // this.setState(prevState => (
      //   {
      //     photos: [...prevState.photos, photo],
      //     // isLoading: false,
      //   }));
   
  };


  render() {
    // const { isLoading } = this.state;
    const { photos, Status } = this.state;
    console.log(photos)
    // if (status === Status.LOADING) {
    //   return <Loader />;
    // }
    return (
      <div>
      <Searchbar onSubmit={this.componentDidMount} />
        <ImageGallery items={photos} />
          {/* // search={this.state.search}> */}
        {/* <ImageGalleryItem /> */}
      {/* </ImageGallery> */}
        {/* {isLoading && <Loader />} */}
      {/* <Button /> */}
      {/* <Modal /> */}
    </div>
  );
  } 
};

export default App;
