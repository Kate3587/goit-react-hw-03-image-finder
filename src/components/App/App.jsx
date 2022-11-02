import { Status } from "config.js/config";
import { Component } from "react";
import * as API from '../../services/api';
import { getPhoto } from "../../services/api";
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import css from '../App/App.module.css'


class App extends Component {
    state = {
      photos: [],
      searchName: '',
      page: 1,
      status: Status.INIT,
    };

  async componentDidUpdate(_, prevState) {
    const { searchName, page } = this.state; 
   
    if (prevState.searchName !== searchName) {
      this.fetchPhoto(searchName, page)  
       
    }
  };
 
  fetchPhoto = async (searchName, page) => {
    this.setState({ status: Status.LOADING });
      
    try {
      const photo = (await getPhoto(searchName, page)).hits;
      const currentPage = page + 1;
      if (currentPage <= photo.length) {
        this.setState(prevState => (
          {
            photos: [...prevState.photos,...photo],
               page: currentPage,
            status: Status.SUCCESS
          }))
      }
    } catch {
        console.log('error')
      }
    }

  handleSubmit = (search) => {
    this.setState({
      searchName: search,
    })
  };

  handleClickMore = () => {
    const { searchName, page} = this.state;
    
    this.fetchPhoto(searchName, page);

  };

  render() {
    const { photos, status, showModal } = this.state;
    // const { photos } = this.props;
    
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleSubmit} />
        {status === Status.LOADING && <Loader />}
        {status === Status.SUCCESS && <ImageGallery items={photos} />}
        {status === Status.SUCCESS && <Button onLoadMore={this.handleClickMore} />}
       
    </div>
  );
  } 
};

export default App;
