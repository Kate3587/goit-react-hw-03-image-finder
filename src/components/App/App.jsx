import { Status } from "config.js/config";
import { Component } from "react";
import * as API from '../../services/api';
import { getPhoto } from "../../services/api";
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
// import Modal from '../Modal/Modal';



class App extends Component {
    state = {
      photos: [],
      searchName: '',
      status: Status.INIT,
    };
  
  
  // async componentDidMount () {
  
  //     // this.setState({ isLoading: true });
  //   try {
  //     const photo = (await getPhoto()).hits
  //     console.log(photo)
  //     this.setState({photos: photo})

  //   } catch {
  //     // this.setState({isError: true, status: Status.ERROR })
  //     console.log('error')
  //   } 
  
  // };

  async componentDidUpdate(_, prevState) {
    const { searchName } = this.state; 
    if (prevState.searchName !== searchName) {
      this.setState({ status: Status.LOADING });

      try {
        const photo = (await getPhoto(searchName)).hits;
        console.log(photo)
        this.setState({
          photos: photo,
          status: Status.SUCCESS
        })
        // this.setState(prevState => (
        //   {
        //     photos: [...prevState.photos, photo],
        //     status: Status.SUCCESS
        //   }))
      } catch {
        // this.setState({ status: Status.ERROR })
        console.log('error')
      }
    }
  }

  handleSubmit = (search) => {
    this.setState({
      searchName: search,
    })
  };


  render() {
    const { photos, status } = this.state;
    console.log(photos)

    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        {status === Status.LOADING && <Loader />}
        {status === Status.SUCCESS && <ImageGallery items={photos} />}
        {status === Status.SUCCESS && <Button />}
      {/* <Modal /> */}
    </div>
  );
  } 
};

export default App;
