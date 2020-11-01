import React, {useEffect} from 'react';
import './App.css';
import BookList from './components/BookList';
import AxiosParams from './utils/AxiosParams';
import AddBookForm from './components/AddBookForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      apiCalledPost: -1,
      books: null
    };
  }

  toggleLoadingState = (newState) => {
    this.setState({loading: newState});
    console.log("STATE IS: " + this.state.loading);
  }

  render() {
    return (
        <div className='App'>
         <AddBookForm toggleState={this.toggleLoadingState}/>
            <h1>
              REACTive BOOK LIBRARY
            </h1>
            {(this.state.loading === true) ? <p>LOADING...</p> : <BookList books = {this.state.books} />}
          <div>
          </div>
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