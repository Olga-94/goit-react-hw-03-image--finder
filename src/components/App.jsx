import { Component } from 'react';
import PropTypes from 'prop-types';
import { Api } from 'Services/Api-service';
import { AppStyled } from './App.styled';
import { onErrorNotification } from 'Services/Notification';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';
import { Spinner } from 'components/Spinner/Spinner';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  static propTypes = { searchQuery: PropTypes.string };

  state = {
    page: 1,
    searchQuery: '',
    images: [],
    selectedImg: null,
    alt: null,
    status: 'idle',
  };

    totalHits = null;

  async componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.setState({ status: 'pending' });

      try {
        const images = await Api.getImages(searchQuery, page);
        this.totalHits = images.total;
        // const imagesHits = images.hits;
        // const data = images.data.hits;

        if (!images.length) {
          throw new Error();
          
        }

        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          status: 'resolved',
        }));

        if (page > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
          
        }

      } catch (error) {
        onErrorNotification();

        // this.setState({ 
        //   loadMoreBtnClick: false });
        this.setState({ status: 'rejected' });
      }
    }
  }

  handleFormSubmit = searchQuery => {
    if (this.state.searchQuery === searchQuery) {
      return;
    }

    this.resetState();
    this.setState({ searchQuery });
  };

  loadMoreBtnClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    
  };

  handleSelectedImage = (largeImageUrl, id) => {
    this.setState({
      selectedImg: largeImageUrl,
      alt: id,
    });
  };

  closeModal = () => {
    this.setState({
      selectedImg: null,
    });
  };

  resetState = () => {
    this.setState({
      searchQuery: '',
      page: 1,
      images: [],
      selectedImg: null,
      alt: null,
      status: 'idle',
    });
  };

  render() {
    const { images, selectedImg, alt, status } = this.state;

    if (status === 'idle') {
      return <SearchBar onSubmit={this.handleFormSubmit} />;
    }

    if (status === 'pending') {
      return (
        <AppStyled>
          <SearchBar onSubmit={this.handleFormSubmit} />

          <ImageGallery
            images={images}
            selectedImage={this.handleSelectedImage}
          />
          <Spinner />
          {images.length > 0 && (
            <LoadMoreButton onClick={this.loadMoreBtnClick} />
          )} 
        </AppStyled>
      );
    }

    if (status === 'resolved') {
      return (
        <AppStyled>
           <SearchBar onSubmit={this.handleFormSubmit} />
             <ImageGallery
            images={images}
            selectedImage={this.handleSelectedImage}
             />
          {selectedImg && (
            <Modal
              selectedImg={selectedImg}
              tags={alt}
              onClose={this.closeModal}
            />
          )}
          {images.length > 0 && images.length > 0 && images.length !== this.totalHits &&(
            <LoadMoreButton onClick={this.loadMoreBtnClick} />
          )} 
        </AppStyled>
      );
    }

    if (status === 'rejected') {
      return (
        <AppStyled>
          <SearchBar onSubmit={this.handleFormSubmit} />
        </AppStyled>
      );
    }
  }
}
