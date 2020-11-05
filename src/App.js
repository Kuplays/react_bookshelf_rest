import React, {useEffect} from 'react';
import './App.css';
import BookList from './components/BookList';
import AxiosParams from './utils/AxiosParams';
import AddBookForm from './components/AddBookForm';
import navbarLogo from './logo.svg'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      apiCalledPost: -1,
      books: null,
      showForm: false
    };
  }

  toggleLoadingState = (newState) => {
    this.setState({loading: newState});
    console.log("STATE IS: " + this.state.loading);
  }

  toggleAddBook = () => {
    this.setState({showForm: !this.state.showForm});
  }

  render() {
    return (
        <div className='App'>
        <nav className='navbar sticky-top navbar-light bg-light'>
          <a className='navbar-brand' href='http://localhost:3000'>
            <img src={navbarLogo} width='50' height='50' alt='react logo'/>
            REACTive LIBRARY
          </a>
          <ul className='list-inline'>
            <li className='list-inline-item'>
              <a className='nav-link' href='#'>Home</a>
            </li>
            <li className='list-inline-item'>
              <a className='nav-link' href='#' onClick={this.toggleAddBook.bind(this)}>Add Book</a>
            </li>
            <li className='list-inline-item'>
              <a className='nav-link' href='#'>User Statistics</a>
            </li>
          </ul>
        </nav>
          {(this.state.loading === true) ? <p>LOADING...</p> : <BookList books = {this.state.books} />}
          <div>
          </div>
          {this.state.showForm ? <AddBookForm toggleState={this.toggleLoadingState} closeForm={this.toggleAddBook}/> : null}
        </div>  
    )
  }

  async fetchFromServer() {
    try {
      let booksData = await AxiosParams.get('/all');
      this.setState({
        books: booksData.data,
      });
      this.toggleLoadingState(false);
    } catch(err) {
      console.log("AXIOS FAILED, ERROR: " + err);
    }
  }

  async componentDidMount() {
    this.fetchFromServer();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.loading != this.state.loading) {
      console.log("STATE CHANGED IN DID UPDATE!");
      this.fetchFromServer();
    }
  }
}

export default App;