import { Status } from "config.js/config";
import { Component } from "react";
import { getPhoto } from "../../services/api";
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import css from '../App/App.module.css'

class App extends Component {
    state = {
      photos: [],
      searchName: '',
      page: 1,
      modalPhoto: '',
      status: Status.INIT,
    };
  
   async componentDidUpdate(_, prevState) {
    const { searchName, page} = this.state;

    if (prevState.searchName !== searchName || prevState.page !== page) {
      this.fetchPhoto(searchName, page);
    }
  };


  fetchPhoto = async (searchName, page) => {
    this.setState({ status: Status.LOADING });
      
    try {
      const {hits} = (await getPhoto(searchName, page));
      this.setState(prevState => (
        {
          photos: [...prevState.photos, ...hits],
          status: Status.SUCCESS,
          page: page,
        }))
    } catch {
      console.log('error')
    }
  };

  handleSubmit = search => {
    this.setState({
      searchName: search,
      page: 1,
      status: Status.INIT,
    })
  };

  handleClickMore = () => { 
    
    this.setState( prevState  => ({
      page: prevState.page + 1,
    }))
  };

  toggleModal = (data) => {
    this.setState({
        modalPhoto: data,
    })
    };
  
    handleBackdropClick = event => {

      if (event.currentTarget === event.target) {
      this.setState({ modalPhoto: '' });
    }  
    };

  handleKeyDown = event => {
      
    if (event.key === 'Escape') {
          this.setState({ modalPhoto: '' });
        }     
    };

  render() {
    const { photos, status, modalPhoto} = this.state;
    
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleSubmit} />
        {status === Status.LOADING && <Loader />}
        <ImageGallery items={photos} onClickPicture={this.toggleModal} />
        {status === Status.SUCCESS && <Button onLoadMore={this.handleClickMore} />}
        {modalPhoto && (
            <Modal
              modalPhoto={modalPhoto}
              handleModalClose={this.handleBackdropClick}
              handleKeyDown={this.handleKeyDown}
            />)}
    </div>
  );
  } 
};

export default App;
