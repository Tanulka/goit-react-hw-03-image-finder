import { Component } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from '../Searchbar/Searchbar.jsx';
import ImageGallery from '../ImageGallery/ImageGallery';
import getImageApi from '../../services/api';
import Button from '../Button/Button.jsx';
import scrollPageDown from '../../js/scroll';

import Spinner from '../Spinner/Spinner.jsx';
import Modal from '../Modal/Modal.jsx';

class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    modalContent: '',
    showModal: false,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ images: [], page: 1 });
      this.getImage();
    }

    if (prevState.page !== this.state.page) {
      this.getImage();
    }
  }

  getImage() {
    this.setState({ loading: true });
    getImageApi(this.state.query, this.state.page)
      .then(res => {
        scrollPageDown();
        this.setState({ images: [...this.state.images, ...res] });
      })
      .finally(() => {
        this.setState({ loading: false });
      })
      .catch(() => {
        toast.error('Server error');
      });
  }

  pageIncrement = () => {
    this.setState({ page: this.state.page + 1 });
  };

  handleFormSubmit = query => {
    this.setState({ query });
  };

  getImageModal = largeImageURL => {
    console.log(largeImageURL);
    this.setState({ modalContent: largeImageURL });
  };

  toggleModal = () => {
    console.log(this.state.modalContent);
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, loading, showModal, modalContent } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        {images.length !== 0 && (
          <ImageGallery images={images} getImageModal={this.getImageModal} openModal={this.toggleModal} />
        )}
        {showModal && <Modal largeImageUrl={modalContent} onClose={this.toggleModal} />}
        {loading && <Spinner />}
        {images.length > 0 && <Button onClick={this.pageIncrement} />}

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
export default App;
