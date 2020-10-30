import React, {useEffect} from 'react';
import './App.css';
import BookList from './components/BookList';
import AxiosParams from './utils/AxiosParams';
import AddBookForm from './components/AddBookForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      books: null
    };
  }


  render() {
    const {isLoading, books} = this.state;
    return (
        <div className='App'>
         <AddBookForm />
            <h1>
              REACTive BOOK LIBRARY
            </h1>
            {books === null ? <p>LOADING...</p> : <BookList books = {books}/>}
          
          <div>
          </div>
        </div>  
    )
  }

  async componentDidMount() {
    try {
      let booksData = await AxiosParams.get('/all');
      this.setState({
        books: booksData.data
      });
    } catch(err) {
      console.log("AXIOS FAILED, ERROR: " + err);
    }
  }
}

export default App;