import React, {useEffect, useState} from 'react';
import './App.css';
import BookList from './components/BookList';
import axios from 'axios';
import {AddBookForm} from './components/AddBookForm';

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
      <p>stub</p>   
    )
  }

  
}

export default App;


// function App() {
//   const [appState, setAppState] = useState({
//     loading: false,
//     books: null,
//   });

//   useEffect(() => {
//     setAppState({loading: true});
//     const REST_URL_GET_ALL = 'http://localhost:3001/all';
//     axios.get(REST_URL_GET_ALL).then((books) => {
//       const allBooks = books.data;
//       setAppState({loading:false, books: allBooks});
//     });
//   }, [setAppState]);

//   return (
//     <div className='App'>
//       <AddBookForm />
//       <div className='container'>
//         <h1>
//           All books test fetch on rest point
//         </h1>
//       </div>
//       <div>
//         <BookList isLoading={appState.loading} books={appState.books} />
//       </div>
//     </div>
//   );
// }

// export default App;