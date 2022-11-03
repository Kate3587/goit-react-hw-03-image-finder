import { Status } from "config.js/config";
import { useState, useEffect, useRef } from "react";
import { getPhoto } from "../../services/api";
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import css from '../App/App.module.css'

function App() {
  const [photos, setPhotos] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [page, setPage] = useState(1);
  const [modalPhoto, setModalPhoto] = useState('');
  const [status, setStatus] = useState(Status.INIT);
  const galeryRef = useRef();

  useEffect (() => {
    if (searchName) {
      setStatus(Status.LOADING);
      fetchPhoto(searchName, page);
    }

    async function fetchPhoto (){
      
    try {
      const { hits } = await getPhoto(searchName, page);
      setStatus(Status.SUCCESS)
      setPhotos(prevState => [...prevState, ...hits])
    
      // this.setState(prevState => (
      //   {
      //     photos: [...prevState.photos, ...hits],
        
      //   }))
    } catch (error) {
      console.log('error')
    }
  };
  }, [searchName, page])
    
  //  async componentDidUpdate(_, prevState) {

  //   if (prevState.searchName !== searchName || prevState.page !== page) {
  //     fetchPhoto(searchName, page);
  //   }
  // };


  // fetchPhoto = async (searchName, page) => {
  //   this.setState({ status: Status.LOADING });
      
  //   try {
  //     const { hits } = (await getPhoto(searchName, page));
  //     setPhotos(prevState => [...prevState.photos, ...hits])
  //     setStatus(Status.SUCCESS)
  //     setPage(page);
  //     // this.setState(prevState => (
  //     //   {
  //     //     photos: [...prevState.photos, ...hits],
        
  //     //   }))
  //   } catch {
  //     console.log('error')
  //   }
  // };

  const handleSubmit = search => {
    setSearchName(search);
    setPage(1);
    setStatus(Status.INIT);
  };

  const handleClickMore = () => { 
    setPage(prevState => prevState +1)
    
    // this.setState( prevState  => ({
    //   page: prevState.page + 1,
    // }))
  };

  const toggleModal = (data) => {
    setModalPhoto(data);
    };
  
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) setModalPhoto(''); 
  };

  const handleKeyDown = event => {  
    if (event.key === 'Escape')setModalPhoto('');  
  };
    
    return (
      <div className={css.App}>
        <Searchbar onSubmit={handleSubmit} />
        {status === Status.LOADING && <Loader />}
        <ImageGallery ref={galeryRef} items={photos} onClickPicture={toggleModal} />
        {status === Status.SUCCESS && <Button onLoadMore={handleClickMore} />}
        {modalPhoto && (
            <Modal
              modalPhoto={modalPhoto}
              handleModalClose={handleBackdropClick}
              handleKeyDown={handleKeyDown}
            />)}
    </div>
  );
  }

export default App;
